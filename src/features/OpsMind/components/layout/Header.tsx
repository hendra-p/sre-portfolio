import React from 'react';
import { Bell, Search, User } from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [showNotifications, setShowNotifications] = React.useState(false);

  const notifications = [
    { id: 1, text: 'Critical: CPU spike on payment-api', time: '2m ago', type: 'error' },
    { id: 2, text: 'New prediction: Memory leak likely', time: '14m ago', type: 'warn' },
    { id: 3, text: 'System backup completed', time: '1h ago', type: 'info' },
  ];

  return (
    <header className="h-16 border-b border-white/5 flex items-center justify-between px-8 bg-card/30 backdrop-blur-sm sticky top-0 z-50">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
          <input 
            type="text" 
            placeholder="Search nodes, metrics, or incidents..."
            className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-primary/50 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative text-white/60 hover:text-white transition-colors"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-destructive rounded-full text-[10px] flex items-center justify-center text-white font-bold">3</span>
          </button>

          <AnimatePresence>
            {showNotifications && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute right-0 mt-4 w-80 glass-panel shadow-2xl p-4 z-[100] border-white/10"
              >
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
                   <h4 className="font-bold text-sm">System Notifications</h4>
                   <button className="text-[10px] text-primary font-bold uppercase hover:underline">Clear All</button>
                </div>
                <div className="space-y-3">
                  {notifications.map(n => (
                    <div key={n.id} className="flex gap-3 hover:bg-white/5 p-2 rounded-lg transition-colors cursor-pointer group">
                      <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                        n.type === 'error' ? 'bg-destructive' : n.type === 'warn' ? 'bg-accent' : 'bg-primary'
                      }`} />
                      <div>
                        <p className="text-xs text-white/80 group-hover:text-white transition-colors">{n.text}</p>
                        <span className="text-[10px] text-white/30 font-bold">{n.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="h-8 w-px bg-white/10" />
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-white/60">System Health: <span className="text-success">98.4%</span></span>
          <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
        </div>
      </div>
    </header>
  );
};
