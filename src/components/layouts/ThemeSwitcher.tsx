"use client";
import { Moon, Sun1 } from 'iconsax-react'
import { useTheme } from "next-themes"
import { Button } from '../ui/button'
import { useEffect, useState } from 'react';

type Props = {
  isIcon?: boolean;
  className?: string;
}

const ThemeSwitcher = ({ isIcon = false, ...props }: Props) => {
  const [mounted, setMounted] = useState(false);
  const { theme, systemTheme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button variant={'ghost'} size={isIcon ? 'icon' : 'default'} onClick={() => setTheme(currentTheme === 'light' ? 'dark' : 'light')} {...props}>
      {currentTheme === 'light' ? <Moon className='size-5' /> : <Sun1 className='size-5' />}
      {!isIcon && <p className='ml-5'>{currentTheme === 'light' ? 'Dark Mode' : 'Light Mode'}</p>}
    </Button>
  )
}

export default ThemeSwitcher