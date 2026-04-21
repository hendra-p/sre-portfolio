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
    <Section id="skills" title="Technical Arsenal" className="bg-surface/30">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(groupedSkills).map(([category, items]) => (
          <Card key={category} className="bg-background/50 border-slate-700/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-textMain mb-6 flex items-center">
                <span className="w-8 h-1 bg-primary mr-3 rounded-full"></span>
                {category}
              </h3>
              <ul className="space-y-3">
                {items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-textMuted group">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mr-3 group-hover:bg-primary transition-colors"></span>
                    <span className="group-hover:text-textMain transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};
