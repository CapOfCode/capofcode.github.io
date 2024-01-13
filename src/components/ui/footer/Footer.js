import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-dark">
      <div className=" max-w-[1240px]  px-[20px] mx-auto  flex justify-center flex-col lg:flex-row gap-3 lg:justify-between items-center py-3">
        <p className="text-lg drop-shadow lg:order-first order-last"> Copyright &copy; Rashed</p>
        <div className="footer-socials flex justify-center items-center gap-3 text-xl">
          <Link
            href="https://www.linkedin.com/in/codewithrashed/"
            target="_blank"
            className="bg-darkLighter p-2 flex justify-center items-center hover:scale-105 transition-all ease-in-out"
          >
            <div className="footer-icon">
              <BsLinkedin className="linkedin-icon" />
            </div>
          </Link>
          <Link
            href="https://github.com/codewithrashed"
            target="_blank"
            className="bg-darkLighter p-2 flex justify-center items-center hover:scale-105 transition-all ease-in-out"
          >
            <div className="footer-icon">
              <FaGithubSquare className="github-icon" />
            </div>
          </Link>
          <Link
            href="https://www.youtube.com/@codewithrashed"
            target="_blank"
            className="bg-darkLighter p-2 flex justify-center items-center hover:scale-105 transition-all ease-in-out"
          >
            <div className="footer-icon">
              <BsYoutube className="youtube-icon" />
            </div>
          </Link>
          <Link
            href="https://twitter.com/codewithrashed"
            target="_blank"
            className="bg-darkLighter p-2 flex justify-center items-center hover:scale-105 transition-all ease-in-out" 
          >
            <div className="footer-icon">
              <FaTwitterSquare className="twitter-icon" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
