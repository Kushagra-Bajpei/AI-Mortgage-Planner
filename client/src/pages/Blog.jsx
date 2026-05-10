import { Link } from 'react-router-dom';
import { ArrowRight, Clock, User, Landmark } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { FadeIn, StaggerChildren, StaggerItem } from '../components/AnimationWrappers';
import PublicLayout from '../layouts/PublicLayout';
import { posts } from '../data/blogPosts';

export default function Blog() {
  const { dark } = useTheme();
  const [featured, ...rest] = posts;

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-600/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="max-w-3xl">
            <FadeIn>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <Landmark className="w-3.5 h-3.5" />
                INSIGHTS & STRATEGIES
              </span>
              <h1 className={`font-display text-5xl sm:text-7xl font-bold mb-8 leading-tight ${dark ? 'text-white' : 'text-slate-900'}`}>
                Master your <br />
                <span className="gradient-text">Home Journey</span>
              </h1>
              <p className={`text-xl leading-relaxed max-w-2xl ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                Discover the latest in AI-powered mortgage planning, interest rate trends, and financial strategies for your dream home.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className={`group relative rounded-[2.5rem] overflow-hidden border transition-all duration-700 hover:border-emerald-500/40 hover:shadow-[0_0_80px_rgba(5,150,105,0.2)] ${dark ? 'bg-[#0a0a0f] border-white/10' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div className="flex flex-col lg:flex-row min-h-[500px]">
                {/* Image Section */}
                <div className="lg:w-1/2 relative overflow-hidden h-[300px] lg:h-auto">
                  <img 
                    src={featured.image} 
                    alt={featured.title}
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200';
                      e.target.onerror = null;
                    }}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r ${dark ? 'from-[#0a0a0f] via-transparent' : 'from-slate-900/40 via-transparent'} to-transparent`} />
                  
                  {/* Category Badge on Image for Mobile */}
                  <div className="absolute top-6 left-6 lg:hidden">
                    <span className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-bold backdrop-blur-md border ${featured.categoryColor}`}>
                      {featured.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
                  <div className="hidden lg:block">
                    <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold border mb-8 ${featured.categoryColor}`}>
                      FEATURED ARTICLE • {featured.category.toUpperCase()}
                    </span>
                  </div>
                  
                  <Link to={`/blog/${featured.slug}`} className="block group/title">
                    <h2 className={`font-display text-3xl lg:text-5xl font-bold mb-6 transition-colors group-hover/title:text-emerald-400 leading-tight ${dark ? 'text-white' : 'text-slate-900'}`}>
                      {featured.title}
                    </h2>
                  </Link>
                  
                  <p className={`text-lg leading-relaxed mb-10 line-clamp-3 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {featured.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-amber-400 flex items-center justify-center border-2 border-white/10 shadow-lg">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className={`text-sm font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>{featured.author}</p>
                        <p className={`text-xs ${dark ? 'text-slate-500' : 'text-slate-500'}`}>{featured.date}</p>
                      </div>
                    </div>
                    
                    <div className="h-10 w-px bg-white/10 hidden sm:block" />
                    
                    <div className={`flex items-center gap-2 text-sm ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                      <Clock className="w-4 h-4" />
                      <span>{featured.readTime}</span>
                    </div>

                    <Link 
                      to={`/blog/${featured.slug}`}
                      className="ml-auto group/btn flex items-center gap-2 text-emerald-400 font-bold hover:text-emerald-300 transition-colors"
                    >
                      Read Article <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Grid Section */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h3 className={`font-display text-2xl lg:text-3xl font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>
              Latest <span className="gradient-text">Articles</span>
            </h3>
            <div className={`h-px flex-1 mx-8 hidden sm:block ${dark ? 'bg-white/10' : 'bg-slate-200'}`} />
          </div>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {rest.map(({ slug, category, categoryColor, title, excerpt, author, readTime, image }) => (
              <StaggerItem key={title}>
                <Link 
                  to={`/blog/${slug}`} 
                  className={`group flex flex-col h-full rounded-3xl border overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500/30 hover:shadow-2xl ${dark ? 'bg-[#12121a] border-white/8 hover:shadow-emerald-500/5' : 'bg-white border-slate-200 shadow-sm hover:shadow-xl'}`}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={image} 
                      alt={title} 
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200';
                        e.target.onerror = null;
                      }}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12121a]/80 via-transparent to-transparent opacity-60" />
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border ${categoryColor}`}>
                        {category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-1">
                    <h4 className={`font-display text-xl font-bold mb-4 group-hover:text-emerald-400 transition-colors line-clamp-2 ${dark ? 'text-white' : 'text-slate-900'}`}>
                      {title}
                    </h4>
                    <p className={`text-sm leading-relaxed mb-8 line-clamp-3 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {excerpt}
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                          <User className="w-4 h-4 text-slate-400" />
                        </div>
                        <span className={`text-xs font-medium ${dark ? 'text-slate-500' : 'text-slate-600'}`}>{author}</span>
                      </div>
                      <div className={`flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest ${dark ? 'text-slate-600' : 'text-slate-400'}`}>
                        <Clock className="w-3.5 h-3.5" />
                        <span>{readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>


    </PublicLayout>
  );
}
