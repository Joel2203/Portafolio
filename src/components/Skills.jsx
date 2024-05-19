import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import tw from '../assets/tw.png'
import react from '../assets/React.png'

const Skills = () => {
  return (
    <div className='border border-gray-600 bg-black text-gray-400 md:h-[200px] max-w-[1200px] mx-auto
    grid grid-cols-6 place-items-center md:flex md:justify-between md:items-center'>

        <h2 className="text-gray-700 text-2xl md:text-4xl font-bold m-4">
            Conocimientos <br/> en <br/> estas tegnologias
        </h2>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
            <img src={html} alt=""/>
            <p className="mt-2">HTML</p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
            <img src={css} alt=""/>
            <p className="mt-2">CSS</p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
            <img src={js} alt=""/>
            <p className="mt-2">JavaScript</p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
            <img src={tw} alt=""/>
            <p className="mt-2">Tailwind</p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
            <img src={react} alt=""/>
            <p className="mt-2">React</p>
        </div>
    </div>
  )
}

export default Skills