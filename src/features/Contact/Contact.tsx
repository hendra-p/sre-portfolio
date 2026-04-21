import React from 'react';
import { usePortfolioService } from '../../contexts/PortfolioContext';
import { Section } from '../../components/Section/Section';
import { Button } from '../../components/Button/Button';
import { Mail, Link, Terminal } from 'lucide-react';

export const Contact: React.FC = () => {
  const profile = usePortfolioService().getProfile();

  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-textMain mb-6">
          Ready to improve your system reliability?
        </h3>
        <p className="text-textMuted text-lg mb-10 leading-relaxed">
          I'm currently open to new opportunities. Whether you have a question or just want to say hi, 
          I'll try my best to get back to you!
        </p>
        
        <a href={`mailto:${profile.email}`}>
          <Button size="lg" className="px-12 text-lg mb-12">
            Say Hello
          </Button>
        </a>

        <div className="flex justify-center space-x-6 mt-12 pt-12 border-t border-slate-800">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-textMuted hover:text-primary transition-colors">
            <span className="sr-only">LinkedIn</span>
            <Link size={24} />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="text-textMuted hover:text-primary transition-colors">
            <span className="sr-only">GitHub</span>
            <Terminal size={24} />
          </a>
          <a href={`mailto:${profile.email}`} className="text-textMuted hover:text-primary transition-colors">
            <span className="sr-only">Email</span>
            <Mail size={24} />
          </a>
        </div>
      </div>
    </Section>
  );
};
