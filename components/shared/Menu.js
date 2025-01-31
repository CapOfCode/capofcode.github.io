"use client"
import React, { useEffect } from 'react'

const Menu = () => {
 
  return (
    <div className='navbar menu fixed top-0 w-full z-30 flex justify-center items-center gap-10'>
        <ul className='flex nav-items font-silk items-center justify-center gap-8 text-white text-xl uppercase pt-8'>
          <li className='nav-item opacity-0 -translate-y-full'>
            <a className='cursor-pointer' href='#'>Home</a>
          </li>
          <li className='nav-item opacity-0 -translate-y-[250%]'>
            <a className='cursor-pointer' href='#about'>About</a>
          </li>
          <li className='nav-item opacity-0 -translate-y-[250%]'>
          <a className='cursor-pointer' href='#projects'>Projects</a>
          </li>
          <li className='nav-item opacity-0 -translate-y-[250%]'>
          <a className='cursor-pointer' href='#skills'>Skills</a>
            </li>
          <li className='nav-item opacity-0 -translate-y-[250%]'>
              <a className='cursor-pointer' href='#experiance'>Experiance</a>
            </li>
          <li className='nav-item opacity-0 -translate-y-[250%]'>
          <a className='cursor-pointer' href='#contact'>Contact</a>
            
            </li>
        </ul>
    </div>
  )
}

export default Menu