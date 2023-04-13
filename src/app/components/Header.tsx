import { BsMoonStars } from "react-icons/bs";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="max-w-7xl mx-auto py-7 ">
      <div className="flex justify-between ">
        {/* LOGO */}
        <div>Giorgi Kalatozi</div>
        {/* NAVBAR */}
        <nav className="">
          <ul className="flex gap-4">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Contact</a>
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
