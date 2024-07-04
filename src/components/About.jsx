import React from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project4 from '../assets/project4.png';

import {
  DiJavascript,
  DiReact,
  DiNodejsSmall,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiGithubBadge,
  DiMysql 
} from 'react-icons/di';

import { RiTailwindCssFill } from "react-icons/ri";

import { SiPhp } from "react-icons/si";

const About = () => {
  return (
    <div
      className="max-w-[1300px] mx-auto p-6 grid md:grid-cols-2 gap-8 place-items-center"
      id="about"
    >
      {/* for Mobile */}
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 flex-wrap gap-4 text-xl justify-center hidden">  {/* add "flex" in classname if needed */}
        <DiHtml5 className="text-orange-600 " />
        <DiCss3 className="text-blue-600 " />
        <DiBootstrap className="text-purple-600 " />
        <DiJavascript className="text-yellow-500 " />
        <DiReact className="text-blue-500 " />
        <DiNodejsSmall className="text-green-500 " />
        <RiTailwindCssFill className="text-blue-400 " />
        <SiPhp className="text-violet-400" />
      </div>

      {/* PICTURE 1*/}
      <div className="relative group">
        <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>

        <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
          <img
            src={project1}
            alt="project1"
            className="rounded-lg md:ma-w-[500px]"
          />
        </div>
      </div>

      {/* INFO 1*/}
      <div className="p-6">
        <h2 className="text-gray-200 text-3xl font-bold mb-4">Skills</h2>
        <p className="text-gray-300 mb-4">
          As a passionate web front-end developer with experience in creating appealing web sites.
        </p>

        <div className="md:flex flex-wrap gap-4 text-4xl justify-center hidden">
          <DiHtml5 className="text-orange-600 " />
          <DiCss3 className="text-blue-600 " />
          <DiBootstrap className="text-purple-600 " />
          <DiJavascript className="text-yellow-500 " />
          <DiReact className="text-blue-500 " />
          <DiNodejsSmall className="text-green-500 " />
          <RiTailwindCssFill className="text-blue-400 " />
          <SiPhp className="text-violet-400" />
        </div>
      </div>


      {/* INFO 2 */}
      <div className="p-6">
        <h2 className="text-gray-200 text-3xl font-bold mb-4">Frontend Exprience</h2>
        <p className="text-gray-300 mb-4">
            Make your dream website to become a reality, responsive web applications using the latest front end technologies.
        </p>

        <div className="md:flex flex-wrap gap-4 text-4xl justify-center hidden">
          <DiHtml5 className="text-orange-600 " />
          <DiCss3 className="text-blue-600 " />
          <DiBootstrap className="text-purple-600 " />
          <DiJavascript className="text-yellow-500 " />
          <DiReact className="text-blue-500 " />
          <RiTailwindCssFill className="text-blue-400 " />
        </div>
      </div>

      {/* Picture 2*/}
      <div className="relative group">
        <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>

        <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
          <img src={project2} alt="project2" className="rounded-lg md:ma-w-[500px]" />
        </div>
      </div>

      {/* Picture 3*/}
      <div className="relative group">
        <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>

        <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
          <img src={project4} alt="project 4" className="rounded-lg md:ma-w-[500px]" />
        </div>
      </div>


      {/* INFO 3*/}
      <div className="p-6">
        <h2 className="text-gray-200 text-3xl font-bold mb-4">Backend Experience</h2>
        <p className="text-gray-300 mb-4">
          Skilled in developing backend solutions and authentication using backend technologies
        </p>

        <div className="md:flex flex-wrap gap-4 text-4xl justify-center hidden">
          <DiNodejsSmall className="text-green-500 " />
          <DiMysql className='text-blue-400'/> 
          <DiGithubBadge className='text-gray-500'/>
          <SiPhp className="text-violet-400" />
        </div>
      </div>
    </div>
  );
}

export default About