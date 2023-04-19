import { GetStaticProps, InferGetStaticPropsType } from "next";
import { sandboxParametersEn } from "@/pages/api/sandboxParametersEn";
import { sandboxParametersNo } from "@/pages/api/sandboxParametersNo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import ArrowRightIcon from "@/components/Assets/arrowRightIcon";
import BookIcon from "@/components/Assets/bookIcon";
import CogIcon from "@/components/Assets/cogIcon";
import ScaleIcon from "@/components/Assets/scaleIcon";
import PuzzleIcon from "@/components/Assets/puzzleIcon";
import Content from "@/components/Content";
import ExpandableInformationBox from "@/components/ExpandableInformationBox";
import FastForwardIcon from "@/components/Assets/fastForwardIcon";
import Image from "next/image";
import InformationDropdownBox from "@/components/InformationDropdownBox";
import InformationSignIcon from "@/components/Assets/informationSignIcon";
import Link from "next/link";
import Parent from "@/components/Parent";
import React from "react";
import Sandbox from "@/components/Sandbox";
import scaleIcon from "@/components/Assets/scaleIcon";

/**
 * The page component for explaining the use of an AI model for the tester of the web application.
 * Supports i18next translation.
 *
 * @returns A React functional component representing the page
 * containing information about the use of an AI model.
 */
