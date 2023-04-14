import Link from "next/link";
import { BsMoonStars, BsGithub, BsLinkedin } from "react-icons/bs";

export default function Header() {
  return (
    <div className="max-w-4xl mx-auto py-7 ">
      <div className="flex justify-between items-center ">
        <div>
          <Link href="/" className="text-3xl font-bold ">
            {/* <Logo /> */}
            GK
            {/* Giorgi Kalatozi */}
          </Link>
        </div>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link
                className="hover:text-gray-300 transition text-white "
                href="#"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-300 transition text-white "
                href="#"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-300 transition text-white"
                href="#"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-300 transition text-white"
                href="#"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {/* ICONS */}
        <div className="flex gap-4">
          <Link href="https://github.com/narutokalatozi" target="_blank">
            <BsGithub
              className="text-gray-400  transition hover:text-white"
              fontSize="20px"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/giorgikalatozi/"
            target="_blank"
          >
            <BsLinkedin
              fontSize="20px"
              className="text-gray-400  transition hover:text-white"
            />
          </Link>
          <BsMoonStars
            fontSize="20px"
            className="text-gray-400  transition cursor-pointer hover:text-white"
          />
        </div>
      </div>
    </div>
  );
}
