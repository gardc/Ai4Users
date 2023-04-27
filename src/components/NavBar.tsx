import Link from "next/link";
import LocaleSelection from "./LocaleSelection";
import React from "react";
import SocialServiceLogo from "./SocialServiceLogo";
import AiModelChangelog from "./AiModelChangelog";
import { changeLogItemsEn } from "@/pages/api/changelogItemsEn";

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
                <div className="flex items-center">
                    <div className="hidden lg:block">
                        <AiModelChangelog
                            title={"Recent changes to the AI model"}
                            listOfChanges={changeLogItemsEn}
                        />
                    </div>
                    <LocaleSelection />
                </div>
            </div>
        </div>
    );
};

export default NavBar;
