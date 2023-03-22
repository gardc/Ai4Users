import Link from "next/link";
import LocaleSelection from "./LocaleSelection";
import React from "react";
import SocialServiceLogo from "./SocialServiceLogo";

const NavBar = () => {
    return (
        <div className="bg-sky-blue ">
            <div className="px-12 pt-12 pb-8 flex justify-between">
                {/* Left side */}
                <div>
                    <Link
                        href="/LandingPage"
                        //className="italic text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-700"
                    >
                        <SocialServiceLogo />
                    </Link>
                </div>
                {/* Right side */}
                <LocaleSelection />
            </div>
        </div>
    );
};

export default NavBar;
