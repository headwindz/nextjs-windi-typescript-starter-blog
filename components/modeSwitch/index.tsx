import { useCallback, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import MoonIcon from './moon.svg';
import SunIcon from './sun.svg';

const ModeSwitch = () => {
  // https://github.com/pacocoursey/next-themes
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  const onToggle = useCallback(() => {
    const currentTheme = theme === 'dark' ? 'light': 'dark';
    setTheme(currentTheme);
    document.body.setAttribute('arco-theme', currentTheme);
  }, [theme])

  if (!mounted) return null;
  return (
    <a
      aria-label="Toggle Dark Mode"
      className="rounded"
      onClick={onToggle}
    >
      {
        theme == 'light' ? <MoonIcon /> : <SunIcon />
      }
    </a>
  )
}

export default ModeSwitch;