import Link from "next/link";
import { Avatar } from "../material_tailwind";
import { ThemeSwitcher } from "@/Theme/ThemeSwitcher";

const NavBar = () => {
  return (
    <div>
      <nav className="bg-dark w-full shadow-shadowColor flex justify-between items-center py-3">
        <div className="logo">
          <Link href="/">
            <Avatar
              src="https://i.ibb.co/sRJYQrx/profile-pic-2.png"
              alt="avatar"
              className="border-2 border-accent rounded-full shadow-lightDarker shadow-customShadow hover:shadow-customShadow focus:shadow-customShadow hover:shadow-accent  focus:shadow-accent transition-all ease-in-out"
            />
          </Link>
        </div>
        <div className="menu text-light flex justify-center gap-3 items-center">
          <Link href="project">Project</Link>
          <Link href="about">About</Link>
          <Link href="contact">Contact</Link>

          <ThemeSwitcher/>
          
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
