import React from 'react';
import { 
  TrendingUp, 
  AlertTriangle, 
  Zap, 
  BrainCircuit,
  ArrowRight,
  ShieldCheck,
  Activity
} from 'lucide-react';
import { motion } from 'framer-motion';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const mockPredictionData = [
  { time: '14:00', actual: 45, predicted: 45 },
  { time: '15:00', actual: 48, predicted: 49 },
  { time: '16:00', actual: 52, predicted: 51 },
  { time: '17:00', actual: 60, predicted: 58 },
  { time: '18:00', actual: 65, predicted: 64 },
  { time: '19:00', actual: null, predicted: 78 },
  { time: '20:00', actual: null, predicted: 92 },
  { time: '21:00', actual: null, predicted: 85 },
];

export const Predictive: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in zoom-in-95 duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Predictive Analytics</h1>
          <p className="text-white/40 mt-1">AI-powered forecasting for resource utilization and potential failures.</p>
        </div>
        <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-xl flex items-center gap-2">
          <BrainCircuit className="w-5 h-5 text-primary" />
          <span className="text-sm font-bold text-primary">AI Engine v4.2 Active</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-panel p-6">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            CPU Load Forecast (Next 3 Hours)
          </h3>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockPredictionData}>
                <defs>
                  <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                <XAxis dataKey="time" stroke="#ffffff20" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#ffffff20" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                   contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #ffffff10', borderRadius: '8px' }}
                />
                <Area type="monotone" dataKey="predicted" stroke="#0ea5e9" strokeDasharray="5 5" fill="url(#colorPredicted)" name="Forecasted Load" />
                <Line type="monotone" dataKey="actual" stroke="#8b5cf6" strokeWidth={3} dot={{ fill: '#8b5cf6' }} name="Actual Load" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-panel p-6 border-l-4 border-l-destructive bg-destructive/5">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-destructive" />
              <h4 className="font-bold">High Risk Alert</h4>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              <span className="text-white font-bold">payment-api-prod</span> is predicted to exceed 90% CPU capacity at <span className="text-white font-bold">20:00</span>. 
            </p>
            <div className="mt-4 p-3 bg-white/5 rounded-lg text-xs">
               <span className="text-white/40 font-bold uppercase block mb-1">Recommended Action</span>
               Auto-scale to 12 instances.
            </div>
            <button className="w-full mt-4 py-2 bg-destructive text-white font-bold rounded-lg text-sm hover:bg-destructive/90 transition-all">
               Execute Mitigation
            </button>
          </div>

          <div className="glass-panel p-6 border-l-4 border-l-success bg-success/5">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-6 h-6 text-success" />
              <h4 className="font-bold">System Stability</h4>
            </div>
            <p className="text-sm text-white/70">
              Other 127 nodes are expected to remain within normal operational bounds for the next 24 hours.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {[
           { label: 'Forecast Accuracy', value: '94.2%', icon: Zap, color: 'text-primary' },
           { label: 'Risk Score (Avg)', value: '0.12', icon: Activity, color: 'text-success' },
           { label: 'Pre-emptive Fixes', value: '12', icon: ShieldCheck, color: 'text-secondary' },
           { label: 'Anomalies Filtered', value: '1.4k', icon: BrainCircuit, color: 'text-accent' },
         ].map((stat, i) => (
           <div key={i} className="glass-panel p-5 flex items-center gap-4">
              <div className={`p-2 rounded-lg bg-white/5 ${stat.color}`}>
                 <stat.icon className="w-5 h-5" />
              </div>
              <div>
                 <div className="text-[10px] text-white/30 uppercase font-bold tracking-widest">{stat.label}</div>
                 <div className="text-xl font-bold">{stat.value}</div>
              </div>
           </div>
         ))}
      </div>
    </div>
  );
};
