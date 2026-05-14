import React from 'react';
import { usePortfolioService } from '../../contexts/PortfolioContext';
import { Section } from '../../components/Section/Section';
import { Card, CardContent } from '../../components/Card/Card';

export const Skills: React.FC = () => {
  const skills = usePortfolioService().getSkills();

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill.name);
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <Section id="skills" title="Technical Skills" className="bg-surface/30">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(groupedSkills).map(([category, items]) => (
          <Card key={category} className="bg-background/50 border-slate-700/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-textMain mb-6 flex items-center">
                <span className="w-8 h-1 bg-primary mr-3 rounded-full"></span>
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item, idx) => {
                  const getCategoryStyles = (cat: string) => {
                    const lowerCat = cat.toLowerCase();
                    if (lowerCat.includes('infra') || lowerCat.includes('observability')) return 'text-primary bg-primary/10 border-primary/20';
                    if (lowerCat.includes('devops') || lowerCat.includes('automation')) return 'text-success bg-success/10 border-success/20';
                    if (lowerCat.includes('cloud') || lowerCat.includes('ai')) return 'text-warning bg-warning/10 border-warning/20';
                    return 'text-textMuted bg-surface border-slate-700/50';
                  };
                  
                  return (
                    <span key={idx} className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-all hover:scale-105 ${getCategoryStyles(category)}`}>
                      {item}
                    </span>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};
