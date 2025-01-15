import Image from "next/image";
import bannerImage from "../../../assets/hero-bg.webp";
import { roboto_mono } from "@/app/font";
import Link from "next/link";
const Banner = () => {
  return (
    <div className={roboto_mono.className}>
      <div className="relative h-[90vh]">
        <div className="absolute  bg-dark h-[90vh] w-full filter opacity-[0.125] blur-[2px] grayscale-[0.9]">
          <Image
            src={bannerImage}
            alt="banner-image"
            className="object-cover h-[90vh] w-full"
          />
        </div>
        <div className="h-full max-w-[1240px]  px-[20px] mx-auto flex flex-col justify-center items-center gap-5">
          <div>
            <h1 className="text-center text-3xl md:text-4xl lg:text-6xl drop-customShadow font-medium mb-6">
              Hey, I&apos;m <span className="text-accent">Rashed!</span>
            </h1>
          </div>
          <div className="text-xl md:text-2xl lg:text-3xl text-center w-full ">
            <p>
              Full Stack Web <span className="text-accent">Developer</span> Who
              Enjoys Building <br className="hidden lg:block" />
              <span className="text-accent">Fast And</span>
              <br className="md:hidden" />
              <span className="text-accent"> Accessible </span>
              Digital Products.
            </p>
          </div>
          <div className="mt-4 z-50">
            <Link
              href="#contact"
              className="cursor-pointer text-darkLighter font-medium bg-accentRgb px-4 py-3 rounded-md shadow-customShadow hover:bg-accent hover:translate-x-1 transition-all ease-in-out"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
