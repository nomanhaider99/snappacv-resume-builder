import React from 'react'
import Label from './Label'
import Input from './Input'

interface EducationBodyProps {
    serial?: number
}

const ExperienceBody: React.FC<EducationBodyProps> = ({ serial }) => {
    return (
        <div className='w-full flex flex-col gap-4'>
            {/* List of experience */}
            <div className='text-xl font-bold tracking-tighter text-black'>Experience: {serial}</div>
            <div className='w-full flex flex-col gap-4'>
                <div className='w-full flex md:flex-row flex-col justify-between items-center gap-1'>
                    {/* Job Title */}
                    <div className='flex flex-col gap-1 md:w-1/2 w-full'>
                        <Label
                            text='job title'
                        />
                        <Input
                            type='text'
                            placeholder='Software Engineer'
                            required
                        />
                    </div>
                    {/* Company */}
                    <div className='flex flex-col gap-1 md:w-1/2 w-full'>
                        <Label
                            text='company'
                        />
                        <Input
                            type='text'
                            placeholder='Microsoft'
                            required
                        />
                    </div>
                </div>
                <div className='w-full flex md:flex-row flex-col justify-between items-center gap-1'>
                    <div className='flex flex-col gap-1 md:w-1/2 w-full'>
                        <Label
                            text='location'
                        />
                        <Input
                            type='text'
                            placeholder="karachi"
                            required
                        />
                    </div>
                    <div className='w-full flex flex-col gap-1'>
                        <div className=''>
                            <Label
                                text='Start date'
                            />
                        </div>
                        <div className='w-full flex items-center gap-1'>
                            <div className='flex flex-col gap-1 w-1/2'>
                                <Input
                                    type='text'
                                    placeholder='Month'
                                    required
                                />
                            </div>
                            <div className='flex flex-col gap-1 w-1/2'>
                                <Input
                                    type='text'
                                    placeholder='Year'
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full flex md:flex-row flex-col justify-between items-center gap-1'>
                    <div className='flex flex-col gap-1 md:w-1/2 w-full'>
                        <Label
                            text='job type'
                        />
                        <Input
                            type='text'
                            placeholder='e.g Remote, Onsite'
                            required
                        />
                    </div>
                    <div className='w-full flex flex-col gap-1'>
                        <div className=''>
                            <Label
                                text='End date (or expected ending date)'
                            />
                        </div>
                        <div className='w-full flex items-center gap-1'>
                            <div className='flex flex-col gap-1 w-1/2'>
                                <Input
                                    type='text'
                                    placeholder='Month'
                                    required
                                />
                            </div>
                            <div className='flex flex-col gap-1 w-1/2'>
                                <Input
                                    type='text'
                                    placeholder='Year'
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceBody