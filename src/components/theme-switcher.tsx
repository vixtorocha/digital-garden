'use client';

import { useEffect, useState } from 'react';
import { IconMoon, IconSun } from '@tabler/icons-react';

export function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme ? savedTheme === 'dark' : prefersDark;

    setIsDark(shouldBeDark);
    applyTheme(shouldBeDark); // ✅ called once with the correct value
  }, []);

  const applyTheme = (dark: boolean) => {
    document.documentElement.classList.toggle('dark', dark); // cleaner toggle
  };

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    applyTheme(newIsDark); // ✅ apply immediately
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className='p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'
      aria-label='Toggle theme'
    >
      {isDark ? <IconSun size={20} className='text-yellow-500' /> : <IconMoon size={20} className='text-gray-800' />}
    </button>
  );
}
