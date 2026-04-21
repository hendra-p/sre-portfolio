import React, { createContext, useContext, useMemo } from 'react';
import { PortfolioService, type IPortfolioService } from '../services/PortfolioService';

// Define the context type
interface PortfolioContextType {
  service: IPortfolioService;
}

// Create the context
const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

// Provider Component
export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Instantiate the service once using useMemo to ensure singleton-like behavior within the provider scope
  const service = useMemo(() => new PortfolioService(), []);

  return (
    <PortfolioContext.Provider value={{ service }}>
      {children}
    </PortfolioContext.Provider>
  );
};

// Custom hook to consume the service
export const usePortfolioService = (): IPortfolioService => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolioService must be used within a PortfolioProvider');
  }
  return context.service;
};
