import { motion } from 'framer-motion';
import { MessageSquare, BarChart2, FileText, ChevronRight, Clock, Shield, Zap, Sparkles, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { FadeIn, StaggerChildren, StaggerItem } from '../components/AnimationWrappers';
import PublicLayout from '../layouts/PublicLayout';
import { Link } from 'react-router-dom';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Share Your Home Buying Goal',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200',
    description: 'Tell Aria about your budget, income, city, and dream home. No forms, no jargon — just a natural conversation. The more you share, the more personalized your plan.',
    tips: ['Share your monthly income', 'Mention your target property value', 'Tell us your down payment savings', 'Any existing loans or liabilities'],
    color: 'from-emerald-500 to-teal-600',
  },
  {
    number: '02',
    icon: BarChart2,
    title: 'AI Analyses Your Loan Options',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200',
    description: "Aria compares home loan rates across 150+ banks and NBFCs in real-time, calculates your exact EMI, checks your eligibility, and identifies hidden costs — all in seconds.",
    tips: ['Compares 150+ lenders instantly', 'Calculates true cost of borrowing', 'Checks prepayment penalties', 'Identifies best fixed vs floating option'],
    color: 'from-amber-500 to-orange-500',
  },
  {
    number: '03',
    icon: FileText,
    title: 'Get Your Personalized Mortgage Plan',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200',
    description: 'Receive a clear, actionable plan — your best bank recommendation, monthly EMI schedule, total interest cost, tax savings under 80C & 24(b), and a prepayment strategy to save lakhs.',
    tips: ['Recommended bank & rate', 'Month-by-month EMI schedule', 'Tax benefit breakdown', 'Prepayment strategy to save interest'],
    color: 'from-blue-500 to-cyan-500',
  },
];

