import Link from "next/link";
import { BsMoonStars } from "react-icons/bs";
import Logo from "./Logo";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="max-w-4xl mx-auto py-7 ">
      <div className="flex justify-between items-center ">
        {/* LOGO */}
        <div>
          <h1 className="text-3xl font-bold">
            {/* <Logo /> */}
            GK
            {/* Giorgi Kalatozi */}
          </h1>
        </div>
        {/* NAVBAR */}
        <nav className="">
          <ul className="flex gap-4">
            <li>
              <Link className="hover:underline text-[16px] " href="#">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:underline text-[16px] " href="#">
                Projects
              </Link>
            </li>
            <li>
              <Link className="hover:underline text-[16px]" href="#">
                Skills
              </Link>
            </li>
            <li>
              <Link className="hover:underline text-[16px]" href="#">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {/* ICONS */}
        <div>
          <BsMoonStars fontSize="20px" />
        </div>
      </div>
    </div>
  );
}
