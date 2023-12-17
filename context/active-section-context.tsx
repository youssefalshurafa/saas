'use client';
import type { SectionName } from '@/lib/types';
import React, { createContext, useContext, useState } from 'react';

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};
type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>('Home');
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  const ActiveSectionContextValue = {
    activeSection,
    setActiveSection,
    timeOfLastClick,
    setTimeOfLastClick,
  };
  return (
    <ActiveSectionContext.Provider value={ActiveSectionContextValue}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error(
      'useCartContext must be used within a ActiveSectionContextProvider'
    );
  }
  return context;
};
