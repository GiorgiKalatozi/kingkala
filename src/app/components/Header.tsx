import React from "react";
import Logo from "@/app/components/Logo";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">
            <Logo />
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Guestbook</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
