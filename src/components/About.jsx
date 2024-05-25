import React from 'react';

import {
  DiJavascript,
  DiReact,
  DiNodejsSmall,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiGithubBadge
} from 'react-icons/di';

import { RiTailwindCssFill } from "react-icons/ri";

import { SiPhp } from "react-icons/si";

const About = () => {
  return (
    <div className='max-w-[1300px] mx-auto p-6 grid md:grid-cols-2 gap-8 place-items-center' id='about'>

      <div className='bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6'>
          <DiHtml5 className='text-orange-600 ' />
          <DiCss3 className='text-blue-600 ' />
          <DiBootstrap className='text-purple-600 ' />
          <DiJavascript className='text-yellow-500 ' />
          <DiReact className='text-blue-500 ' />
          <DiNodejsSmall className='text-green-500 ' />

          <RiTailwindCssFill className='text-blue-400 ' /> 

          <SiPhp className='text-violet-400'/>
      </div>

      <div className='relative group'>
           <div className='w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg
           blur opacity-25 group-hover:opacity-100 transition duration-300'></div>
      
          <div className='relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
            <img src="{project1}" alt="project1" className='rounded-lg md:ma-w-[500px]' />
          </div>
       </div>


       <div className='p-6'>
           <h2 className='text-gray-200 text-3xl font-bold mb-4'>Skills</h2>
          <p className='text-gray-300 mb-4'>
            As a passionate web front-end developer with experience
          </p>
          <div className='md:flex flex-wrap gap-4 text-4xl justify-center hidden'>

          </div>
       
       </div>
    
    </div>
  )
}

export default About