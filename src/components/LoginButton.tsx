import Link from "next/link";
import React from "react";

/**
 * A reusable button component styled to suit the login page.
 *
 * @param color - The color of the button. Valid options are "lavaorange" and "lightblue".
 * @param href - The URL to navigate to when the button is clicked. If provided, the button will be a Link component.
 * @param children - The child elements to display inside the button. This will usually be text.
 *
 * @returns A React functional component representing a button element or a Link component.
 */

interface ButtonProps {
    color?: "lavaorange" | "lightblue";
    href: string;
    children: React.ReactNode;
}

const LoginButton: React.FC<ButtonProps> = ({
    color = "lavaorange",
    href,
    children,
}) => {
    const baseClasses =
        "flex items-center justify-center text-center break-words text-2xl w-full y-full py-8 px-4 rounded-3xl";

    let colorClasses;
    switch (color) {
        case "lavaorange":
            colorClasses = "bg-lavaorange text-white";
            break;
        case "lightblue":
            colorClasses = "bg-lightblue text-white border-primary border";
            break;
    }

    const classes = `${baseClasses} ${colorClasses}`;

    return (
        <Link href={href} className={classes}>
            {children}
        </Link>
    );
};

export default LoginButton;
