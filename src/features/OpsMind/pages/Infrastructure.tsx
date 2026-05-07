import React from 'react';
import { 
  Server, 
  Cpu, 
  Database, 
  ShieldCheck, 
  AlertTriangle, 
  ExternalLink,
  ChevronRight,
  MoreVertical
} from 'lucide-react';

const mockNodes = [
  { id: 1, name: 'payment-api-prod', env: 'production', status: 'healthy', cpu: 42, mem: 65, latency: '12ms' },
  { id: 2, name: 'auth-service-prod', env: 'production', status: 'warning', cpu: 78, mem: 82, latency: '145ms' },
  { id: 3, name: 'reporting-engine-prod', env: 'production', status: 'healthy', cpu: 12, mem: 45, latency: '24ms' },
  { id: 4, name: 'postgres-primary', env: 'production', status: 'healthy', cpu: 24, mem: 72, latency: '4ms' },
  { id: 5, name: 'kafka-stream-prod', env: 'production', status: 'critical', cpu: 95, mem: 88, latency: '520ms' },
  { id: 6, name: 'etl-engine-prod', env: 'staging', status: 'healthy', cpu: 5, mem: 20, latency: '15ms' },
];

export const Infrastructure: React.FC = () => {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Infrastructure</h1>
          <p className="text-white/40 mt-1">Manage and monitor all nodes in your enterprise network.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-bold hover:bg-white/10 transition-all">Filter</button>
          <button className="px-4 py-2 bg-primary text-background rounded-lg text-sm font-bold hover:bg-primary/90 transition-all">+ Add Node</button>
        </div>
      </div>

      <div className="glass-panel overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-white/5 text-white/40 text-xs uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4 font-bold">Node Name</th>
              <th className="px-6 py-4 font-bold">Status</th>
              <th className="px-6 py-4 font-bold">CPU</th>
              <th className="px-6 py-4 font-bold">Memory</th>
              <th className="px-6 py-4 font-bold">Latency</th>
              <th className="px-6 py-4 font-bold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {mockNodes.map((node) => (
              <tr key={node.id} className="group hover:bg-white/[0.02] transition-colors cursor-pointer">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${node.status === 'healthy' ? 'bg-success/10 text-success' : node.status === 'warning' ? 'bg-accent/10 text-accent' : 'bg-destructive/10 text-destructive'}`}>
                      <Server className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white/90">{node.name}</div>
                      <div className="text-[10px] text-white/30 font-bold uppercase">{node.env}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${node.status === 'healthy' ? 'bg-success' : node.status === 'warning' ? 'bg-accent' : 'bg-destructive'}`} />
                    <span className={`text-xs font-bold capitalize ${node.status === 'healthy' ? 'text-success' : node.status === 'warning' ? 'text-accent' : 'text-destructive'}`}>
                      {node.status}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="w-32 flex flex-col gap-1">
                    <div className="flex justify-between text-[10px] font-bold text-white/40">
                      <span>{node.cpu}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${node.cpu > 80 ? 'bg-destructive' : node.cpu > 50 ? 'bg-accent' : 'bg-primary'}`} 
                        style={{ width: `${node.cpu}%` }} 
                      />
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="w-32 flex flex-col gap-1">
                    <div className="flex justify-between text-[10px] font-bold text-white/40">
                      <span>{node.mem}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${node.mem > 80 ? 'bg-destructive' : node.mem > 50 ? 'bg-accent' : 'bg-secondary'}`} 
                        style={{ width: `${node.mem}%` }} 
                      />
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-sm font-bold ${parseInt(node.latency) > 200 ? 'text-destructive' : parseInt(node.latency) > 100 ? 'text-accent' : 'text-white/60'}`}>
                    {node.latency}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 text-white/20 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
