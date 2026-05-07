import React from 'react';
import { usePortfolioService } from '../../contexts/PortfolioContext';
import { Section } from '../../components/Section/Section';
import { Card, CardContent } from '../../components/Card/Card';
import { Shield, Star } from 'lucide-react';
import { cn } from '../../utils/utils';

export const Certifications: React.FC = () => {
  const certifications = usePortfolioService().getCertifications();

  return (
    <Section id="certifications" title="Certifications">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certifications.map((cert, index) => {
          const isMicrosoft = cert.issuer.toLowerCase().includes('microsoft') || cert.name.toLowerCase().includes('microsoft');
          const isGoogle = cert.issuer.toLowerCase().includes('google') || cert.name.toLowerCase().includes('google');
          
          // Highlight Microsoft Certified badges (Fabric + Azure AI)
          const isMicrosoftCertified = cert.name.includes('Microsoft Certified');
          
          return (
            <Card 
              key={index} 
              className={cn(
                "bg-background border-slate-700/50",
                isMicrosoftCertified && "border-primary/40 shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.05)]"
              )}
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div className={cn(
                    "p-2 rounded-lg",
                    isMicrosoft ? "bg-blue-500/10 text-blue-500" : isGoogle ? "bg-yellow-500/10 text-yellow-500" : "bg-slate-800 text-slate-400"
                  )}>
                    {isMicrosoft ? (
                      <Shield size={20} />
                    ) : isGoogle ? (
                      <Star size={20} />
                    ) : (
                      <Shield size={20} />
                    )}
                  </div>
                  <div className="text-xs font-mono text-slate-400 bg-slate-800/50 px-2 py-1 rounded">
                    {cert.year}
                  </div>
                </div>
                
                <h3 className="font-bold text-textMain mb-1 leading-tight">
                  {cert.name}
                </h3>
                <p className="text-sm text-textMuted mt-auto pt-2">
                  {cert.issuer}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};
