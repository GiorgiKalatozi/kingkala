import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="max-w-4xl mx-auto mt-32 ">
      <div className="flex flex-col">
        <div className="flex-1 flex flex-col justify-between gap-4">
          <h3 className=" text-[20px] text-gray-300">Hi 👋 , My name is</h3>
          <div className="text-6xl font-bold ">Giorgi Kalatozi.</div>
          <p className="text-gray-400 font-bold text-5xl">
            I build things for the web.
          </p>

          <div>
            <p className="text-gray-400">
              I’m a full stack software developer specializing in building
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
        {/* <Link
          href="#contact"
          className="bg-blue-600 mt-10 px-25 py-3 font-medium text-[18px] rounded-full w-36 flex items-center justify-center "
        >
          Contact Me!
        </Link> */}
      </div>
    </div>
  );
}
