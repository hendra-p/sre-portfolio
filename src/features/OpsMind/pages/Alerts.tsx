import React from 'react';
import { 
  AlertTriangle, 
  Bell, 
  ShieldAlert, 
  Clock, 
  CheckCircle2,
  Filter
} from 'lucide-react';

const mockAlerts = [
  { id: 1, title: 'High CPU Usage', node: 'payment-api-prod', severity: 'critical', time: '2 mins ago', status: 'firing' },
  { id: 2, title: 'Memory Leak Warning', node: 'auth-service-prod', severity: 'warning', time: '14 mins ago', status: 'acknowledged' },
  { id: 3, title: 'Network Latency Spike', node: 'kafka-stream-prod', severity: 'critical', time: '45 mins ago', status: 'firing' },
  { id: 4, title: 'Disk Space Low (<10%)', node: 'postgres-primary', severity: 'warning', time: '1 hour ago', status: 'resolved' },
  { id: 5, title: 'Service Instance Down', node: 'reporting-engine-prod', severity: 'critical', time: '2 hours ago', status: 'firing' },
];

export const Alerts: React.FC = () => {
  return (
    <div className="space-y-8 animate-in zoom-in-95 duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Active Alerts</h1>
          <p className="text-white/40 mt-1">Manage and respond to system anomalies and critical events.</p>
        </div>
        <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-bold hover:bg-white/10 transition-all flex items-center gap-2">
          <Filter className="w-4 h-4" />
          Filter Alerts
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {mockAlerts.map((alert) => (
          <div 
            key={alert.id}
            className={`glass-panel p-5 flex items-center gap-6 border-l-4 transition-all hover:bg-white/[0.02] ${
              alert.severity === 'critical' ? 'border-l-destructive' : 'border-l-accent'
            }`}
          >
            <div className={`p-3 rounded-xl ${alert.severity === 'critical' ? 'bg-destructive/10 text-destructive' : 'bg-accent/10 text-accent'}`}>
              <ShieldAlert className="w-6 h-6" />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <h3 className="font-bold text-lg">{alert.title}</h3>
                <span className={`px-2 py-0.5 rounded-[4px] text-[10px] font-bold uppercase tracking-wider ${
                  alert.status === 'firing' ? 'bg-destructive text-white animate-pulse' : 
                  alert.status === 'acknowledged' ? 'bg-accent/20 text-accent' : 
                  'bg-success/20 text-success'
                }`}>
                  {alert.status}
                </span>
              </div>
              <div className="flex items-center gap-4 mt-1 text-sm text-white/40 font-medium">
                <span className="flex items-center gap-1.5"><Bell className="w-3.5 h-3.5" /> {alert.node}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {alert.time}</span>
              </div>
            </div>

            <div className="flex gap-2">
              {alert.status === 'firing' && (
                <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-bold hover:bg-white/10 transition-all">Acknowledge</button>
              )}
              <button className="px-4 py-2 bg-primary/10 border border-primary/20 text-primary rounded-lg text-xs font-bold hover:bg-primary/20 transition-all flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Mark Resolved
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
