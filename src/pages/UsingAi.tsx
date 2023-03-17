import { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import ArrowRightIcon from "@/components/Assets/arrowRightIcon";
import BookIcon from "@/components/Assets/bookIcon";
import Button from "@/components/Button";
import CogIcon from "@/components/Assets/cogIcon";
import Content from "@/components/Content";
import ExpandableInformationBox from "@/components/ExpandableInformationBox";
import FastForwardIcon from "@/components/Assets/fastForwardIcon";
import Image from "next/image";
import InformationDropdownBox from "@/components/InformationDropdownBox";
import Link from "next/link";
import Parent from "@/components/Parent";
import React from "react";

/**
 * The page component for explaining the use of an AI model for the tester of the web application.
 * Supports i18next translation.
 *
 * @returns A React functional component representing the page
 * containing information about the use of an AI model.
 */
const UsingAI = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const { t } = useTranslation("common");

    return (
        <Parent>
            <Content>
                <div className="bg-gradient-to-b from-sky-blue to-slate-50 pb-16 text-center">
                    <div className="flex justify-start py-5 text-black">
                        <Link className="pl-12 px-3" href={"/LandingPage"}>
                            {t("pageProgressBar.frontpage")}
                        </Link>
                        {">"}
                        <p className="underline underline-offset-4 px-3">
                            {t("pageProgressBar.usingAiPage")}
                        </p>
                        <p className="text-gray-500">{">"}</p>
                        <p className="text-gray-500 px-3">Summary</p>
                    </div>

                    <p className="text-center text-prussian-blue font-semibold text-3xl m-3">
                        {t("usingAiPage.title")}
                    </p>
                </div>
                <div className="text-center bg-slate-50 flex justify-center flex-col items-center">
                    <InformationDropdownBox
                        title={""}
                        initialInfo={t("usingAiPage.aboutAiInfo.description") as string}
                        extendedInfo={
                            <div className="lg:grid lg:grid-cols-3 lg:gap-x-10 text-sm pt-4 px-6">
                                <ExpandableInformationBox
                                    content={
                                        <div className="text-left h-full">
                                            <BookIcon />
                                            <h1 className="font-bold text-center pb-4">
                                                {t("usingAiPage.aboutAiInfo.readMore.whatAi.title")}
                                            </h1>
                                            <p className="pb-4">
                                                {t(
                                                    "usingAiPage.aboutAiInfo.readMore.whatAi.description1"
                                                )}
                                            </p>
                                            <p>
                                                {t(
                                                    "usingAiPage.aboutAiInfo.readMore.whatAi.description2"
                                                )}
                                            </p>
                                        </div>
                                    }
                                    expandedContentTitle={t(
                                        "usingAiPage.aboutAiInfo.readMore.whatAi.learnMore.title"
                                    )}
                                    expandedContent={
                                        <div className="text-base pb-4">
                                            <p className="pb-4">
                                                {t(
                                                    "usingAiPage.aboutAiInfo.readMore.whatAi.learnMore.description"
                                                )}
                                            </p>
                                            <ul className="list-disc list-inside pb-6">
                                                <p className="font-bold pb-4">
                                                    {t(
                                                        "usingAiPage.aboutAiInfo.readMore.whatAi.learnMore.regardlessOfChoiceList.title"
                                                    )}
                                                </p>
                                                <li>
                                                    {t(
                                                        "usingAiPage.aboutAiInfo.readMore.whatAi.learnMore.regardlessOfChoiceList.li1"
                                                    )}
                                                </li>
                                                <li>
                                                    {t(
                                                        "usingAiPage.aboutAiInfo.readMore.whatAi.learnMore.regardlessOfChoiceList.li2"
                                                    )}
                                                </li>
                                                <li>
                                                    {t(
                                                        "usingAiPage.aboutAiInfo.readMore.whatAi.learnMore.regardlessOfChoiceList.li3"
                                                    )}
                                                </li>
                                            </ul>
                                            <p className="font-bold pb-4">
                                                {t(
                                                    "usingAiPage.aboutAiInfo.readMore.whatAi.learnMore.disagreeTitle"
                                                )}
                                            </p>
                                            <p className="pb-4">
                                                {t(
                                                    "usingAiPage.aboutAiInfo.readMore.whatAi.learnMore.disagreeInfo"
                                                )}
                                            </p>
                                            <Image
                                                src={"/img/disagreeToUseFlow.jpg"}
                                                alt={t(
                                                    "usingAiPage.aboutAiInfo.readMore.whatAi.learnMore.disagreeFlowImageAlt"
                                                )}
                                                width={1000}
                                                height={1000}
                                                className="pb-8"
                                            />
                                            <p className="font-bold pb-4">
                                                {t(
                                                    "usingAiPage.aboutAiInfo.readMore.whatAi.learnMore.agreeTitle"
                                                )}
                                            </p>
                                            <p className="pb-4">
                                                {t(
                                                    "usingAiPage.aboutAiInfo.readMore.whatAi.learnMore.agreeInfo"
                                                )}
                                            </p>
                                            <Image
                                                src={"/img/agreeToUseFlow.jpg"}
                                                alt={t(
                                                    "usingAiPage.aboutAiInfo.readMore.whatAi.learnMore.agreeFlowImageAlt"
                                                )}
                                                width={1000}
                                                height={1000}
                                                className="pb-4"
                                            />
                                        </div>
                                    }
                                    buttonText={t(
                                        "usingAiPage.aboutAiInfo.readMore.learnMoreButtonText"
                                    )}
                                    expandedCloseButtonText={t("expandedInfoBoxCloseButtonText")}
                                />
                                <ExpandableInformationBox
                                    content={
                                        <div className="text-left h-full">
                                            <CogIcon />
                                            <p className="font-bold text-center pb-4">
                                                {t("usingAiPage.aboutAiInfo.readMore.howAi.title")}
                                            </p>
                                            <p className="pb-4">
                                                {t(
                                                    "usingAiPage.aboutAiInfo.readMore.howAi.description1"
                                                )}
                                            </p>
                                            <p>
                                                {t(
                                                    "usingAiPage.aboutAiInfo.readMore.howAi.description2"
                                                )}
                                            </p>
                                        </div>
                                    }
                                    expandedContentTitle={t(
                                        "usingAiPage.aboutAiInfo.readMore.howAi.learnMore.title"
                                    )}
                                    expandedContent={
                                        <div className="text-base pb-4">
                                            <p className="font-bold pb-4">
                                                {t(
                                                    "usingAiPage.aboutAiInfo.readMore.howAi.learnMore.description"
                                                )}
                                            </p>
                                            <div className="pb-4">
                                                {t(
                                                    "usingAiPage.aboutAiInfo.readMore.howAi.learnMore.machineLearningModelTraitList.title"
                                                )}
                                                <ul className="list-disc list-inside pt-4">
                                                    <li>
                                                        {t(
                                                            "usingAiPage.aboutAiInfo.readMore.howAi.learnMore.machineLearningModelTraitList.li1"
                                                        )}
                                                    </li>
                                                    <li>
                                                        {t(
                                                            "usingAiPage.aboutAiInfo.readMore.howAi.learnMore.machineLearningModelTraitList.li2"
                                                        )}
                                                    </li>
                                                    <li>
                                                        {t(
                                                            "usingAiPage.aboutAiInfo.readMore.howAi.learnMore.machineLearningModelTraitList.li3"
                                                        )}
                                                    </li>
                                                </ul>
                                            </div>
                                            <Image
                                                src={"/img/trainingTheModel.jpg"}
                                                alt={t(
                                                    "usingAiPage.aboutAiInfo.readMore.howAi.learnMore.trainingModelImageAlt"
                                                )}
                                                width={1000}
                                                height={1000}
                                                className="pb-8"
                                            />
                                            <p className="pb-4">
                                                {t(
                                                    "usingAiPage.aboutAiInfo.readMore.howAi.learnMore.descriptionPatternMatching"
                                                )}
                                            </p>
                                            <Image
                                                src={"/img/usingTheModelForPrediction.jpg"}
                                                alt={t(
                                                    "usingAiPage.aboutAiInfo.readMore.howAi.learnMore.usingModelImageAlt"
                                                )}
                                                width={1000}
                                                height={1000}
                                            />
                                        </div>
                                    }
                                    buttonText={t(
                                        "usingAiPage.aboutAiInfo.readMore.learnMoreButtonText"
                                    )}
                                    expandedCloseButtonText={t("expandedInfoBoxCloseButtonText")}
                                />
                                <ExpandableInformationBox
                                    content={
                                        <div className="text-left h-full">
                                            <FastForwardIcon />
                                            <p className="font-bold text-center pb-4">
                                                {t("usingAiPage.aboutAiInfo.readMore.whyAi.title")}
                                            </p>
                                            <p className="pb-4">
                                                {t(
                                                    "usingAiPage.aboutAiInfo.readMore.whyAi.description1"
                                                )}
                                            </p>
                                            <p>
                                                {t(
                                                    "usingAiPage.aboutAiInfo.readMore.whyAi.description2"
                                                )}
                                            </p>
                                        </div>
                                    }
                                    expandedContentTitle={t(
                                        "usingAiPage.aboutAiInfo.readMore.whyAi.learnMore.title"
                                    )}
                                    expandedContent={
                                        <div className="text-base pb-4">
                                            <p className="font-bold pb-4">
                                                {t(
                                                    "usingAiPage.aboutAiInfo.readMore.whyAi.learnMore.reasonForUseList.title"
                                                )}
                                            </p>
                                            <ul className="list-disc list-inside pb-4">
                                                <li>
                                                    {t(
                                                        "usingAiPage.aboutAiInfo.readMore.whyAi.learnMore.reasonForUseList.li1"
                                                    )}
                                                </li>
                                                <li>
                                                    {t(
                                                        "usingAiPage.aboutAiInfo.readMore.whyAi.learnMore.reasonForUseList.li2"
                                                    )}
                                                </li>
                                                <li>
                                                    {t(
                                                        "usingAiPage.aboutAiInfo.readMore.whyAi.learnMore.reasonForUseList.li3"
                                                    )}
                                                </li>
                                            </ul>
                                            <p>
                                                {t(
                                                    "usingAiPage.aboutAiInfo.readMore.whyAi.learnMore.rightToChoose"
                                                )}
                                            </p>
                                        </div>
                                    }
                                    buttonText={t(
                                        "usingAiPage.aboutAiInfo.readMore.learnMoreButtonText"
                                    )}
                                    expandedCloseButtonText={t("expandedInfoBoxCloseButtonText")}
                                />
                            </div>
                        }
                        extendInfoButtonText={t("informationDropdownBoxExtendButtonText")}
                        closeInfoButtonText={t("informationDropdownBoxCloseButtonText")}
                    />
                    <div className="h-6"></div>
                    <InformationDropdownBox
                        title={t("usingAiPage.aboutRightsInfo.title")}
                        initialInfo={
                            <>
                                <p>{t("usingAiPage.aboutRightsInfo.description1")}</p>
                                <p>{t("usingAiPage.aboutRightsInfo.description2")}</p>
                            </>
                        }
                        extendedInfo={
                            <div className="space-y-4 ml-4 flex flex-col justify-center items-center my-6">
                                <h2 className="font-semibold">
                                    {t("usingAiPage.aboutRightsInfo.readMore.userRightsTitle")}
                                </h2>
                                <ul className="space-y-4 list-disc text-left">
                                    <li>
                                        <p className="">
                                            {t("usingAiPage.aboutRightsInfo.readMore.li1")}
                                            <a
                                                href="https://lovdata.no/lov/2018-06-15-38/gdpr/a15"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                            >
                                                {t(
                                                    "usingAiPage.aboutRightsInfo.readMore.learnMoreLinkText"
                                                )}
                                                <ArrowRightIcon></ArrowRightIcon>
                                            </a>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="">
                                            {t("usingAiPage.aboutRightsInfo.readMore.li2")}
                                            <a
                                                href="https://lovdata.no/lov/2018-06-15-38/gdpr/a16"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                            >
                                                {t(
                                                    "usingAiPage.aboutRightsInfo.readMore.learnMoreLinkText"
                                                )}
                                                <ArrowRightIcon></ArrowRightIcon>
                                            </a>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="">
                                            {t("usingAiPage.aboutRightsInfo.readMore.li3")}
                                            <a
                                                href="https://lovdata.no/lov/2018-06-15-38/gdpr/a17"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                            >
                                                {t(
                                                    "usingAiPage.aboutRightsInfo.readMore.learnMoreLinkText"
                                                )}
                                                <ArrowRightIcon></ArrowRightIcon>
                                            </a>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="">
                                            {t("usingAiPage.aboutRightsInfo.readMore.li4")}
                                            <a
                                                href="https://lovdata.no/lov/2018-06-15-38/gdpr/a18"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                            >
                                                {t(
                                                    "usingAiPage.aboutRightsInfo.readMore.learnMoreLinkText"
                                                )}
                                                <ArrowRightIcon></ArrowRightIcon>
                                            </a>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="">
                                            {t("usingAiPage.aboutRightsInfo.readMore.li5")}
                                            <a
                                                href=" https://lovdata.no/lov/2018-06-15-38/gdpr/a20"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                            >
                                                {t(
                                                    "usingAiPage.aboutRightsInfo.readMore.learnMoreLinkText"
                                                )}
                                                <ArrowRightIcon></ArrowRightIcon>
                                            </a>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="">
                                            {t("usingAiPage.aboutRightsInfo.readMore.li6")}
                                            <a
                                                href="https://lovdata.no/lov/2018-06-15-38/gdpr/a21"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                            >
                                                {t(
                                                    "usingAiPage.aboutRightsInfo.readMore.learnMoreLinkText"
                                                )}
                                                <ArrowRightIcon></ArrowRightIcon>
                                            </a>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        }
                        extendInfoButtonText={t("informationDropdownBoxExtendButtonText")}
                        closeInfoButtonText={t("informationDropdownBoxCloseButtonText")}
                    />
                    <p className="mt-16 font-semibold text-lg">
                        {t("usingAiPage.consentQuestion")}
                    </p>
                </div>
                <div className="flex justify-center justify-evenly mt-16 m-5 mb-24">
                    <Button color="black" href="/Summary?consent=false">
                        {t("usingAiPage.disagreeButtonText")}
                    </Button>
                    <Button color="black" href="/Summary?consent=true">
                        {t("usingAiPage.agreeButtonText")}
                    </Button>
                </div>
            </Content>
        </Parent>
    );
};

export default UsingAI;

type Props = {};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
});
