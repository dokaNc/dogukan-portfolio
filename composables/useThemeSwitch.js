import { useTheme } from "vuetify";

export function useThemeSwitch() {
  const theme = useTheme();

  function toggleTheme() {
    if (theme.global.name.value === "darkTheme") {
      localStorage.setItem("theme", "lightTheme");
      theme.global.name.value = localStorage.getItem("theme");
    } else {
      localStorage.setItem("theme", "darkTheme");
      theme.global.name.value = localStorage.getItem("theme");
    }
  }

  if (typeof window !== "undefined") {
    if (localStorage.getItem("theme") === "lightTheme") {
      theme.global.name.value = localStorage.getItem("theme");
    }
  }

  onBeforeMount(() => {
    if (theme.global.name.value === "darkTheme") {
      localStorage.setItem("theme", "darkTheme");
    }
  });

  return { theme, toggleTheme };
}
