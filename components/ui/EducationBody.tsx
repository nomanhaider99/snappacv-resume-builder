import React from 'react'
import Label from './Label'
import Input from './Input'

interface EducationBodyProps {
    serial?: number
}

const EducationBody: React.FC<EducationBodyProps> = ({ serial }) => {
    return (
        <div className='w-full flex flex-col gap-4'>
            {/* List of education */}
            <div className='text-xl font-bold tracking-tighter text-black'>Education: {serial}</div>
            <div className='w-full flex flex-col gap-4'>
                <div className='w-full flex md:flex-row flex-col justify-between items-center gap-1'>
                    {/* School Name */}
                    <div className='flex flex-col gap-1 md:w-1/2 w-full'>
                        <Label
                            text='school name'
                        />
                        <Input
                            type='text'
                            placeholder='University of Karachi'
                            required
                        />
                    </div>
                    {/* School  Location */}
                    <div className='flex flex-col gap-1 md:w-1/2 w-full'>
                        <Label
                            text='school location'
                        />
                        <Input
                            type='text'
                            placeholder='Karachi'
                            required
                        />
                    </div>
                </div>
                <div className='w-full flex md:flex-row flex-col justify-between items-center gap-1'>
                    <div className='flex flex-col gap-1 md:w-1/2 w-full'>
                        <Label
                            text='degree'
                        />
                        <Input
                            type='text'
                            placeholder="Bachelor's"
                            required
                        />
                    </div>
                    <div className='flex flex-col gap-1 md:w-1/2 w-full'>
                        <div className=''>
                            <Label
                                text='Start date'
                            />
                        </div>
                        <div className='flex items-center gap-1'>
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
                            text='field of study'
                        />
                        <Input
                            type='text'
                            placeholder='Computer Science'
                            required
                        />
                    </div>
                    <div className='w-full md:w-1/2 flex flex-col gap-1'>
                        <div className=''>
                            <Label
                                text='Graduation date (or expected graduation date)'
                            />
                        </div>
                        <div className='flex items-center gap-1'>
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

export default EducationBody