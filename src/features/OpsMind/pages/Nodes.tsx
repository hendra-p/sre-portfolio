import React from 'react';
import { 
  Server, 
  Zap,
  Activity,
  Search
} from 'lucide-react';
import { motion } from 'framer-motion';

const mockNodes = [
  { id: 1, name: 'payment-api-prod', status: 'healthy', cpu: 42, mem: 65, net: '1.2 GB/s' },
  { id: 2, name: 'auth-service-prod', status: 'warning', cpu: 78, mem: 82, net: '450 MB/s' },
  { id: 3, name: 'reporting-engine-prod', status: 'healthy', cpu: 12, mem: 45, net: '120 MB/s' },
  { id: 4, name: 'postgres-primary', status: 'healthy', cpu: 24, mem: 72, net: '8.4 GB/s' },
  { id: 5, name: 'kafka-stream-prod', status: 'critical', cpu: 95, mem: 88, net: '12 GB/s' },
  { id: 6, name: 'etl-engine-prod', status: 'healthy', cpu: 5, mem: 20, net: '15 MB/s' },
  { id: 7, name: 'redis-cache-prod', status: 'healthy', cpu: 30, mem: 92, net: '2.5 GB/s' },
  { id: 8, name: 'worker-node-01', status: 'healthy', cpu: 55, mem: 40, net: '800 MB/s' },
];

export const Nodes: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Node Fleet</h1>
          <p className="text-white/40 mt-1">Detailed status and real-time telemetry for individual server instances.</p>
        </div>
        <div className="relative w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
          <input 
            type="text" 
            placeholder="Search nodes..."
            className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm focus:border-primary/50"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockNodes.map((node) => (
          <motion.div 
            key={node.id}
            whileHover={{ scale: 1.02 }}
            className="glass-panel p-5 space-y-4 border-t-2 transition-all cursor-pointer"
            style={{ borderTopColor: node.status === 'healthy' ? '#10b981' : node.status === 'warning' ? '#f97316' : '#ef4444' }}
          >
            <div className="flex justify-between items-start">
              <div className="p-2 bg-white/5 rounded-lg">
                <Server className={`w-5 h-5 ${node.status === 'healthy' ? 'text-success' : node.status === 'warning' ? 'text-accent' : 'text-destructive'}`} />
              </div>
              <div className="flex flex-col items-end">
                <span className={`text-[10px] font-bold uppercase ${node.status === 'healthy' ? 'text-success' : node.status === 'warning' ? 'text-accent' : 'text-destructive'}`}>
                  {node.status}
                </span>
                <span className="text-[10px] text-white/20 font-bold uppercase tracking-tighter">ID: NODE-0{node.id}</span>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-sm truncate">{node.name}</h3>
              <p className="text-[10px] text-white/40 font-bold">UPTIME: 14D 2H 12M</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div className="space-y-1">
                  <div className="text-[9px] text-white/30 font-bold uppercase">CPU</div>
                  <div className="text-sm font-bold">{node.cpu}%</div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                     <div className="h-full bg-primary rounded-full" style={{ width: `${node.cpu}%` }} />
                  </div>
               </div>
               <div className="space-y-1">
                  <div className="text-[9px] text-white/30 font-bold uppercase">RAM</div>
                  <div className="text-sm font-bold">{node.mem}%</div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                     <div className="h-full bg-secondary rounded-full" style={{ width: `${node.mem}%` }} />
                  </div>
               </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/5">
               <div className="flex items-center gap-1.5 text-[9px] font-bold text-white/30 uppercase">
                  <Activity className="w-3 h-3" />
                  {node.net}
               </div>
               <Zap className="w-3 h-3 text-white/10" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
