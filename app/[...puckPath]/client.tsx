"use client";

import type { Data } from "@measured/puck";
import { Render } from "@measured/puck";
import { useState, useEffect } from "react";
import config from "../../puck.config";
import { applyThemeToElement, getTheme } from "../../lib/themes";

export function Client({ data }: { data: Data }) {
  const [currentTheme, setCurrentTheme] = useState("modern");

  useEffect(() => {
    // Apply the default theme
    const theme = getTheme(currentTheme);
    if (typeof document !== 'undefined') {
      applyThemeToElement(document.documentElement, theme);
    }
  }, [currentTheme]);

  return (
    <div className="website-builder">
      <Render config={config} data={data} />
    </div>
  );
}
