import { useCallback, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@arco-design/web-react';
import { IconSun, IconMoon } from '@arco-design/web-react/icon';

const ModeSwitch = () => {
  // https://github.com/pacocoursey/next-themes
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const onToggle = useCallback(() => {
    const currentTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(currentTheme);
    document.body.setAttribute('arco-theme', currentTheme);
  }, [theme, setTheme]);

  if (!mounted) return null;
  return (
    <Button
      type="text"
      aria-label="Toggle Dark Mode"
      className="rounded text-base"
      onClick={onToggle}
    >
      {theme == 'light' ? <IconSun /> : <IconMoon />}
    </Button>
  );
};

export default ModeSwitch;
