import { useTranslation } from "next-i18next";
import DocumentApprovedIcon from "./Assets/documentApprovedIcon";
import React from "react";

/**
 * A logo for a generic social service entity.
 *
 * @returns A logo as a React functional component.
 */
const SocialServiceLogo = () => {
    const { t } = useTranslation("common");

    return (
        <div className="flex flex-row">
            <DocumentApprovedIcon />
            <div>
                <p className="text-xl font-bold text-transparent bg-clip-text text-white">
                    {t("nationalSocialServiceEntityNameLine1")}
                </p>
                <p className="text-xl font-bold text-transparent bg-clip-text text-white">
                    {t("nationalSocialServiceEntityNameLine2")}
                </p>
            </div>
        </div>
    );
};

export default SocialServiceLogo;
