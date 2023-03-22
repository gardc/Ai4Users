import Content from "@/components/Content";
import Parent from "@/components/Parent";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import Link from "next/link";
import Button from "@/components/Button";

/**
 * The landing page component that displays initial information about the web
 * application.
 * Supports i18next translation.
 *
 * @returns A React functional component representing the landing page.
 */
const LandingPage: React.FC = (
    _props: InferGetStaticPropsType<typeof getStaticProps>
) => {
    const { t } = useTranslation("common");

    return (
        <div className="bg-darkblue">
            <Parent>
                <Content>
                    <div className="h-screen">
                        <div
                            className="index pt-8 pb-8 
                flex-col flex items-center text-white"
                        >
                            <p className="text-center font-bold text-3xl sm:text-5xl tracking-wide sm:mt-16 ">
                                {t("landingPage.title")}
                            </p>
                            <p className="w-5/6 sm:w-3/4 mt-10 text-left tracking-wide leading-6 text-lg">
                                {t("landingPage.description")}
                            </p>
                            <Button
                                color="lavaorange"
                                href="/DataUsedInPrediction"
                            >
                                Continue
                            </Button>
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
