import { 
  Activity, 
  Layers, 
  Globe, 
  Database, 
  Cpu, 
  ArrowUpRight,
  AlertCircle,
  X,
  Server,
  Terminal,
  Clock
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const mockApps = [
  { id: 1, name: 'Checkout Service', instances: 12, health: 98, status: 'healthy', tech: 'Node.js / Express', description: 'Handles all customer transactions and basket management.' },
  { id: 2, name: 'Payment Gateway', instances: 4, health: 100, status: 'healthy', tech: 'Go / gRPC', description: 'PCI-compliant bridge to external payment processors.' },
  { id: 3, name: 'User Authentication', instances: 8, health: 85, status: 'warning', tech: 'Python / FastAPI', description: 'OAuth2 and JWT based identity management service.' },
  { id: 4, name: 'Product Catalog', instances: 24, health: 99, status: 'healthy', tech: 'Java / Spring Boot', description: 'Inventory and product metadata retrieval service.' },
  { id: 5, name: 'Recommendation Engine', instances: 16, health: 42, status: 'critical', tech: 'Python / PyTorch', description: 'AI-driven product suggestion engine using collaborative filtering.' },
  { id: 6, name: 'Search API', instances: 6, health: 94, status: 'healthy', tech: 'Go / Elasticsearch', description: 'High-performance faceted search engine.' },
];

export const Applications: React.FC = () => {
  const [selectedApp, setSelectedApp] = React.useState<typeof mockApps[0] | null>(null);

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
            onClick={() => setSelectedApp(app)}
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

      <AnimatePresence>
        {selectedApp && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedApp(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl bg-card border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
            >
               <div className="p-8 space-y-8">
                  <div className="flex justify-between items-start">
                     <div className="flex gap-4">
                        <div className="p-4 bg-primary/10 rounded-2xl">
                           <Globe className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                           <h2 className="text-2xl font-bold">{selectedApp.name}</h2>
                           <p className="text-white/40">{selectedApp.tech}</p>
                        </div>
                     </div>
                     <button 
                        onClick={() => setSelectedApp(null)}
                        className="p-2 hover:bg-white/5 rounded-full transition-colors"
                     >
                        <X className="w-6 h-6 text-white/20" />
                     </button>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                     <div className="glass-panel p-4 space-y-1">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-white/30 uppercase tracking-widest">
                           <Server className="w-3 h-3" /> Instances
                        </div>
                        <div className="text-xl font-bold">{selectedApp.instances}</div>
                     </div>
                     <div className="glass-panel p-4 space-y-1">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-white/30 uppercase tracking-widest">
                           <Activity className="w-3 h-3" /> Health Score
                        </div>
                        <div className="text-xl font-bold text-success">{selectedApp.health}%</div>
                     </div>
                     <div className="glass-panel p-4 space-y-1">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-white/30 uppercase tracking-widest">
                           <Clock className="w-3 h-3" /> Uptime
                        </div>
                        <div className="text-xl font-bold">99.98%</div>
                     </div>
                  </div>

                  <div className="space-y-4">
                     <h3 className="font-bold flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-primary" /> Recent Logs
                     </h3>
                     <div className="bg-black/40 rounded-xl p-4 font-mono text-xs space-y-2 border border-white/5">
                        <div className="text-success">[INFO] <span className="text-white/40">2026-05-08 02:44:01</span> - Request processed successfully in 12ms</div>
                        <div className="text-success">[INFO] <span className="text-white/40">2026-05-08 02:44:05</span> - Health check passed. All nodes optimal.</div>
                        <div className="text-primary">[DEBUG] <span className="text-white/40">2026-05-08 02:44:08</span> - Cache hit ratio: 89.2%</div>
                        <div className="text-white/60">[METRIC] <span className="text-white/40">2026-05-08 02:44:12</span> - Latency: {selectedApp.id * 2 + 5}ms</div>
                     </div>
                  </div>

                  <div className="flex gap-4">
                     <button className="flex-1 py-3 bg-primary text-background font-bold rounded-xl hover:bg-primary/90 transition-all">Open Service Dashboard</button>
                     <button className="flex-1 py-3 bg-white/5 border border-white/10 font-bold rounded-xl hover:bg-white/10 transition-all">View Trace Map</button>
                  </div>
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
