import Image from "next/image";
import React from "react";
import Headshot from "./../../../public/headshot.png";

type Props = {};
{
  /* <h3 className="text-3xl font-semibold text-gray-300">
            Hi, My name is Giorgi Kalatozi.
          </h3> */
}
export default function Hero({}: Props) {
  return (
    <div className="max-w-4xl mx-auto mt-40 ">
      <div className="flex">
        <div className="flex-1 justify-between ">
          <div className="text-6xl font-bold ">Software Developer.</div>
          <p className="text-gray-400 font-bold text-5xl">
            I build things for the web.
          </p>
        </div>
        {/* <Image
          className="object-cover"
          width={100}
          height={1000}
          alt="headshot"
          src={Headshot}
        /> */}
        {/* <p className="flex-1 ">Beautiful, fast and modern React UI library.</p> */}
      </div>

      <div></div>
    </div>
  );
}
