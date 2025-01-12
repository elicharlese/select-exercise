"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { type AppContextState } from '@/types';

interface AppContextType extends AppContextState {
  toggleDarkMode: () => void;
  toggleNav: () => void;
}

const defaultContext: AppContextType = {
  isDarkMode: true,
  toggleDarkMode: () => {},
  isNavOpen: false,
  toggleNav: () => {},
};

const AppContext = createContext<AppContextType>(defaultContext);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  const toggleNav = () => {
    setIsNavOpen(prev => !prev);
  };

  const value = {
    isDarkMode,
    toggleDarkMode,
    isNavOpen,
    toggleNav,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
