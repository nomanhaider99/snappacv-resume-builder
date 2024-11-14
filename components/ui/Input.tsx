import React from 'react'

interface InputProps {
    placeholder?: string,
    required?: boolean,
    type: "text" | "tel" | "number" | "email" | "password" | "month"
}

const Input: React.FC<InputProps> = ({ placeholder, required, type }) => {
  return (
    <input 
        type={type} 
        className='px-4 py-2 rounded-lg bg-transparent border-[0.5px] border-zinc-800 text-black'
        placeholder={placeholder}
        required={required}
    />
  )
}

export default Input