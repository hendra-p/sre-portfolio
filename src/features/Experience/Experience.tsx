import React from 'react';
import { usePortfolioService } from '../../contexts/PortfolioContext';
import { Section } from '../../components/Section/Section';
import { Briefcase } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = usePortfolioService().getExperiences();

  return (
    <Section id="experience" title="Experience">
      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Timeline dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-surface text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <Briefcase size={16} />
            </div>
            
            {/* Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-slate-700/50 bg-surface/50 shadow-sm transition-all hover:border-primary/30">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-textMain">{exp.role}</h3>
                  <div className="text-primary font-medium">{exp.company}</div>
                </div>
                <div className="mt-2 sm:mt-0 text-sm font-mono text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full w-fit">
                  {exp.period}
                </div>
              </div>
              
              <ul className="space-y-2 mb-6">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-textMuted text-sm leading-relaxed flex items-start">
                    <span className="text-primary mr-2 mt-1">▹</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
              
              <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">Business Impact</div>
                <p className="text-sm text-textMain font-medium">{exp.impact}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
