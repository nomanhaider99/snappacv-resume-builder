'use client'
import { templatesData } from '@/data/templates'
import React, { useState } from 'react'
import Template from '../ui/Template'

const Templates = () => {
    const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

    const handleTemplateClick = (title: string) => {
        setSelectedTemplate(title)
    }
  return (
    <div className='flex flex-col gap-8 px-14 py-10'>
        {/* Heading */}
        <div className='text-5xl font-extrabold tracking-tighter text-black'>Trending Templates</div>
        {/* Templates */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            {
                templatesData.map((template, index) => (
                    <Template
                        image={template.image as any}
                        title={template.title}
                        key={index}
                        selected={selectedTemplate === template.title}
                        onClick={handleTemplateClick}
                     />
                ))
            }
        </div>
    </div>
  )
}

export default Templates