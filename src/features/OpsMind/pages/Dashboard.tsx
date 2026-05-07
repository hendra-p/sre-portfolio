import React from 'react';
import { 
  Activity, 
  Server, 
  AlertTriangle, 
  ShieldCheck, 
  Clock, 
  Cpu, 
  Zap,
  TrendingUp
} from 'lucide-react';
import { KPICard } from '../components/ui/KPICard';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';

const mockMetricData = [
  { time: '00:00', cpu: 45, mem: 60, net: 240 },
  { time: '01:00', cpu: 52, mem: 62, net: 300 },
  { time: '02:00', cpu: 48, mem: 61, net: 280 },
  { time: '03:00', cpu: 70, mem: 65, net: 450 },
  { time: '04:00', cpu: 65, mem: 64, net: 400 },
  { time: '05:00', cpu: 58, mem: 63, net: 350 },
  { time: '06:00', cpu: 62, mem: 65, net: 380 },
];

const alertSeverityData = [
  { name: 'Critical', value: 4, color: '#ef4444' },
  { name: 'High', value: 8, color: '#f97316' },
  { name: 'Medium', value: 12, color: '#8b5cf6' },
  { name: 'Low', value: 24, color: '#0ea5e9' },
];

import { AIAnomalyCard } from '../components/dashboard/AIAnomalyCard';

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* ... previous content ... */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">System Overview</h1>
        <p className="text-white/40 mt-1">Real-time infrastructure intelligence and AI-powered insights.</p>
      </div>

      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard 
          label="Total Nodes" 
          value={128} 
          icon={Server} 
          trend={{ value: 12, isUp: true }} 
          color="primary"
        />
        <KPICard 
          label="Healthy Services" 
          value="94.2%" 
          icon={ShieldCheck} 
          trend={{ value: 2.4, isUp: true }} 
          color="success"
        />
        <KPICard 
          label="Active Alerts" 
          value={48} 
          icon={AlertTriangle} 
          trend={{ value: 5, isUp: false }} 
          color="accent"
        />
        <KPICard 
          label="MTTR (Avg)" 
          value="14m" 
          icon={Clock} 
          trend={{ value: 18, isUp: true }} 
          color="secondary"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-panel p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <Activity className="w-5 h-5 text-primary" />
              Global Resource Utilization
            </h3>
            <div className="flex gap-2">
               <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-xs text-primary font-medium">
                  CPU
               </div>
               <div className="flex items-center gap-2 px-3 py-1 bg-secondary/10 rounded-full text-xs text-secondary font-medium">
                  Memory
               </div>
            </div>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockMetricData}>
                <defs>
                  <linearGradient id="colorCpu" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                <XAxis dataKey="time" stroke="#ffffff20" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#ffffff20" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #ffffff10', borderRadius: '8px' }}
                  itemStyle={{ fontSize: '12px' }}
                />
                <Area type="monotone" dataKey="cpu" stroke="#0ea5e9" fillOpacity={1} fill="url(#colorCpu)" strokeWidth={2} />
                <Area type="monotone" dataKey="mem" stroke="#8b5cf6" fillOpacity={0} strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-panel p-6">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-accent" />
            Alerts by Severity
          </h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={alertSeverityData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" horizontal={false} />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" stroke="#ffffff60" fontSize={12} width={70} />
                <Tooltip 
                   cursor={{fill: '#ffffff05'}}
                   contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #ffffff10', borderRadius: '8px' }}
                />
                <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                  {alertSeverityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* AI Insight Section */}
      <AIAnomalyCard />
    </div>
  );
};
