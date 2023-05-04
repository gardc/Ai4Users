import Link from "next/link";
import React from "react";

/**
 * A reusable button component styled to suit the login page.
 *
 * @param color - The color of the button. Valid options are "lavaorange" and "prussian-blue".
 * @param href - The URL to navigate to when the button is clicked. If provided, the button will be a Link component.
 * @param children - The child elements to display inside the button. This will usually be text.
 *
 * @returns A React functional component representing a button element or a Link component.
 */

interface ButtonProps {
    color?: "lavaorange" | "prussian-blue";
    href: string;
    children: React.ReactNode;
    positionSmall?: number;
    positionLarge?: number;
}

const LoginButton: React.FC<ButtonProps> = ({
    color = "lavaorange",
    href,
    children,
    positionSmall,
    positionLarge,
}) => {
    const baseClasses =
        "flex items-center justify-center text-center break-words text-2xl w-full y-full py-8 px-4 rounded-3xl";

    let colorClasses;
    switch (color) {
        case "lavaorange":
            colorClasses = "bg-lavaorange text-white hover:bg-opacity-50 hover:drop-shadow-lg";
            break;
        case "prussian-blue":
            colorClasses = "bg-prussian-blue text-white hover:bg-darkblue hover:drop-shadow-lg";
            break;
    }
    let positionClass = "";
    if (positionSmall != null) {
        positionClass = positionClass.concat(" order-", String(positionSmall));
    }
    if (positionLarge != null) {
        positionClass = positionClass.concat(" md:order-", String(positionLarge));
    }

    const classes = `${baseClasses} ${colorClasses} ${positionClass}`;

    return (
        <Link href={href} className={classes}>
            {children}
        </Link>
    );
};

export default LoginButton;
