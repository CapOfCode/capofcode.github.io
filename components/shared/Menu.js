

"use client"
import React, { useState } from 'react'
import { useLenis } from 'lenis/react'
const Menu = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const sectionCount = 6;
  const sectionSize = 100 / sectionCount;

  const menus = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#about" },
    { label: "Projects", link: "#projects" },
    { label: "Skills", link: "#skills" },
    { label: "Experience", link: "#experience" },
    { label: "Contact", link: "#contact" },
  ]
  // Calculate the scroll percentage relative to each section
  const sectionScrollPercentages = Array.from({ length: sectionCount }, (_, i) => ({
    section: i + 1,
    scrollInSection: Math.max(0, Math.min(100, (scrollPercentage - sectionSize * i) * (100 / sectionSize))),
  }));

  useLenis(({ scroll }) => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scroll / maxScroll) * 100;
    setScrollPercentage(Math.round(scrollPercent));
  });
  return (
    <div className='navbar menu fixed top-0 w-full z-30 flex justify-center items-center gap-10'>
      <div className='nav-items flex font-silk items-center justify-between text-white text-xl uppercase pt-8 w-full px-[30px]'>

        <ul className='left flex gap-8 items-center'>
          {menus.map(
            (item, index) => (
              <li key={index}
                className={`opacity-0 -translate-y-[250%] ${index === 0 ? "visible nav-item " : "hidden"}`}
                style={{
                  backgroundPositionX: `${100 - sectionScrollPercentages[index].scrollInSection}%`,
                  backgroundImage: "linear-gradient(to right, #F72C5B 50%, #fff 50%)"
                }}>
                <a className='cursor-pointer' href={`${item.link}`}>{item.label}</a>
              </li>

            )
          )}
        </ul>
        <ul className='right left flex items-center'>
          {menus.map(
            (item, index) => (
              <li key={index}
                className={`opacity-0 -translate-y-[250%] mr-6 ${index !== 0 ? "nav-item visible" : "hidden"}`}
                style={{
                  backgroundPositionX: `${100 - sectionScrollPercentages[index].scrollInSection}%`,
                  backgroundImage: "linear-gradient(to right, #F72C5B 50%, #fff 50%)"
                }}>
                <a className='cursor-pointer' href={`${item.link}`}>{item.label}</a>
              </li>

            )
          )}



          <span className='menu-divider w-[2px] bg-white h-0 flex opacity-0 mr-6 shrink-0'></span>

          <button className='menu-icon flex h-6 w-full min-w-[25px] gap-1.5 items-center justify-center'>
            <span className='menu-line bg-white opacity-0 h-[20px] w-[2px] flex -translate-x-[26px]'></span>
            <span className='menu-line bg-white opacity-0 h-[20px] w-[2px] flex -translate-x-[34px]'></span>
            <span className='menu-line bg-white opacity-0 h-[20px] w-[2px] flex -translate-x-[42px]'></span>
          </button>
        </ul>

      </div>
    </div>
  )
}

export default Menu