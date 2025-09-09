// Theme definitions for the website builder
export interface Theme {
  id: string;
  name: string;
  description: string;
  preview: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    success: string;
    warning: string;
    error: string;
  };
  typography: {
    headingFont: string;
    bodyFont: string;
    headingSizes: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
    };
    bodySize: string;
    lineHeight: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

export const themes: Theme[] = [
  {
    id: 'modern',
    name: 'Modern',
    description: 'Clean, minimalist design with bold typography',
    preview: '/themes/modern-preview.jpg',
    colors: {
      primary: '#3b82f6',
      secondary: '#64748b',
      accent: '#f59e0b',
      background: '#ffffff',
      surface: '#f8fafc',
      text: '#1e293b',
      textSecondary: '#64748b',
      border: '#e2e8f0',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
    },
    typography: {
      headingFont: 'Inter, sans-serif',
      bodyFont: 'Inter, sans-serif',
      headingSizes: {
        h1: '3.5rem',
        h2: '2.5rem',
        h3: '2rem',
        h4: '1.5rem',
        h5: '1.25rem',
        h6: '1.125rem',
      },
      bodySize: '1rem',
      lineHeight: '1.6',
    },
    spacing: {
      xs: '0.5rem',
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '3rem',
      '2xl': '4rem',
    },
    borderRadius: {
      sm: '0.25rem',
      md: '0.5rem',
      lg: '0.75rem',
      xl: '1rem',
    },
    shadows: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
    },
  },
  {
    id: 'elegant',
    name: 'Elegant',
    description: 'Sophisticated design with serif typography',
    preview: '/themes/elegant-preview.jpg',
    colors: {
      primary: '#8b5cf6',
      secondary: '#6b7280',
      accent: '#ec4899',
      background: '#fefefe',
      surface: '#f9fafb',
      text: '#374151',
      textSecondary: '#6b7280',
      border: '#d1d5db',
      success: '#059669',
      warning: '#d97706',
      error: '#dc2626',
    },
    typography: {
      headingFont: 'Playfair Display, serif',
      bodyFont: 'Source Sans Pro, sans-serif',
      headingSizes: {
        h1: '4rem',
        h2: '3rem',
        h3: '2.25rem',
        h4: '1.75rem',
        h5: '1.375rem',
        h6: '1.125rem',
      },
      bodySize: '1.125rem',
      lineHeight: '1.7',
    },
    spacing: {
      xs: '0.75rem',
      sm: '1.25rem',
      md: '2rem',
      lg: '2.5rem',
      xl: '3.5rem',
      '2xl': '5rem',
    },
    borderRadius: {
      sm: '0.125rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
    },
    shadows: {
      sm: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
      xl: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    },
  },
  {
    id: 'vibrant',
    name: 'Vibrant',
    description: 'Bold, colorful design with energy',
    preview: '/themes/vibrant-preview.jpg',
    colors: {
      primary: '#f59e0b',
      secondary: '#ef4444',
      accent: '#10b981',
      background: '#ffffff',
      surface: '#fef3c7',
      text: '#1f2937',
      textSecondary: '#4b5563',
      border: '#fbbf24',
      success: '#34d399',
      warning: '#fbbf24',
      error: '#f87171',
    },
    typography: {
      headingFont: 'Poppins, sans-serif',
      bodyFont: 'Open Sans, sans-serif',
      headingSizes: {
        h1: '3.75rem',
        h2: '2.75rem',
        h3: '2.25rem',
        h4: '1.625rem',
        h5: '1.375rem',
        h6: '1.125rem',
      },
      bodySize: '1rem',
      lineHeight: '1.6',
    },
    spacing: {
      xs: '0.5rem',
      sm: '1rem',
      md: '1.5rem',
      lg: '2.5rem',
      xl: '3.5rem',
      '2xl': '4.5rem',
    },
    borderRadius: {
      sm: '0.5rem',
      md: '0.75rem',
      lg: '1rem',
      xl: '1.5rem',
    },
    shadows: {
      sm: '0 2px 4px 0 rgb(0 0 0 / 0.06)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
    },
  },
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Ultra-clean design with lots of whitespace',
    preview: '/themes/minimal-preview.jpg',
    colors: {
      primary: '#000000',
      secondary: '#6b7280',
      accent: '#374151',
      background: '#ffffff',
      surface: '#fafafa',
      text: '#111827',
      textSecondary: '#6b7280',
      border: '#e5e7eb',
      success: '#065f46',
      warning: '#92400e',
      error: '#991b1b',
    },
    typography: {
      headingFont: 'system-ui, sans-serif',
      bodyFont: 'system-ui, sans-serif',
      headingSizes: {
        h1: '3rem',
        h2: '2.25rem',
        h3: '1.875rem',
        h4: '1.5rem',
        h5: '1.25rem',
        h6: '1.125rem',
      },
      bodySize: '1rem',
      lineHeight: '1.5',
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.75rem',
      md: '1.5rem',
      lg: '3rem',
      xl: '4rem',
      '2xl': '6rem',
    },
    borderRadius: {
      sm: '0',
      md: '0',
      lg: '0.25rem',
      xl: '0.5rem',
    },
    shadows: {
      sm: 'none',
      md: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
      lg: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
      xl: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    },
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Artistic design with unique styling',
    preview: '/themes/creative-preview.jpg',
    colors: {
      primary: '#8b5cf6',
      secondary: '#ec4899',
      accent: '#06b6d4',
      background: '#fefefe',
      surface: '#f0f9ff',
      text: '#1e1b4b',
      textSecondary: '#64748b',
      border: '#c084fc',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
    },
    typography: {
      headingFont: 'Fredoka One, cursive',
      bodyFont: 'Nunito, sans-serif',
      headingSizes: {
        h1: '4.5rem',
        h2: '3.5rem',
        h3: '2.5rem',
        h4: '1.875rem',
        h5: '1.5rem',
        h6: '1.25rem',
      },
      bodySize: '1.125rem',
      lineHeight: '1.7',
    },
    spacing: {
      xs: '0.5rem',
      sm: '1rem',
      md: '2rem',
      lg: '3rem',
      xl: '4rem',
      '2xl': '5rem',
    },
    borderRadius: {
      sm: '0.75rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
    },
    shadows: {
      sm: '0 4px 6px -1px rgb(139 92 246 / 0.1)',
      md: '0 10px 15px -3px rgb(139 92 246 / 0.1)',
      lg: '0 20px 25px -5px rgb(139 92 246 / 0.1)',
      xl: '0 25px 50px -12px rgb(139 92 246 / 0.25)',
    },
  },
  {
    id: 'corporate',
    name: 'Corporate',
    description: 'Professional business design',
    preview: '/themes/corporate-preview.jpg',
    colors: {
      primary: '#1e40af',
      secondary: '#475569',
      accent: '#0ea5e9',
      background: '#ffffff',
      surface: '#f8fafc',
      text: '#1e293b',
      textSecondary: '#475569',
      border: '#cbd5e1',
      success: '#059669',
      warning: '#d97706',
      error: '#dc2626',
    },
    typography: {
      headingFont: 'IBM Plex Sans, sans-serif',
      bodyFont: 'IBM Plex Sans, sans-serif',
      headingSizes: {
        h1: '3rem',
        h2: '2.25rem',
        h3: '1.875rem',
        h4: '1.5rem',
        h5: '1.25rem',
        h6: '1.125rem',
      },
      bodySize: '1rem',
      lineHeight: '1.6',
    },
    spacing: {
      xs: '0.5rem',
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '3rem',
      '2xl': '4rem',
    },
    borderRadius: {
      sm: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
    },
    shadows: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
    },
  },
];

