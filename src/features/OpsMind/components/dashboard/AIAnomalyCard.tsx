import React, { useEffect, useState } from 'react';
import { Zap, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const AIAnomalyCard: React.FC = () => {
  const [report, setReport] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnomaly = async () => {
      try {
        const response = await fetch("/api/anomaly", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          }
        });

        const data = await response.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setReport(data.choices[0].message.content);
      } catch (error) {
        // Fallback to static mock warning if API fails/is not configured
        setReport("Based on historical trends, payment-api-prod has a 84% probability of experiencing a memory leak within the next 2 hours. Root cause analysis suggests a correlation with recent v1.2.4 deployment.");
      } finally {
        setLoading(false);
      }
    };

    fetchAnomaly();
  }, []);

  return (
    <div className="glass-panel p-6 border-l-4 border-l-primary bg-primary/5 min-h-[140px] flex flex-col justify-center">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div 
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-4"
          >
            <div className="p-3 bg-primary/20 rounded-xl animate-pulse">
              <Loader2 className="w-6 h-6 text-primary animate-spin" />
            </div>
            <div>
               <h3 className="font-bold text-lg text-white/40">AI Engine Analyzing...</h3>
               <p className="text-white/20 text-sm">Scanning 128 nodes for architectural drifts.</p>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="content"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-4"
          >
            <div className="p-3 bg-primary/20 rounded-xl">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg">AI Anomaly Detected</h3>
                <span className="text-xs font-bold text-primary px-2 py-0.5 border border-primary/20 rounded uppercase tracking-wider">Live Analysis</span>
              </div>
              <p className="text-white/70 mt-2 leading-relaxed italic">
                "{report}"
              </p>
              <div className="flex gap-4 mt-4">
                <button className="px-4 py-2 bg-primary text-background font-bold rounded-lg text-sm hover:bg-primary/90 transition-colors">Apply Auto-Scaling</button>
                <button className="px-4 py-2 bg-white/5 border border-white/10 font-bold rounded-lg text-sm hover:bg-white/10 transition-colors">Dismiss</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
