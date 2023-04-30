import { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Container from "@/components/Container";
import React from "react";
import NavBar from "@/components/NavBar";
import LoginButton from "@/components/LoginButton";
import ClipboardIcon from "@/components/Assets/clipboardIcon";
import UserIcon from "@/components/Assets/userIcon";

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
                <NavBar enableLinkToFrontPage={false} />
                <div className="index pb-16 flex-col flex items-center h-2/3">
                    <div
                        className="w-full md:w-5/6 mt-12 md:mt-24
                                    bg-white drop-shadow-lg py-12 sm:py-8 px-4 sm:px-16 rounded-xl
                                    flex justify-center items-center flex-col text-black"
                    >
                        <div className={"grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4"}>
                            <div className={"order-1 flex flex-col items-center mb-4"}>
                                <UserIcon />
                                <p
                                    className={
                                        "font-light text-left tracking-wide leading-6 text-lg pt-4 px-2"
                                    }
                                >
                                    {t("loginPage.predictSickLeaveDescription")}
                                </p>
                            </div>
                            <div
                                className={
                                    "order-3 md:order-2 flex flex-col items-center pt-8 md:pt-0"
                                }
                            >
                                <ClipboardIcon />
                                <p
                                    className={
                                        "font-light text-left tracking-wide leading-6 text-lg pt-4 px-2 "
                                    }
                                >
                                    {t("loginPage.caseHandlerDescription")}
                                </p>
                            </div>
                            <LoginButton
                                color="lavaorange"
                                href="/LandingPage"
                                positionSmall={1}
                                positionLarge={2}
                            >
                                {t("loginPage.predictSickLeave")}
                            </LoginButton>
                            <LoginButton
                                color="lightblue"
                                href="/caseHandler"
                                positionSmall={3}
                                positionLarge={2}
                            >
                                {t("loginPage.caseHandlerLogin")}
                            </LoginButton>
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
