import React from 'react'
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { MagicButton } from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
        <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        
    <Spotlight
      className="-top-40 -right-10 md:-right-32 md:-top-20 h-screen"
      fill="white"
    />
    
        </div>
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      {/* <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Backgrounds
      </p> */}
    

    </div>
      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
        <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p>
            <TextGenerateEffect 
              words='transforming concepts into seamless experiences'
              // className='text-center text-[40px] md:text-5xl lg:text-6xl'
              className='text-center text-[40px] md:text-5xl lg:text-6xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent'
            />
            <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
              Hi, I'm Yashesh, a Nextjs Developer based in India
            </p>
            <a href="#about">
              <MagicButton 
                title="Show my work"
                icon={<FaLocationArrow />}
                position='right'
                aria-label="Show my work"
              />
            </a>
        </div>
      </div>
    </div>
  )
}
export default Hero;