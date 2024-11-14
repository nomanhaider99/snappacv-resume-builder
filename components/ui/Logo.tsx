import React from 'react'
import LogoImage from '@/public/images/Logo.png'
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className='flex gap-1 items-center text-lg font-medium tracking-tighter text-black'>
        <div>
            <Image
                src={LogoImage}
                alt=''
                width={15}
                height={15}
             />
        </div>
        <div>SnappaCV</div>
      </div>
    </Link>
  )
}

export default Logo