export default function HowItWorks() {
  const { dark } = useTheme();

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-600/10 blur-[130px] rounded-full" />
          <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-amber-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-8 backdrop-blur-md uppercase tracking-widest">
                Our Methodology
              </div>
              <h1 className={`font-display text-5xl sm:text-7xl font-black mb-8 leading-tight ${dark ? 'text-white' : 'text-slate-900'}`}>
                Your path to <br />
                <span className="gradient-text">Smart Homeownership</span>
              </h1>
              <p className={`text-xl leading-relaxed max-w-2xl mx-auto mb-12 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                We've combined financial expertise with AI to make mortgage planning as easy as having a conversation with a knowledgeable friend.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Visual Walkthrough */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-40">
          {steps.map(({ number, icon: Icon, title, image, description, tips, color }, idx) => (
            <div key={number} className={`flex flex-col lg:flex-row gap-20 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <FadeIn className="w-full lg:w-1/2" direction={idx % 2 === 0 ? 'left' : 'right'}>
                <div className="relative group">
                  <div className={`absolute -inset-4 bg-gradient-to-br ${color} opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-700 pointer-events-none rounded-3xl`} />
                  <div className={`relative rounded-[2.5rem] overflow-hidden border ${dark ? 'border-white/10 shadow-2xl shadow-black/50' : 'border-slate-200 shadow-xl'}`}>
                    <img src={image} alt={title} className="w-full h-[450px] object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute top-6 left-6 flex items-center gap-4 bg-black/40 backdrop-blur-xl px-4 py-2 rounded-2xl border border-white/20">
                      <span className="font-display text-2xl font-black text-white">{number}</span>
                      <div className="w-px h-6 bg-white/20" />
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn className="w-full lg:w-1/2 space-y-8" direction={idx % 2 === 0 ? 'right' : 'left'}>
                <div className="space-y-4">
                  <h2 className={`font-display text-4xl sm:text-5xl font-black leading-tight ${dark ? 'text-white' : 'text-slate-900'}`}>{title}</h2>
                  <div className={`h-1.5 w-24 rounded-full bg-gradient-to-r ${color}`} />
                </div>
                <p className={`text-lg leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>{description}</p>
                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  {tips.map(tip => (
                    <div key={tip} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0`}>
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      </div>
                      <span className={`text-sm font-medium ${dark ? 'text-slate-300' : 'text-slate-800'}`}>{tip}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-40 relative overflow-hidden ${dark ? 'bg-[#050e1f]' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-20">
            <h2 className={`font-display text-5xl font-black mb-6 ${dark ? 'text-white' : 'text-slate-900'}`}>
              Beyond <span className="gradient-text">Rate Comparison</span>
            </h2>
            <p className={`text-lg ${dark ? 'text-slate-400' : 'text-slate-600'}`}>Engineering excellence meets personal finance intelligence.</p>
          </FadeIn>

          <StaggerChildren className="grid sm:grid-cols-3 gap-10" staggerDelay={0.15}>
            {[
              { icon: Clock, stat: 'Speed', value: '< 30s', desc: 'Get a complete mortgage plan in under 30 seconds — faster than any bank branch visit.' },
              { icon: Shield, stat: 'Data Security', value: 'Bank-Grade', desc: 'Your financial data is encrypted and never shared with any third party.' },
              { icon: Zap, stat: 'Accuracy', value: '98.5%', desc: 'Our EMI and eligibility calculations match bank outputs with 98.5% accuracy.' },
            ].map(({ icon: Icon, stat, value, desc }) => (
              <StaggerItem key={stat}>
                <div className={`group relative p-10 rounded-[2.5rem] border transition-all duration-500 hover:-translate-y-4 overflow-hidden ${
                  dark ? 'bg-[#0a1628] border-white/5 hover:border-emerald-500/20' : 'bg-white border-slate-200 shadow-xl'
                }`}>
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-emerald-400" />
                    </div>
                    <div className={`text-sm font-bold uppercase tracking-wider mb-2 ${dark ? 'text-slate-500' : 'text-slate-400'}`}>{stat}</div>
                    <div className="font-display text-4xl font-black mb-4 gradient-text">{value}</div>
                    <p className={`text-sm leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-40 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/5 blur-[120px] rounded-full -mr-32 -mt-32 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full -ml-32 -mb-32 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-24">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/10 shadow-2xl backdrop-blur-md">
              <Sparkles className="w-10 h-10 text-emerald-400 animate-pulse" />
            </div>
            <h2 className={`font-display text-5xl sm:text-6xl font-black mb-6 ${dark ? 'text-white' : 'text-slate-900'}`}>
              Common <span className="gradient-text">Questions</span>
            </h2>
            <p className={`text-xl ${dark ? 'text-slate-400' : 'text-slate-600'}`}>Everything you need to know about AI mortgage planning.</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { q: 'How accurate are the EMI calculations?', a: 'Our EMI calculations match bank figures with 98.5% accuracy using standard reducing balance formulas. Always verify final numbers with your bank before signing.', color: 'from-emerald-500/10' },
              { q: 'Is my financial data kept private?', a: 'Absolutely. Your data is encrypted end-to-end and never shared with any bank or third party without your explicit consent.', color: 'from-amber-500/10' },
              { q: 'Can I compare multiple loan scenarios?', a: 'Yes! You can run unlimited comparisons — different loan amounts, tenures, interest rates — and save your favourite plans to your history.', color: 'from-blue-500/10' },
              { q: 'Do I need any finance knowledge to use this?', a: 'None at all. Aria explains everything in plain language. Just tell her your budget and goals — she handles all the complex calculations.', color: 'from-purple-500/10' },
            ].map(({ q, a, color }, idx) => (
              <FadeIn key={q} delay={idx * 0.1}>
                <div className={`group relative p-8 rounded-[2rem] border overflow-hidden transition-all duration-300 hover:border-emerald-500/30 backdrop-blur-md h-full ${
                  dark ? 'bg-[#0a1628]/80 border-white/5' : 'bg-white border-slate-200 shadow-sm'
                }`}>
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${color} blur-3xl rounded-full opacity-50`} />
                  <div className="relative z-10">
                    <h3 className={`text-xl font-bold mb-3 ${dark ? 'text-white' : 'text-slate-900'}`}>{q}</h3>
                    <p className={`text-base leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>{a}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5} className="mt-24 text-center">
            <Link to="/signup"
              className="group relative inline-flex items-center gap-4 px-10 py-5 rounded-2xl bg-gradient-to-r from-emerald-600 to-amber-500 text-white font-black text-lg hover:shadow-[0_0_50px_rgba(5,150,105,0.6)] hover:scale-105 transition-all duration-500">
              Start Planning My Home Loan <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </PublicLayout>
  );
}
