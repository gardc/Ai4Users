import React from 'react';
import Link from "next/link";

/**
 * The props for the Button component.
 *
 * @param color - The color of the button. Valid options are "blue", "red", and "white".
 * @param href - The URL to navigate to when the button is clicked. If provided, the button will be a Link component.
 * @param onClick - The function to call when the button is clicked. If provided, the button will be a regular button element.
 * @param children - The child elements to display inside the button.
 */
interface ButtonProps {
    color?: 'blue' | 'red' | 'white';
    href?: string;
    onClick?: () => void;
    children: React.ReactNode;
}

/**
 * A reusable button component with customizable styling.
 *
 * @param color - The color of the button. Valid options are "blue", "red", and "white".
 * @param href - The URL to navigate to when the button is clicked. If provided, the button will be a Link component.
 * @param onClick - The function to call when the button is clicked. If provided, the button will be a regular button element.
 * @param children - The child elements to display inside the button. This will usually be text.
 *
 * @returns A React functional component representing a button element or a Link component.
 */
const Button: React.FC<ButtonProps> = ({ color = 'blue', href, onClick, children }) => {
    const baseClasses = 'font-bold py-2 px-4 rounded-xl';

    let colorClasses;
    switch (color) {
        case 'blue':
            colorClasses = 'bg-primary text-white';
            break;
        case 'red':
            colorClasses = 'bg-secondary text-white';
            break;
        case 'white':
            colorClasses = 'bg-tertiary text-primary border-primary border';
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
