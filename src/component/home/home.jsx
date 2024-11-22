import React from 'react'
import homeimg from '../../images/avataaars.svg'
export default function Home() {
  return (
    <div className='home min-h-[80vh] flex justify-center items-center bg-primary text-white pt-40 pb-10'>
<div className='container max-w-screen-xl mx-auto'>
    <div className='inner mx-auto flex flex-col justify-center items-center '>
            <img className='w-72 mb-5' src={homeimg} alt="" />
            <h1 className=' font-bold text-5xl uppercase mb-3'> start Framework</h1>
           <div className='line flex relative'>
           <div className=' after:bg-white after:w-24 after:h-1 after:absolute after:right-8 after:mt-1'></div>
           <i className="fa-solid fa-star mb-3 relative"></i>
           <div className=' before:bg-white before:w-24 before:h-1 before:absolute before:left-8 before:mt-1'></div>
           </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
    </div>
</div>
    </div>
  )
}
