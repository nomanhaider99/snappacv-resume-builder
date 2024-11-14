import React from 'react'

interface FeatureCardProps {
    title: string,
    description: string,
    icon: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({
    description,
    icon,
    title
}) => {
  return (
    <div className='w-full md:w-[25vw] px-4 py-2 rounded-lg bg-transparent border-[0.5px] border-lightpurple flex flex-col gap-2 shadow-sm shadow-lightpurple'>
        {/* Icon */}
        <div className='text-4xl'>{icon}</div>
        {/* Title */}
        <div className='text-lg font-semibold tracking-tighter'>{title}</div>
        {/* Description */}
        <div className='text-sm text-zinc-800 tracking-tighter leading-4'>{description}</div>
    </div>
  )
}

export default FeatureCard