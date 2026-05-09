import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, User, Calendar, Share2, Sparkles } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { FadeIn } from '../components/AnimationWrappers';
import PublicLayout from '../layouts/PublicLayout';
import { posts } from '../data/blogPosts';
import { useEffect } from 'react';

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { dark } = useTheme();
  
  const post = posts.find(p => p.slug === slug);

  useEffect(() => {
    if (!post) {
      // If post not found, redirect to blog home after a short delay
      const timer = setTimeout(() => navigate('/blog'), 3000);
      return () => clearTimeout(timer);
    }
  }, [post, navigate]);

  if (!post) {
    return (
      <PublicLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className={`text-4xl font-bold mb-4 ${dark ? 'text-white' : 'text-slate-900'}`}>Post not found</h1>
            <p className={`${dark ? 'text-slate-400' : 'text-slate-600'} mb-8`}>Redirecting you back to the blog...</p>
            <Link to="/blog" className="text-violet-400 hover:underline">Click here if not redirected</Link>
          </div>
        </div>
      </PublicLayout>
    );
  }

  return (
    <PublicLayout>
      <article className="pt-32 pb-24 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-violet-600/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 relative">
          {/* Back Button */}
          <FadeIn>
            <Link 
              to="/blog" 
              className={`inline-flex items-center gap-2 mb-12 text-sm font-medium transition-colors ${dark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </FadeIn>

          {/* Header */}
          <FadeIn delay={0.1}>
            <div className="mb-12">
              <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold border mb-8 ${post.categoryColor}`}>
                {post.category.toUpperCase()}
              </span>
              <h1 className={`font-display text-4xl sm:text-6xl font-bold mb-8 leading-tight ${dark ? 'text-white' : 'text-slate-900'}`}>
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center border-2 border-white/10 shadow-lg">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className={`text-sm font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>{post.author}</p>
                    <p className={`text-xs ${dark ? 'text-slate-500' : 'text-slate-500'}`}>{post.date}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 ml-auto">
                  <div className={`flex items-center gap-2 text-sm ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <button className={`p-2 rounded-full border transition-all ${dark ? 'border-white/10 hover:bg-white/5 text-slate-400 hover:text-white' : 'border-slate-200 hover:bg-slate-50 text-slate-500 hover:text-slate-900'}`}>
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Featured Image */}
          <FadeIn delay={0.2}>
            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden mb-16 shadow-2xl border border-white/5">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn delay={0.3}>
            <div 
              className={`prose prose-lg max-w-none ${dark ? 'prose-invert prose-violet' : 'prose-slate'} 
              prose-headings:font-display prose-headings:font-bold prose-p:leading-relaxed prose-p:text-lg
              prose-blockquote:border-violet-500 prose-blockquote:bg-violet-500/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-xl prose-blockquote:not-italic prose-blockquote:font-medium
              `}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </FadeIn>

          {/* Footer / CTA */}
          <FadeIn delay={0.4} className="mt-20">
            <div className={`p-8 sm:p-12 rounded-[2rem] border text-center relative overflow-hidden ${dark ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'}`}>
               <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 blur-3xl rounded-full" />
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full" />
               
               <Sparkles className="w-10 h-10 text-violet-400 mx-auto mb-6" />
               <h3 className={`text-2xl font-bold mb-4 ${dark ? 'text-white' : 'text-slate-900'}`}>Want to visualize your own dreams?</h3>
               <p className={`mb-8 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>Join thousands of others who are using QuickRaina to explore their subconscious.</p>
               <Link 
                to="/signup" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-bold hover:shadow-lg hover:shadow-violet-600/20 hover:scale-105 transition-all"
               >
                 Get Started for Free <ArrowRight className="w-5 h-5" />
               </Link>
            </div>
          </FadeIn>
        </div>
      </article>
    </PublicLayout>
  );
}

function ArrowRight({ className }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  );
}
