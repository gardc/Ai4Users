import Link from "next/link";
import LocaleSelection from "./LocaleSelection";
import React from "react";
import SocialServiceLogo from "./SocialServiceLogo";

interface NavBarProps {
	enableLinkToFrontPage: boolean;
}

const NavBar = ({ enableLinkToFrontPage }: NavBarProps) => {
	return (
		<div className="bg-darkblue ">
			<div className="px-6 sm:px-12 pt-6 pb-6 flex justify-between items-center">
				{/* Left side */}
				{enableLinkToFrontPage ? (
					<Link href="/LandingPage">
						<SocialServiceLogo />
					</Link>
				) : (
					<div>
						<SocialServiceLogo />
					</div>
				)}

				{/* Right side */}
				<LocaleSelection />
			</div>
		</div>
	);
};

export default NavBar;
