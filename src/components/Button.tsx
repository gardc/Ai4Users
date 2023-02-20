import React from 'react';
import Link from "next/link";

interface ButtonProps {
    color?: 'blue' | 'red' | 'white' | 'green';
    href?: string;
    onClick?: () => void;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ color = 'blue', href, onClick, children }) => {
    const baseClasses = 'font-bold py-2 px-4 rounded';

    let colorClasses;
    switch (color) {
        case 'blue':
            colorClasses = 'bg-primary text-white';
            break;
        case 'red':
            colorClasses = 'bg-secondary text-white';
            break;
        case 'white':
            colorClasses = 'bg-white text-green-500 border-green-500 border';
            break;
        case 'green':
            colorClasses = 'bg-green-500 text-white';
            break;
        default:
            colorClasses = 'bg-blue-500 text-white';
    }

    const classes = `${baseClasses} ${colorClasses}`;

    if (href) {
        return (
            <Link href={href} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button className={classes} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
