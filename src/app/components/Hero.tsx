import Image from "next/image";
import { Quote } from "../types";
import { FcIdea } from "react-icons/fc";
import { RiReactjsFill } from "react-icons/ri";

import ReactLogo from "../../../public/favicon.png";

type HeroProps = {
  quote: Quote;
};

export default function Hero({ quote }: HeroProps) {
  return (
    <div className="max-w-4xl mx-auto mt-32 ">
      <div className="flex flex-1 flex-col">
        <div className="flex">
          <div className="flex-1 flex flex-col justify-between gap-4">
            <h3 className=" text-[20px] text-gray-300">Hi 👋 , My name is</h3>
            <div className="text-6xl font-bold ">Giorgi Kalatozi.</div>
            <p className="font-bold bg-gradient-to-r from-gray-300 via-teal-100 to-teal-500 bg-clip-text text-transparent text-5xl">
              I build things for the web.
            </p>
            <div>
              <p className="text-gray-400">
                I’m a full stack software developer passionate about building
                beautiful, fast and modern
              </p>
              <p className="text-gray-400">
                web applications. Currently, I am committed to becoming a better
                developer with a
              </p>
              <p className="text-gray-400">
                passion for technology and a desire to constantly learn and
                improve.
              </p>
            </div>
          </div>
          <RiReactjsFill
            className=" text-red-600 bg-transparent rounded-full  shadow-red-500/50 hover:shadow-indigo-500/40 hover:text-blue-600 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] transition hover:brightness-150 brightness-150"
            size={200}
          />
        </div>

        <div className="flex basis-56 items-end flex-col justify-center ">
          <FcIdea size="50px" />
          <h3 className=" bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-4xl font-black">
            {quote.content}
          </h3>
          <h5 className="text-transparent bg-clip-text bg-gradient-to-r font-bold from-red-500 to-white text-[20px] ">
            {quote.author}
          </h5>
        </div>
      </div>
    </div>
  );
}
