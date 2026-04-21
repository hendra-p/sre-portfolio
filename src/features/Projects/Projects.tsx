import React from 'react';
import { usePortfolioService } from '../../contexts/PortfolioContext';
import { Section } from '../../components/Section/Section';
import { Card, CardContent } from '../../components/Card/Card';
import { ActivitySquare, Zap } from 'lucide-react';

export const Projects: React.FC = () => {
  const projects = usePortfolioService().getProjects();

  return (
    <Section id="projects" title="Case Studies" className="bg-surface/30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col h-full bg-background border-slate-700/50">
            <CardContent className="p-8 flex flex-col flex-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-textMain mb-2">{project.title}</h3>
                <p className="text-textMuted">{project.description}</p>
              </div>
              
              <div className="space-y-4 mb-8 flex-1">
                <div>
                  <div className="flex items-center text-red-400 text-sm font-semibold mb-1">
                    <ActivitySquare size={16} className="mr-1.5" /> Problem
                  </div>
                  <p className="text-sm text-textMuted bg-slate-800/50 p-3 rounded border border-slate-700/50">{project.problem}</p>
                </div>
                <div>
                  <div className="flex items-center text-primary text-sm font-semibold mb-1">
                    <Zap size={16} className="mr-1.5" /> Solution
                  </div>
                  <p className="text-sm text-textMuted bg-slate-800/50 p-3 rounded border border-slate-700/50">{project.solution}</p>
                </div>
              </div>
              
              <div className="mt-auto pt-6 border-t border-slate-700/50">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Impact</div>
                <p className="text-textMain font-medium mb-6">{project.impact}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs font-mono px-2.5 py-1 rounded bg-surface text-primary border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};
