import Link from "next/link";
import LocaleSelection from "./LocaleSelection";
import React from "react";
import SocialServiceLogo from "./SocialServiceLogo";
import AiModelChangelog from "./Changelog";
import { changeLogItemsEn } from "@/pages/api/changelogItemsEn";
import router from "next/router";
import { changeLogItemsNo } from "@/pages/api/changelogItemsNo";
import { changeLogItemsDe } from "@/pages/api/changelogItemsDe";

interface NavBarProps {
    enableLinkToFrontPage: boolean;
    enableChangelog: boolean;
    changelogTitle: string;
    changelogItems: {
        dateOfChange: string;
        titleOfChange: string;
        changeDescription: string;
        readMoreLink: string;
    }[];
}

const NavBar = ({
    enableLinkToFrontPage,
    enableChangelog,
    changelogTitle,
    changelogItems,
}: NavBarProps) => {
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
                    {enableChangelog && (
                        <div className="hidden lg:block">
                            <AiModelChangelog
                                title={changelogTitle}
                                listOfChanges={changelogItems}
                            />
                        </div>
                    )}

                    <LocaleSelection />
                </div>
            </div>
        </div>
    );
};

export default NavBar;
