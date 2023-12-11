import Image from "next/image";
import bannerImage from "../../../assets/hero-bg.webp";
import { roboto_mono } from "@/app/font";
const Banner = () => {
  return (
    <div className={roboto_mono.className}>
      <div className="relative">
        {/* filter: opacity(.125) blur(2px) grayscale(.9) */}
        <div className="absolute  bg-dark h-[90vh] filter opacity-[0.125] blur-[2px] grayscale-[0.9]">
          <Image
            src={bannerImage}
            alt="banner-image"
            className="object-cover h-[90vh]"
          />
        </div>
        <div>
          <h1>Hey, I&apos;m Rashed!</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
