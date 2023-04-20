import { GetStaticProps, InferGetStaticPropsType } from "next";
import { exampleDataDe } from "./api/exampleDataDe";
import { exampleDataEn } from "./api/exampleDataEn";
import { exampleDataNo } from "./api/exampleDataNo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Button from "@/components/Button";
import DataTable from "@/components/DataTable";
import Link from "next/link";
import Parent from "@/components/Parent";
import React from "react";
import ProfileIcon from "@/components/Assets/profileIcon";

/**
 * The summary page component that displays a summary of information used to estimate sick leave
 * duration. Supports i18next translation.
 *
 * @returns A React functional component representing the summary page.
 */
const Summary: React.FC = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const router = useRouter();
    const { consent } = router.query;
    const { locale } = router;
    const { t } = useTranslation("common");

    /**
     * The model query value that determines whether the AI-model is used for estimation or not.
     */
    let predictionChoiceTitle = "";
    let predictionChoiceText = "";
    let nextPage = "";
    if (consent === "true") {
        nextPage = "/UserTestingFinishedPage";
        predictionChoiceTitle = t("summaryPage.titleConsenting");
        predictionChoiceText = t("summaryPage.descriptionConsenting");
    } else if (consent === "false") {
        nextPage = "/Feedback";
        predictionChoiceTitle = t("summaryPage.titleNotConsenting");
        predictionChoiceTitle = predictionChoiceTitle.replace(/(<b>not<\/b>)/, "<b>$1</b>");
        predictionChoiceText = t("summaryPage.descriptionNotConsenting");
        if (locale === "en") {
            predictionChoiceTitle = predictionChoiceTitle.replace(/(not)/, "<b>not</b>");
        } else if (locale === "no") {
            predictionChoiceTitle = predictionChoiceTitle.replace(/(ikke)/, "<b>ikke</b>");
        } else {
            //TODO: Provide bold emphasis on german translation
        }
        predictionChoiceText = t("summaryPage.descriptionNotConsenting");
    }

    return (
        <Parent>
            <div className="flex justify-start py-5 text-black">
                <Link
                    className="hover:font-bold text-sm lg:text-base pl-12 px-3"
                    href={"/LandingPage"}
                >
                    {t("pageProgressBar.home")}
                </Link>
                {">"}
                <Link className="hover:font-bold text-sm lg:text-base px-3" href={"/UseOfData"}>
                    {t("pageProgressBar.useOfData")}
                </Link>
                {">"}
                <Link className="hover:font-bold text-sm lg:text-base px-3" href={"/UsingAi"}>
                    {t("pageProgressBar.usingAiPage")}
                </Link>
                {">"}
                <p className="font-bold text-sm lg:text-base underline underline-offset-4 px-3">
                    {t("pageProgressBar.summaryPage")}
                </p>
            </div>
            <div className="m-4 flex justify-center mb-20">
                <div
                    className="w-full sm:w-3/4
                bg-white drop-shadow-lg py-4 sm:py-8 px-4 sm:px-16 rounded-xl flex justify-center items-center flex-col"
                >
                    <div className="w-full flex flex-col justify-center text-2xl items-center">
                        <h1
                            className="text-prussian-blue text-center font-bold text-3xl m-3"
                            dangerouslySetInnerHTML={{
                                __html: predictionChoiceTitle,
                            }}
                        />
                        <div className="justify-center w-3/4 mx-auto m-6 text-lg font-light">
                            <p
                                className="px-4 text-left"
                                dangerouslySetInnerHTML={{
                                    __html: predictionChoiceText,
                                }}
                            />
                            <p className="mt-4 px-4 text-left">{t("summaryPage.changeCoice")}</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center mt-10">
                        <div className="flex flex-col justify-center">
                            <div className="flex flex-row items-center w-full mx-4">
                                <ProfileIcon />
                                <p className="px-2 font-bold text-prussian-blue text-lg">
                                    {t("summaryPage.informationSummaryTitle")}
                                </p>
                            </div>
                            {locale == "en" ? <DataTable data={exampleDataEn} /> : <></>}
                            {locale == "no" ? <DataTable data={exampleDataNo} /> : <></>}
                            {locale == "de" ? <DataTable data={exampleDataDe} /> : <></>}
                        </div>
                        <p className="text-base px-4 w-3/4 lg:w-7/12 mb-10 text-left font-light">
                            {t("summaryPage.informationSummarySource")}
                        </p>
                        <div className="flex justify-center mt-4">
                            <Button color="lavaorange" href={nextPage}>
                                {t("summaryPage.submitChoiceButtonText")}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Parent>
    );
};

export default Summary;

type Props = {};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
});
