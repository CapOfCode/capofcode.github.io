"use client";

import { closeMenuAnimation, closeMenuTimeline } from "@/animation";
import { useEffect } from "react";

const MenuToggleButton = () => {  // Fixed the typo "Toogle" -> "Toggle"

    const handleCloseMenu = () => {
        if (closeMenuTimeline) {   // Ensure it's defined before playing
            closeMenuTimeline.play(); 
        } else {
            console.error("closeMenuTimeline is not defined");
        }
    };

    useEffect(() => {
        if (closeMenuAnimation) {  // Ensure the function exists
            closeMenuAnimation(); // Initialize animation on mount
        } else {
            console.error("closeMenuAnimation is not defined");
        }
    }, []);

    return (
        <div className="menu-close fixed top-[25px] right-[30px] bg-black rounded-full h-[50px] w-[50px] flex items-center justify-center overflow-hidden z-[9999]">
            <button onClick={handleCloseMenu} className='mobile-menu-icon w-[40px] flex h-[40px] min-w-[25px] gap-1.5 items-center justify-center relative '>
                <span className='mobile-menu-line-top bg-white h-[20px] w-[2px] rotate-45 translate-x-[8px] translate-y-[0px]'></span>
                <span className='mobile-menu-line-center bg-white h-[20px] w-[2px] flex opacity-0'></span>
                <span className='mobile-menu-line-bottom bg-white h-[20px] w-[2px] -rotate-45 -translate-x-[8px] translate-y-[0px] origin-center'></span>
            </button>
        </div>
    );
};

export default MenuToggleButton;
