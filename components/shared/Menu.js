

"use client"
import React, { useState } from 'react'
import { useLenis } from 'lenis/react'
const Menu = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const sectionCount = 6;
  const sectionSize = 100 / sectionCount;

  const menus = [
    {label:"Home", link: "#home"},
    {label:"About", link: "#about"},
    {label:"Projects", link: "#projects"},
    {label:"Skills", link: "#skills"},
    {label:"Experience", link: "#experience"},
    {label:"Contact", link: "#contact"},
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
        <ul className='flex nav-items font-silk items-center justify-center gap-8 text-white text-xl uppercase pt-8'>
        {menus.map(
          (item, index) => (
            <li key={index} 
            className='nav-item opacity-0 -translate-y-full' 
            style={{ 
              backgroundPositionX: `${100 - sectionScrollPercentages[index].scrollInSection}%`,
              backgroundImage: "linear-gradient(to right, #F72C5B 50%, #fff 50%)"
              }}>
            <a className='cursor-pointer' href={`${item.link}`}>{item.label}</a>
          </li>
          
          )
        )}
       
        </ul>
    </div>
  )
}

export default Menu