import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col mt-12 mb-24 lg:mb-48 h-full">
      <div className="flex justify-center">
        <Image
          src="https://res.cloudinary.com/dzcwsxuvc/image/upload/v1623923414/image_jjei7m.png"
          height={240}
          width={240}
          alt="My Picture"
        />
      </div>

      <div className="text-white text-center">
        <h1 className="text-5xl text-yellow-500 md:text-6xl">
          <span className="block text-5xl text-yellow-500 md:text-6xl">
            Hello,{" "}
          </span>
          I am Victor.
        </h1>
        <p className="my-8 text-lg md:text-2xl">I'm a web developer.</p>
        <p className="mt-4 mx-4 text-lg md:text-2xl md:mx-32">
          Please, feel free to go through my page and incase you need to{" "}
          <Link href="#footer">
            <span className="text-blue-500 underline">contact me</span>
          </Link>
          , don't hesitate.
        </p>
      </div>
    </div>
  );
}
