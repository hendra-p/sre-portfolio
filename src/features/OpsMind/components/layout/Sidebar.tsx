import React from 'react';
import { 
  LayoutDashboard, 
  Server, 
  Activity, 
  FileText, 
  AlertTriangle, 
  BrainCircuit, 
  LineChart, 
  MessageSquare,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { icon: LayoutDashboard, label: 'Overview', id: 'overview' },
  { icon: Server, label: 'Infrastructure', id: 'infra' },
  { icon: Activity, label: 'Applications', id: 'apps' },
  { icon: ShieldCheck, label: 'Nodes', id: 'nodes' },
  { icon: FileText, label: 'Logs', id: 'logs' },
  { icon: AlertTriangle, label: 'Alerts', id: 'alerts' },
  { icon: BrainCircuit, label: 'AI Insights', id: 'ai' },
  { icon: LineChart, label: 'Predictive', id: 'predictive' },
  { icon: MessageSquare, label: 'ChatOps', id: 'chatops' },
];

import { useStore } from '../../store/useStore';

export const Sidebar: React.FC = () => {
  const { activePage, setActivePage, sidebarOpen, setSidebarOpen } = useStore();

  return (
    <>
      {/* Mobile Backdrop */}
      {sidebarOpen && (
        <div 
          className="absolute inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className={cn(
        "w-64 h-full bg-card border-r border-white/5 flex flex-col p-4 z-50",
        "absolute inset-y-0 left-0 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex items-center justify-between mb-8 px-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <BrainCircuit className="text-background w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight">OpsMind <span className="text-primary">AI</span></span>
          </div>
          {/* Close button for mobile */}
          <button 
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-white/60 hover:text-white p-1"
          >
            ✕
          </button>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActivePage(item.id);
                setSidebarOpen(false);
              }}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group",
                activePage === item.id 
                  ? "bg-primary/10 text-primary" 
                  : "text-white/60 hover:bg-white/5 hover:text-white"
              )}
            >
              <item.icon className={cn("w-5 h-5", activePage === item.id ? "text-primary" : "text-white/60")} />
              <span className="font-medium flex-1 text-left">{item.label}</span>
              {activePage === item.id && <ChevronRight className="w-4 h-4" />}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};
