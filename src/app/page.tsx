import Navbar from '@/components/navbar'
import React from 'react'

export default function Home() {
  return (
<div>
    <Navbar/>
    <div className='flex justify-center items-center'> 
    <h1 className='font-semibold md:text-5xl mt-20 capitalize font-serif text-2xl'>Welcome to my website</h1>
    </div>
  </div>  
  );
}



