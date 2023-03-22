import React from "react";
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
    color?: "lavaorange" | "beaver" | "primary" | "black";
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
const Button: React.FC<ButtonProps> = ({
    color = "lavaorange",
    href,
    onClick,
    children,
}) => {
    const baseClasses = "text-white rounded-full px-8 py-2 m-2 mt-16";

    let colorClasses;
    switch (color) {
        case "lavaorange":
            colorClasses = "bg-lavaorange text-white";
            break;
        case "beaver":
            colorClasses = "bg-beaver text-white";
            break;
        case "primary":
            colorClasses = "bg-primary text-black border-primary border";
            break;
        case "black":
            colorClasses = "bg-black text-white";
            break;
        default:
            colorClasses = "bg-blue-500 text-white";
    }

    const classes = `${baseClasses} ${colorClasses}`;

    if (href) {
        return (
            <div className={"flex"}>
                <Link href={href} className={classes}>
                    {children}
                </Link>
            </div>
        );
    }

    return (
        <button className={classes} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
