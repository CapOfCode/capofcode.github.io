"use client"
import Link from 'next/link'
import React from 'react'

const ContactButton = () => {
  return (
    <div>
        <Link
              href="#contact"
              className="text-darkLighter font-medium bg-accentRgb px-4 py-3 rounded-md shadow-customShadow hover:bg-accent hover:translate-x-1 transition-all ease-in-out"
            >
              Contact Me
            </Link>
    </div>
  )
}

export default ContactButton
