import { ref, onMounted } from 'vue';

export function useDarkMode() {
  const isDarkMode = ref(false);

  const setTheme = (theme: string) => {
    if (theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const initializeDarkMode = () => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      isDarkMode.value = storedTheme === 'dark';
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('system');
      isDarkMode.value = true;
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (localStorage.getItem('theme') === 'system') {
        setTheme('system');
      }
    });
  };

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    const newTheme = isDarkMode.value ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  onMounted(initializeDarkMode);

  return { isDarkMode, toggleDarkMode };
}
