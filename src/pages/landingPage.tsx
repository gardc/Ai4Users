import { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Button from "@/components/Button";
import InformationSignIcon from "@/components/Assets/informationSignIcon";
import NavBar from "@/components/NavBar";
import Container from "@/components/Container";
import React from "react";

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
        <Container>
            <NavBar enableLinkToFrontPage={true} />
            <div className="bg-darkblue">
                <div className="index pb-16 flex-col flex items-center">
                    <p
                        className="text-center font-bold px-8 text-3xl lg:text-4xl lg:px-32
                                    tracking-wide mt-8 text-white"
                    >
                        {t("landingPage.title")}
                    </p>
                    <div
                        className="max-w-2xl w-full md:w-2/3 lg:w-55/100 mt-12
                                    bg-white drop-shadow-lg py-4 sm:py-8 px-4 sm:px-8 rounded-xl 
                                    flex justify-center items-center flex-col text-black"
                    >
                        <div className="mt-6">
                            <InformationSignIcon />
                        </div>
                        <div
                            className="max-w-2xl w-full sm:px-6 my-10 font-light text-left 
                                tracking-wide leading-6 text-lg"
                        >
                            <p>{t("landingPage.description1")}</p>
                            <p className="mt-8">{t("landingPage.description2")}</p>
                            <p className="mt-8">{t("landingPage.description3")}</p>
                            <p className="mt-8">{t("landingPage.description4")}</p>
                            <div className="justify-center items-center flex mt-6">
                                <ol className="mt-8 list-decimal">
                                    {t("landingPage.stepsOfPageList.title")}
                                    <li className="ml-6 pt-2 pl-2 text-sm">
                                        {t("landingPage.stepsOfPageList.li1")}
                                    </li>
                                    <li className="ml-6 pt-2 pl-2 text-sm">
                                        {t("landingPage.stepsOfPageList.li2")}
                                    </li>
                                    <li className="ml-6 pt-2 pl-2 text-sm">
                                        {t("landingPage.stepsOfPageList.li3")}
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 mb-8">
                        <Button color="orange" href="/useOfData">
                            {t("landingPage.continueButtonText")}
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default LandingPage;

type Props = {};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
});
