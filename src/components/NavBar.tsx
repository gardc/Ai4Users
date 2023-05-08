import Link from "next/link";
import LocaleSelection from "./LocaleSelection";
import React from "react";
import SocialServiceLogo from "./SocialServiceLogo";

/**
 * Interface for the input props for NavBar component.
 *
 * @param enableLinkToFrontPage - A boolean that determines if the NavBar logo should link to the front page or not
 */
interface NavBarProps {
    enableLinkToFrontPage: boolean;
}


/**
 * NavBar component that is used in the header of all pages. Contains a logo, and the LocaleSelection component.
 *
 * @param enableLinkToFrontPage - A boolean that determines if the NavBar logo should link to the front page or not
 */
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
                <div className="flex items-center">
                    <LocaleSelection />
                </div>
            </div>
        </div>
    );
};

export default NavBar;
