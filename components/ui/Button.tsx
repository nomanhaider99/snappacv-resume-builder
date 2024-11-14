import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import React from 'react';

interface ButtonProps {
    text: string;
    secondary?: boolean;
    onClick?: () => void;
    className?: string;
    href?: Url;
}

const Button: React.FC<ButtonProps> = ({
    text,
    secondary,
    onClick,
    className,
    href,
}) => {
    const buttonClasses = `${className} px-4 py-2 rounded-lg text-sm ${
        secondary ? 'bg-transparent' : 'bg-lightpurple'
    } ${secondary ? 'border-[0.5px]' : 'border-none'} ${
        secondary ? 'border-lightpurple' : ''
    } ${secondary ? 'text-lightpurple' : 'text-white'}`;

    return href ? (
        <Link href={href} className={buttonClasses}>
            {text}
        </Link>
    ) : (
        <button className={buttonClasses} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
