
import image1 from '../../images/poert1.png'
import image2 from '../../images/port2.png'
import image3 from '../../images/port3.png'
import React, { useState } from "react";



export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <div className='portfolio min-h-[80vh] flex justify-center items-center bg-white py-40 max-w-screen-lg mx-auto text-center'>
        <div className='container mx-auto'>
          <div className='title text-secondary relative'>
            <h1 className='font-bold text-5xl uppercase mb-3'>Portfolio Component</h1>
            <div className='line flex justify-center'>
              <div className='after:bg-secondary after:w-24 after:h-1 after:absolute max-sm:after:right-10 md:after:right-60 lg:after:right-96 after:mt-1'></div>
              <i className="fa-solid fa-star relative"></i>
              <div className='before:bg-secondary before:w-24 before:h-1 before:absolute max-sm:before:left-10 md:before:left-60 lg:before:left-96 before:mt-1'></div>
            </div>
          </div>

          <div className='grid xl:grid-cols-3 gap-10 sm:grid-cols-1 md:grid-cols-2 my-10 lg:px-5 ms:justfiy-center md:px-3 max-sm:px-3'>
      
            {[image1, image2, image3, image1, image2, image3].map((image, index) => (
              <div key={index} className="image cursor-pointer relative group"
              onClick={() => openModal(image)}>
                <img
                  src={image}
                  alt={`Portfolio Image ${index + 1}`} 
                  className="w-full h-auto rounded-lg"                
                />
                <div className="absolute inset-0 bg-primary/30 rounded-lg text-white flex justify-center items-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform transition-all">
                  <i className="fa-solid fa-plus text-6xl"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div
          className='bigimage bg-black/70 fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out opacity-100'
          onClick={closeModal} 
        >
          <div
            className="image h-96"
            onClick={(e) => e.stopPropagation()} 
          >
            <img className='mx-auto h-full' src={selectedImage} alt="Selected Portfolio" />
          </div>
        </div>
      )}
    </>
  );
}

