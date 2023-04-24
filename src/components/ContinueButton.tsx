import Link from "next/link";
import React from "react";

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

interface ButtonProps {
	color?: "lavaorange" | "primary" | "black";
	href?: string;
	onClick?: () => void;
	children: React.ReactNode;
}

const ContinueButton: React.FC<ButtonProps> = ({
	color = "lavaorange",
	href,
	onClick,
	children,
}) => {
	const baseClasses = "text-center  py-1 px-2 m-2 lg:py-3 lg:px-4 lg:m-0 rounded-md";

	let colorClasses;
	switch (color) {
		case "lavaorange":
			colorClasses = "bg-violet text-white";
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
		<div>
			<button className={classes} onClick={onClick}>
				{children}
			</button>
		</div>
	);
};

export default ContinueButton;
