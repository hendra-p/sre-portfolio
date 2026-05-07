import { useStore } from './store/useStore';
import { OpsMindLayout } from './layouts/OpsMindLayout';
import { Dashboard } from './pages/Dashboard';
import { Infrastructure } from './pages/Infrastructure';
import { Nodes } from './pages/Nodes';
import { Applications } from './pages/Applications';
import { Logs } from './pages/Logs';
import { Alerts } from './pages/Alerts';
import { Predictive } from './pages/Predictive';
import { AIInsights } from './pages/AIInsights';
import { ChatOps } from './components/dashboard/ChatOps';

export const OpsMindApp = () => {
  const { activePage } = useStore();

  return (
    <div className="opsmind-scope h-[800px] w-full bg-background text-white overflow-hidden rounded-[2rem] border border-white/5 shadow-2xl relative">
      <OpsMindLayout>
        {activePage === 'overview' && <Dashboard />}
        {activePage === 'infra' && <Infrastructure />}
        {activePage === 'nodes' && <Nodes />}
        {activePage === 'apps' && <Applications />}
        {activePage === 'logs' && <Logs />}
        {activePage === 'alerts' && <Alerts />}
        {activePage === 'ai' && <AIInsights />}
        {activePage === 'predictive' && <Predictive />}
        {activePage === 'chatops' && <ChatOps />}
        
        {/* Fallback for undefined pages */}
        {!['overview', 'infra', 'nodes', 'apps', 'logs', 'alerts', 'ai', 'predictive', 'chatops'].includes(activePage) && (
          <div className="flex flex-col items-center justify-center h-full text-white/20">
            <h2 className="text-2xl font-bold uppercase tracking-widest">{activePage} Section</h2>
            <p>Coming Soon in Phase 2</p>
          </div>
        )}
      </OpsMindLayout>
    </div>
  );
};
