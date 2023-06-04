"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  BsMoonStars,
  BsGithub,
  BsLinkedin,
  BsFillSunFill,
  BsSun,
  BsSunFill,
} from "react-icons/bs";
import { BiSun } from "react-icons/bi";

export default function Header() {
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="max-w-4xl mx-auto py-7   ">
      <div className="flex justify-between items-center ">
        <div>
          <Link href="/" className="text-3xl font-bold">
            {/* <Logo /> */}
            GK
            {/* Giorgi Kalatozi */}
          </Link>
        </div>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link
                className="hover:text-gray-100 dark:hover:text-gray-100 transition tracking-wide text-gray-300 dark:text-gray-950 "
                href="/"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-100  dark:hover:text-gray-100 transition tracking-wide text-gray-300 dark:text-gray-950 "
                href="/"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-100 dark:hover:text-gray-100 transition tracking-wide text-gray-300 dark:text-gray-950"
                href="/"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-100 dark:hover:text-gray-100 transition tracking-wide text-gray-300 dark:text-gray-950"
                href="/"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {/* ICONS */}
        <div className="flex gap-4">
          <Link href="https://github.com/giorgikalatozi" target="_blank">
            <BsGithub
              className="text-gray-400  transition hover:text-white dark:text-gray-950 "
              fontSize="20px"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/giorgikalatozi/"
            target="_blank"
          >
            <BsLinkedin
              fontSize="20px"
              className="text-gray-400  transition hover:text-white dark:text-gray-950  "
            />
          </Link>

          {theme === "light" ? (
            <BsFillSunFill
              onClick={() => setTheme("dark")}
              fontSize="20px"
              className="text-gray-400  transition cursor-pointer hover:text-white dark:text-gray-950"
            />
          ) : (
            <BsMoonStars
              onClick={() => setTheme("light")}
              fontSize="20px"
              className="text-gray-400  transition cursor-pointer hover:text-white dark:text-gray-950 "
            />
          )}
        </div>
      </div>
    </div>
  );
}
