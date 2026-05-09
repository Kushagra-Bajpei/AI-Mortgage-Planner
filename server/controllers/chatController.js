import MortgagePlan from '../models/MortgagePlan.js';
import Groq from 'groq-sdk';

// --- EMI CALCULATOR ---
function calculateEMI(principal, annualRate, tenureYears) {
    const monthlyRate = annualRate / 12 / 100;
    const n = tenureYears * 12;
    if (monthlyRate === 0) return principal / n;
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
    return Math.round(emi);
}

function formatINR(amount) {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
}

// --- EXTRACT NUMBERS FROM TEXT ---
function extractNumbers(text) {
    const lakhMatch = text.match(/(\d+(?:\.\d+)?)\s*(?:lakh|lac|l\b)/i);
    const croreMatch = text.match(/(\d+(?:\.\d+)?)\s*(?:crore|cr\b)/i);
    const rateMatch = text.match(/(\d+(?:\.\d+)?)\s*%/);
    const yearMatch = text.match(/(\d+)\s*(?:year|yr)/i);
    const plainNumberMatch = text.match(/\b(\d{5,})\b/);

    let loanAmount = null;
    if (croreMatch) loanAmount = parseFloat(croreMatch[1]) * 1e7;
    else if (lakhMatch) loanAmount = parseFloat(lakhMatch[1]) * 1e5;
    else if (plainNumberMatch) loanAmount = parseFloat(plainNumberMatch[1]);

    const rate = rateMatch ? parseFloat(rateMatch[1]) : null;
    const tenure = yearMatch ? parseInt(yearMatch[1]) : null;

    return { loanAmount, rate, tenure };
}



export const chatWithAI = async (req, res, next) => {
    try {
        const { messages } = req.body;

        if (!messages || messages.length === 0) {
            return res.status(400).json({ error: 'Messages are required' });
        }

        const rawText = messages[messages.length - 1].content.trim();

        // --- 1. PROMPT VALIDATION ---
        const wordCount = rawText.split(/\s+/).filter(word => word.length > 0).length;
        const hasAlphabets = /[a-zA-Z0-9]/.test(rawText);
        const isValid = rawText.length >= 2 && hasAlphabets;

        if (!isValid) {
            return res.status(200).json({
                reply: "Please describe your mortgage question or share your loan details — I'm here to help! 🏠",
                emiData: null
            });
        }

        // --- 2. GENERATE MORTGAGE ADVICE WITH GROQ ---
        const groq = new Groq({
            apiKey: process.env.GROQ_API_KEY
        });

        const systemPrompt = `You are Aria, an expert, friendly AI Mortgage Advisor for India. 
Your goal is to help users understand home loans, calculate EMIs, evaluate eligibility, compare interest rates, and give tips on tax benefits (e.g. 80C, 24b) and prepayment.
IMPORTANT: You MUST ONLY answer questions related to mortgages, home loans, real estate finance, EMIs, and related tax/financial planning. If the user asks about ANY other topic (e.g., general AI, coding, history, casual non-finance chat), you must politely decline and remind them that you are exclusively a Mortgage Advisor.
Keep responses concise, clear, and professional. Use Indian Rupee formats (e.g. ₹50L, ₹50,00,000). Use Markdown for formatting.`;

        const groqMessages = [
            { role: 'system', content: systemPrompt },
            ...messages.map(m => ({
                role: m.role === 'ai' ? 'assistant' : 'user',
                content: m.content || ''
            }))
        ];

        let reply = "I'm having a little trouble thinking right now. Please try asking again.";
        try {
            const chatCompletion = await groq.chat.completions.create({
                messages: groqMessages,
                model: "llama-3.1-8b-instant",
                temperature: 0.6,
                max_tokens: 1024,
            });
            reply = chatCompletion.choices[0]?.message?.content || reply;
        } catch (apiErr) {
            console.error("Groq API error:", apiErr);
        }

        // --- 3. EXTRACT EMI DATA FOR UI ---
        const lower = rawText.toLowerCase();
        const { loanAmount, rate, tenure } = extractNumbers(rawText);
        let emiData = null;

        if (loanAmount && (lower.includes('emi') || lower.includes('monthly') || lower.includes('calculate'))) {
            const r = rate || 8.5;
            const t = tenure || 20;
            const emi = calculateEMI(loanAmount, r, t);
            const total = emi * t * 12;
            const totalInterest = total - loanAmount;
            emiData = { loanAmount, rate: r, tenure: t, emi, totalInterest, totalPayment: total };
        }

        // --- 3. PERSISTENCE ---
        if (req.user && req.user.id && emiData) {
            try {
                const newPlan = new MortgagePlan({
                    userId: req.user.id,
                    title: rawText.length > 40 ? rawText.substring(0, 40) + "..." : rawText,
                    loanAmount: emiData.loanAmount,
                    interestRate: emiData.rate,
                    tenure: emiData.tenure,
                    monthlyEMI: emiData.emi,
                    totalInterest: emiData.totalInterest,
                    totalPayment: emiData.totalPayment,
                    advice: reply,
                });
                await newPlan.save();
            } catch (err) {
                console.error("Failed to save mortgage plan to history:", err);
            }
        }

        // --- 4. RESPONSE ---
        res.status(200).json({
            reply,
            emiData: emiData || null,
        });

    } catch (error) {
        console.error('Mortgage Chat Error:', error);
        res.status(500).json({ error: 'Internal server error in the mortgage advisor' });
    }
};
