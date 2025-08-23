'use client';

import React from 'react';
import { useLanguage } from './LanguageProvider';

interface FontProviderProps {
  children: React.ReactNode;
  interClassName: string;
  forumClassName: string;
}

export const FontProvider: React.FC<FontProviderProps> = ({ 
  children, 
  interClassName, 
  forumClassName
}) => {
  const { language } = useLanguage();
  
  // Use Forum for English, Helvetica/Arial for Thai
  const fontClassName = language === 'th' ? 'font-thai' : forumClassName;
  
  return (
    <div className={fontClassName}>
      {children}
    </div>
  );
};
