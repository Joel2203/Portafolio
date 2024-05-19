import React from 'react'
import heroimage from '../assets/profile_picture.jpg'
import { TypeAnimation } from 'react-type-animation'
import cv from '../assets/cv.pdf';
 
const scrollToContact = (event) => {
  event.preventDefault();
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
};

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 grap-8 max-w-[1200px] md: h-[70vh] mx-auto py-8 bg-black'>
      
      <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>
          <img src={heroimage} alt="hero image"/>
      </div>

      <div className='col-span-2
      3 px-10 my-auto'>
        <h1 className="text-white text-1xl sm:text-5xl lg:text-8xl font-extrabold">
          <span className="primary-color">
            Yo soy
          </span>
          <TypeAnimation
            sequence={[
              'Ingeniero Informatico',
              1000,
              'Hacker',
              1000,
              'Direccion de proyectos informaticos',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            style={{ display: 'block' }}
          />

        </h1>

        <p className="text-white sm:text-lg my-6 lg:text-xl">
          Mi nombre es Joel y tengo experiencia en desarrollo web 
        </p>

        <div className='my-8'>
          <a 
            href={cv} 
            className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white"
            download
          >
            Descargar CV
          </a>
          <a 
            href="#contact" 
            onClick={scrollToContact}
            className="px-6 py-3 w-full rounded-xl border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none"
          >
            Contacto
          </a>
        </div>
      </div>

    </div>
  )
}

export default Hero