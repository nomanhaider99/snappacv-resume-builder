'use client'
import React, { JSXElementConstructor, ReactElement, useCallback, useMemo, useState } from 'react'
import Modal from '../models/Modal';
import Label from '../ui/Label';
import Input from '../ui/Input';
import Template from '../ui/Template';
import { IoAddCircle, IoRemoveCircle } from 'react-icons/io5';
import EducationBody from '../ui/EducationBody';
import ExperienceBody from '../ui/ExperienceBody';
import { skillsData } from '@/data/skills';
import Skill from '../ui/Skill';
import { templatesData } from '@/data/templates';
import { useForm } from 'react-hook-form'

enum STEPS {
    intro = 0,
    template = 1,
    profile = 2,
    education = 3,
    experience = 4,
    skills = 5,
}

const BuildResume = () => {
    const { register, handleSubmit } = useForm();
    const [step, setStep] = useState<STEPS>(STEPS.intro);
    const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
    /* eslint-disable react/jsx-key */

    const [educations, setEducations] = useState<ReactElement<any, any>[]>([<EducationBody />]);
    const [experiences, setExperiences] = useState<ReactElement<any, any>[]>([<ExperienceBody />]);

    const addEducation = useCallback(() => {
        setEducations((prevEducations) => [...prevEducations, <EducationBody />]);
    }, [setEducations]);

    const removeEducation = useCallback(() => {
        setEducations((prevEducations) => {
            if (prevEducations.length === 0 || prevEducations.length === 1) return prevEducations;
            return prevEducations.slice(0, -1);
        });
    }, [setEducations]);

    const addExperience = useCallback(() => {
        setExperiences((prevExperiences) => [...prevExperiences, <EducationBody />]);
    }, [setExperiences]);

    const removeExperience = useCallback(() => {
        setExperiences((prevExperiences) => {
            if (prevExperiences.length === 0 || prevExperiences.length === 1) return prevExperiences;
            return prevExperiences.slice(0, -1);
        });
    }, [setExperiences]);
    
    const handleTemplateClick = (title: string) => {
        setSelectedTemplate(title)
    }

    const handleSkillClick = (skill: string) => {
        setSelectedSkills((prevSelectedSkills) =>
          prevSelectedSkills.includes(skill)
            ? prevSelectedSkills.filter((s) => s !== skill) 
            : [...prevSelectedSkills, skill] 
        );
      };
    
    const actionLabel = useMemo(() => {
        return step === STEPS.skills ? 'Build' : 'Next';
    }, [step]);

    const secondaryActionLabel = useMemo(() => {
        return step === STEPS.intro ? undefined : 'Back';
    }, [step]);

    const heading = useMemo(() => {
        if (step == STEPS.intro) {
            return 'Welcome to SnappaCV Resume Builder'
        } else if (step == STEPS.template) {
            return 'Choose Your Template'
        } else if (step == STEPS.profile) {
            return 'Build Your Profile'
        } else if (step == STEPS.education) {
            return 'Add Your Education'
        } else if (step == STEPS.experience) {
            return 'List Your Experience'
        } else if (step == STEPS.skills) {
            return 'Highlight Your Skills'
        }
    }, [step]);

    const subHeading = useMemo(() => {
        if (step == STEPS.intro) {
            return "Let's start crafting a resume that showcases your story."
        } else if (step == STEPS.template) {
            return 'Pick a design that reflects your style and profession.'
        } else if (step == STEPS.profile) {
            return 'Highlight who you are and your career objective.'
        } else if (step == STEPS.education) {
            return 'Detail your academic background and achievements.'
        } else if (step == STEPS.experience) {
            return 'Showcase your career journey and accomplishments.'
        } else if (step == STEPS.skills) {
            return 'Present the abilities that set you apart.'
        }
    }, [step]);

    const onFormSubmit = (data: any) => {
        console.log(data);
    }

    const onNext = useCallback(() => {
        if (step !== STEPS.skills) {
            setStep(step + 1);
        } else {
            handleSubmit(onFormSubmit);
        }
    }, [step, setStep]);

    const onBack = useCallback(() => {
        if (step !== STEPS.intro) {
            setStep(step - 1);
        }
    }, [step, setStep]);

    let body = (
        <div className='flex flex-col gap-1'>
            <div className='my-2 text-lg font-bold track'>Features & Applications</div>
            <li>Simple and intuitive interface that guides you through each step of resume creation.</li>
            <li>Access a variety of modern, customizable templates that suit different industries and styles.</li>
            <li>Clear prompts and sections make it easy to fill in details without missing any important information.</li>
            <li>Tailor your resume to reflect your unique strengths, experience, and career goals.</li>
            <li> Templates are designed to pass Applicant Tracking Systems, helping your resume get noticed by recruiters.</li>
            <li>See real-time changes to your resume as you build it, ensuring it looks just right.</li>
            <li>Download your resume in multiple formats, ready to send out or print.</li>
        </div>
    )

    if (step == STEPS.template) {
        body = (
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                {
                    templatesData.map((template, index) => (
                        <Template
                            image={template.image as any}
                            title={template.title}
                            key={index}
                            selected={selectedTemplate === template.title}
                            onClick={handleTemplateClick}
                            {...register("template")}
                        />
                    ))
                }
            </div>
        )
    }

    if (step == STEPS.profile) {
        body = (
            <div className='w-full md:w-[75%] flex flex-col gap-4'>
                <div className='flex flex-col md:flex-row items-center justify-between gap-2'>
                    {/* First name */}
                    <div className='flex flex-col gap-1 w-full md:w-1/2'>
                        <Label
                            text='first name'
                         />
                        <Input
                            placeholder='Noman'
                            required
                            type='text'
                            {...register("firstName")}
                         />
                    </div>
                    {/* Last name */}
                    <div className='flex flex-col gap-1 w-full md:w-1/2'>
                        <Label
                            text='last name'
                         />
                        <Input
                            placeholder='Haider'
                            required
                            type='text'
                            {...register("lastName")}
                         />
                    </div>
                </div>
                <div className='flex md:flex-row flex-col items-center gap-2'>
                    <div className='flex flex-col gap-2 w-full md:w-1/2'>
                        <Label
                            text='city - state'
                         />
                        <Input
                            placeholder='Karachi'
                            required
                            type='text'
                            {...register("city")}
                         />
                    </div>
                    <div className='flex items-center w-full md:w-1/2 gap-1'>
                        <div className='flex flex-col gap-2 w-1/2'>
                            <Label
                                text='postal code'
                            />
                            <Input
                                placeholder='12345'
                                required
                                type='text'
                                {...register("postalCode")}
                            />
                        </div>
                        <div className='flex flex-col gap-2 w-1/2'>
                            <Label
                                text='country'
                            />
                            <Input
                                placeholder='Pakistan'
                                required
                                type='text'
                                {...register("country")}
                            />
                        </div>
                    </div>
                </div>
                {/* phone & email */}
                <div className='flex items-center justify-between gap-2'>
                    {/* First name */}
                    <div className='flex flex-col gap-1 w-1/2'>
                        <Label
                            text='phone'
                         />
                        <Input
                            placeholder='+92 300 1234567'
                            required
                            type='tel'
                            {...register("phone")}
                         />
                    </div>
                    {/* Last name */}
                    <div className='flex flex-col gap-1 w-1/2'>
                        <Label
                            text='email'
                         />
                        <Input
                            placeholder='noman@mail.com'
                            required
                            type='text'
                            {...register("email")}
                         />
                    </div>
                </div>
            </div>
        )
    }

    if (step == STEPS.education) {
        body = (
            <div className='flex flex-col gap-14 md:w-[75%] w-full'>
                <div className='flex justify-between items-center'>
                    <div className='text-black text-sm font-medium tracking-tighter'><span className='font-bold'>Note:</span>  You can add more than one education</div>
                    <div className='flex items-center gap-4'>
                        <div 
                            className='cursor-pointer'
                            onClick={removeEducation}
                        >
                            <IoRemoveCircle size={30} color='#715DE3' />
                        </div>
                        <div 
                            className='cursor-pointer'
                            onClick={addEducation}
                        >
                            <IoAddCircle size={30} color='#715DE3' />
                        </div>
                    </div>
                </div>
                {
                    educations.map((item, index) => (
                        <EducationBody
                            key={index}
                            serial={index + 1}
                         />
                    ))
                }
            </div>
        )
    }

    if (step == STEPS.experience) {
        body = (
            <div className='flex flex-col gap-14 md:w-[75%] w-full'>
                <div className='flex justify-between items-center'>
                    <div className='text-black text-sm font-medium tracking-tighter'><span className='font-bold'>Note:</span>  You can add more than one job experiences</div>
                    <div className='flex items-center gap-4'>
                        <div 
                            className='cursor-pointer'
                            onClick={removeExperience}
                        >
                            <IoRemoveCircle size={30} color='#715DE3' />
                        </div>
                        <div 
                            className='cursor-pointer'
                            onClick={addExperience}
                        >
                            <IoAddCircle size={30} color='#715DE3' />
                        </div>
                    </div>
                </div>
                {
                    experiences.map((item, index) => (
                        <ExperienceBody
                            key={index}
                            serial={index + 1}
                         />
                    ))
                }
            </div>
        )
    }

    if (step == STEPS.skills) {
        body = (
            <div className='w-[75%] flex flex-col gap-6'>
                {/* Skills Container */}
                <div className='text-md tracking-tighter text-zinc-800'><span className='font-medium text-black'>Note:</span> Select your desired skills to Showcase them in your resume</div>
                {/* Inputs */}
                <div className='grid grid-cols-2 md:grid-cols-8 gap-3'>
                    {
                        skillsData.map((skill, index) => (
                            <Skill
                                skill={skill.skill}
                                key={index}
                                selected={selectedSkills.includes(skill.skill)} 
                                onClick={handleSkillClick} 
                             />
                        ))
                    }
                </div>
            </div>
        )
    }
  return (
    <Modal
        actionLabel={actionLabel}
        body={body}
        heading={heading as any}
        secondaryActionLabel={secondaryActionLabel as any}
        subHeading={subHeading as any}
        action={onNext}
        secondaryAction={onBack}
     />
  )
}

export default BuildResume;