import React from 'react'

import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  return (
    <div className="portfolio min-h-[80vh] flex justify-center items-center bg-white pt-40 pb-10 max-w-screen-lg mx-auto text-center">
      <div className="container mx-auto">
        <div className="title text-secondary relative">
          <h1 className="font-bold text-5xl uppercase mb-3">contact section</h1>
          <div className="line flex justify-center mb-10">
            <div className="after:bg-secondary after:w-24 after:h-1 after:absolute max-sm:after:right-10 md:after:right-60 lg:after:right-96 after:mt-1"></div>
            <i className="fa-solid fa-star relative"></i>
            <div className="before:bg-secondary before:w-24 before:h-1 before:absolute max-sm:before:left-10 md:before:left-60 lg:before:left-96 before:mt-1"></div>
          </div>
        </div>
        <div className="form xl:mx-52 md:mx-52 sm:mx-5 max-sm:mx-5">
          <div className="relative overflow-hidden">
            <label
              htmlFor="name"
              className={`name text-primary absolute left-3 top-1/2 transform -translate-y-1/2 text-base opacity-70 transition-all duration-300 ${
                name ? 'focused' : ''
              }`}
            >
              userName:
            </label>
            <input
              onChange={handleInputChange(setName)}
              id="name"
              type="text"
              className="w-full outline-none border-b border-gray text-base p-3 rounded my-5"
              placeholder="userName"
              value={name}
            />
          </div>
          <div className="relative overflow-hidden">
            <label
              htmlFor="userAge"
              className={`name text-primary absolute left-3 top-1/2 transform -translate-y-1/2 text-base opacity-70 transition-all duration-300 ${
                userAge ? 'focused' : ''
              }`}
            >
              userAge:
            </label>
            <input
              onChange={handleInputChange(setUserAge)}
              id="userAge"
              type="text"
              className="w-full outline-none border-b border-gray text-base placeholder-transparent p-3 rounded my-5"
              placeholder="userAge"
              value={userAge}
            />
          </div>
          <div className="relative overflow-hidden">
            <label
              htmlFor="userEmail"
              className={`name text-primary absolute left-3 top-1/2 transform -translate-y-1/2 text-base opacity-70 transition-all duration-300 ${
                userEmail ? 'focused' : ''
              }`}
            >
              userEmail:
            </label>
            <input
              onChange={handleInputChange(setUserEmail)}
              id="userEmail"
              type="email"
              className="w-full outline-none border-b border-gray text-base placeholder-transparent p-3 rounded my-5"
              placeholder="userEmail"
              value={userEmail}
            />
          </div>
          <div className="relative overflow-hidden">
            <label
              htmlFor="userPassword"
              className={`name text-primary absolute left-3 top-1/2 transform -translate-y-1/2 text-base opacity-70 transition-all duration-300 ${
                userPassword ? 'focused' : ''
              }`}
            >
              userPassword:
            </label>
            <input
              onChange={handleInputChange(setUserPassword)}
              id="userPassword"
              type="password"
              className="w-full outline-none border-b border-gray text-base placeholder-transparent p-3 rounded my-5"
              placeholder="userPassword"
              value={userPassword}
            />
          </div>
          <button className="bg-primary px-3 py-2 text-white rounded flex justify-start">send Message</button>
        </div>
      </div>
    </div>
  );
}
