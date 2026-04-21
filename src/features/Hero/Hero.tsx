import React from 'react';
import { usePortfolioService } from '../../contexts/PortfolioContext';
import { Button } from '../../components/Button/Button';
import { Terminal, Download, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const profile = usePortfolioService().getProfile();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-6xl relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-surface/50 border border-slate-700/50 px-3 py-1 rounded-full text-primary text-sm font-medium mb-6">
            <Terminal size={16} />
            <span>System Status: Optimal</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-textMain tracking-tight mb-4 leading-tight">
            Hi, I'm {profile.name}.
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-textMuted mb-6">
            {profile.title}
          </h2>
          
          <p className="text-lg md:text-xl text-textMuted leading-relaxed mb-10 max-w-2xl">
            {profile.tagline}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects">
              <Button size="lg" className="group">
                View My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </a>
            <a href="/cv-placeholder.pdf" download="Hendra_Prasetyo_CV.pdf">
              <Button variant="outline" size="lg">
                <Download className="mr-2" size={20} />
                Download CV
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
