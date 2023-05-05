import { changeLogItemsDe } from "@/pages/api/changelogItemsDe";
import { changeLogItemsEn } from "@/pages/api/changelogItemsEn";
import { changeLogItemsNo } from "@/pages/api/changelogItemsNo";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import ExpandableInformationBox from "./ExpandableInformationBox";
import Link from "next/link";
import React from "react";

/**
 * A footer component, displaying the version of the AI model used in the service, and a button for
 * viewing the latest changes to the AI model.
 *
 * @returns A React functional component for a footer.
 */
const Footer = () => {
    const { t } = useTranslation("common");
    const router = useRouter();
    const { locale } = router;

    const changelogItems =
        locale == "no" ? changeLogItemsNo : locale == "de" ? changeLogItemsDe : changeLogItemsEn;

    return (
        <div className="bg-darkblue w-full flex flex-col pt-10 pb-1 text-white font-light">
            <p className="mx-auto text-sm">{t("changelog.currentVersion")}</p>
            <div className="mx-auto mt-[-40px]">
                <ExpandableInformationBox
                    content={""}
                    expandedContentTitle={t("changelog.title")}
                    expandedContent={
                        <>
                            {changelogItems.map((changeItem) => (
                                <>
                                    <p className="pb-2 text-base">{changeItem.dateOfChange}</p>
                                    <p className="pb-4 text-xl font-bold text-prussian-blue">
                                        {changeItem.titleOfChange}
                                    </p>
                                    <p className="font-light text-lg pb-6">
                                        {changeItem.changeDescription}
                                    </p>
                                    {changeItem.readMoreLink.length > 0 && (
                                        <div className="mb-8">
                                            <Link
                                                href={changeItem.readMoreLink}
                                                className="underline hover:text-sky-600 font-light"
                                            >
                                                {t("changelog.readMore")}
                                            </Link>
                                        </div>
                                    )}
                                    <div className="w-full mt-4 bg-prussian-blue h-[2px] mb-8"></div>
                                </>
                            ))}
                        </>
                    }
                    expandedCloseButtonText={"Close"}
                    buttonText={t("changelog.title")}
                    buttonColor="transparentWhiteText"
                ></ExpandableInformationBox>
            </div>
        </div>
    );
};

export default Footer;
