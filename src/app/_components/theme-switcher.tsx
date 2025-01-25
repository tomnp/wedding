"use client";

import styles from "./switch.module.css";
import { memo, useEffect, useState } from "react";

declare global {
  interface Window {
    updateDOM?: () => void;
  }
}

const STORAGE_KEY = "nextjs-blog-starter-theme";
const modes = ["system", "dark", "light"] as const;
type ColorSchemePreference = (typeof modes)[number];

const NoFOUCScript = `
  (function(storageKey) {
    const SYSTEM = "system";
    const DARK = "dark";
    const LIGHT = "light";

    const modifyTransition = () => {
      const css = document.createElement("style");
      css.textContent = "*,*:after,*:before{transition:none !important;}";
      document.head.appendChild(css);
      return () => {
        getComputedStyle(document.body);
        setTimeout(() => document.head.removeChild(css), 1);
      };
    };

    const media = matchMedia("(prefers-color-scheme: dark)");
    
    const updateDOM = () => {
      const restoreTransitions = modifyTransition();
      const mode = localStorage.getItem(storageKey) ?? SYSTEM;
      const systemMode = media.matches ? DARK : LIGHT;
      const resolvedMode = mode === SYSTEM ? systemMode : mode;
      const classList = document.documentElement.classList;
      if (resolvedMode === DARK) classList.add(DARK);
      else classList.remove(DARK);
      document.documentElement.setAttribute("data-mode", mode);
      restoreTransitions();
    };

    updateDOM();
    media.addEventListener("change", updateDOM);
    window.updateDOM = updateDOM;
  })("${STORAGE_KEY}")
`;

const Switch = () => {
  const [mounted, setMounted] = useState(false);
  const [mode, setMode] = useState<ColorSchemePreference>("system");

  useEffect(() => {
    setMounted(true);
    const storedMode = localStorage.getItem(STORAGE_KEY) as ColorSchemePreference;
    if (storedMode) setMode(storedMode);

    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        setMode((e.newValue as ColorSchemePreference) || "system");
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem(STORAGE_KEY, mode);
      window.updateDOM?.();
    }
  }, [mode, mounted]);

  if (!mounted) return null;

  return (
    <button
      className={styles.switch}
      onClick={() => {
        const index = modes.indexOf(mode);
        setMode(modes[(index + 1) % modes.length]);
      }}
    />
  );
};

const Script = memo(() => (
  <script dangerouslySetInnerHTML={{ __html: NoFOUCScript }} />
));

export function ThemeSwitcher() {
  return (
    <>
      <Script />
      <Switch />
    </>
  );
}
