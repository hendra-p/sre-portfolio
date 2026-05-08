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
  const { activePage, setActivePage } = useStore();

  return (
    <div className="w-64 h-screen bg-card border-r border-white/5 flex flex-col p-4">
      <div className="flex items-center gap-3 mb-8 px-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <BrainCircuit className="text-background w-5 h-5" />
        </div>
        <span className="text-xl font-bold tracking-tight">OpsMind <span className="text-primary">AI</span></span>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActivePage(item.id)}
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

      <div className="mt-auto p-4 bg-white/5 rounded-xl border border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-sm font-bold">
            HP
          </div>
          <div>
            <div className="text-sm font-medium">Platform Admin</div>
            <div className="text-xs text-white/40">SRE Specialist</div>
          </div>
        </div>
      </div>
    </div>
  );
};
