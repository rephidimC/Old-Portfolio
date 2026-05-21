import { CgMail as Email, CgTwitter as Twitter } from "react-icons/cg";
import {
  AiFillLinkedin as LinkedIn,
  AiFillGithub as Github,
} from "react-icons/ai";
import Link from "next/link";

function Footer() {
  return (
    <footer id="footer" className="w-full pb-4 mt-auto md:text-xl">
      <p className="flex justify-center text-white underline mb-2">
        Contact me
      </p>
      <div className="flex justify-center text-white py-2">
        <Link href={"mailto:adelekeafolayan@gmail.com"} passHref>
          <div className="mr-4">
            <Email className="text-2xl" />
          </div>
        </Link>

        <Link href={"https://github.com/rephidimC"} passHref>
          <div className="mx-4">
            <Github className="text-2xl" />
          </div>
        </Link>

        <Link href={"https://twitter.com/RephidimC"} passHref>
          <div className="mx-4">
            <Twitter className="text-2xl" />
          </div>
        </Link>

        <Link
          href={"https://www.linkedin.com/in/victor-adeleke-afolayan/"}
          passHref
        >
          <div className="mx-4">
            <LinkedIn className="text-2xl" />
          </div>
        </Link>

        <Link href={"mailto:victor@pointblankdev.com"} passHref>
          <div className="ml-4">
            <Email className="text-2xl" />
          </div>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
