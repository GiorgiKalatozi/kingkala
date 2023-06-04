"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type Props = {};

export default function ThemeSwitcher({}: Props) {
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div className="flex flex-col">
      <h1>current theme is: {theme}</h1>
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
    </div>
  );
}
