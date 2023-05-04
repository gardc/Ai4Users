import { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Button from "@/components/Button";
import LocaleSelection from "@/components/LocaleSelection";
import React from "react";

/**
 * The landing page for testing component that displays information relevant
 * for the tester of the web application.
 * Supports i18next translation.
 *
 * If user testing is desired, add this page to the index class to insert at the start of the flow.
 *
 * @returns A React functional component representing the landing page for testing.
 */
const UserTestingLandingPage: React.FC = (
    _props: InferGetStaticPropsType<typeof getStaticProps>
) => {
    const { t } = useTranslation("common");

    return (
        <div className="break-words text-black bg-white">
            <div className="w-full h-20 bg-darkblue">
                <div className=" float-right pt-8 mr-10">
                    <LocaleSelection />
                </div>
            </div>

            <div className="py-28 px-10 lg:px-40">
                <h1 className="text-2xl text-prussian-blue font-bold">
                    {t("userTestingLandingPage.title")}
                </h1>
                <p className="mt-8">
                    {t("userTestingLandingPage.description")}
                </p>
                <p className="mt-12 font-bold">
                    {t("userTestingLandingPage.beforeTestingTitle")}
                </p>
                <p className="mt-4">
                    {t("userTestingLandingPage.beforeTestingDescription")}
                </p>
                <p className="mt-12 font-bold">
                    {t("userTestingLandingPage.disclaimerTitle")}
                </p>
                <ul className="mt-4 list-disc list-inside">
                    <li className="pb-1">
                        {t("userTestingLandingPage.disclaimer1")}
                    </li>
                    <li className="pb-1">
                        {t("userTestingLandingPage.disclaimer2")}
                    </li>
                    <li className="pb-1">
                            {t("userTestingLandingPage.disclaimer3.title")}
                        <ul className="list-disc list-inside ml-8">
                            <li className="pb-1">
                                {t("userTestingLandingPage.disclaimer3.li1")}
                            </li>
                            <li>
                                {t("userTestingLandingPage.disclaimer3.li2")}
                            </li>
                        </ul>
                    </li>
                </ul>
                <p className="mt-12 font-bold">
                    {t("userTestingLandingPage.questionsTitle")}
                </p>
                <p className="mt-4">
                    {t("userTestingLandingPage.questionsEmailAddress")}
                </p>
                <div className="mt-20">
                    <Button color="orange" href={"/login"}>
                        {t("userTestingLandingPage.beginTestingButtonText")}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default UserTestingLandingPage;

type Props = {};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
});
