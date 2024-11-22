import React from 'react'

export default function Footer() {
  return (
    <>
    <div className='footer bg-secondary w-full text-white py-20 '>
        <div className='max-w-screen-xl mx-auto'>
       <div className='inner grid md:grid-cols-3 sm:grid-cols-1 gap-3 text-center mx-auto'>
       <div className='location'>
            <h3 className='text-3xl font-bold uppercase pb-5 '>Location</h3>
            <div className='text-l pb-3'>2215 John Daniel Drive</div>
            <p className='text-l '>Clark, MO 65243</p>
        </div>
        <div className='social'>
            <h3  className='text-3xl font-bold uppercase pb-5'>about the web</h3>
            <ul className='flex justify-center items-center'>
                <li className='w-9 h-9 border-2 rounded-full border-white me-2 flex justify-center items-center'><i className="fa-brands fa-facebook"></i></li>
                <li className='w-9 h-9 border-2 rounded-full border-white me-2 flex justify-center items-center '><i className="fa-brands fa-twitter"></i></li>
                <li className='w-9 h-9 border-2 rounded-full border-white me-2 flex justify-center items-center '><i className="fa-brands fa-linkedin-in"></i></li>
                <li className='w-9 h-9 border-2 rounded-full border-white me-2 flex justify-center items-center '><i className="fa-solid fa-globe"></i></li>
            </ul>
        </div>
        <div className='about '>
            <h3 className='text-3xl font-bold uppercase pb-5 '>about freelance</h3>
            <p className='text-l'>Freelance is a free to use, licensed Bootstrap theme</p>
            <p className='text-l text-center'>created by Route</p>
        </div>
       </div>
        </div>
    </div>
    <div className='end py-5 bg-[#1a252f] text-center text-white'>
        <p>Copyright © Your Website 2021</p>
    </div>
    </>
  )
}
