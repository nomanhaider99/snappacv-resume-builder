import React from 'react'
import Logo from '../ui/Logo'
import { FaRegCopyright } from 'react-icons/fa'
import Image from 'next/image'
import Instagram from '@/public/images/instagram.png'
import LinkedIn from '@/public/images/linkedIn.png'
import Gmail from '@/public/images/gmail.png'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='w-full flex md:flex-row flex-col justify-between md:items-center px-4 md:px-14 py-10 gap-10 md:gap-0 border-t-[0.5px] border-lightpurple/30'>
        {/* Logo and Copyright */}
        <div className='flex flex-col justify-between md:gap-8 gap-3'>
            {/* logo */}
            <div>
                <Logo />
            </div>
            {/* copyright */}
            <div className='tracking-tighter text-zinc-800 flex items-center gap-1'>copyright <FaRegCopyright color='#000' /> 2024 SnappaCV</div>
        </div>
        <div className='flex flex-col gap-2'>
            <div className='text-lg tracking-tighter'>Contact Developer / Owner</div>
            <div className='flex items-center gap-3'>
                <div>
                    <Link href="https://www.linkedin.com/in/nomanhaider99">
                        <Image
                            src={LinkedIn}
                            alt=''
                            height={25}
                            width={25}
                        />
                    </Link>
                </div>
                <div>
                    <Link href="https://www.instagram.com/noman.haider99/">
                        <Image
                            src={Instagram}
                            alt=''
                            height={25}
                            width={25}
                        />
                    </Link>
                </div>
                <div>
                    <Link href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCCRnKhtDNZDXdSVpbQbbwDKxZrhGzrPNVdCDBXdNmQDkWBlLBZdPNdNFzXJMSvJGNPBsB">
                        <Image
                            src={Gmail}
                            alt=''
                            height={25}
                            width={25}
                        />
                    </Link>
                </div>
            </div>
            {/* Phone */}
            <div>
                <div className='font-medium tracking-tighter text-sm'>noman567n@gmail.com</div>
                <div className='font-medium tracking-tighter text-sm'>+92 318 2454773</div>
            </div>
        </div>
    </div>
  )
}

export default Footer