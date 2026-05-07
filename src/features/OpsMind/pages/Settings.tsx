import React from 'react';
import { 
  Settings as SettingsIcon, 
  User, 
  Bell, 
  Shield, 
  Database, 
  Globe,
  Save
} from 'lucide-react';

export const Settings: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-white/40 mt-1">Configure your OpsMind AI platform and integration preferences.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 space-y-1">
          {[
            { label: 'Profile', icon: User, active: true },
            { label: 'Notifications', icon: Bell },
            { label: 'Security', icon: Shield },
            { label: 'Integrations', icon: Database },
            { label: 'General', icon: Globe },
          ].map((item, i) => (
            <button 
              key={i}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                item.active ? 'bg-primary/10 text-primary border border-primary/20' : 'text-white/40 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-bold text-sm">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="lg:col-span-3 glass-panel p-8 space-y-8">
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-b border-white/5 pb-4">API Configuration</h3>
            
            <div className="space-y-4">
              <div className="grid gap-2">
                <label className="text-sm font-bold text-white/60">Azure OpenAI Endpoint</label>
                <input 
                  type="text" 
                  defaultValue="https://opsmind-ai.openai.azure.com/"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:border-primary/50"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-bold text-white/60">Deployment Name</label>
                <input 
                  type="text" 
                  defaultValue="gpt-4o-deployment"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:border-primary/50"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-bold text-white/60">Telemetry Retension (Days)</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:border-primary/50">
                  <option>30 Days</option>
                  <option>90 Days</option>
                  <option>1 Year</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button className="px-6 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm font-bold hover:bg-white/10 transition-all">Cancel</button>
            <button className="px-6 py-2.5 bg-primary text-background rounded-xl text-sm font-bold hover:glow-primary transition-all flex items-center gap-2">
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
