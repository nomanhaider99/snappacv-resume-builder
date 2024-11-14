'use client'
import React, { ReactElement } from 'react'
import Button from '../ui/Button'

interface ModalProps {
    heading: string,
    subHeading: string,
    body: ReactElement,
    actionLabel: string,
    secondaryActionLabel: string,
    action: () => void,
    secondaryAction: () => void
} 

const Modal: React.FC<ModalProps> = ({
    actionLabel,
    body,
    heading,
    secondaryActionLabel,
    subHeading,
    action,
    secondaryAction
}) => {
  return (
    <div className='w-full flex flex-col gap-5 px-4 md:px-14 py-10'>
        <div className='flex flex-col gap-2'>
            <div className='text-4xl font-extrabold tracking-tighter leading-none text-black'>{heading}</div>
            <div className='text-lg text-zinc-800 tracking-tighter leading-none'>{subHeading}</div>
        </div>
        <div className='flex flex-col gap-8'>
            <div>{body}</div>
            <div className='flex items-center gap-3 w-full'>
                {
                    secondaryAction && secondaryActionLabel && (
                        <Button
                            text={secondaryActionLabel}
                            secondary
                            onClick={secondaryAction}
                            className='md:w-[20vw] w-1/2'
                        />
                    )
                }
                <Button
                    text={actionLabel}
                    onClick={action}
                    className='w-1/2 md:w-[20vw]'
                 />
            </div>
        </div>
    </div>
  )
}

export default Modal