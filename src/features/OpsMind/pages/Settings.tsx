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
  const [activeTab, setActiveTab] = React.useState('Profile');

  const tabs = [
    { label: 'Profile', icon: User },
    { label: 'Notifications', icon: Bell },
    { label: 'Security', icon: Shield },
    { label: 'Integrations', icon: Database },
    { label: 'General', icon: Globe },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-white/40 mt-1">Configure your OpsMind AI platform and integration preferences.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 space-y-1">
          {tabs.map((tab) => (
            <button 
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === tab.label ? 'bg-primary/10 text-primary border border-primary/20' : 'text-white/40 hover:bg-white/5 hover:text-white'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span className="font-bold text-sm">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="lg:col-span-3 glass-panel p-8 space-y-8">
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-b border-white/5 pb-4">{activeTab} Configuration</h3>
            
            {activeTab === 'Profile' && (
              <div className="space-y-4 animate-in slide-in-from-bottom-2 duration-300">
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
              </div>
            )}

            {activeTab !== 'Profile' && (
              <div className="py-12 flex flex-col items-center justify-center text-center gap-4 animate-in fade-in duration-500">
                <div className="p-4 bg-white/5 rounded-full">
                   {tabs.find(t => t.label === activeTab)?.icon && React.createElement(tabs.find(t => t.label === activeTab)!.icon, { className: "w-8 h-8 text-primary/40" })}
                </div>
                <div className="text-white/40">
                  <p className="font-bold">{activeTab} module is active.</p>
                  <p className="text-xs">Configuration for this module is managed by organization policy.</p>
                </div>
              </div>
            )}
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
