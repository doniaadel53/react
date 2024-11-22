import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar bg-secondary uppercase fixed left-0 right-0 z-50 '>
        <div className='container max-w-screen-lg mx-auto '>
           <div className='navbar-inner flex  justify-between items-center mx-auto py-7 '>
           <Link to="/home"><div className='logo text-white font-bold text-3xl'>
                <h1 className='cursor-pointer max-sm:ps-5 md:ps-5 sm:ps-5'>Start Framework
                </h1>
            </div></Link>
            <ul className='text-white font-bold text-l xl:flex md:flex justify-center max-sm:hidden sm:hidden  md:pe-3'>
                <NavLink to="/about"><li className='px-3 cursor-pointer py-3'>About</li></NavLink>
                <NavLink to="/portfolio"><li className='px-3 cursor-pointer py-3'>Portfolio</li></NavLink>
                <NavLink to="/contact"><li className='px-3 cursor-pointer py-3'>Contact</li></NavLink>
                
                
            </ul>
            <div className='xl:hidden md:hidden lg:hidden text-white text-3xl cursor-pointer pe-10 '>
            <i className="fa-solid fa-bars "></i>
            </div>
            
           </div>
        </div>
    </div>
  
  )
}
