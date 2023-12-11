import Image from "next/image";
import bannerImage from "../../../assets/hero-bg.webp";
import { roboto_mono } from "@/app/font";
const Banner = () => {
  return (
    <div className={roboto_mono.className}>
      <div className="relative h-[90vh]">
 
        <div className="absolute  bg-dark h-[90vh] filter opacity-[0.125] blur-[2px] grayscale-[0.9]">
          <Image
            src={bannerImage}
            alt="banner-image"
            className="object-cover h-[90vh]"
          />
        </div>
        <div className="h-full w-full flex flex-col justify-center items-center gap-5">
          <div>

          <h1 className="text-6xl drop-customShadow font-medium mb-6">Hey, I&apos;m <span className="text-accent">Rashed!</span></h1>
          </div>
          <div>
            <p className="text-3xl text-center ">Full Stack Web <span className="text-accent">Developer</span> Who Enjoys Building <span className="text-accent">Fast</span>  </p>
            <p className="text-3xl text-center ">And  <span className="text-accent">Accessible</span> DigitalProducts.</p>
          </div>
          <div>
            <button className="text-darkLighter font-medium bg-accentRgb px-4 py-3 rounded-md shadow-customShadow hover:bg-accent hover:translate-x-1 transition-all ease-in-out">Contact Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
