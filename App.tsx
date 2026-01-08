
import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Activity, ShieldCheck, Wind, Clock, Heart, Utensils, Layers, 
  ExternalLink, Download, Award, BookOpen, Cpu, Briefcase, GraduationCap, 
  ChevronRight, ChevronLeft, Linkedin, Mail, BadgeCheck, Search,
  CheckCircle2, AlertCircle, FileText, Code2, Server, Microscope, Target, Sparkles, Zap, Shield
} from 'lucide-react';
import { STATS, EXPERTISE, PRODUCTS, ACADEMIC_RESEARCH, INDUSTRIAL_RESEARCH, PUBLICATIONS, PUBLICATION_STATS } from './constants';
import { ProductDetail, Publication } from './types';

// Components
const StatCard = ({ label, value }: { label: string, value: string, key?: React.Key }) => (
  <div className="flex flex-col items-center p-6 glass-card rounded-2xl transition-transform hover:scale-105 border-slate-100">
    <span className="text-3xl md:text-4xl font-bold text-gradient">{value}</span>
    <span className="text-sm text-slate-500 mt-2 text-center uppercase tracking-wider font-semibold">{label}</span>
  </div>
);

const ExpertiseCard = ({ title, subtitle, points, index }: { title: string, subtitle: string, points: string[], index: number, key?: React.Key }) => {
  const IconMap = [Target, Zap, Sparkles, Shield];
  const Icon = IconMap[index % IconMap.length];
  
  return (
    <div className="px-5 py-8 glass-card rounded-[2rem] h-full flex flex-col border border-slate-100 hover:border-teal-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/5 group">
      <div className="mb-6">
        <div className="w-11 h-11 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300 text-teal-600">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="text-[17px] font-extrabold text-slate-900 leading-tight min-h-[2.5rem] flex items-start mb-2 tracking-tight">
          {title}
        </h3>
        <p className="text-teal-600 text-[10px] font-bold uppercase tracking-[0.12em] min-h-[1.25rem] flex items-start opacity-90 truncate">
          {subtitle}
        </p>
      </div>
      
      <div className="w-full h-px bg-slate-100 mb-6" />
      
      <ul className="space-y-4 flex-grow">
        {points.map((p, i) => (
          <li key={i} className="flex items-start text-slate-600 text-[13px] leading-snug group/item">
            <div className="mr-2.5 mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0 group-hover/item:scale-125 transition-transform" />
            <span className="font-medium">{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const PublicationItem = ({ pub }: { pub: Publication }) => (
  <a 
    href={pub.link} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex flex-col h-full p-6 bg-white rounded-2xl border border-slate-100 hover:border-teal-500/30 transition-all hover:shadow-lg group text-left"
  >
    <div className="flex justify-between items-start gap-4 h-full">
      <div className="space-y-2 flex flex-col h-full">
        <h4 className="text-lg font-bold text-slate-900 group-hover:text-teal-600 transition-colors leading-tight">
          {pub.title}
        </h4>
        <p className="text-slate-500 text-sm italic">{pub.authors}</p>
        <div className="mt-auto">
          <p className="text-teal-700 font-semibold text-xs uppercase tracking-wider">{pub.journal}</p>
        </div>
      </div>
      <ExternalLink className="w-5 h-5 text-slate-300 group-hover:text-teal-500 shrink-0 mt-1" />
    </div>
  </a>
);

const ProductSlide = ({ product }: { product: ProductDetail }) => {
  const IconMap: any = {
    activity: Activity,
    'shield-check': ShieldCheck,
    wind: Wind,
    clock: Clock,
    heart: Heart,
    utensils: Utensils,
    layers: Layers
  };
  const Icon = IconMap[product.icon] || Activity;

  return (
    <div className="flex flex-col gap-12 p-8 bg-white rounded-[2.5rem] border border-slate-200 shadow-2xl shadow-slate-200/50">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-slate-100">
        <div className="flex items-center gap-6">
          <div className="p-4 bg-teal-50 rounded-[1.5rem]">
            <Icon className="w-10 h-10 text-teal-600" />
          </div>
          <div>
            <h3 className="text-3xl font-extrabold text-slate-900">{product.title}</h3>
            <p className="text-teal-600 font-bold text-lg">{product.subtitle}</p>
          </div>
        </div>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-50 text-indigo-700 text-sm font-bold border border-indigo-100">
          <FileText className="w-4 h-4" />
          {product.regulatory}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Deep Insights Column */}
        <div className="lg:col-span-1 space-y-10">
          <div>
            <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">
              <Microscope className="w-4 h-4" /> Clinical Validation
            </h4>
            <p className="text-slate-700 leading-relaxed font-medium bg-slate-50 p-5 rounded-2xl border border-slate-100">
              {product.clinicalValidation}
            </p>
          </div>

          <div>
            <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">
              <AlertCircle className="w-4 h-4" /> Key Challenges Overcome
            </h4>
            <ul className="space-y-4">
              {product.keyChallenges.map((challenge, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0" />
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Core Description Column */}
        <div className="lg:col-span-1 space-y-10">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">The Problem</h4>
            <p className="text-slate-600 leading-relaxed">{product.problem}</p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Our Solution</h4>
            <p className="text-slate-900 leading-relaxed font-bold text-lg">{product.solution}</p>
          </div>
          <div className="p-6 bg-teal-600/5 rounded-2xl border border-teal-200">
            <h4 className="text-sm font-bold uppercase tracking-widest text-teal-700 mb-2">Outcome & Commercial Impact</h4>
            <p className="text-slate-800 font-bold">{product.outcome}</p>
          </div>
        </div>

        {/* Tech Stack Column */}
        <div className="lg:col-span-1 space-y-6">
          <div className="p-8 bg-slate-900 rounded-[2rem] text-white shadow-xl">
            <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
              <Code2 className="w-4 h-4" /> Technical Architecture
            </h4>
            
            <div className="space-y-8">
              <div>
                <p className="text-[10px] font-bold text-teal-400 mb-2 uppercase tracking-widest">AI Modeling</p>
                <p className="text-sm text-slate-300 font-medium leading-relaxed">{product.techStack.models}</p>
              </div>
              
              <div>
                <p className="text-[10px] font-bold text-teal-400 mb-2 uppercase tracking-widest">Engineering Stack</p>
                <p className="text-sm text-slate-300 font-medium leading-relaxed">{product.techStack.tech}</p>
              </div>

              {product.techStack.architecture && (
                <div>
                  <p className="text-[10px] font-bold text-teal-400 mb-2 uppercase tracking-widest">System Architecture</p>
                  <p className="text-sm text-slate-300 font-medium leading-relaxed">{product.techStack.architecture}</p>
                </div>
              )}
            </div>

            <div className="mt-12 flex items-center gap-2 text-[10px] text-slate-500 font-bold border-t border-slate-800 pt-6">
              <Server className="w-3 h-3" />
              DEPLOYED & SCALABLE INFRASTRUCTURE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % PRODUCTS.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);

  const linkedinUrl = "https://www.linkedin.com/in/dr-ali-rizwan/";
  const scholarUrl = "https://scholar.google.com/citations?user=rU8K5egAAAAJ&hl=en&oi=ao";
  const contactEmail = "ali.rizwan.ds@gmail.com";
  const profileImage = "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=1,background=white,quality=80,width=800,height=800/v1/event-images/m7/df1221b6-7517-48df-9c0d-c77e68d810f6";

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center font-bold text-white">AR</div>
            <span className="font-bold text-xl text-gradient tracking-tight text-slate-900 hidden sm:block">Dr. Ali Rizwan</span>
          </div>
          
          <div className="hidden md:flex gap-8 items-center text-sm font-semibold text-slate-500">
            {['Expertise', 'Portfolio', 'Research', 'Publications', 'Academic'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-teal-600 transition-colors">{item}</a>
            ))}
            <a href={`mailto:${contactEmail}`} className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2 rounded-full transition-all font-bold">
              Connect
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-slate-500">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 p-6 space-y-4 animate-in slide-in-from-top">
            {['Expertise', 'Portfolio', 'Research', 'Publications', 'Academic'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="block text-lg font-semibold text-slate-500 hover:text-teal-600">{item}</a>
            ))}
            <a href={`mailto:${contactEmail}`} className="block bg-slate-900 text-white text-center py-3 rounded-xl font-bold">Connect Now</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-bold tracking-widest uppercase">
              <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
              PRINCIPAL AI SCIENTIST | DE NOVO SaMD ARCHITECT | AI GOVERNANCE STRATEGIST
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
              Architecting <span className="text-gradient">Regulatory-Grade</span> Multimodal AI
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl font-medium">
              Mission-driven AI builder-architect translating complex healthcare problems into data strategies, models, and clinically validated, audit-ready AI-SaMD systems..
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#portfolio" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all flex items-center gap-2 shadow-lg shadow-slate-900/20">
                View Product Portfolio <ChevronRight className="w-4 h-4" />
              </a>
              <div className="flex items-center gap-4 px-6 text-slate-400">
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 transition-colors" title="LinkedIn Profile"><Linkedin className="w-6 h-6" /></a>
                <a href={scholarUrl} target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 transition-colors" title="Google Scholar Profile"><GraduationCap className="w-6 h-6" /></a>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-teal-500/10 blur-3xl rounded-full opacity-40 animate-pulse" />
            <div className="relative glass-card rounded-[3rem] overflow-hidden border border-slate-200 aspect-square shadow-2xl">
              <img 
                src={profileImage} 
                alt="Dr. Ali Rizwan" 
                className="w-full h-full object-cover object-center opacity-100 transition-all duration-700 hover:scale-105"
              />
              <div className="absolute bottom-0 w-full p-8 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent">
                <p className="text-teal-600 transition-colors font-bold text-2xl drop-shadow-lg">Dr. Ali Rizwan</p>
                <p className="text-teal-600 font-bold drop-shadow-md">Principal AI & Data Scientist</p>
                <p className="text-teal-600 text-gradient font-bold drop-shadow-md">PhD, University of Glasgow, UK</p>
                <p className="text-teal-600 text-gradient font-bold drop-shadow-md">MSc Big Data Science, QMUL, UK</p>
                <p className="text-gradient font-bold drop-shadow-md">MBA-IT, BSc Math & Physics, BZU, Pk</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-24">
          {STATS.map((stat, i) => (
            <StatCard key={i} label={stat.label} value={stat.value} />
          ))}
        </div>
      </header>

      {/* Expertise Section */}
      <section id="expertise" className="py-32 px-6 bg-white border-y border-slate-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto text-center mb-24 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Cross-Functional <span className="text-gradient">Expertise</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
            A startup-forged end-to-end workflow: from clinical problem framing to regulatory-grade, deployable AI systems.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6 max-w-[85rem] mx-auto">
          {EXPERTISE.map((item, i) => (
            <ExpertiseCard key={i} index={i} title={item.title} subtitle={item.subtitle} points={item.points} />
          ))}
        </div>
      </section>

      {/* Portfolio Slider */}
      <section id="portfolio" className="py-32 px-6 overflow-hidden scroll-mt-24">
        <div className="max-w-7xl mx-auto mb-20">
          <div className="flex justify-between items-end">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Product <span className="text-gradient">Portfolio</span></h2>
              <p className="text-slate-500 font-medium">Engineering the future of digital healthcare with regulatory-grade SaMD solutions.</p>
            </div>
            <div className="flex gap-4 mb-2">
              <button onClick={prevSlide} className="p-3 rounded-full border border-slate-200 hover:border-teal-600 hover:text-teal-600 transition-all shadow-sm">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={nextSlide} className="p-3 rounded-full border border-slate-200 hover:border-teal-600 hover:text-teal-600 transition-all shadow-sm">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <ProductSlide product={PRODUCTS[activeSlide]} />
          <div className="flex justify-center gap-3 mt-12">
            {PRODUCTS.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setActiveSlide(i)}
                className={`h-2 rounded-full transition-all ${activeSlide === i ? 'w-12 bg-teal-600' : 'w-2 bg-slate-300'}`} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-32 px-6 bg-white border-y border-slate-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Translating Research into <span className="text-gradient">Outcomes</span></h2>
            <p className="text-slate-500 font-medium">Bridging the gap between academic theory and commercial application.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Academic Projects */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-teal-50 rounded-xl text-teal-700"><GraduationCap /></div>
                <h3 className="text-2xl font-bold text-slate-900">Academic Collaborations</h3>
              </div>
              {ACADEMIC_RESEARCH.map((proj, i) => (
                <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-teal-200 transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-slate-900">{proj.title}</h4>
                  </div>
                  <p className="text-teal-700 text-sm font-bold mb-3">{proj.location}</p>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed font-medium">{proj.description}</p>
                  {proj.funding && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-orange-100 text-orange-700 text-xs font-bold mb-4">
                      <Award className="w-3 h-3" /> {proj.funding}
                    </div>
                  )}
                  <ul className="space-y-2">
                    {proj.deliverables.map((d, di) => (
                      <li key={di} className="text-slate-500 text-sm flex items-center gap-2 italic">
                        <ChevronRight className="w-3 h-3 text-teal-600" /> {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Industrial Projects */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-50 rounded-xl text-blue-700"><Briefcase /></div>
                <h3 className="text-2xl font-bold text-slate-900">Industrial Innovation</h3>
              </div>
              {INDUSTRIAL_RESEARCH.map((proj, i) => (
                <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 transition-all">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{proj.title}</h4>
                  <p className="text-blue-700 text-sm font-bold mb-3">{proj.location}</p>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed font-medium">{proj.description}</p>
                  <ul className="space-y-2">
                    {proj.deliverables.map((d, di) => (
                      <li key={di} className="text-slate-500 text-sm flex items-center gap-2 italic">
                        <ChevronRight className="w-3 h-3 text-blue-600" /> {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-32 px-6 bg-slate-50 mx-6 my-20 rounded-[4rem] border border-slate-200 scroll-mt-24">
        <div className="max-w-6xl mx-auto text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Selected Publications & <span className="text-gradient">Impact</span></h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">Contributing to the global body of knowledge in AI, healthcare acoustics, and telecommunications.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PUBLICATION_STATS.map((stat, i) => (
              <div key={i} className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-5xl font-extrabold text-slate-900 mb-2">{stat.value}</p>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <h3 className="text-xl font-bold text-slate-900 text-left pl-2 border-l-4 border-teal-500">Featured Research</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {PUBLICATIONS.map((pub, i) => (
                <PublicationItem key={i} pub={pub} />
              ))}
            </div>
          </div>
          
          <div className="p-12 bg-white rounded-3xl border border-teal-500/10 text-center space-y-6 shadow-xl shadow-teal-500/5">
            <h3 className="text-2xl font-bold text-slate-900">Full Publication Record</h3>
            <p className="text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
              For a complete and up-to-date list of peer-reviewed journals, book chapters, and conference proceedings, please visit my Google Scholar profile.
            </p>
            <a 
              href={scholarUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-teal-600 text-white font-bold px-8 py-4 rounded-full hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/20"
            >
              Google Scholar Profile <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Academic Profile Section */}
      <section id="academic" className="py-32 px-6 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Left Column: Education Timeline */}
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Academic Profile</h2>
              <p className="text-slate-500 font-medium text-lg">A foundation of excellence from top-tier global institutions.</p>
              
              <div className="mt-12 space-y-12 relative before:absolute before:inset-0 before:ml-[1.2rem] before:-translate-x-px md:before:ml-[1.2rem] before:h-full before:w-0.5 before:bg-slate-100">
                
                {/* Timeline Items */}
                <div className="relative flex items-start group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-white group-hover:border-indigo-500 transition-all z-10 shrink-0">
                    <GraduationCap className="w-5 h-5 text-indigo-500" />
                  </div>
                  <div className="ml-6">
                    <div className="font-bold text-slate-900 text-xl">PhD, Artificial Intelligence Applications in Automation</div>
                    <div className="text-indigo-600 font-bold">University of Glasgow, UK</div>
                  </div>
                </div>

                <div className="relative flex items-start group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-white group-hover:border-indigo-500 transition-all z-10 shrink-0">
                    <GraduationCap className="w-5 h-5 text-indigo-500" />
                  </div>
                  <div className="ml-6">
                    <div className="font-bold text-slate-900 text-xl">MSc, Big Data Science</div>
                    <div className="text-indigo-600 font-bold">Queen Mary University of London, UK</div>
                  </div>
                </div>

                <div className="relative flex items-start group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-white group-hover:border-indigo-500 transition-all z-10 shrink-0">
                    <GraduationCap className="w-5 h-5 text-indigo-500" />
                  </div>
                  <div className="ml-6">
                    <div className="font-bold text-slate-900 text-xl">MBA-IT, BSc Math & Physics</div>
                    <div className="text-indigo-600 font-bold">BZU, Pakistan</div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Certifications Card */}
            <div className="lg:w-1/2">
              <div className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-10">
                  <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-600">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Certifications & Awards</h3>
                </div>

                <ul className="space-y-6 flex-grow">
                  {[
                    "AI in Healthcare Specialization (Stanford University)",
                    "AI Product Manager (IBM)",
                    "Global Talent Endorsement (UK Tech Nation)",
                    "ADEK Award for Research Excellence (Two-time Recipient)",
                    "EPSRC Global Challenges Research Fund Grant Participant"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 group">
                      <div className="w-2 h-2 rounded-full bg-indigo-500 shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="text-slate-600 font-semibold text-lg">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-12 pt-8 border-t border-slate-50 flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-indigo-500" />
                  <span className="text-indigo-600 font-bold text-lg">Available for Expert Consulting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center font-bold text-white">AR</div>
              <span className="font-bold text-xl text-gradient tracking-tight text-slate-900 hidden sm:block">Dr. Ali Rizwan</span>
            </div>
            <p className="text-slate-500 font-medium max-w-xs leading-relaxed">
              Open to new collaborations and challenges at the intersection of AI, healthcare, and telecommunications.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-4">
              <a href={`mailto:${contactEmail}`} className="p-3 bg-slate-50 rounded-xl hover:text-teal-600 transition-all border border-slate-100 shadow-sm" title="Send Email"><Mail /></a>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 rounded-xl hover:text-teal-600 transition-all border border-slate-100 shadow-sm" title="LinkedIn Profile"><Linkedin /></a>
              <a href={scholarUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 rounded-xl hover:text-teal-600 transition-all border border-slate-100 shadow-sm" title="Google Scholar Archive"><GraduationCap /></a>
            </div>
            <p className="text-slate-400 text-sm font-semibold">© {new Date().getFullYear()} Dr. Ali Rizwan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
