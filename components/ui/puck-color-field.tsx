"use client";

import React from 'react';
import { ColorPicker } from './color-picker';

interface PuckColorFieldProps {
  field: {
    type: string;
    options?: { label: string; value: string }[];
  };
  value: string;
  onChange: (value: string) => void;
  name: string;
  label?: string;
}

export function PuckColorField({ field, value, onChange, name, label }: PuckColorFieldProps) {
  // If the field uses our custom color picker marker
  if (field.options?.some(option => option.value === "CUSTOM_COLOR_PICKER")) {
    return (
      <div>
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {label}
          </label>
        )}
        <ColorPicker
          value={value || "#000000"}
          onChange={onChange}
          className="w-full"
        />
      </div>
    );
  }

  // Fall back to regular select for other fields
  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        {field.options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default PuckColorField;
