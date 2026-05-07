import React from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  Terminal,
  Activity
} from 'lucide-react';

const mockLogs = [
  { id: 1, time: '2026-05-07 21:45:12', level: 'INFO', node: 'payment-api-prod', service: 'checkout', msg: 'Transaction completed successfully: TXN_94210' },
  { id: 2, time: '2026-05-07 21:45:10', level: 'WARN', node: 'auth-service-prod', service: 'auth', msg: 'Late response from LDAP server: 450ms' },
  { id: 3, time: '2026-05-07 21:45:08', level: 'ERROR', node: 'kafka-stream-prod', service: 'streamer', msg: 'Failed to acknowledge message offset: 19420. Retrying...' },
  { id: 4, time: '2026-05-07 21:45:05', level: 'DEBUG', node: 'payment-api-prod', service: 'checkout', msg: 'Cache hit for user_session: USER_882' },
  { id: 5, time: '2026-05-07 21:45:02', level: 'INFO', node: 'postgres-primary', service: 'db', msg: 'Vacuuming finished on table: orders' },
  { id: 6, time: '2026-05-07 21:45:00', level: 'FATAL', node: 'reporting-engine-prod', service: 'scheduler', msg: 'Out of memory: Heap space exhausted' },
  { id: 7, time: '2026-05-07 21:44:58', level: 'INFO', node: 'auth-service-prod', service: 'auth', msg: 'User login successful: hendra_admin' },
];

export const Logs: React.FC = () => {
  return (
    <div className="space-y-6 animate-in slide-in-from-right-4 duration-500 flex flex-col h-full">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Log Explorer</h1>
          <p className="text-white/40 mt-1">Unified log stream for all enterprise services.</p>
        </div>
        <div className="flex gap-2">
          <button className="p-2 bg-white/5 border border-white/10 rounded-lg text-white/60 hover:text-white transition-colors">
            <Download className="w-5 h-5" />
          </button>
          <button className="px-4 py-2 bg-primary text-background rounded-lg text-sm font-bold hover:bg-primary/90 transition-all flex items-center gap-2">
             <Terminal className="w-4 h-4" />
             Live Tail
          </button>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
          <input 
            type="text" 
            placeholder="Search logs by keyword, trace_id, or node..."
            className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-primary/50"
          />
        </div>
        <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-white/10 transition-colors">
          <Filter className="w-4 h-4" />
          Filters
        </button>
      </div>

      <div className="flex-1 glass-panel overflow-hidden flex flex-col font-mono text-xs">
        <div className="bg-white/5 px-6 py-3 border-b border-white/5 flex gap-8 text-white/40 font-bold uppercase tracking-wider">
          <div className="w-40">Timestamp</div>
          <div className="w-20">Level</div>
          <div className="w-40">Node</div>
          <div className="flex-1">Message</div>
        </div>
        <div className="flex-1 overflow-y-auto divide-y divide-white/5 custom-scrollbar">
          {mockLogs.map((log) => (
            <div key={log.id} className="px-6 py-3 flex gap-8 hover:bg-white/[0.02] transition-colors group">
              <div className="w-40 text-white/30">{log.time}</div>
              <div className="w-20">
                <span className={`px-1.5 py-0.5 rounded font-bold ${
                  log.level === 'INFO' ? 'text-success bg-success/10' :
                  log.level === 'WARN' ? 'text-accent bg-accent/10' :
                  log.level === 'ERROR' ? 'text-destructive bg-destructive/10' :
                  log.level === 'FATAL' ? 'text-white bg-destructive' :
                  'text-primary bg-primary/10'
                }`}>
                  {log.level}
                </span>
              </div>
              <div className="w-40 text-primary/80">{log.node}</div>
              <div className="flex-1 text-white/70 group-hover:text-white transition-colors">
                <span className="text-white/20 mr-2">[{log.service}]</span>
                {log.msg}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl flex items-center justify-between text-xs text-white/40">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Activity className="w-3 h-3 text-success" />
            Ingestion Rate: 4.2k eps
          </div>
          <div className="flex items-center gap-2">
             Latency: 12ms
          </div>
        </div>
        <div>Showing 7 of 1,240,102 logs</div>
      </div>
    </div>
  );
};
