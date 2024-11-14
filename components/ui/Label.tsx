import React from 'react'

interface LabelProps {
    text: string
}

const Label: React.FC<LabelProps> = ({
    text
}) => {
  return (
    <div className='font-semibold text-black uppercase text-sm tracking-tighter'>{text}</div>
  )
}

export default Label