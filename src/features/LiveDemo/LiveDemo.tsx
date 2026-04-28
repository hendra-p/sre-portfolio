import { Cpu, Server, Layout, Database, ArrowRight, Activity } from 'lucide-react';
import InfraMonitorDashboard from './InfraMonitorDashboard';

export default function LiveDemo() {
  return (
    <section id="live-demo" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
            <Activity className="w-3 h-3" />
            Live Project Showcase
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-textMain mb-6 leading-tight">
            Infrastructure <span className="text-primary">Observability</span> System
          </h2>
          <p className="text-textMuted text-lg leading-relaxed">
            A real-time monitoring agent-based architecture designed for high-availability systems. 
            Below is a live instance of the dashboard, showing metrics collected by the Python agent.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-16">
          <ArchitectureCard 
            icon={<Cpu className="w-5 h-5" />} 
            title="Monitoring Agent" 
            desc="Python script using psutil to collect system metrics every 5s."
            tech="Python, psutil"
          />
          <ArchitectureCard 
            icon={<Server className="w-5 h-5" />} 
            title="Backend API" 
            desc="FastAPI service for data processing, alerting, and persistence."
            tech="FastAPI, SQLAlchemy"
          />
          <ArchitectureCard 
            icon={<Database className="w-5 h-5" />} 
            title="Data Storage" 
            desc="PostgreSQL for long-term history with 14-day retention policy."
            tech="PostgreSQL, Docker"
          />
          <ArchitectureCard 
            icon={<Layout className="w-5 h-5" />} 
            title="Dashboard UI" 
            desc="React application with Recharts for real-time visualization."
            tech="React, Recharts"
          />
        </div>

        {/* Live Dashboard Interface */}
        <div className="bg-background/40 backdrop-blur-sm p-2 md:p-6 rounded-[2.5rem] border border-white/5 shadow-2xl overflow-hidden">
          <div className="bg-background rounded-[2rem] border border-white/5 shadow-inner p-6 md:p-8">
             <InfraMonitorDashboard />
          </div>
        </div>
        
        {/* Footer Actions */}
        <div className="mt-12 flex flex-wrap items-center gap-6 justify-center lg:justify-start">
          <a 
            href="https://github.com/hendra-p/infra-monitor" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold text-textMain hover:text-primary transition-colors group"
          >
            Explore Source Code
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="h-4 w-px bg-white/10 hidden sm:block"></div>
          <div className="text-[11px] text-textMuted flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              99.9% Uptime Goal
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              Sub-second Latency
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArchitectureCard({ icon, title, desc, tech }: any) {
  return (
    <div className="p-6 rounded-2xl bg-surface border border-white/5 relative group hover:border-primary/30 transition-all duration-300">
      <div className="text-primary mb-4 bg-background w-10 h-10 flex items-center justify-center rounded-xl border border-white/5 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h4 className="text-sm font-black text-textMain mb-2 uppercase tracking-wider">{title}</h4>
      <p className="text-[11px] text-textMuted leading-relaxed mb-4">{desc}</p>
      <div className="text-[10px] font-mono text-primary/80">{tech}</div>
    </div>
  );
}
