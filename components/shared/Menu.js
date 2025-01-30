import React from 'react'

const Menu = () => {
  return (
    <div className='navbar menu fixed top-0 w-full z-20 flex justify-center items-center gap-10'>
        <ul className='flex nav-items items-center justify-center gap-8 text-white text-xl uppercase pt-8'>
          <li className='nav-item text-white opacity-0 -translate-y-full'>Home</li>
          <li className='nav-item text-white opacity-0 -translate-y-full'>About</li>
          <li className='nav-item text-white opacity-0 -translate-y-full'>Projects</li>
          <li className='nav-item text-white opacity-0 -translate-y-full'>Skills</li>
          <li className='nav-item text-white opacity-0 -translate-y-full'>Experiance</li>
          <li className='nav-item text-white opacity-0 -translate-y-full'>Contact</li>
        </ul>
    </div>
  )
}

export default Menu