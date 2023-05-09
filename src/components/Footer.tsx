import { changeLogItemsDe } from "@/pages/api/changelogItemsDe";
import { changeLogItemsEn } from "@/pages/api/changelogItemsEn";
import { changeLogItemsNo } from "@/pages/api/changelogItemsNo";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Changelog from "./Changelog";
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

    return (
        <div className="bg-darkblue w-full flex items-center py-10 text-white font-light flex-row">
            <p className="mx-0 ml-6 sm:ml-8 text-sm">{t("changelog.currentVersion")}</p>
            <div className="ml-auto mr-6 sm:mr-8">
                <Changelog
                    title={t("changelog.title")}
                    listOfChanges={
                        locale == "no"
                            ? changeLogItemsNo
                            : locale == "de"
                            ? changeLogItemsDe
                            : changeLogItemsEn
                    }
                    linkText={t("changelog.linkText")}
                />
            </div>
        </div>
    );
};

export default Footer;
