import React from 'react'
import { FaGithubSquare, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-xl mt-12'>
        
          {/* LEFT */}
          <div className='space-y-4'>
                <h3 className='text-2xl text-gray-200 font-semibold'>Official Links: </h3>
                <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
                  <a href='https://github.com/adrayandaleandrew/'><FaGithubSquare /></a>
                  <a href='https://www.linkedin.com/in/dale-andrew-adrayan-851622263/'><FaLinkedin /></a>
                </div>
          </div>

          {/* RIGHT */}
          <p className='text-gray-400'>@ 2024 Dale Andrew</p>


    </div>
  )
}

export default Footer