import Content from "@/components/Content";
import Parent from "@/components/Parent";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import Button from "@/components/Button";
import InformationSignIcon from "@/components/Assets/InformationSignIcon";

/**
 * The landing page component that displays initial information about the web
 * application.
 * Supports i18next translation.
 *
 * @returns A React functional component representing the landing page.
 */
const LandingPage: React.FC = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const { t } = useTranslation("common");

    return (
        <div className="h-screen bg-darkblue">
            <Parent>
                <Content>
                    <div className="bg-darkblue">
                        <div className="index pb-16 flex-col flex items-center">
                            <p
                                className="text-center font-bold px-8 text-3xl lg:text-5xl lg:px-32
                                    tracking-wide mt-16 text-white"
                            >
                                {t("landingPage.title")}
                            </p>
                            <p className="font-bold text-white w-4/6 px-28 mt-12"></p>
                            <div
                                className="w-full md:w-2/3 lg:w-1/2 mt-12
                                    bg-white drop-shadow-lg py-4 sm:py-8 px-4 sm:px-16 rounded-xl 
                                    flex justify-center items-center flex-col text-black"
                            >
                                <div className="mt-6">
                                    <InformationSignIcon />
                                </div>
                                <div
                                    className="w-full px-12 sm:px-6 my-10 font-light text-left 
                                tracking-wide leading-6 text-lg"
                                >
                                    <p>{t("landingPage.description1")}</p>
                                    <p className="mt-8">{t("landingPage.description2")}</p>
                                    <p className="mt-8">{t("landingPage.description3")}</p>
                                    <p className="mt-8">
                                        {t("landingPage.description4")}
                                        <ol className="mt-8 list-decimal list-inside">
                                            {t("landingPage.stepsOfPageList.title")}
                                            <li className="pt-2 pl-2 text-sm">
                                                {t("landingPage.stepsOfPageList.li1")}
                                            </li>
                                            <li className="pt-2 pl-2 text-sm">
                                                {t("landingPage.stepsOfPageList.li2")}
                                            </li>
                                            <li className="pt-2 pl-2 text-sm">
                                                {t("landingPage.stepsOfPageList.li3")}
                                            </li>
                                        </ol>
                                    </p>
                                </div>
                                <div className="mt-4 mb-8">
                                    <Button color="lavaorange" href="/UseOfData">
                                        {t("landingPage.continueButtonText")}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Content>
            </Parent>
        </div>
    );
};

export default LandingPage;

type Props = {};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
});
