import React from 'react';
import { 
  BrainCircuit, 
  Zap, 
  Search,
  MessageSquare,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const insights = [
  { id: 1, type: 'Performance', title: 'Query Latency Correlation', detail: 'Increased latency in Checkout API correlated with 15% increase in database lock wait times.', confidence: 92 },
  { id: 2, type: 'Security', title: 'Anomalous Login Pattern', detail: 'Detected 140 failed login attempts from unknown IP ranges (Region: Eastern Europe). Brute force suspected.', confidence: 88 },
  { id: 3, type: 'Cost', title: 'Underutilized Resources', detail: 'Staging cluster is currently running at 2% utilization. Suggested downscaling to save $450/month.', confidence: 99 },
];

export const AIInsights: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AI Insights & RCA</h1>
          <p className="text-white/40 mt-1">Automated root cause analysis and infrastructure intelligence.</p>
        </div>
        <button className="px-6 py-3 bg-primary text-background font-bold rounded-xl text-sm hover:glow-primary transition-all flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          Generate New Report
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {insights.map((insight) => (
          <motion.div 
            key={insight.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-panel p-6 border-l-4 border-l-primary hover:bg-white/[0.02] transition-all group cursor-pointer"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                   <span className="text-[10px] font-bold text-primary uppercase tracking-widest px-2 py-0.5 bg-primary/10 rounded">
                     {insight.type}
                   </span>
                   <span className="text-xs text-white/20 font-medium">Confidence: {insight.confidence}%</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{insight.title}</h3>
                <p className="text-white/60 leading-relaxed max-w-3xl">{insight.detail}</p>
              </div>
              <div className="p-2 bg-white/5 rounded-full group-hover:bg-primary group-hover:text-background transition-all">
                <ChevronRight className="w-5 h-5" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="glass-panel p-8 flex flex-col items-center justify-center text-center gap-4 border-dashed border-2 border-white/10">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
          <BrainCircuit className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold">Waiting for new anomalies...</h3>
          <p className="text-white/40 mt-1">Our AI engine is continuously monitoring your infrastructure logs and metrics.</p>
        </div>
      </div>
    </div>
  );
};
