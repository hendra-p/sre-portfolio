import { useEffect, useState, useCallback } from 'react';
import { AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { HardDrive, Cpu, AlertTriangle, Info, MemoryStick, Clock } from 'lucide-react';

// =========================================================================
// Models
// =========================================================================
interface Metric {
  timestamp: string;
  cpu_percent: number;
  memory_percent: number;
  memory_used_gb: number;
  memory_total_gb: number;
  disk_percent: number;
  disk_used_gb: number;
  disk_total_gb: number;
}

interface Insight {
  timestamp: string;
  severity: string;
  component: string;
  message: string;
  root_cause: string | null;
}

// =========================================================================
// Time Range Options
// =========================================================================
const TIME_RANGES = [
  { label: '1H', hours: 1 },
  { label: '6H', hours: 6 },
  { label: '24H', hours: 24 },
  { label: '3D', hours: 72 },
  { label: '7D', hours: 168 },
];

// =========================================================================
// API Service
// =========================================================================
const API_BASE = 'http://127.0.0.1:8000/api/v1';

const apiService = {
  async fetchMetrics(hours?: number): Promise<Metric[]> {
    const params = new URLSearchParams();
    if (hours) params.set('hours', hours.toString());
    const res = await fetch(`${API_BASE}/metrics?${params.toString()}&_t=${Date.now()}`);
    if (!res.ok) throw new Error('Failed to fetch metrics');
    return res.json();
  },
  async fetchInsights(): Promise<Insight[]> {
    const res = await fetch(`${API_BASE}/insights?limit=10&_t=${Date.now()}`);
    if (!res.ok) throw new Error('Failed to fetch insights');
    return res.json();
  }
};

// =========================================================================
// Mock Data Generation (Fallback)
// =========================================================================
function generateMockMetrics(count: number): Metric[] {
  const now = Date.now();
  return Array.from({ length: count }, (_, i) => ({
    timestamp: new Date(now - (count - i) * 5000).toISOString(),
    cpu_percent: Math.round(15 + Math.random() * 55 + Math.sin(i * 0.3) * 15),
    memory_percent: Math.round(45 + Math.random() * 20 + Math.cos(i * 0.2) * 10),
    memory_used_gb: +(6.2 + Math.random() * 3).toFixed(2),
    memory_total_gb: 16,
    disk_percent: Math.round(62 + Math.random() * 5),
    disk_used_gb: +(450 + Math.random() * 30).toFixed(2),
    disk_total_gb: 512,
  }));
}

function generateMockInsights(): Insight[] {
  return [
    { timestamp: new Date().toISOString(), severity: "WARNING", component: "CPU", message: "CPU usage elevated at 78.5% — above baseline average.", root_cause: "High background indexing task." },
    { timestamp: new Date(Date.now() - 60000).toISOString(), severity: "CRITICAL", component: "Memory", message: "Memory usage reached 92.3% — critically high.", root_cause: "Potential memory leak in dev server." },
    { timestamp: new Date(Date.now() - 300000).toISOString(), severity: "INFO", component: "System", message: "Infrastructure metrics collection started successfully.", root_cause: null },
  ];
}

// =========================================================================
// Main Dashboard Component
// =========================================================================
export default function InfraMonitorDashboard() {
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [insights, setInsights] = useState<Insight[]>([]);
  const [isLive, setIsLive] = useState(false);
  const [selectedRange, setSelectedRange] = useState(1);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  const fetchData = useCallback(async () => {
    try {
      const [metricsData, insightsData] = await Promise.all([
        apiService.fetchMetrics(selectedRange),
        apiService.fetchInsights(),
      ]);
      setMetrics(metricsData);
      setInsights(insightsData);
      setIsLive(true);
    } catch {
      // Fallback to mock data if backend is not reachable
      setMetrics(prev => prev.length > 0 && !isLive ? prev : generateMockMetrics(40));
      setInsights(generateMockInsights());
      setIsLive(false);
    }
    setLastUpdated(new Date());
  }, [selectedRange, isLive]);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, [fetchData]);

  const latest = metrics[metrics.length - 1];

  const getStatus = (value: number | undefined, warn: number, crit: number) => {
    if (!value) return 'success';
    if (value >= crit) return 'danger';
    if (value >= warn) return 'warning';
    return 'success';
  };

  const formatTime = (ts: string) => {
    try {
      const d = new Date(ts);
      return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } catch { return ts; }
  };

  return (
    <div className="space-y-6">
      {/* Status Bar */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 bg-background border border-surface px-2.5 py-1 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isLive ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${isLive ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-tighter text-textMuted">
              {isLive ? 'Live System' : 'Demo Mode'}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-textMuted">
          <Clock className="w-3 h-3" />
          Last update: {lastUpdated.toLocaleTimeString()}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <KpiCard 
          title="CPU Load" 
          value={latest ? `${latest.cpu_percent}%` : '--'} 
          subtitle="Real-time processor utilization"
          icon={<Cpu className="w-4 h-4 text-primary" />} 
          status={getStatus(latest?.cpu_percent, 80, 95)} 
          sparkData={metrics.map(m => m.cpu_percent)} 
          color="#38bdf8" 
        />
        <KpiCard 
          title="Memory" 
          value={latest ? `${latest.memory_percent}%` : '--'} 
          subtitle={latest ? `${latest.memory_used_gb} GB Used` : ''}
          icon={<MemoryStick className="w-4 h-4 text-primary" />} 
          status={getStatus(latest?.memory_percent, 85, 95)} 
          sparkData={metrics.map(m => m.memory_percent)} 
          color="#f59e0b" 
        />
        <KpiCard 
          title="Storage" 
          value={latest ? `${latest.disk_percent}%` : '--'} 
          subtitle={latest ? `${latest.disk_used_gb} GB Used` : ''}
          icon={<HardDrive className="w-4 h-4 text-primary" />} 
          status={getStatus(latest?.disk_percent, 85, 95)} 
          sparkData={metrics.map(m => m.disk_percent)} 
          color="#10b981" 
        />
      </div>

      {/* Main Charts & Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Resource Chart */}
        <div className="lg:col-span-2 bg-surface p-5 rounded-2xl border border-white/5 shadow-2xl overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-bold text-textMain uppercase tracking-widest">Resource Timeline</h3>
            <div className="flex items-center gap-1 bg-background/50 rounded-lg p-0.5 border border-white/5">
              {TIME_RANGES.map((range) => (
                <button
                  key={range.hours}
                  onClick={() => setSelectedRange(range.hours)}
                  className={`px-3 py-1 text-[10px] font-bold rounded-md transition-all ${
                    selectedRange === range.hours
                      ? 'bg-primary text-background'
                      : 'text-textMuted hover:text-textMain'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={metrics}>
                <defs>
                  <linearGradient id="colorCpu" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#38bdf8" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorMem" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                <XAxis 
                  dataKey="timestamp" 
                  stroke="#94a3b833" 
                  tick={{ fontSize: 9, fill: '#94a3b8' }} 
                  tickFormatter={formatTime} 
                  minTickGap={30}
                />
                <YAxis stroke="#94a3b833" tick={{ fontSize: 9, fill: '#94a3b8' }} domain={[0, 100]} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #ffffff10', borderRadius: '12px', fontSize: '10px' }} 
                  labelFormatter={(v) => new Date(v).toLocaleString()}
                />
                <Area type="monotone" dataKey="cpu_percent" stroke="#38bdf8" strokeWidth={2} fillOpacity={1} fill="url(#colorCpu)" name="CPU %" />
                <Area type="monotone" dataKey="memory_percent" stroke="#f59e0b" strokeWidth={2} fillOpacity={1} fill="url(#colorMem)" name="Memory %" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Insights Column */}
        <div className="bg-surface p-5 rounded-2xl border border-white/5 shadow-2xl flex flex-col max-h-[350px] lg:max-h-none">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-bold text-textMain uppercase tracking-widest">System Insights</h3>
            <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-background border border-white/5 text-primary">
              {insights.length} EVENTS
            </span>
          </div>
          <div className="flex-1 overflow-y-auto space-y-3 pr-1 scrollbar-hide">
            {insights.map((insight, idx) => <InsightItem key={idx} insight={insight} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// Sub-components
// =========================================================================

function KpiCard({ title, value, subtitle, icon, status, sparkData, color }: any) {
  const statusColors: any = { success: 'text-emerald-400', warning: 'text-amber-400', danger: 'text-rose-400' };
  const statusBg: any = { success: 'bg-emerald-400/5', warning: 'bg-amber-400/5', danger: 'bg-rose-400/5' };
  const spark = sparkData.slice(-10).map((v: any, i: any) => ({ v, i }));

  return (
    <div className="bg-surface p-4 rounded-2xl border border-white/5 shadow-xl relative overflow-hidden group hover:border-white/10 transition-colors">
      <div className={`absolute inset-0 ${statusBg[status]} opacity-50`}></div>
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <div className="p-1.5 bg-background rounded-lg border border-white/5">{icon}</div>
          <span className="text-[9px] font-bold text-textMuted uppercase tracking-widest">{title}</span>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <div className={`text-2xl font-black ${statusColors[status]}`}>{value}</div>
            <div className="text-[9px] text-textMuted mt-1">{subtitle}</div>
          </div>
          <div className="h-8 w-16 opacity-50">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={spark}><Line type="monotone" dataKey="v" stroke={color} strokeWidth={2} dot={false} /></LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

function InsightItem({ insight }: { insight: Insight }) {
  const cfg: any = {
    CRITICAL: { icon: <AlertTriangle className="w-3 h-3" />, color: 'text-rose-400', bg: 'bg-rose-400/10', border: 'border-rose-400/20' },
    WARNING: { icon: <AlertTriangle className="w-3 h-3" />, color: 'text-amber-400', bg: 'bg-amber-400/10', border: 'border-amber-400/20' },
    INFO: { icon: <Info className="w-3 h-3" />, color: 'text-sky-400', bg: 'bg-sky-400/10', border: 'border-sky-400/20' },
  };
  const c = cfg[insight.severity] || cfg.INFO;

  return (
    <div className={`p-3 rounded-xl border ${c.border} ${c.bg} transition-all hover:bg-opacity-20`}>
      <div className="flex items-start gap-2.5">
        <div className={`mt-0.5 ${c.color}`}>{c.icon}</div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <span className={`text-[8px] font-black uppercase tracking-tighter ${c.color}`}>{insight.severity}</span>
            <span className="text-[8px] text-textMuted">{new Date(insight.timestamp).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</span>
          </div>
          <p className="text-[10px] text-textMain font-medium leading-relaxed">{insight.message}</p>
          {insight.root_cause && (
            <div className="mt-1.5 pt-1.5 border-t border-white/5">
              <p className="text-[9px] text-textMuted italic flex items-center gap-1">
                <span className="font-bold not-italic text-primary">CAUSE:</span> {insight.root_cause}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
