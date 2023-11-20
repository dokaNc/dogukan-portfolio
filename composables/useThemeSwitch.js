import { useTheme } from "vuetify";

export function useThemeSwitch() {
  const theme = useTheme();

  function toggleTheme() {
    if (localStorage.getItem("theme") === "lightTheme") {
      localStorage.setItem("theme", "darkTheme");
      theme.global.name.value = localStorage.getItem("theme");
    } else {
      localStorage.setItem("theme", "lightTheme");
      theme.global.name.value = localStorage.getItem("theme");
    }
  }

  onMounted(() => {
    if (localStorage.getItem("theme")) {
      theme.global.name.value = localStorage.getItem("theme");
    }
  });

  return { theme, toggleTheme };
}
