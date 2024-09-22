"use client"
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="gap-5 flex bg-blue-900 items-center justify-between text-white h-auto w-full p-2 md:p-6">
    <h1 className="text-lg md:text-3xl font-semibold">
      My Website
    </h1>
    <div className="flex text-sm md:text-lg items-center justify-end gap-2 md:gap-10">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/services">Services</Link>

    </div>
  </div>
  
  )
}

export default Navbar