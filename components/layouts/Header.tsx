import React from 'react'
import Logo from '../ui/Logo'
import Link from 'next/link'
import Button from '../ui/Button'

const Header = () => {
  return (
    <div className='w-full flex justify-between items-center px-4 md:px-14 py-5'>
        {/* Logo */}
        <div>
            <Logo />
        </div>
        {/* Links */}
        <div className='hidden md:flex gap-4 text-sm font-light text-zinc-600'>
            <Link 
                href={"/"}
                className='hover:text-lightpurple'
            >
                Home
            </Link>
            <Link 
                href={"/templates"}
                className='hover:text-lightpurple'
            >
                Templates
            </Link>
            <Link 
                href={"/build"}
                className='hover:text-lightpurple'
            >
                Build resume
            </Link>
        </div>
        {/* Buttons */}
        <div className='flex items-center gap-3'>
            <Button
                text='Explore now'
                secondary
                href='/templates'
             />
        </div>
    </div>
  )
}

export default Header