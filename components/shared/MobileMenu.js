"use client"
import HoverText from "./HoverText";


const MobileMenu = () => {
 
    return (

        <div className="mobile-menu-container bg-transparent h-screen w-screen fixed inset-0 z-[999]">
          <div className="menu-items-container overflow-hidden h-full flex">
            
            <ul className="menu-items absolute left-0 top-0 bg-[#1d1d1d] text-white text-9xl overflow-hidden flex flex-col justify-center h-full w-1/2">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((item, index) => (
                <li key={index} className="overflow-hidden group h-auto">
                  <a
                    className="mobile-menu-item block transition-transform duration-300 ease-in-out uppercase"
                    href="#"
                  >
                    <HoverText>{item}</HoverText>
                  </a>
                </li>
              ))}
            </ul>


            <div className="menu-text-container absolute right-0 bottom-0  w-1/2 h-full bg-white ">
            
            </div>

          </div>


        </div>
   
    );
  };
  
  export default MobileMenu;
  