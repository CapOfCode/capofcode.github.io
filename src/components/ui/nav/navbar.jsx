import Link from "next/link";
import { Avatar } from "../material_tailwind";

const NavBar = () => {
  return (
    <div>
      <nav className="bg-darkLighter w-full shadow shadowColor shadow-shadowColor flex justify-between items-center py-3">
        <div className="logo">
          <Link href="/">
            <Avatar
              src="https://i.ibb.co/sRJYQrx/profile-pic-2.png"
              alt="avatar"
              className="border-2 border-accent p-3 rounded-full shadow-lightDarker shadow-customShadow hover:shadow-customShadow focus:shadow-customShadow hover:shadow-accent  focus:shadow-accent transition-all ease-in-out"
            />
          </Link>
        </div>
        <div className="menu text-light flex justify-center gap-3 items-center">
          <Link href="project">Project</Link>
          <Link href="about">About</Link>
          <Link href="contact">Contact</Link>
          <button className="border-2 border-accent p-3 rounded-full shadow-lightDarker shadow-customShadow hover:shadow-customShadow focus:shadow-customShadow hover:shadow-accent  focus:shadow-accent transition-all ease-in-out">
            Dark
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
