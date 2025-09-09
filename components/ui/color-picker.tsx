"use client";

import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { HexColorPicker } from 'react-colorful';
import { cn } from '../../lib/utils';

interface ColorPickerProps {
  value: string;
  onChange: (color: string) => void;
  className?: string;
  disabled?: boolean;
}



export function ColorPicker({ value, onChange, className, disabled }: ColorPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pickerRef = useRef<HTMLDivElement>(null);
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Get the current color for the picker, defaulting to a valid hex if needed
  const getCurrentColor = useMemo(() => {
    if (value && value.startsWith('#') && /^#[0-9A-Fa-f]{6}$/.test(value)) {
      return value;
    }
    return '#414141'; // Default color
  }, [value]);

  // Handle clicking outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node) &&
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const handleColorChange = useCallback((color: string) => {
    // Clear any existing timeout
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }
    
    // Debounce the onChange call to prevent excessive updates
    debounceTimeoutRef.current = setTimeout(() => {
      onChange(color);
    }, 50); // 50ms debounce
  }, [onChange]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, []);

  const getDisplayColor = (color: string) => {
    if (color.startsWith('var(')) {
      // For CSS variables, we'll show a placeholder color
      const computedStyle = getComputedStyle(document.documentElement);
      const cssValue = computedStyle.getPropertyValue(color.slice(4, -1));
      return cssValue || '#3b82f6';
    }
    return color;
  };

  return (
    <div className={cn("relative", className)} ref={containerRef}>
      {/* Color Button */}
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={cn(
          "flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors",
          disabled && "opacity-50 cursor-not-allowed",
          "min-w-[120px]"
        )}
      >
        <div
          className="w-6 h-6 rounded border border-gray-200"
          style={{ backgroundColor: getDisplayColor(value) }}
        />
        <span className="text-sm truncate flex-1 text-left font-mono">
          {value.startsWith('#') ? value.toUpperCase() : value}
        </span>
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Color Picker Dropdown */}
      {isOpen && (
        <div
          ref={pickerRef}
          className="absolute top-full left-0 z-50 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-4 min-w-[280px]"
        >
          {/* Color Picker */}
          <div className="mb-4">
            <HexColorPicker
              color={getCurrentColor}
              onChange={handleColorChange}
              style={{ width: '100%', height: '180px' }}
            />
          </div>

          {/* Hex Input */}
          <div className="space-y-2">
            <input
              type="text"
              value={getCurrentColor.toUpperCase()}
              onChange={(e) => {
                const color = e.target.value;
                if (/^#[0-9A-Fa-f]{0,6}$/.test(color) && color.length === 7) {
                  onChange(color);
                }
              }}
              className="w-full px-3 py-2 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm font-mono"
              placeholder="#414141"
            />
            <div className="text-center text-xs text-gray-500 uppercase tracking-wider">
              HEX
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ColorPicker;
