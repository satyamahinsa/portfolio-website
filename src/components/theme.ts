export type ThemeMode = "auto" | "light" | "dark";

export const THEME_STORAGE_KEY = "theme-mode";

// Runs inline in <head> before paint. "auto" (or nothing saved) follows the OS setting.
export const themeInitScript = `(function(){try{var m=localStorage.getItem('${THEME_STORAGE_KEY}');var d=m==='dark'||((m!=='light')&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;

export function readMode(): ThemeMode {
  try {
    const m = localStorage.getItem(THEME_STORAGE_KEY);
    if (m === "light" || m === "dark" || m === "auto") return m;
  } catch {}
  return "auto";
}

export function applyMode(mode: ThemeMode) {
  const dark =
    mode === "dark" ||
    (mode === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", dark);
}

export function saveMode(mode: ThemeMode) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, mode);
  } catch {}
}
