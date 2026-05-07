import React from 'react';
import { Sidebar } from '../components/layout/Sidebar';
import { Header } from '../components/layout/Header';

interface OpsMindLayoutProps {
  children: React.ReactNode;
}

export const OpsMindLayout: React.FC<OpsMindLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-full w-full bg-background text-white selection:bg-primary/30">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
};
