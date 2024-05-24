import React from 'react'
import profilepic from '../assets/profilepic'
import { TypeAnimation } from 'react-type-animation'


const Hero = () => {
  return (
    <div className='grid md:grid-cols-2 place-items-center max-w-[1250px] mx-auto bg-white mb-8 md:mb-32 mt-14'>
          <div className='max-w-[800px] '>
            <p className='text-gray-200 md:text-6xl text-3xl tracking-tight'>
               HEY, I AM <br />
               <span>JOHN DOE</span> <br />
               <TypeAnimation 
                  sequence={[
                    "Developer", 1000,
                    'Webdesigner',1000,
                    'Consultant', 1000
                  ]}
                  speed={50}
                  repeat={Infinity}
                  className='font-bold italic'
               />
            </p>

            <h2></h2>

          </div>
  
          <img src="" alt="" />
        
    </div>
  )
}

export default Hero