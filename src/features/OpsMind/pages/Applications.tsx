import React from 'react';
import { 
  Activity, 
  Layers, 
  Globe, 
  Database, 
  Cpu, 
  ArrowUpRight,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

const mockApps = [
  { id: 1, name: 'Checkout Service', instances: 12, health: 98, status: 'healthy', tech: 'Node.js / Express' },
  { id: 2, name: 'Payment Gateway', instances: 4, health: 100, status: 'healthy', tech: 'Go / gRPC' },
  { id: 3, name: 'User Authentication', instances: 8, health: 85, status: 'warning', tech: 'Python / FastAPI' },
  { id: 4, name: 'Product Catalog', instances: 24, health: 99, status: 'healthy', tech: 'Java / Spring Boot' },
  { id: 5, name: 'Recommendation Engine', instances: 16, health: 42, status: 'critical', tech: 'Python / PyTorch' },
  { id: 6, name: 'Search API', instances: 6, health: 94, status: 'healthy', tech: 'Go / Elasticsearch' },
];

export const Applications: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Service Map & Applications</h1>
          <p className="text-white/40 mt-1">High-level overview of distributed microservices and their operational health.</p>
        </div>
        <div className="flex gap-3">
          <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-success"></span>
            5 Stable
          </div>
          <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-destructive animate-pulse"></span>
            1 Degraded
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockApps.map((app) => (
          <motion.div 
            key={app.id}
            whileHover={{ y: -5 }}
            className="glass-panel p-6 group hover:glow-border transition-all cursor-pointer"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-primary/50 transition-colors">
                {app.id === 3 ? <Layers className="w-6 h-6 text-accent" /> : app.id === 5 ? <Activity className="w-6 h-6 text-destructive" /> : <Globe className="w-6 h-6 text-primary" />}
              </div>
              <div className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${app.status === 'healthy' ? 'bg-success/10 text-success' : app.status === 'warning' ? 'bg-accent/10 text-accent' : 'bg-destructive/10 text-destructive'}`}>
                {app.status}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold flex items-center gap-2">
                  {app.name}
                  <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-primary transition-colors" />
                </h3>
                <p className="text-xs text-white/40 font-medium">{app.tech}</p>
              </div>

              <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <div className="text-[10px] text-white/30 uppercase font-bold tracking-widest">Instances</div>
                  <div className="text-xl font-bold">{app.instances} <span className="text-xs text-white/20 font-normal">Active</span></div>
                </div>
                <div className="text-right space-y-1">
                  <div className="text-[10px] text-white/30 uppercase font-bold tracking-widest">Health</div>
                  <div className={`text-xl font-bold ${app.health > 90 ? 'text-success' : app.health > 70 ? 'text-accent' : 'text-destructive'}`}>
                    {app.health}%
                  </div>
                </div>
              </div>

              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${app.health}%` }}
                  className={`h-full rounded-full ${app.health > 90 ? 'bg-success' : app.health > 70 ? 'bg-accent' : 'bg-destructive'}`}
                />
              </div>

              <div className="flex items-center gap-4 pt-2 border-t border-white/5">
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-white/40">
                  <Cpu className="w-3 h-3" />
                  {app.id * 3 + 12}% Avg CPU
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-white/40">
                  <Database className="w-3 h-3" />
                  {app.id * 2 + 5}ms Latency
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="glass-panel p-6 border-l-4 border-l-accent bg-accent/5">
        <div className="flex items-center gap-4">
          <AlertCircle className="w-6 h-6 text-accent" />
          <div>
            <h4 className="font-bold">Anomalous behavior in 'Recommendation Engine'</h4>
            <p className="text-sm text-white/60">High error rate detected (42% health). Automated roll-back suggested for deployment <span className="text-white font-mono">v2.1.0-alpha</span>.</p>
          </div>
          <button className="ml-auto px-4 py-2 bg-accent text-background font-bold rounded-lg text-xs hover:bg-accent/90 transition-all">Investigate</button>
        </div>
      </div>
    </div>
  );
};
