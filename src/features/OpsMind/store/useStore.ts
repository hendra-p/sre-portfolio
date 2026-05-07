import { create } from 'zustand';

interface User {
  email: string;
  role: string;
}

interface AppState {
  user: User | null;
  selectedNodeId: number | null;
  nodes: any[];
  alerts: any[];
  
  activePage: string;
  setUser: (user: User | null) => void;
  setSelectedNodeId: (id: number | null) => void;
  setNodes: (nodes: any[]) => void;
  setAlerts: (alerts: any[]) => void;
  setActivePage: (page: string) => void;
}

export const useStore = create<AppState>((set) => ({
  user: null,
  selectedNodeId: null,
  nodes: [],
  alerts: [],
  activePage: 'overview',
  
  setUser: (user) => set({ user }),
  setSelectedNodeId: (id) => set({ selectedNodeId: id }),
  setNodes: (nodes) => set({ nodes }),
  setAlerts: (alerts) => set({ alerts }),
  setActivePage: (page) => set({ activePage: page }),
}));
