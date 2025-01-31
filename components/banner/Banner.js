import { AnimatedScrollMouse } from "../shared/AnimatedIcons";

const Banner = () => {
  return (
    <div id='home'>
      <div className='min-h-screen bg-black w-full text-content flex flex-col justify-center items-center relative z-10 overflow-hidden pointer-events-none'>
        <div className='overflow-hidden'>
          <h3 className="banner-title font-silk text-9xl flex justify-center items-center relative z-10 uppercase overflow-hidden text-white opacity-0 translate-y-full">
            Rashed
          </h3>
        </div>
        <div className='divider h-[2px] bg-white my-4 opacity-0 w-0'></div>
        <div className='overflow-hidden'>
          <h4 className="banner-subtitle font-silk uppercase text-white text-4xl opacity-0 -translate-y-full font-bold">
            Full Stack Developer
          </h4>
        </div>
        <h2 className="based-text font-silk font-normal text-white absolute bottom-[30px] opacity-0">Based in Bangladesh</h2>
        <div className="scroll-indicator absolute left-[15px] bottom-[100px] opacity-0">
        <AnimatedScrollMouse/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
