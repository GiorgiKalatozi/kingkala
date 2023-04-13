type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="max-w-4xl mx-auto mt-32 ">
      <div className="flex">
        <div className="flex-1 flex flex-col justify-between gap-4">
          <h3 className=" text-[20px] text-gray-300">Hi, My name is</h3>
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
      </div>
    </div>
  );
}
