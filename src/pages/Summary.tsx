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
    if (consent === "true") {
        predictionChoiceTitle = t("summaryPage.titleConsenting");
        predictionChoiceText = t("summaryPage.descriptionConsenting");
    } else if (consent === "false") {
        predictionChoiceTitle = t("summaryPage.titleNotConsenting");
        predictionChoiceTitle = predictionChoiceTitle.replace(/(<b>not<\/b>)/, "<b>$1</b>");
        predictionChoiceText = t("summaryPage.descriptionConsenting");
    }

    return (
        <Parent>
            <div className="bg-slate-50 h-screen">
                <div className="bg-gradient-to-b from-sky-blue to-slate-50">
                    <div className="flex justify-start py-5 text-black">
                        <Link className="pl-12 px-3" href={"/LandingPage"}>
                            {t("pageProgressBar.frontpage")}
                        </Link>
                        {">"}
                        <Link className="px-3" href={"/UsingAi"}>
                            {t("pageProgressBar.usingAiPage")}
                        </Link>
                        {">"}
                        <Link className="underline underline-offset-4 px-3" href={"/Summary"}>
                            {t("pageProgressBar.summaryPage")}
                        </Link>
                    </div>
                    <div className="flex flex-col justify-center text-2xl items-center text-center">
                        <h1
                            dangerouslySetInnerHTML={{
                                __html: predictionChoiceTitle,
                            }}
                        />
                        <p
                            className="text-base mt-2 w-1/2 text-center"
                            dangerouslySetInnerHTML={{
                                __html: predictionChoiceText,
                            }}
                        />
                        <p className="text-base mt-10 w-1/2 text-center">
                            {t("summaryPage.changeCoice")}
                        </p>
                    </div>

                    <div className="flex justify-center mt-16">
                        <h2 className="text-base font-bold text-prussian-blue text-center">
                            {t("summaryPage.informationSummaryTitle")}
                        </h2>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center bg-slate-50">
                    <div className="flex justify-center pt-4">
                        {locale == "en" ? <DataTable data={exampleDataEn}></DataTable> : <></>}
                        {locale == "no" ? <DataTable data={exampleDataNo}></DataTable> : <></>}
                        {locale == "de" ? <DataTable data={exampleDataDe}></DataTable> : <></>}
                    </div>
                    <p className="text-base mb-10 w-2/5 text-center">
                        {t("summaryPage.informationSummarySource")}
                    </p>
                    {/* <div className="flex justify-center mt-4">
                        <Button color="black" onClick={() => alert("Okay")}>
                            Is this information incorrect?
                        </Button>
                    </div> */}
                    <div className="flex justify-center mt-4 pb-16">
                        <Button color="black" href="/TestingFinishedPage">
                            {t("summaryPage.submitChoiceButtonText")}
                        </Button>
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
