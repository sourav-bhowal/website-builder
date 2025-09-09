"use client";

import type { Data } from "@measured/puck";
import { Puck } from "@measured/puck";
import { useState, useCallback } from "react";
import config from "../../../puck.config";
import { WebsiteBuilderToolbar } from "../../../components/ui/website-builder-toolbar";
import { applyThemeToElement, getTheme } from "../../../lib/themes";

export function Client({ path, data }: { path: string; data: Partial<Data> }) {
  const [currentTheme, setCurrentTheme] = useState("modern");
  const [isSaving, setIsSaving] = useState(false);
  const [puckData, setPuckData] = useState<Partial<Data>>(data);

  const handleSave = useCallback(async () => {
    setIsSaving(true);
    try {
      await fetch("/puck/api", {
        method: "post",
        body: JSON.stringify({ data: puckData, path }),
      });
    } catch (error) {
      console.error("Failed to save:", error);
    } finally {
      setIsSaving(false);
    }
  }, [puckData, path]);

  const handlePublish = useCallback(async () => {
    await handleSave();
    // Add any additional publish logic here
    window.location.href = path; // Navigate to published page
  }, [handleSave, path]);

  const handlePreview = useCallback(() => {
    window.open(path, '_blank');
  }, [path]);

  const handleThemeChange = useCallback((themeId: string) => {
    setCurrentTheme(themeId);
    const theme = getTheme(themeId);
    
    // Apply theme to the editor preview
    if (typeof document !== 'undefined') {
      applyThemeToElement(document.documentElement, theme);
    }
  }, []);

  const handleUndo = useCallback(() => {
    // Puck handles undo internally
    console.log("Undo action");
  }, []);

  const handleRedo = useCallback(() => {
    // Puck handles redo internally
    console.log("Redo action");
  }, []);

  return (
    <div className="website-builder">
     
      <div className="flex-1">
        <Puck
          config={config}
          data={puckData}
          onPublish={async (data) => {
            setPuckData(data);
            await fetch("/puck/api", {
              method: "post",
              body: JSON.stringify({ data, path }),
            });
          }}
          onChange={(data) => {
            setPuckData(data);
          }}
        />
      </div>
    </div>
  );
}
