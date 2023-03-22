import Content from "@/components/Content";
import Parent from "@/components/Parent";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import Link from "next/link";

const LandingPage = (
    _props: InferGetStaticPropsType<typeof getStaticProps>
) => {
    const { t } = useTranslation("common");

    return (
        <div>
            <div className="bg-[url('/img/MedicalPhoto.png')]">
                <Parent>
                    <Content>
                        <div className="h-screen">
                            <div
                                className="index pt-8 pb-8 
                flex-col flex items-center text-white"
                            >
                                <p className="text-center font-bold text-5xl tracking-wide mt-16 ">
                                    {t("landingPage.title")}
                                </p>
                                <p className="w-5/6 sm:w-3/4 mt-8 text-left tracking-wide leading-6 text-lg">
                                    {t("landingPage.description")}
                                </p>
                                <Link
                                    href={"/DataUsedInPrediction"}
                                    className="bg-lavaorange text-white rounded-full px-8 py-2 m-2 mt-16"
                                >
                                    Continue
                                </Link>
                            </div>
                        </div>
                    </Content>
                </Parent>
            </div>
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
