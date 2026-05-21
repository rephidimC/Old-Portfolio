import Link from "next/link";
import Image from "next/image";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { SiUdemy as Udemy } from "react-icons/si";

import Card from "./Background-card";

export default function Background() {
  return (
    <div className="bg-[url('https://res.cloudinary.com/dzcwsxuvc/image/upload/v1623923434/experience_algh1n.jpg')] bg-fixed bg-cover bg-center w-full md:h-full flex flex-col min-h-screen">
      <div className="flex flex-col justify-items-start self-center w-80 mt-4 md:w-full md:px-10 md:mt-20">
        <div className="flex flex-row justify-between mb-16 md:mb-24">
          <h1 className="text-4xl text-white font-medium md:tracking-wider md:text-5xl">
            Background
          </h1>
          <div className="flex flex-row text-gray-500 md:text-3xl lg:text-4xl">
            <FaChevronLeft className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20" />
            <FaChevronRight className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20" />
          </div>
        </div>

        <Card
          year={"2019-2021"}
          companyName={"Udemy"}
          personalNote={
            "Got my soft-landing to programming here. Thanks to Angela Yu for being a fantastic tutor. Interested? click the Udemy icon."
          }
        >
          <Link
            href={
              "https://www.udemy.com/course/the-complete-web-development-bootcamp/"
            }
            passHref
          >
            <div className="rounded-full bg-blue-600 h-20 w-20 flex items-center justify-center md:my-auto lg:h-24 lg:w-24">
              <Udemy className="h-14 w-14 lg:h-16 lg:w-16" />
            </div>
          </Link>
        </Card>

        <div className="h-px w-full bg-gray-500 my-12"></div>

        <Card
          year={"2012-2017"}
          companyName={"University of Ilorin"}
          personalNote={
            "5 years of my life in Mechanical Engineering, one I consider a huge part of me as well. Demanding, but hey! grades in the bag already."
          }
        >
          <Link href={"https://www.unilorin.edu.ng/"} passHref>
            <div className="rounded-full bg-white h-20 w-20 flex items-center justify-center md:my-auto lg:h-24 lg:w-24 overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dzcwsxuvc/image/upload/v1623923441/logo_gljy9b.png"
                alt="Unilorin logo"
                width={60}
                height={70}
              />
            </div>
          </Link>
        </Card>

        <div className="h-px w-full bg-gray-500 my-12"></div>

        <Card
          year={"2006-2012"}
          companyName={"Chapel Secondary School"}
          personalNote={
            "Jesus is our cornerstone! 4 words, but more than sufficient to describe my alma mata."
          }
        >
          <Link href={"https://www.chapelsecsch.com/"} passHref>
            <div className="rounded-full bg-gray-50 h-20 w-20 lg:h-24 lg:w-24 flex items-center justify-center md:my-auto overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dzcwsxuvc/image/upload/v1623923381/chapel-logo_z6c8o7.jpg"
                alt="Chapel Secondary School logo"
                width={95}
                height={95}
              />
            </div>
          </Link>
        </Card>
        <div className="h-px w-80 bg-gray-500 mt-8 mb-16 md:w-full"></div>
      </div>
    </div>
  );
}
