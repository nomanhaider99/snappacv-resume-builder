import React from 'react'
import Vector1 from '@/public/images/Vector1.png'
import Vector2 from '@/public/images/Vector2.png'
import Image from 'next/image'
import Button from '../ui/Button'

const Hero = () => {
  return (
    <div className='md:px-10 px-4 w-full flex flex-col gap-5 items-center pt-24 pb-36'>
        {/* Upper */}
        <div className='flex justify-between items-center md:px-5 px-0 gap-10'>
            {/* Left shape */}
            <div className='hidden md:block'>
                <Image
                    src={Vector1}
                    alt=''
                    height={100}
                    width={150}
                 />
            </div>
            {/* Texts */}
            <div className='flex flex-col items-center gap-4'>
                {/* Heading */}
                <div className='uppercase md:text-5xl text-3xl text-center leading-none font-extrabold text-black tracking-tighter'>The Only Resume Bulder that increase your job accuration</div>
                {/* para */}
                <div className='text-lg text-zinc-800 text-center tracking-tighter leading-6 md:w-1/2 w-full'>Build a resume that stands out with ease. Our tool helps you create a professional, personalized resume, highlighting your skills and achievements to make a lasting impression.</div>
            </div>
            {/* Right shape */}
            <div className='hidden md:block'>
                <Image
                    src={Vector2}
                    alt=''
                    height={100}
                    width={150}
                 />
            </div>
        </div>
        {/* Lower */}
        <div className='flex items-center gap-5'>
            <Button
                text='Build Resume'
                href='/build'
             />
            <Button
                text='Explore Features'
                secondary
                href='/templates'
             />
        </div>
    </div>
  )
}

export default Hero