import React from 'react'

export default function About() {
  return (
    <div className='home bg-primary min-h-[100vh] flex justify-center items-center text-white pt-28'>
<div className='container max-w-screen-lg mx-auto'>
    <div className='inner mx-auto flex flex-col justify-center items-center '>
            <h1 className=' font-bold text-5xl uppercase mb-3 max-sm:text-xl'> about component</h1>
           <div className='line flex relative'>
           <div className=' after:bg-white after:w-24 after:h-1 after:absolute after:right-8 after:mt-1'></div>
           <i className="fa-solid fa-star mb-3 relative"></i>
           <div className=' before:bg-white before:w-24 before:h-1 before:absolute before:left-8 before:mt-1'></div>
           </div>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-5 mx-auto px-10'>
                <p>Freelancer is a free bootstrap theme created by Route.
                    The download includes the complete source files including HTML, CSS, and JavaScript
                    as well as optional SASS stylesheets for easy customization.</p>
                <p>Freelancer is a free bootstrap theme created by Route. 
                    The download includes the complete source files including HTML, CSS, and JavaScript
                     as well as optional SASS stylesheets for easy customization.</p>
            </div>
    </div>
</div>
    </div>
  )
}
