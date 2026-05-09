import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home as HomeIcon, ArrowRight, Calculator, BarChart2, MessageCircle, Zap, Star, TrendingDown } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { FadeIn, StaggerChildren, StaggerItem } from '../components/AnimationWrappers';
import PublicLayout from '../layouts/PublicLayout';
import TestimonialMarquee from '../components/TestimonialMarquee';

function ChatPreview({ dark }) {
  const messages = [
    { role: 'ai', text: "Hi! I'm Aria, your AI Mortgage Advisor. What's your home buying goal?" },
    { role: 'user', text: "What's my EMI for ₹50L at 8.5% for 20 years?" },
    { role: 'ai', text: "💰 Monthly EMI: ₹43,391 | Total Interest: ₹54.1L | Total Payment: ₹1.04Cr. Want to compare with other banks?" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
      className={`rounded-2xl p-1 ${dark ? 'bg-gradient-to-br from-emerald-500/20 to-amber-500/10' : 'bg-gradient-to-br from-emerald-100 to-amber-50'}`}
    >
      <div className={`rounded-xl overflow-hidden ${dark ? 'bg-[#0a1628]' : 'bg-white'} shadow-2xl`}>
        <div className={`flex items-center gap-3 px-5 py-4 border-b ${dark ? 'border-white/10' : 'border-slate-100'}`}>
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          <div className="flex items-center gap-2 ml-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-amber-400 flex items-center justify-center">
              <HomeIcon className="w-3.5 h-3.5 text-white" />
            </div>
            <span className={`text-xs font-semibold ${dark ? 'text-white' : 'text-slate-900'}`}>Aria – Mortgage Advisor</span>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          </div>
        </div>

        <div className="p-5 space-y-4">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.3 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${
                msg.role === 'user'
                  ? 'bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-br-sm'
                  : dark
                  ? 'bg-white/8 text-slate-300 rounded-bl-sm border border-white/10'
                  : 'bg-slate-100 text-slate-700 rounded-bl-sm'
              }`}>
                {msg.text}
              </div>
            </motion.div>
          ))}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} className="flex justify-start">
            <div className={`px-4 py-3 rounded-2xl rounded-bl-sm ${dark ? 'bg-white/8 border border-white/10' : 'bg-slate-100'}`}>
              <div className="flex gap-1 items-center h-4">
                {[0, 1, 2].map(i => (
                  <span key={i} className={`w-1.5 h-1.5 rounded-full typing-dot ${dark ? 'bg-emerald-400' : 'bg-emerald-500'}`}
                    style={{ animation: `typing-dot 1.2s ease-in-out ${i * 0.2}s infinite` }} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className={`px-5 py-4 border-t ${dark ? 'border-white/10' : 'border-slate-100'}`}>
          <div className={`flex items-center gap-3 px-4 py-3 rounded-xl ${dark ? 'bg-white/5 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
            <span className={`text-sm flex-1 ${dark ? 'text-slate-500' : 'text-slate-400'}`}>Ask about EMI, rates, eligibility...</span>
            <div className="w-7 h-7 rounded-lg bg-gradient-to-r from-emerald-600 to-amber-500 flex items-center justify-center">
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const features = [
  {
    img: '/images/feature_emi_calculator.png',
    title: 'Smart EMI Calculator',
    desc: 'Instantly calculate your monthly payments, total interest, and compare across tenures with AI-powered precision.',
    color: 'from-emerald-500 to-teal-600',
    glow: 'shadow-[0_0_30px_rgba(5,150,105,0.3)]',
  },
  {
    img: '/images/feature_bank_rates.png',
    title: 'Bank Rate Comparison',
    desc: 'Compare home loan rates from 150+ banks and NBFCs in real-time. Find the best deal for your profile.',
    color: 'from-amber-500 to-orange-500',
    glow: 'shadow-[0_0_30px_rgba(245,158,11,0.3)]',
  },
  {
    img: '/images/feature_ai_advisor.png',
    title: 'AI Mortgage Advisor',
    desc: 'Chat with Aria, your personal AI advisor, for guidance on eligibility, tax benefits, and prepayment strategies.',
    color: 'from-blue-500 to-cyan-500',
    glow: 'shadow-[0_0_30px_rgba(59,130,246,0.3)]',
  },
];

const stats = [
  { value: '10K+', label: 'Loans Planned' },
  { value: '₹500Cr+', label: 'Loan Value Advised' },
  { value: '150+', label: 'Banks Covered' },
  { value: '98%', label: 'Accuracy Rate' },
];

export default function Home() {
  const { dark } = useTheme();

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-emerald-600/15 blur-[100px] float-anim" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-amber-500/10 blur-[100px] float-anim" style={{ animationDelay: '3s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-emerald-500/5 blur-[120px]" />
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `linear-gradient(${dark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.03)'} 1px, transparent 1px), linear-gradient(90deg, ${dark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.03)'} 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-emerald-500/10 border border-emerald-500/20">
              <HomeIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-xs font-semibold text-emerald-400 tracking-wide uppercase">AI Mortgage Planner</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className={`font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-none mb-6 ${dark ? 'text-white' : 'text-slate-900'}`}>
              Your AI Path to{' '}
              <span className="gradient-text">Homeownership</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-lg leading-relaxed mb-10 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
              MortgageAI uses advanced AI to calculate EMIs, compare bank rates, and give you a personalized home loan plan — in seconds. Just ask Aria, your AI mortgage advisor.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-12">
              <Link to="/signup" id="hero-cta"
                className="group flex items-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-amber-500 text-white font-semibold text-base hover:shadow-[0_0_40px_rgba(5,150,105,0.5)] hover:scale-105 transition-all duration-300">
                Start Planning Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/how-it-works"
                className={`flex items-center gap-2 px-7 py-4 rounded-2xl border font-semibold text-base hover:scale-105 transition-all duration-300 ${
                  dark ? 'border-white/20 text-white hover:bg-white/5' : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                }`}>
                See How It Works
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="grid grid-cols-4 gap-4">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <div className="font-display text-2xl font-bold gradient-text">{value}</div>
                  <div className={`text-xs mt-0.5 ${dark ? 'text-slate-500' : 'text-slate-500'}`}>{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-emerald-600/20 to-amber-500/10 rounded-3xl blur-2xl" />
            <div className="relative"><ChatPreview dark={dark} /></div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 mb-4">
              <Zap className="w-3 h-3" /> POWERFUL FEATURES
            </span>
            <h2 className={`font-display text-4xl sm:text-5xl font-bold mb-5 ${dark ? 'text-white' : 'text-slate-900'}`}>
              Everything you need to{' '}
              <span className="gradient-text">plan your home loan</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
              Our AI-powered tools make mortgage planning simple, transparent, and stress-free.
            </p>
          </FadeIn>

          <StaggerChildren className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {features.map(({ img, title, desc, color, glow }) => (
              <StaggerItem key={title}>
                <div className={`relative group p-6 pb-8 rounded-3xl border transition-all duration-500 hover:-translate-y-2 hover:${glow} overflow-hidden ${
                  dark ? 'bg-[#0a1628] border-white/8 hover:border-emerald-500/30' : 'bg-white border-slate-200 hover:border-emerald-300 shadow-sm hover:shadow-lg'
                }`}>
                  <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 shadow-lg bg-gradient-to-br from-black/20 to-transparent">
                    <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h3 className={`font-display text-2xl font-bold mb-3 ${dark ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
                  <p className={`text-sm leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>{desc}</p>
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* How It Works */}
      <section className={`py-24 relative overflow-hidden ${dark ? 'bg-[#050e1f]' : 'bg-slate-50'}`}>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/5 blur-[120px] rounded-full -mr-64 -mt-64 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full -ml-64 -mb-64 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-20">
            <h2 className={`font-display text-4xl sm:text-6xl font-bold mb-6 ${dark ? 'text-white' : 'text-slate-900'}`}>
              <span className="gradient-text">Three steps</span> to your home loan
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
              From question to personalized plan in under a minute.
            </p>
          </FadeIn>

          <div className="space-y-32">
            {[
              { num: '01', icon: MessageCircle, color: 'emerald', title: 'Tell Aria Your Goals', img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200', desc: 'Share your budget, income, and dream home details with Aria, your AI mortgage advisor. No forms, no jargon — just a natural conversation.', bullets: ['Works in Hindi & English', 'No paperwork needed'] },
              { num: '02', icon: BarChart2, color: 'amber', title: 'AI Analyses Your Options', img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200', desc: 'Aria compares loan options across 150+ banks in real-time, calculates your exact EMI, eligibility, and total cost of borrowing.', bullets: ['Real-time rate comparison', 'Personalized eligibility check'] },
              { num: '03', icon: TrendingDown, color: 'blue', title: 'Get Your Mortgage Plan', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200', desc: 'Receive a detailed, actionable mortgage plan — best bank, EMI schedule, tax savings, and prepayment strategies to save lakhs.', bullets: ['Step-by-step action plan', 'Tax benefit calculator'] },
            ].map(({ num, icon: Icon, color, title, img, desc, bullets }, idx) => (
              <div key={num} className="grid lg:grid-cols-2 gap-16 items-center">
                <FadeIn direction={idx % 2 === 0 ? 'left' : 'right'} className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="relative group">
                    <div className={`absolute -inset-4 bg-gradient-to-r from-${color}-600/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                    <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                      <img src={img} alt={title} className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#050e1f] via-transparent to-transparent" />
                      <div className="absolute bottom-8 left-8">
                        <div className="font-display text-6xl font-black text-white/10 leading-none">{num}</div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
                <FadeIn direction={idx % 2 === 0 ? 'right' : 'left'} className={idx % 2 !== 0 ? 'lg:order-1' : ''}>
                  <div className="space-y-6">
                    <div className={`w-12 h-12 rounded-xl bg-${color}-500/10 border border-${color}-500/20 flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 text-${color}-400`} />
                    </div>
                    <h3 className={`font-display text-4xl font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
                    <p className={`text-lg leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>{desc}</p>
                    <ul className={`space-y-3 text-sm ${dark ? 'text-slate-500' : 'text-slate-500'}`}>
                      {bullets.map(b => (
                        <li key={b} className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full bg-${color}-500`} />{b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>

          <FadeIn delay={0.4} className="mt-24 text-center">
            <Link to="/signup"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-amber-500 text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(5,150,105,0.4)] hover:scale-105 transition-all duration-300">
              Start Your Free Plan <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeIn>
        </div>
      </section>

      <TestimonialMarquee />

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="relative group rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(5,150,105,0.2)]">
              <div className="absolute inset-0">
                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600" alt="Dream Home" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className={`absolute inset-0 bg-gradient-to-t ${dark ? 'from-[#050e1f] via-[#050e1f]/50' : 'from-slate-900 via-slate-900/50'} to-transparent`} />
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/20 blur-[100px] -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/20 blur-[100px] -ml-32 -mb-32" />
              <div className="relative px-8 py-20 sm:p-20 text-center flex flex-col items-center">
                <motion.div initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="mb-8">
                  <div className="w-20 h-20 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center p-2">
                    <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                      <HomeIcon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </motion.div>
                <h2 className="font-display text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                  Ready to own your{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-300">dream home?</span>
                </h2>
                <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                  Let Aria build your personalized mortgage plan in seconds. Compare rates, calculate EMIs, and take the first step toward homeownership today.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-5">
                  <Link to="/signup"
                    className="group relative px-10 py-5 rounded-2xl bg-white text-emerald-800 font-bold text-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300 overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                      Get My Free Plan <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  <span className="text-white/40 text-sm font-medium">Joined by 10,000+ homebuyers today</span>
                </div>
                <div className="absolute inset-px rounded-[2.5rem] border border-white/10 pointer-events-none" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </PublicLayout>
  );
}