export const getTheme = (themeId: string): Theme => {
  return themes.find(theme => theme.id === themeId) || themes[0];
};

export const applyThemeToElement = (element: HTMLElement, theme: Theme) => {
  const root = element.style;
  
  // Apply CSS custom properties
  root.setProperty('--theme-primary', theme.colors.primary);
  root.setProperty('--theme-secondary', theme.colors.secondary);
  root.setProperty('--theme-accent', theme.colors.accent);
  root.setProperty('--theme-background', theme.colors.background);
  root.setProperty('--theme-surface', theme.colors.surface);
  root.setProperty('--theme-text', theme.colors.text);
  root.setProperty('--theme-text-secondary', theme.colors.textSecondary);
  root.setProperty('--theme-border', theme.colors.border);
  root.setProperty('--theme-success', theme.colors.success);
  root.setProperty('--theme-warning', theme.colors.warning);
  root.setProperty('--theme-error', theme.colors.error);
  
  // Typography
  root.setProperty('--theme-heading-font', theme.typography.headingFont);
  root.setProperty('--theme-body-font', theme.typography.bodyFont);
  root.setProperty('--theme-body-size', theme.typography.bodySize);
  root.setProperty('--theme-line-height', theme.typography.lineHeight);
  
  // Spacing
  root.setProperty('--theme-spacing-xs', theme.spacing.xs);
  root.setProperty('--theme-spacing-sm', theme.spacing.sm);
  root.setProperty('--theme-spacing-md', theme.spacing.md);
  root.setProperty('--theme-spacing-lg', theme.spacing.lg);
  root.setProperty('--theme-spacing-xl', theme.spacing.xl);
  root.setProperty('--theme-spacing-2xl', theme.spacing['2xl']);
  
  // Border radius
  root.setProperty('--theme-radius-sm', theme.borderRadius.sm);
  root.setProperty('--theme-radius-md', theme.borderRadius.md);
  root.setProperty('--theme-radius-lg', theme.borderRadius.lg);
  root.setProperty('--theme-radius-xl', theme.borderRadius.xl);
  
  // Shadows
  root.setProperty('--theme-shadow-sm', theme.shadows.sm);
  root.setProperty('--theme-shadow-md', theme.shadows.md);
  root.setProperty('--theme-shadow-lg', theme.shadows.lg);
  root.setProperty('--theme-shadow-xl', theme.shadows.xl);
};
