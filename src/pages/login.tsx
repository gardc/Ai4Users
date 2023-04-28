import { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Container from "@/components/Container";
import React from "react";
import NavBar from "@/components/NavBar";
import LoginButton from "@/components/LoginButton";

/**
 * The login page component where the user can choose between going to the case handler or citizen
 * pages.
 * Supports i18next translation.
 *
 * @returns A React functional component representing the landing page.
 */
const Login: React.FC = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const { t } = useTranslation("common");

    return (
        <Container>
            <div className="bg-darkblue h-screen">
                <NavBar
                    enableLinkToFrontPage={false}
                    enableChangelog={false}
                    changelogTitle={""}
                    changelogItems={[]}
                />
                <div className="index pb-16 flex-col flex items-center h-5/6">
                    <div
                        className="w-full md:w-5/6 mt-12 h-full
                                    bg-white drop-shadow-lg py-4 sm:py-8 px-4 sm:px-16 rounded-xl
                                    flex justify-center items-center flex-col text-black"
                    >
                        <div className="mt-6">
                            <div className={"grid grid-cols-2 gap-x-16 gap-y-4"}>
                                <p
                                    className={
                                        "font-light text-left tracking-wide leading-6 text-lg"
                                    }
                                >
                                    {t("loginPage.caseHandlerDescription")}
                                </p>
                                <p
                                    className={
                                        "font-light text-left tracking-wide leading-6 text-lg "
                                    }
                                >
                                    {t("loginPage.predictSickLeaveDescription")}
                                </p>
                                <LoginButton color="lightblue" href="/caseHandler">
                                    {t("loginPage.caseHandlerLogin")}
                                </LoginButton>
                                <LoginButton color="lavaorange" href="/LandingPage">
                                    {t("loginPage.predictSickLeave")}
                                </LoginButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Login;

type Props = {};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
});
