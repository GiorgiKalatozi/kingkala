import { BsMoonStars } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="max-w-5xl mx-auto py-10">
      <div className="flex justify-between items-center">
        <div>
          <div className="text-black font-bold text-2xl dark:text-white">
            Giorgi Kalatozi
          </div>
          {/* <Image src={Logo} alt="logo" width={60} height={60} /> */}
        </div>
        <div className="flex items-center">
          <div className="flex gap-5 text-lg">
            <div>
              <Link
                to="/"
                className=" text-slate-500 transition hover:text-slate-100"
              >
                Home
              </Link>
            </div>
            <Link
              to="/"
              className=" text-slate-500 transition hover:text-slate-100"
            >
              About
            </Link>
            <Link
              to="/"
              className=" text-slate-500 transition hover:text-slate-100"
            >
              Projects
            </Link>
            <Link
              to="/"
              className=" text-slate-500 transition hover:text-slate-100"
            >
              Skills
            </Link>
            <Link
              to="/"
              className=" text-slate-500 transition hover:text-slate-100"
            >
              Blog
            </Link>
            <Link
              to="/"
              className=" text-slate-500 transition hover:text-slate-100"
            >
              Guestbook
            </Link>
          </div>
        </div>
        <div>
          <div>
            {/* {currentTheme === "dark" ? ( */}
            <BsMoonStars className="cursor-pointer" color="white" size={25} />
            {/* <BsSun className="cursor-pointer" size={25} color="black" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
