import React from 'react';
import { Bell, Search, User } from 'lucide-react';

export const Header: React.FC = () => {
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
        <button className="relative text-white/60 hover:text-white transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-destructive rounded-full text-[10px] flex items-center justify-center text-white font-bold">3</span>
        </button>
        <div className="h-8 w-px bg-white/10" />
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-white/60">System Health: <span className="text-success">98.4%</span></span>
          <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
        </div>
      </div>
    </header>
  );
};
