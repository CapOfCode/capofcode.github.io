import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-dark w-full  flex justify-center lg:justify-between items-center py-3">
      <small> Copyright &copy; Rashed</small>
      <div className="footer-socials">
        <Link
          href="https://www.linkedin.com/in/codewithrashed/"
          target="_blank"
        >
          <div className="footer-icon">
            <BsLinkedin className="linkedin-icon" />
          </div>
        </Link>
        <Link href="https://github.com/codewithrashed" target="_blank">
          <div className="footer-icon">
            <FaGithubSquare className="github-icon" />
          </div>
        </Link>
        <Link href="https://www.youtube.com/@codewithrashed" target="_blank">
          <div className="footer-icon">
            <BsYoutube className="youtube-icon" />
          </div>
        </Link>
        <Link href="https://twitter.com/codewithrashed" target="_blank">
          <div className="footer-icon">
            <FaTwitterSquare className="twitter-icon" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
