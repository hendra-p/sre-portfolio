import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface KPICardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isUp: boolean;
  };
  color?: 'primary' | 'secondary' | 'accent' | 'destructive' | 'success';
}

export const KPICard: React.FC<KPICardProps> = ({ 
  label, 
  value, 
  icon: Icon, 
  trend,
  color = 'primary'
}) => {
  const colorMap = {
    primary: 'text-primary bg-primary/10 border-primary/20',
    secondary: 'text-secondary bg-secondary/10 border-secondary/20',
    accent: 'text-accent bg-accent/10 border-accent/20',
    destructive: 'text-destructive bg-destructive/10 border-destructive/20',
    success: 'text-success bg-success/10 border-success/20',
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-panel p-6 flex flex-col gap-4 relative overflow-hidden group hover:glow-border transition-all"
    >
      <div className="flex justify-between items-start">
        <div className={`p-3 rounded-xl border ${colorMap[color]}`}>
          <Icon className="w-6 h-6" />
        </div>
        {trend && (
          <div className={`text-xs font-medium flex items-center gap-1 ${trend.isUp ? 'text-success' : 'text-destructive'}`}>
            {trend.isUp ? '↑' : '↓'} {Math.abs(trend.value)}%
          </div>
        )}
      </div>
      
      <div>
        <div className="text-white/40 text-sm font-medium">{label}</div>
        <div className="text-3xl font-bold mt-1 tracking-tight">{value}</div>
      </div>

      <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
        <Icon className="w-24 h-24" />
      </div>
    </motion.div>
  );
};
