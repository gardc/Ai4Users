import React from "react";
import Link from "next/link";

/**
 * The props for the ConsentButton component.
 *
 * @param href - The URL to navigate to when the button is clicked. If provided, the button will be a Link component.
 * @param children - The child elements to display inside the button.
 */
interface ConsentButtonProps {
    href: string;
    children: React.ReactNode;
}

/**
 * A reusable button component with customizable styling.
 *
 * @param href - The URL to navigate to when the button is clicked.
 * @param children - The child elements to display inside the button. This will usually be text.
 *
 * @returns A React functional component representing a button element or a Link component.
 */
const ConsentButton: React.FC<ConsentButtonProps> = ({ href, children }) => {
    return (
        <div className={"flex"}>
            <Link
                href={href}
                className={
                    "bg-prussian-blue hover:bg-opacity-70 font-semibold text-white rounded-2xl text-center m-2 sm:m-3 px-6 py-2 sm:py-3 w-32 sm:w-56 flex items-center justify-center"
                }
            >
                {children}
            </Link>
        </div>
    );
};

export default ConsentButton;
