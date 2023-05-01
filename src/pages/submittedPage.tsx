import { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Container from "@/components/Container";
import React from "react";
import NavBar from "@/components/NavBar";
import { useRouter } from "next/router";

/**
 * The summary page component that displays a summary of information used to estimate sick leave
 * duration. Supports i18next translation.
 *
 * @returns A React functional component representing the summary page.
 */
const SubmittedPage: React.FC = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const { t } = useTranslation("common");
    const router = useRouter();
    const { consent } = router.query;
    let descriptionText = "";

    if (consent === "true") {
        descriptionText = t("submittedPage.descriptionConsent");
    } else if (consent === "false") {
        descriptionText = t("submittedPage.descriptionNonConsent");
    }

    return (
        <Container>
            <NavBar
                enableLinkToFrontPage={false}
                enableChangelog={false}
                changelogTitle={""}
                changelogItems={[]}
            />
            <div className="m-4 flex justify-center mb-20">
                <div
                    className="w-full sm:w-3/4
                bg-white drop-shadow-lg py-4 sm:py-8 px-4 sm:px-16 rounded-xl flex justify-center items-center flex-col"
                >
                    <div className="w-full flex flex-col justify-center text-2xl items-center">
                        <div className="justify-center w-3/4 mx-auto m-6 text-lg font-light">
                            <p className="text-prussian-blue text-center font-bold text-3xl m-3">
                                {t("submittedPage.title")}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center mt-10">
                        <p className="text-base px-4 w-3/4 lg:w-7/12 mb-10 text-left font-light">
                            {descriptionText}
                        </p>
                        <div className="flex justify-center mt-4"></div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default SubmittedPage;

type Props = {};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});
