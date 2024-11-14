import Image from 'next/image'
import React from 'react'

interface TemplateProps {
    title: string,
    image: string,
    selected?: boolean,
    onClick?: (value: string) => void
}

const Template: React.FC<TemplateProps> = ({
    image,
    title,
    selected = false,
    onClick
}) => {
  return (
    <div
        className={`w-full cursor-pointer p-2 flex flex-col justify-between gap-2 rounded-lg border-[2px] ${selected ? 'border-lightpurple' : 'border-zinc-800/60'} transition-transform`}
        onClick={() => onClick && onClick(title)}
    >
        {/* Image */}
        <div className='w-full rounded-lg'>
            <Image
                alt=''
                src={image}
                height={400}
                width={400}
                className='rounded-lg'
            />
        </div>
        {/* Title */}
        <div className='text-lg font-medium tracking-tighter'>{title}</div>
    </div>
  )
}

export default Template
