"use client";

import React, { useState } from 'react';
import { ThemeSelector } from './theme-selector';
import { ThemeToggle } from './theme-toggle';
import { cn } from '../../lib/utils';

interface WebsiteBuilderToolbarProps {
  onSave?: () => void;
  onPreview?: () => void;
  onPublish?: () => void;
  onUndo?: () => void;
  onRedo?: () => void;
  currentTheme: string;
  onThemeChange: (themeId: string) => void;
  canUndo?: boolean;
  canRedo?: boolean;
  isSaving?: boolean;
  className?: string;
}

export function WebsiteBuilderToolbar({
  onSave,
  onPreview,
  onPublish,
  onUndo,
  onRedo,
  currentTheme,
  onThemeChange,
  canUndo = false,
  canRedo = false,
  isSaving = false,
  className
}: WebsiteBuilderToolbarProps) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className={cn(
      "bg-white border-b border-gray-200 shadow-sm",
      "dark:bg-gray-900 dark:border-gray-700",
      className
    )}>
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left section - Logo and basic actions */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">WB</span>
            </div>
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
              Website Builder
            </h1>
          </div>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-2">
            <ToolbarButton
              onClick={onUndo}
              disabled={!canUndo}
              title="Undo"
              icon={<UndoIcon />}
            />
            <ToolbarButton
              onClick={onRedo}
              disabled={!canRedo}
              title="Redo"
              icon={<RedoIcon />}
            />
            <div className="w-px h-6 bg-gray-200 dark:bg-gray-700 mx-2" />
            <ToolbarButton
              onClick={onPreview}
              title="Preview"
              icon={<EyeIcon />}
            />
          </div>
        </div>

        {/* Center section - Theme selector */}
        <div className="hidden lg:block">
          <ThemeSelector
            currentThemeId={currentTheme}
            onThemeChange={onThemeChange}
          />
        </div>

        {/* Right section - Theme toggle and publish actions */}
        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          
          <div className="hidden md:flex items-center gap-2">
            <ToolbarButton
              onClick={onSave}
              disabled={isSaving}
              title="Save"
              variant="secondary"
              className="px-4"
            >
              {isSaving ? (
                <>
                  <LoadingIcon className="w-4 h-4 mr-2" />
                  Saving...
                </>
              ) : (
                <>
                  <SaveIcon className="w-4 h-4 mr-2" />
                  Save
                </>
              )}
            </ToolbarButton>
            <ToolbarButton
              onClick={onPublish}
              title="Publish"
              variant="primary"
              className="px-4"
            >
              <PublishIcon className="w-4 h-4 mr-2" />
              Publish
            </ToolbarButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <ToolbarButton
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              title="Menu"
              icon={<MenuIcon />}
            />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {showMobileMenu && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
          <div className="px-4 py-3 space-y-3">
            <div className="flex items-center gap-2">
              <ToolbarButton
                onClick={onUndo}
                disabled={!canUndo}
                title="Undo"
                icon={<UndoIcon />}
                size="sm"
              />
              <ToolbarButton
                onClick={onRedo}
                disabled={!canRedo}
                title="Redo"
                icon={<RedoIcon />}
                size="sm"
              />
              <ToolbarButton
                onClick={onPreview}
                title="Preview"
                icon={<EyeIcon />}
                size="sm"
              />
              <ThemeToggle className="ml-auto" />
            </div>
            
            <ThemeSelector
              currentThemeId={currentTheme}
              onThemeChange={onThemeChange}
              className="w-full"
            />
            
            <div className="flex gap-2">
              <ToolbarButton
                onClick={onSave}
                disabled={isSaving}
                title="Save"
                variant="secondary"
                className="flex-1 justify-center"
              >
                {isSaving ? (
                  <>
                    <LoadingIcon className="w-4 h-4 mr-2" />
                    Saving...
                  </>
                ) : (
                  <>
                    <SaveIcon className="w-4 h-4 mr-2" />
                    Save
                  </>
                )}
              </ToolbarButton>
              <ToolbarButton
                onClick={onPublish}
                title="Publish"
                variant="primary"
                className="flex-1 justify-center"
              >
                <PublishIcon className="w-4 h-4 mr-2" />
                Publish
              </ToolbarButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface ToolbarButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'secondary';
  size?: 'default' | 'sm';
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

function ToolbarButton({
  variant = 'default',
  size = 'default',
  icon,
  children,
  className,
  disabled,
  ...props
}: ToolbarButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantClasses = {
    default: "text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-700",
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
  };
  
  const sizeClasses = {
    default: "h-10 px-3",
    sm: "h-8 px-2"
  };
  
  const disabledClasses = disabled 
    ? "opacity-50 cursor-not-allowed" 
    : "";

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        disabledClasses,
        className
      )}
      disabled={disabled}
      {...props}
    >
      {icon && !children && icon}
      {children}
    </button>
  );
}

// Icons
function UndoIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
    </svg>
  );
}

function RedoIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10H11a8 8 0 00-8 8v2m18-10l-6-6m6 6l-6 6" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );
}

function SaveIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
    </svg>
  );
}

function PublishIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
    </svg>
  );
}

function LoadingIcon({ className }: { className?: string }) {
  return (
    <svg className={cn("animate-spin", className)} fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}
