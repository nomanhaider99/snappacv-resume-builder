import { featuresData } from '@/data/features'
import React from 'react'
import FeatureCard from '../ui/FeatureCard'

const Features = () => {
  return (
    <div className='w-full px-14 py-10 flex flex-col gap-14'>
        {/* Headings */}
        <div className='w-full flex justify-between items-center'>
            {/* Right */}
            <div className='w-[40%] uppercase text-4xl font-extrabold tracking-tighter text-black leading-none'>Why should you build resume here</div>
            {/* Left */}
            <div className='w-[60%] text-zinc-800 tracking-tighter leading-5'>Build your resume with us to stand out in today’s competitive job market. We don’t just create templates; we design personalized resumes that highlight your unique skills, experience, and achievements, helping you make a strong impression on potential employers. Our team understands the latest industry trends and the elements that hiring managers are looking for, ensuring your resume is optimized to pass through applicant tracking systems and grab attention. With our expertise, you’ll have a resume that not only looks professional but also effectively tells your story, making it easier for you to land the job you want.</div>
        </div>
        {/* Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                featuresData.map((feature, index) => (
                    <FeatureCard
                        title={feature.title}
                        icon={feature.icon}
                        description={feature.description}
                        key={index}
                     />
                ))
            }
        </div>
    </div>
  )
}

export default Features