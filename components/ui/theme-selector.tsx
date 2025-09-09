"use client";

import React, { useState } from 'react';
import { themes, getTheme, applyThemeToElement, Theme } from '../../lib/themes';
import { cn } from '../../lib/utils';

interface ThemeSelectorProps {
  currentThemeId: string;
  onThemeChange: (themeId: string) => void;
  className?: string;
}

export function ThemeSelector({ currentThemeId, onThemeChange, className }: ThemeSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const currentTheme = getTheme(currentThemeId);

  const handleThemeSelect = (themeId: string) => {
    onThemeChange(themeId);
    setIsOpen(false);
    
    // Apply theme to document root
    if (typeof document !== 'undefined') {
      const theme = getTheme(themeId);
      applyThemeToElement(document.documentElement, theme);
    }
  };

  return (
    <div className={cn("relative", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
      >
        <div
          className="w-4 h-4 rounded border border-gray-200"
          style={{ backgroundColor: currentTheme.colors.primary }}
        />
        <span className="text-sm font-medium">{currentTheme.name}</span>
        <svg
          className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          <div className="p-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Choose a theme</h3>
            <div className="grid gap-3">
              {themes.map((theme) => (
                <ThemePreview
                  key={theme.id}
                  theme={theme}
                  isSelected={theme.id === currentThemeId}
                  onSelect={() => handleThemeSelect(theme.id)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface ThemePreviewProps {
  theme: Theme;
  isSelected: boolean;
  onSelect: () => void;
}

function ThemePreview({ theme, isSelected, onSelect }: ThemePreviewProps) {
  return (
    <button
      onClick={onSelect}
      className={cn(
        "w-full p-3 text-left border rounded-lg transition-all hover:shadow-md",
        isSelected
          ? "border-blue-500 bg-blue-50 shadow-sm"
          : "border-gray-200 hover:border-gray-300"
      )}
    >
      <div className="flex items-center gap-3">
        {/* Color palette preview */}
        <div className="flex gap-1">
          <div
            className="w-3 h-3 rounded-full border border-gray-200"
            style={{ backgroundColor: theme.colors.primary }}
          />
          <div
            className="w-3 h-3 rounded-full border border-gray-200"
            style={{ backgroundColor: theme.colors.secondary }}
          />
          <div
            className="w-3 h-3 rounded-full border border-gray-200"
            style={{ backgroundColor: theme.colors.accent }}
          />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium text-gray-900">{theme.name}</h4>
            {isSelected && (
              <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
          <p className="text-xs text-gray-500 mt-1">{theme.description}</p>
        </div>
      </div>
      
      {/* Mini preview */}
      <div className="mt-2 p-2 rounded border border-gray-100" style={{ backgroundColor: theme.colors.background }}>
        <div className="space-y-1">
          <div
            className="h-2 rounded"
            style={{ 
              backgroundColor: theme.colors.primary,
              width: '60%'
            }}
          />
          <div
            className="h-1 rounded"
            style={{ 
              backgroundColor: theme.colors.text,
              opacity: 0.6,
              width: '80%'
            }}
          />
          <div
            className="h-1 rounded"
            style={{ 
              backgroundColor: theme.colors.textSecondary,
              opacity: 0.4,
              width: '40%'
            }}
          />
        </div>
      </div>
    </button>
  );
}
