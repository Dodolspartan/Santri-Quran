/** @enum {string} */
export const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const IS_SERVER = typeof window === "undefined";

const getDefaultTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? THEME.DARK
    : THEME.LIGHT;

const getPreferredTheme = () => {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) return storedTheme;

  const defaultTheme = getDefaultTheme();
  localStorage.setItem("theme", defaultTheme);

  return defaultTheme;
};

const updateTextColor = (theme) => {
  const root = document.documentElement;
  if (theme === THEME.DARK) {
    root.style.color = "white";
  } else {
    root.style.color = "black";
  }
};

export function setTheme(theme) {
  if (IS_SERVER) return;

  const root = document.documentElement;
  root.dataset.bsTheme = theme;

  // Adjust text color based on the theme
  updateTextColor(theme);

  localStorage.setItem("theme", theme);
}

export function resetTheme() {
  if (IS_SERVER) return;
  setTheme(getDefaultTheme());
}

export function toggleTheme() {
  if (IS_SERVER) return;
  const nextTheme =
    document.documentElement.dataset.bsTheme === THEME.DARK
      ? THEME.LIGHT
      : THEME.DARK;
  setTheme(nextTheme);
}

export function initTheme() {
  if (IS_SERVER) return;
  setTheme(getPreferredTheme());
}
