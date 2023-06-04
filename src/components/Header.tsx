"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  BsMoonStars,
  BsGithub,
  BsLinkedin,
  BsFillSunFill,
} from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
export default function Header() {
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme, systemTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="max-w-4xl mx-auto py-7    ">
      <div className="flex justify-between items-center ">
        <div>
          <Link href="/" className="text-3xl font-bold">
            {/* <Logo /> */}
            GK
            {/* Giorgi Kalatozi */}
          </Link>
        </div>
        <nav className="hidden lg:flex">
          <ul className="flex gap-4">
            <li>
              <Link
                className="dark:hover:text-gray-100 hover:text-gray-100 transition tracking-wide  dark:text-gray-300 text-gray-950 "
                href="/"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="dark:hover:text-gray-100  hover:text-gray-100 transition tracking-wide dark:text-gray-300 text-gray-950 "
                href="/"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="dark:hover:text-gray-100 hover:text-gray-100 transition tracking-wide dark:text-gray-300 text-gray-950"
                href="/"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                className="dark:hover:text-gray-100 hover:text-gray-100 transition tracking-wide dark:text-gray-300 text-gray-950"
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
              className="dark:text-gray-400  transition hover:text-white text-gray-950 "
              fontSize="20px"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/giorgikalatozi/"
            target="_blank"
          >
            <BsLinkedin
              fontSize="20px"
              className="dark:text-gray-400  transition hover:text-white text-gray-950  "
            />
          </Link>

          {currentTheme === "light" ? (
            <BsMoonStars
              onClick={() => setTheme("dark")}
              fontSize="20px"
              className="dark:text-gray-400  transition cursor-pointer hover:text-white  "
            />
          ) : (
            <BsFillSunFill
              onClick={() => setTheme("light")}
              fontSize="20px"
              className="dark:text-gray-400  transition cursor-pointer hover:text-white "
            />
          )}
        </div>
      </div>
    </div>
  );
}