const UsingAI = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const { t } = useTranslation("common");
    const router = useRouter();
    const { locale } = router;

    return (
        <Parent>
            <div className="pb-2 text-center">
                <div className="flex justify-start py-5 text-black">
                    <Link
                        className="hover:font-bold text-sm lg:text-base pl-12 px-3"
                        href={"/LandingPage"}
                    >
                        {t("pageProgressBar.home")}
                    </Link>
                    {">"}
                    <Link
                        className="hover:font-bold text-sm lg:text-base px-3"
                        href={"/UseOfData"}
                    >
                        {t("pageProgressBar.useOfData")}
                    </Link>
                    {">"}
                    <p className="font-bold underline text-sm lg:text-base underline-offset-4 px-3">
                        {t("pageProgressBar.usingAiPage")}
                    </p>
                    <p className="text-gray-500 ">{">"}</p>
                    <p className="text-gray-500 text-sm lg:text-base px-3">
                        {t("pageProgressBar.summaryPage")}
                    </p>
                </div>

                <p className="text-center text-prussian-blue font-bold text-3xl m-3 pt-4">
                    {t("usingAiPage.title")}
                </p>
            </div>
            <div className="text-center flex justify-center flex-col items-center">
                <div
                    className="sm:w-19/20 md:w-3/4 mt-12
                                    bg-white drop-shadow-lg rounded-xl 
                                    flex justify-center items-center flex-col text-black m-2"
                >
                    <div className="bg-prussian-blue w-full rounded-t-xl text-white flex justify-center py-2">
                        <InformationSignIcon />
                    </div>
                    <div className="p-4 sm:p-8 md:px-12 text-left text-lg">
                        {t("usingAiPage.aboutAiInfo.description")}
                    </div>
                    <div className="bg-slate-50 rounded-b-xl p-6 pb-0 lg:pb-12">
                        <div className="lg:grid lg:grid-cols-3 lg:gap-x-10 text-sm pt-4 px-6">
                            <ExpandableInformationBox
                                content={
                                    <div className="text-left h-full">
                                        <div className="text-prussian-blue">
                                            <BookIcon />
                                        </div>
                                        <h1 className="font-bold text-center pb-4">
                                            {t(
                                                "usingAiPage.aboutAiInfo.whatAi.title"
                                            )}
                                        </h1>
                                        <p className="pb-4">
                                            {t(
                                                "usingAiPage.aboutAiInfo.whatAi.description"
                                            )}
                                        </p>
                                    </div>
                                }
                                expandedContentTitle={t(
                                    "usingAiPage.aboutAiInfo.whatAi.learnMore.title"
                                )}
                                expandedContent={
                                    <div className="text-base pb-4">
                                        <p className="pb-4">
                                            {t(
                                                "usingAiPage.aboutAiInfo.whatAi.learnMore.description"
                                            )}
                                        </p>
                                        <ul className="list-disc list-inside pb-6">
                                            <p className="font-bold pb-4">
                                                {t(
                                                    "usingAiPage.aboutAiInfo.whatAi.learnMore.regardlessOfChoiceList.title"
                                                )}
                                            </p>
                                            <li>
                                                {t(
                                                    "usingAiPage.aboutAiInfo.whatAi.learnMore.regardlessOfChoiceList.li1"
                                                )}
                                            </li>
                                            <li>
                                                {t(
                                                    "usingAiPage.aboutAiInfo.whatAi.learnMore.regardlessOfChoiceList.li2"
                                                )}
                                            </li>
                                            <li>
                                                {t(
                                                    "usingAiPage.aboutAiInfo.whatAi.learnMore.regardlessOfChoiceList.li3"
                                                )}
                                            </li>
                                        </ul>
                                        <p className="font-bold pb-4">
                                            {t(
                                                "usingAiPage.aboutAiInfo.whatAi.learnMore.disagreeTitle"
                                            )}
                                        </p>
                                        <p className="pb-4">
                                            {t(
                                                "usingAiPage.aboutAiInfo.whatAi.learnMore.disagreeInfo"
                                            )}
                                        </p>
                                        {/* { locale == "en" && } */}
                                        <Image
                                            src={
                                                t(
                                                    "usingAiPage.aboutAiInfo.whatAi.learnMore.disagreeFlowImageSrc"
                                                ) as string
                                            }
                                            alt={t(
                                                "usingAiPage.aboutAiInfo.whatAi.learnMore.disagreeFlowImageAlt"
                                            )}
                                            width={1000}
                                            height={1000}
                                            className="pb-8 hidden lg:block"
                                        />
                                        <Image
                                            src={
                                                t(
                                                    "usingAiPage.aboutAiInfo.whatAi.learnMore.disagreeFlowImageMobileSrc"
                                                ) as string
                                            }
                                            alt={t(
                                                "usingAiPage.aboutAiInfo.whatAi.learnMore.disagreeFlowImageAlt"
                                            )}
                                            width={1000}
                                            height={1000}
                                            className="pb-8 block lg:hidden"
                                        />
                                        <p className="font-bold pb-4">
                                            {t(
                                                "usingAiPage.aboutAiInfo.whatAi.learnMore.agreeTitle"
                                            )}
                                        </p>
                                        <p className="pb-4">
                                            {t(
                                                "usingAiPage.aboutAiInfo.whatAi.learnMore.agreeInfo"
                                            )}
                                        </p>
                                        <Image
                                            src={
                                                t(
                                                    "usingAiPage.aboutAiInfo.whatAi.learnMore.agreeFlowImageSrc"
                                                ) as string
                                            }
                                            alt={t(
                                                "usingAiPage.aboutAiInfo.whatAi.learnMore.agreeFlowImageAlt"
                                            )}
                                            width={1000}
                                            height={1000}
                                            className="pb-4 hidden lg:block"
                                        />
                                        <Image
                                            src={
                                                t(
                                                    "usingAiPage.aboutAiInfo.whatAi.learnMore.agreeFlowImageMobileSrc"
                                                ) as string
                                            }
                                            alt={t(
                                                "usingAiPage.aboutAiInfo.whatAi.learnMore.agreeFlowImageAlt"
                                            )}
                                            width={1000}
                                            height={1000}
                                            className="pb-4 block lg:hidden"
                                        />
                                    </div>
                                }
                                buttonText={t(
                                    "usingAiPage.aboutAiInfo.learnMoreButtonText"
                                )}
                                expandedCloseButtonText={t(
                                    "expandedInfoBoxCloseButtonText"
                                )}
                            />
                            <ExpandableInformationBox
                                content={
                                    <div className="text-left h-full">
                                        <div className="text-prussian-blue">
                                            <CogIcon />
                                        </div>
                                        <p className="font-bold text-center pb-4">
                                            {t(
                                                "usingAiPage.aboutAiInfo.howAi.title"
                                            )}
                                        </p>
                                        <p className="pb-4">
                                            {t(
                                                "usingAiPage.aboutAiInfo.howAi.description"
                                            )}
                                        </p>
                                    </div>
                                }
                                expandedContentTitle={t(
                                    "usingAiPage.aboutAiInfo.howAi.learnMore.title"
                                )}
                                expandedContent={
                                    <div className="text-base pb-4">
                                        <p className="font-bold pb-4">
                                            {t(
                                                "usingAiPage.aboutAiInfo.howAi.learnMore.description"
                                            )}
                                        </p>
                                        <div className="pb-4">
                                            {t(
                                                "usingAiPage.aboutAiInfo.howAi.learnMore.machineLearningModelTraitList.title"
                                            )}
                                            <ul className="list-disc list-inside pt-4">
                                                <li>
                                                    {t(
                                                        "usingAiPage.aboutAiInfo.howAi.learnMore.machineLearningModelTraitList.li1"
                                                    )}
                                                </li>
                                                <li>
                                                    {t(
                                                        "usingAiPage.aboutAiInfo.howAi.learnMore.machineLearningModelTraitList.li2"
                                                    )}
                                                </li>
                                                <li>
                                                    {t(
                                                        "usingAiPage.aboutAiInfo.howAi.learnMore.machineLearningModelTraitList.li3"
                                                    )}
                                                </li>
                                            </ul>
                                        </div>
                                        <Image
                                            src={
                                                t(
                                                    "usingAiPage.aboutAiInfo.howAi.learnMore.trainingModelImageSrc"
                                                ) as string
                                            }
                                            alt={t(
                                                "usingAiPage.aboutAiInfo.howAi.learnMore.trainingModelImageAlt"
                                            )}
                                            width={1000}
                                            height={1000}
                                            className="pb-8 hidden lg:block"
                                        />
                                        <Image
                                            src={
                                                t(
                                                    "usingAiPage.aboutAiInfo.howAi.learnMore.trainingModelImageMobileSrc"
                                                ) as string
                                            }
                                            alt={t(
                                                "usingAiPage.aboutAiInfo.howAi.learnMore.trainingModelImageAlt"
                                            )}
                                            width={1000}
                                            height={1000}
                                            className="pb-8 block lg:hidden"
                                        />
                                        <p className="pb-4">
                                            {t(
                                                "usingAiPage.aboutAiInfo.howAi.learnMore.descriptionPatternMatching"
                                            )}
                                        </p>
                                        <Image
                                            src={
                                                t(
                                                    "usingAiPage.aboutAiInfo.howAi.learnMore.usingModelImageSrc"
                                                ) as string
                                            }
                                            alt={t(
                                                "usingAiPage.aboutAiInfo.howAi.learnMore.usingModelImageAlt"
                                            )}
                                            width={1000}
                                            height={1000}
                                            className="hidden lg:block"
                                        />
                                        <Image
                                            src={
                                                t(
                                                    "usingAiPage.aboutAiInfo.howAi.learnMore.usingModelImageMobileSrc"
                                                ) as string
                                            }
                                            alt={t(
                                                "usingAiPage.aboutAiInfo.howAi.learnMore.usingModelImageAlt"
                                            )}
                                            width={1000}
                                            height={1000}
                                            className="block lg:hidden"
                                        />
                                    </div>
                                }
                                buttonText={t(
                                    "usingAiPage.aboutAiInfo.learnMoreButtonText"
                                )}
                                expandedCloseButtonText={t(
                                    "expandedInfoBoxCloseButtonText"
                                )}
                            />
                            <ExpandableInformationBox
                                content={
                                    <div className="text-left h-full">
                                        <div className="text-prussian-blue">
                                            <FastForwardIcon />
                                        </div>
                                        <p className="font-bold text-center pb-4">
                                            {t(
                                                "usingAiPage.aboutAiInfo.whyAi.title"
                                            )}
                                        </p>
                                        <p className="pb-4">
                                            {t(
                                                "usingAiPage.aboutAiInfo.whyAi.description"
                                            )}
                                        </p>
                                    </div>
                                }
                                expandedContentTitle={t(
                                    "usingAiPage.aboutAiInfo.whyAi.learnMore.title"
                                )}
                                expandedContent={
                                    <div className="text-base pb-4">
                                        <p className="font-bold pb-4">
                                            {t(
                                                "usingAiPage.aboutAiInfo.whyAi.learnMore.reasonForUseList.title"
                                            )}
                                        </p>
                                        <ul className="list-disc list-inside pb-4">
                                            <li>
                                                {t(
                                                    "usingAiPage.aboutAiInfo.whyAi.learnMore.reasonForUseList.li1"
                                                )}
                                            </li>
                                            <li>
                                                {t(
                                                    "usingAiPage.aboutAiInfo.whyAi.learnMore.reasonForUseList.li2"
                                                )}
                                            </li>
                                            <li>
                                                {t(
                                                    "usingAiPage.aboutAiInfo.whyAi.learnMore.reasonForUseList.li3"
                                                )}
                                            </li>
                                        </ul>
                                        <p>
                                            {t(
                                                "usingAiPage.aboutAiInfo.whyAi.learnMore.rightToChoose"
                                            )}
                                        </p>
                                    </div>
                                }
                                buttonText={t(
                                    "usingAiPage.aboutAiInfo.learnMoreButtonText"
                                )}
                                expandedCloseButtonText={t(
                                    "expandedInfoBoxCloseButtonText"
                                )}
                            />
                        </div>
                    </div>
                </div>
                <div className="h-6"></div>
                <InformationDropdownBox
                    icon={<PuzzleIcon />}
                    title={t("usingAiPage.sandbox.title")}
                    initialInfo={
                        t("usingAiPage.sandbox.shortDescription") as string
                    }
                    extendInfoButtonText={t(
                        "usingAiPage.sandbox.expandButtonText"
                    )}
                    extendedInfo={
                        <Sandbox
                            description={t(
                                "usingAiPage.sandbox.mainDescription"
                            )}
                            parameters={
                                locale == "no"
                                    ? sandboxParametersNo
                                    : sandboxParametersEn
                            }
                        />
                    }
                    closeInfoButtonText={t(
                        "informationDropdownBoxCloseButtonText"
                    )}
                />
                <div className="h-6"></div>
                <InformationDropdownBox
                    icon={<ScaleIcon />}
                    title={t("usingAiPage.aboutRightsInfo.title")}
                    initialInfo={
                        <>
                            <p>
                                {t("usingAiPage.aboutRightsInfo.description1")}
                            </p>
                            <p>
                                {t("usingAiPage.aboutRightsInfo.description2")}
                            </p>
                        </>
                    }
                    extendedInfo={
                        <div className="space-y-4 ml-4 flex flex-col justify-center items-center my-6">
                            <h2 className="font-semibold">
                                {t(
                                    "usingAiPage.aboutRightsInfo.readMore.userRightsTitle"
                                )}
                            </h2>
                            <ul className="space-y-4 list-disc text-left">
                                <li>
                                    <p className="">
                                        {t(
                                            "usingAiPage.aboutRightsInfo.readMore.li1"
                                        )}
                                        <a
                                            href="https://lovdata.no/lov/2018-06-15-38/gdpr/a15"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            {t(
                                                "usingAiPage.aboutRightsInfo.readMore.learnMoreLinkText"
                                            )}
                                            <ArrowRightIcon />
                                        </a>
                                    </p>
                                </li>
                                <li>
                                    <p className="">
                                        {t(
                                            "usingAiPage.aboutRightsInfo.readMore.li2"
                                        )}
                                        <a
                                            href="https://lovdata.no/lov/2018-06-15-38/gdpr/a16"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            {t(
                                                "usingAiPage.aboutRightsInfo.readMore.learnMoreLinkText"
                                            )}
                                            <ArrowRightIcon />
                                        </a>
                                    </p>
                                </li>
                                <li>
                                    <p className="">
                                        {t(
                                            "usingAiPage.aboutRightsInfo.readMore.li3"
                                        )}
                                        <a
                                            href="https://lovdata.no/lov/2018-06-15-38/gdpr/a17"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            {t(
                                                "usingAiPage.aboutRightsInfo.readMore.learnMoreLinkText"
                                            )}
                                            <ArrowRightIcon />
                                        </a>
                                    </p>
                                </li>
                                <li>
                                    <p className="">
                                        {t(
                                            "usingAiPage.aboutRightsInfo.readMore.li4"
                                        )}
                                        <a
                                            href="https://lovdata.no/lov/2018-06-15-38/gdpr/a18"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            {t(
                                                "usingAiPage.aboutRightsInfo.readMore.learnMoreLinkText"
                                            )}
                                            <ArrowRightIcon />
                                        </a>
                                    </p>
                                </li>
                                <li>
                                    <p className="">
                                        {t(
                                            "usingAiPage.aboutRightsInfo.readMore.li5"
                                        )}
                                        <a
                                            href=" https://lovdata.no/lov/2018-06-15-38/gdpr/a20"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            {t(
                                                "usingAiPage.aboutRightsInfo.readMore.learnMoreLinkText"
                                            )}
                                            <ArrowRightIcon />
                                        </a>
                                    </p>
                                </li>
                                <li>
                                    <p className="">
                                        {t(
                                            "usingAiPage.aboutRightsInfo.readMore.li6"
                                        )}
                                        <a
                                            href="https://lovdata.no/lov/2018-06-15-38/gdpr/a21"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            {t(
                                                "usingAiPage.aboutRightsInfo.readMore.learnMoreLinkText"
                                            )}
                                            <ArrowRightIcon />
                                        </a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    }
                    extendInfoButtonText={t(
                        "informationDropdownBoxExtendButtonText"
                    )}
                    closeInfoButtonText={t(
                        "informationDropdownBoxCloseButtonText"
                    )}
                />
            </div>
            <div className="mb-16"></div>
            <div className="h-96 mb-20 pt-20 flex flex-col justify-center bg-white text-center py-8 sm:p-6">
                <p className="font-semibold p-3 text-2xl">
                    {t("usingAiPage.consentQuestion")}
                </p>
                <div className="flex justify-center mt-8 mb-10 sm:m-5">
                    <Link
                        className="bg-prussian-blue hover:bg-darkblue font-semibold text-white rounded-2xl text-center m-2 sm:m-3 px-6 py-2 sm:py-3"
                        href="/Summary?consent=false"
                    >
                        {t("usingAiPage.disagreeButtonText")}
                    </Link>
                    <Link
                        className="bg-prussian-blue hover:bg-darkblue font-semibold text-white rounded-2xl text-center m-2 sm:m-3 px-6 py-2 sm:py-3"
                        href="/Summary?consent=true"
                    >
                        {t("usingAiPage.agreeButtonText")}
                    </Link>
                </div>
            </div>
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
