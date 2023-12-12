import Link from "next/link";
import { Avatar } from "../material_tailwind";
import { ThemeSwitcher } from "@/Theme/ThemeSwitcher";

const NavBar = () => {
  return (
    <div className="bg-dark shadow-shadowColor">
      <nav className="max-w-[1240px]  px-[20px] flex justify-between items-center py-3 mx-auto">
        <div className="logo">
          <Link href="#home">
            <Avatar
              src="https://i.ibb.co/sRJYQrx/profile-pic-2.png"
              alt="avatar"
              className="h-8 w-8 md:w-10 md:h-10 lg:w-12 lg:h-12 border-2 border-accent rounded-full shadow-lightDarker shadow-customShadow hover:shadow-customShadow focus:shadow-customShadow hover:shadow-accent  focus:shadow-accent transition-all ease-in-out"
            />
          </Link>
        </div>
        <div className="menu text-light flex justify-center gap-2 lg:gap-3 items-center">
          <Link className="hidden lg:flex" href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#projects">Project</Link>
          <Link href="#contact">Contact</Link>

          <ThemeSwitcher />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
