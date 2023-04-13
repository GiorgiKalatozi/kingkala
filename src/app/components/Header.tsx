import Link from "next/link";
import { BsMoonStars } from "react-icons/bs";
import Logo from "./Logo";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="max-w-4xl mx-auto py-7 ">
      <div className="flex justify-between ">
        {/* LOGO */}
        <div>
          <h1 className="text-xl font-semibold">
            {/* <Logo /> */}
            Giorgi Kalatozi
          </h1>
        </div>
        {/* NAVBAR */}
        <nav className="">
          <ul className="flex gap-4">
            <li>
              <Link className="hover:underline " href="#">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:underline " href="#">
                Projects
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#">
                Skills
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {/* ICONS */}
        <div>
          <BsMoonStars />
        </div>
      </div>
    </div>
  );
}
