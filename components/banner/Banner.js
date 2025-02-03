import { AnimatedScrollMouse } from "../shared/AnimatedIcons";

const Banner = () => {
  return (
    <div id='home' className="min-h-screen">
      <div className='min-h-screen fixed bg-black w-full text-content flex flex-col justify-center items-center z-10 overflow-hidden pointer-events-none'>
        <div className='overflow-hidden'>
          <h3 className="banner-title font-jer text-center text-9xl flex justify-center items-center relative z-10 uppercase overflow-hidden text-white opacity-0 translate-y-full">
          I build cool stuff <br></br> that actually works.
          {/* At least, it worked on my machine. */}
          </h3>
        </div>
  

        <div className="scroll-indicator absolute bottom-[100px] opacity-0">
          <AnimatedScrollMouse />
        </div>
      </div>
    </div>
  );
};

export default Banner;
