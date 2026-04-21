import React from 'react';
import { usePortfolioService } from '../../contexts/PortfolioContext';
import { Section } from '../../components/Section/Section';
import { Server, Activity, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  const profile = usePortfolioService().getProfile();

  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg text-textMuted leading-relaxed">
            {profile.about}
          </p>
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Activity size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-textMain">High Availability</h4>
                <p className="text-sm text-textMuted">Designing fault-tolerant systems</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-textMain">Compliance</h4>
                <p className="text-sm text-textMuted">Meeting OJK reporting standards</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Server size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-textMain">Infrastructure</h4>
                <p className="text-sm text-textMuted">Linux and DB administration</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden bg-surface border border-slate-700/50 relative group">
            {/* Abstract SRE Representation instead of generic photo placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center p-8">
               <div className="w-full h-full border border-slate-700/50 rounded-xl bg-slate-900/50 relative overflow-hidden flex flex-col font-mono text-xs text-primary/70 p-4">
                 <div className="flex justify-between items-center border-b border-slate-700/50 pb-2 mb-2">
                   <span>root@production-srv:~#</span>
                   <span className="flex space-x-1"><span className="w-2 h-2 rounded-full bg-red-500"></span><span className="w-2 h-2 rounded-full bg-yellow-500"></span><span className="w-2 h-2 rounded-full bg-green-500"></span></span>
                 </div>
                 <div className="flex-1 overflow-hidden opacity-50">
                    <p>{'>'} tail -f /var/log/syslog</p>
                    <p className="text-green-400">Apr 21 12:00:01 kernel: [   0.000000] system stable</p>
                    <p className="text-green-400">Apr 21 12:05:32 app: [INFO] 5000 tx/s processed</p>
                    <p>{'>'} uptime</p>
                    <p className="text-green-400">up 999 days, 23:59, load average: 0.01, 0.05, 0.00</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
