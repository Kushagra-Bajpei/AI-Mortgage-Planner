import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { FadeIn } from '../components/AnimationWrappers';
import PublicLayout from '../layouts/PublicLayout';

const testimonials = [
    { id: 1, description: "MortgageAI saved me ₹3.2 Lakhs in interest by recommending LIC HFL over my bank. Aria explained everything clearly — I felt confident signing the papers.", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200", name: "Priya Sharma", role: "First-time Homebuyer" },
    { id: 2, description: "I used to think home loans were impossible to understand. Aria broke everything down — EMI, prepayment, tax benefits — in 10 minutes flat. Game changer.", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200", name: "Rahul Verma", role: "Software Engineer" },
    { id: 3, description: "As a financial advisor, I recommend MortgageAI to all my clients. The bank comparison feature is incredibly accurate and saves hours of research.", image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60", name: "Aditya Patel", role: "Financial Advisor" },
    { id: 4, description: "The prepayment calculator showed me I could save ₹7L by paying just ₹5K extra per month. That one insight paid for years of subscriptions!", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200", name: "Sneha Gupta", role: "Product Manager" },
    { id: 5, description: "My credit score wasn't perfect and I was worried about eligibility. Aria gave me a realistic plan and suggested I wait 3 months — worth it. Got approved at 8.4%!", image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60", name: "Vikram Singh", role: "Entrepreneur" },
    { id: 6, description: "Compared HDFC, SBI, and ICICI in under 2 minutes. Saved ₹2.1L over 15 years by switching to a lesser-known NBFC Aria recommended. Simply brilliant.", image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200", name: "Meera Nair", role: "Doctor" },
    { id: 7, description: "The tax benefit analysis under Section 24(b) alone saves me ₹60,000 per year. I had no idea I could claim this much — Aria explained it perfectly.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200", name: "Arjun Mehta", role: "CA Professional" },
    { id: 8, description: "Bought my dream home in Pune. The step-by-step plan from MortgageAI was my bible throughout the process. No stress, no confusion, just clarity.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200", name: "Kavya Reddy", role: "Teacher" },
    { id: 9, description: "As an NRI planning to invest in Indian property, Aria helped me navigate the NRI home loan rules with ease. Saved me a trip to the bank!", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200", name: "Suresh Krishnan", role: "NRI Investor" }
];

const columns = [
    { start: 0, end: 3, className: "animate-scroll-up-1" },
    { start: 3, end: 6, className: "hidden md:flex flex-col animate-scroll-up-2" },
    { start: 6, end: 9, className: "hidden lg:flex flex-col animate-scroll-up-3" }
];

export default function Testimonials() {
  const { dark } = useTheme();

  const renderCard = (testimonial, index) => (
    <div key={`${testimonial.id}-${index}`} className={`border rounded-[2rem] p-8 mb-6 transition-all duration-500 hover:scale-[1.02] ${
        dark ? 'bg-[#0a1628] border-white/5 shadow-2xl shadow-black/50' : 'bg-white border-slate-200 shadow-xl'
    }`}>
        <div className="mb-6">
            <svg width="24" height="18" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 13.056c.464 0 .91-.131 1.237-.364.329-.234.513-.55.513-.88v-3.73c0-.33-.184-.647-.513-.88C7.91 6.97 7.464 6.838 7 6.838c-.232 0-.455-.066-.619-.182-.164-.117-.256-.275-.256-.44v-.622c0-.33.184-.646.513-.879.328-.233.773-.364 1.237-.364.232 0 .455-.066.619-.182.164-.117.256-.275.256-.44V2.485c0-.165-.092-.323-.256-.44a1.1 1.1 0 0 0-.619-.181c-1.392 0-2.728.393-3.712 1.092-.985.7-1.538 1.649-1.538 2.638v6.218c0 .33.184.646.513.88.328.233.773.364 1.237.364zm9.83 0c.465 0 .91-.131 1.238-.364.328-.234.513-.55.513-.88v-3.73c0-.33-.184-.647-.513-.88-.328-.233-.773-.364-1.237-.364-.232 0-.455-.066-.619-.182-.164-.117-.256-.275-.256-.44v-.622c0-.33.184-.646.512-.879.329-.233.774-.364 1.238-.364.232 0 .454-.066.619-.182.164-.117.256-.275.256-.44V2.485c0-.165-.092-.323-.256-.44a1.1 1.1 0 0 0-.62-.181c-1.391 0-2.727.393-3.711 1.092-.985.7-1.538 1.649-1.538 2.638v6.218c0 .33.184.646.512.88.329.233.774.364 1.238.364z"/>
                </g>
            </svg>
        </div>
        <p className={`text-lg leading-relaxed mb-8 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
            "{testimonial.description}"
        </p>
        <div className="flex items-center gap-4 pt-6 border-t border-white/5">
            <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-2xl object-cover border-2 border-emerald-500/20 shadow-lg" />
            <div>
                <p className={`font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>{testimonial.name}</p>
                <p className="text-sm font-semibold gradient-text uppercase tracking-widest">{testimonial.role}</p>
            </div>
        </div>
    </div>
  );

  return (
    <PublicLayout>
        <style>
            {`
                @keyframes scroll-up {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-50%); }
                }
                .animate-scroll-up-1 { animation: scroll-up 40s linear infinite; }
                .animate-scroll-up-2 { animation: scroll-up 50s linear infinite; }
                .animate-scroll-up-3 { animation: scroll-up 35s linear infinite; }
                .animate-scroll-up-1:hover, .animate-scroll-up-2:hover, .animate-scroll-up-3:hover {
                    animation-play-state: paused;
                }
            `}
        </style>

        <section className="pt-32 pb-20 relative overflow-hidden min-h-screen bg-[#050e1f]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-emerald-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-20">
                <FadeIn>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-8 uppercase tracking-widest">
                        <Star className="w-4 h-4 text-emerald-500 fill-emerald-500" /> Homebuyer Stories
                    </div>
                    <h1 className="font-display text-6xl sm:text-7xl font-black text-white mb-8">
                        People love <span className="gradient-text">MortgageAI</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Real stories from homebuyers, investors, and first-timers who planned their home loan smarter with Aria.
                    </p>
                </FadeIn>
            </div>

            <div className="relative w-full max-w-7xl mx-auto px-4 overflow-hidden h-[800px]">
                <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#050e1f] to-transparent z-10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050e1f] to-transparent z-10 pointer-events-none" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden h-full">
                    {columns.map((col, colIndex) => (
                        <div key={colIndex} className={col.className}>
                            {[...testimonials.slice(col.start, col.end), ...testimonials.slice(col.start, col.end)].map((testimonial, index) =>
                                renderCard(testimonial, index)
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="max-w-4xl mx-auto px-4 text-center mt-32 relative z-10">
                <div className="p-12 rounded-[3.5rem] bg-gradient-to-br from-emerald-600/20 to-amber-500/20 border border-white/10 backdrop-blur-3xl shadow-2xl">
                    <h2 className="text-4xl font-black text-white mb-6">Ready to plan your home loan?</h2>
                    <p className="text-slate-400 mb-8 text-lg">Join thousands of homebuyers who got a better deal with MortgageAI.</p>
                    <Link to="/signup" className="inline-block px-10 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-amber-500 text-white font-black text-lg hover:scale-105 transition-transform shadow-[0_0_40px_-5px_rgba(5,150,105,0.5)]">
                        Get Started for Free
                    </Link>
                </div>
            </div>
        </section>
    </PublicLayout>
  );
}
