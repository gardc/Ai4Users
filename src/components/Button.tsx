import React from "react";
import Link from "next/link";

/**
 * The props for the Button component.
 *
 * @param color - The color of the button. Valid options are "orange", and "blue". Defaults to black if color not provided.
 * @param href - The URL to navigate to when the button is clicked. If provided, the button will be a Link component.
 * @param onClick - The function to call when the button is clicked. If provided, the button will be a regular button element.
 * @param children - The child elements to display inside the button.
 */
interface ButtonProps {
    color?: "orange" | "blue";
    href?: string;
    onClick?: () => void;
    children: React.ReactNode;
    type?: "button" | "submit" | "reset" | undefined;
    disabled?: boolean;
    loading?: boolean;
}

/**
 * A reusable button component with customizable styling.
 *
 * @param color - The color of the button. Valid options are "blue", "red", and "white".
 * @param href - The URL to navigate to when the button is clicked. If provided, the button will be a Link component.
 * @param onClick - The function to call when the button is clicked. If provided, the button will be a regular button element.
 * @param children - The child elements to display inside the button. This will usually be text.
 * @param type - Defaults to button, set to "submit" if the component is to be used in a form.
 * @param disabled - Should the button be disabled (not accessible)?
 * @param loading - Should this button be loading?
 *
 * @returns A React functional component representing a button element or a Link component.
 */
const Button: React.FC<ButtonProps> = ({
    color,
    href,
    onClick,
    children,
    type = "button",
    disabled = false,
    loading = false,
}) => {
    const baseClasses = "text-white rounded-full px-8 py-2 m-2";

    let colorClasses;
    switch (color) {
        case "orange":
            colorClasses = "bg-orange hover:bg-opacity-70 text-white";
            break;
        case "blue":
            colorClasses = "bg-prussian-blue hover:bg-opacity-70 text-white";
            break;
        default:
            colorClasses = "bg-black hover:bg-opacity-70 text-white";
    }

    let statusClass;
    if (disabled) statusClass = `bg-lightgray hover:bg-opacity-100 cursor-not-allowed`;
    if (loading) statusClass = `bg-opacity-70 cursor-wait`;

    const classes = `${baseClasses} ${colorClasses} ${statusClass}`;

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
        <button className={classes} onClick={onClick} type={type} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
