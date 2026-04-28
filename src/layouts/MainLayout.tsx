import React, { useState, useEffect } from 'react';
import { usePortfolioService } from '../contexts/PortfolioContext';
import { Menu, X } from 'lucide-react';
import { cn } from '../utils/utils';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const profile = usePortfolioService().getProfile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Case Studies', href: '#projects' },
    { name: 'Live Demo', href: '#live-demo' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-background/80 backdrop-blur-md border-b border-slate-800 py-4 shadow-sm" : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-6xl flex items-center justify-between">
          <a href="#home" className="text-xl font-bold tracking-tighter text-textMain relative group">
            {profile.name.split(' ')[0]}
            <span className="text-primary">.</span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-textMuted hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="/cv-placeholder.pdf" 
              className="px-4 py-2 rounded border border-primary text-primary text-sm font-medium hover:bg-primary/10 transition-colors"
              download="Hendra_Prasetyo_CV.pdf"
            >
              Resume
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-textMuted hover:text-textMain focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm md:hidden pt-24 px-6 pb-6 flex flex-col items-center">
          <nav className="flex flex-col space-y-6 text-center w-full">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-textMain hover:text-primary p-4 border-b border-slate-800"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="/cv-placeholder.pdf" 
              onClick={() => setMobileMenuOpen(false)}
              className="mt-8 px-6 py-3 rounded border border-primary text-primary font-medium w-full max-w-xs mx-auto"
              download="Hendra_Prasetyo_CV.pdf"
            >
              Download Resume
            </a>
          </nav>
        </div>
      )}

      <main className="flex-grow">
        {children}
      </main>

      <footer className="py-8 text-center border-t border-slate-800 mt-20">
        <p className="text-textMuted text-sm">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="text-xs text-slate-500 mt-2 font-mono">
          System status: 100% Operational
        </p>
      </footer>
    </div>
  );
};
