import { GetStaticProps, InferGetStaticPropsType } from "next";
import { featureImportanceDataEn } from "./api/featureImportanceDataEn";
import { featureImportanceDataNo } from "./api/featureImportanceDataNo";
import { motion as m } from "framer-motion";
import { sandboxParametersEn } from "@/pages/api/sandboxParametersEn";
import { sandboxParametersNo } from "@/pages/api/sandboxParametersNo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import ArrowRightIcon from "@/components/Assets/arrowRightIcon";
import BookIcon from "@/components/Assets/bookIcon";
import CheckIcon from "@/components/Assets/checkIcon";
import CogIcon from "@/components/Assets/cogIcon";
import Container from "@/components/Container";
import CrossIcon from "@/components/Assets/crossIcon";
import ExpandableInformationBox from "@/components/ExpandableInformationBox";
import FastForwardIcon from "@/components/Assets/fastForwardIcon";
import FeatureImportanceDiagram from "@/components/FeatureImportanceDiagram";
import Image from "next/image";
import InformationDropdownBox from "@/components/InformationDropdownBox";
import InformationSignIcon from "@/components/Assets/informationSignIcon";
import NavBar from "@/components/NavBar";
import ProgressBar from "@/components/ProgressBar";
import PuzzleIcon from "@/components/Assets/puzzleIcon";
import React from "react";
import Sandbox from "@/components/Sandbox";
import ScaleIcon from "@/components/Assets/scaleIcon";
import ConsentButton from "@/components/ConsentButton";

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
        <Container>
            <NavBar enableLinkToFrontPage={true} />
            <div className="pb-2 text-center">
                <div className="flex justify-between items-center text-left pt-2">
                    <ProgressBar
                        pages={[
                            {
                                title: t("pageProgressBar.home"),
                                titleCompressed: t("pageProgressBar.homeCompressed"),
                                href: "/landingPage",
                                currentPage: false,
                            },
                            {
                                title: t("pageProgressBar.useOfData"),
                                titleCompressed: t("pageProgressBar.useOfDataCompressed"),
                                href: "/useOfData",
                                currentPage: false,
                            },
                            {
                                title: t("pageProgressBar.usingAiPage"),
                                titleCompressed: t("pageProgressBar.usingAiPageCompressed"),
                                href: "",
                                currentPage: true,
                            },
                            {
                                title: t("pageProgressBar.summaryPage"),
                                titleCompressed: t("pageProgressBar.summaryPageCompressed"),
                                href: "",
                                currentPage: false,
                            },
                        ]}
                    />
                </div>

                <p className="text-center text-prussian-blue font-bold text-3xl m-3 pt-4">
                    {t("usingAiPage.title")}
                </p>
            </div>
            <div className="text-center flex flex-col items-center mb-16">
                <div className="sm:w-19/20 md:w-3/4 mt-12 bg-white drop-shadow-lg rounded-xl flex-col text-black m-2">
                    <div className="bg-prussian-blue rounded-t-xl text-white py-2 flex justify-center">
                        <InformationSignIcon />
                    </div>
                    <div className="p-4 sm:p-8 md:px-12 text-left text-lg font-light">
                        {t("usingAiPage.aboutAiInfo.description")}
                    </div>
                    <div className="bg-lightslate rounded-b-xl p-6 pb-0 lg:pb-12">
                        <div className="lg:grid lg:grid-cols-3 lg:gap-x-10 font-light pt-4 px-6">
                            <ExpandableInformationBox
                                content={
                                    <div className="text-left h-full">
                                        <div className="text-prussian-blue">
                                            <BookIcon />
                                        </div>
                                        <h1 className="font-bold text-center pb-4">
                                            {t("usingAiPage.aboutAiInfo.whatAi.title")}
                                        </h1>
                                        <p className="pb-4">
                                            {t("usingAiPage.aboutAiInfo.whatAi.description")}
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
                                                "usingAiPage.aboutAiInfo.whatAi.learnMore.accuracyTitle"
                                            )}
                                        </p>
                                        <p className="pb-4">
                                            {t(
                                                "usingAiPage.aboutAiInfo.whatAi.learnMore.accuracyInfo"
                                            )}
                                        </p>
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
                                buttonText={t("usingAiPage.aboutAiInfo.learnMoreButtonText")}
                                expandedCloseButtonText={t("expandedInfoBoxCloseButtonText")}
                            />
                            <ExpandableInformationBox
                                content={
                                    <div className="text-left h-full">
                                        <div className="text-prussian-blue">
                                            <CogIcon />
                                        </div>
                                        <p className="font-bold text-center pb-4">
                                            {t("usingAiPage.aboutAiInfo.howAi.title")}
                                        </p>
                                        <p className="pb-4">
                                            {t("usingAiPage.aboutAiInfo.howAi.description")}
                                        </p>
                                    </div>
                                }
                                expandedContentTitle={t(
                                    "usingAiPage.aboutAiInfo.howAi.learnMore.title"
                                )}
                                expandedContent={
                                    <div className="text-base pb-4">
                                        <p className="font-bold pb-4">
                                            {t("usingAiPage.aboutAiInfo.howAi.learnMore.description")}
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
                                buttonText={t("usingAiPage.aboutAiInfo.learnMoreButtonText")}
                                expandedCloseButtonText={t("expandedInfoBoxCloseButtonText")}
                            />
                            <ExpandableInformationBox
                                content={
                                    <div className="text-left h-full">
                                        <div className="text-prussian-blue">
                                            <FastForwardIcon />
                                        </div>
                                        <p className="font-bold text-center pb-4">
                                            {t("usingAiPage.aboutAiInfo.whyAi.title")}
                                        </p>
                                        <p className="pb-4">
                                            {t("usingAiPage.aboutAiInfo.whyAi.description")}
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
                                buttonText={t("usingAiPage.aboutAiInfo.learnMoreButtonText")}
                                expandedCloseButtonText={t("expandedInfoBoxCloseButtonText")}
                            />
                        </div>
                    </div>
                </div>
                <div className="h-6"></div>
                <InformationDropdownBox
                    icon={<PuzzleIcon />}
                    title={t("usingAiPage.sandbox.title")}
                    initialInfo={
                        <p className="font-light text-lg">
                            {t("usingAiPage.sandbox.shortDescription")}{" "}
                        </p>
                    }
                    extendInfoButtonText={t("usingAiPage.sandbox.expandButtonText")}
                    extendedInfo={
                        <div>
                            <Sandbox
                                description={t("usingAiPage.sandbox.mainDescription")}
                                parameters={
                                    locale == "no" ? sandboxParametersNo : sandboxParametersEn
                                }
                            />
                            <FeatureImportanceDiagram
                                title={t("usingAiPage.featureImportance.title")}
                                description={
                                    <div className="font-light">
                                        <p>{t("usingAiPage.featureImportance.description1")}</p>
                                        <p className="mt-8">
                                            {t("usingAiPage.featureImportance.description2")}
                                        </p>
                                        <p className="mt-8">
                                            {t("usingAiPage.featureImportance.description3")}
                                        </p>
                                    </div>
                                }
                                parameter={
                                    locale == "no"
                                        ? featureImportanceDataNo
                                        : featureImportanceDataEn
                                }
                            />
                        </div>
                    }
                    closeInfoButtonText={t("informationDropdownBoxCloseButtonText")}
                />
                <div className="h-6"></div>
                <InformationDropdownBox
                    icon={<ScaleIcon />}
                    title={t("usingAiPage.aboutRightsInfo.title")}
                    initialInfo={
                        <div className="font-light text-lg">
                            <p>{t("usingAiPage.aboutRightsInfo.description1")}</p>
                            <p>{t("usingAiPage.aboutRightsInfo.description2")}</p>
                        </div>
                    }
                    extendedInfo={
                        <div className="space-y-4 ml-4 flex flex-col justify-center items-center my-6">
                            <h2 className="font-semibold">
                                {t("usingAiPage.aboutRightsInfo.readMore.userRightsTitle")}
                            </h2>
                            <ul className="space-y-4 list-disc font-light text-left">
                                <li>
                                    <div className={"flex flex-row gap-1"}>
                                        <p>
                                            {t("usingAiPage.aboutRightsInfo.readMore.li1")}
                                        </p>
                                        <a
                                            href="https://lovdata.no/lov/2018-06-15-38/gdpr/a15"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center font-medium text-skyblue hover:underline"
                                        >
                                            {t(
                                                "usingAiPage.aboutRightsInfo.readMore.learnMoreLinkText"
                                            )}
                                            <m.div
                                                whileHover={{
                                                    scale: 1.1,
                                                    x: 5,
                                                }}
                                            >
                                                <ArrowRightIcon />
                                            </m.div>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className={"flex flex-row gap-1"}>
                                        <p>
                                            {t("usingAiPage.aboutRightsInfo.readMore.li2")}
                                        </p>
                                        <a
                                            href="https://lovdata.no/lov/2018-06-15-38/gdpr/a16"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center font-medium text-skyblue hover:underline"
                                        >
                                            {t(
                                                "usingAiPage.aboutRightsInfo.readMore.learnMoreLinkText"
                                            )}
                                            <m.div
                                                whileHover={{
                                                    scale: 1.1,
                                                    x: 5,
                                                }}
                                            >
                                                <ArrowRightIcon />
                                            </m.div>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className={"flex flex-row gap-1"}>
                                        <p>
                                            {t("usingAiPage.aboutRightsInfo.readMore.li3")}
                                        </p>
                                        <a
                                            href="https://lovdata.no/lov/2018-06-15-38/gdpr/a17"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center font-medium text-skyblue hover:underline"
                                        >
                                            {t(
                                                "usingAiPage.aboutRightsInfo.readMore.learnMoreLinkText"
                                            )}
                                            <m.div
                                                whileHover={{
                                                    scale: 1.1,
                                                    x: 5,
                                                }}
                                            >
                                                <ArrowRightIcon />
                                            </m.div>{" "}
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className={"flex flex-row gap-1"}>
                                        <p>
                                            {t("usingAiPage.aboutRightsInfo.readMore.li4")}
                                        </p>
                                        <a
                                            href="https://lovdata.no/lov/2018-06-15-38/gdpr/a18"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center font-medium text-skyblue hover:underline"
                                        >
                                            {t(
                                                "usingAiPage.aboutRightsInfo.readMore.learnMoreLinkText"
                                            )}
                                            <m.div
                                                whileHover={{
                                                    scale: 1.1,
                                                    x: 5,
                                                }}
                                            >
                                                <ArrowRightIcon />
                                            </m.div>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className={"flex flex-row gap-1"}>
                                        <p>
                                            {t("usingAiPage.aboutRightsInfo.readMore.li5")}
                                        </p>
                                        <a
                                            href=" https://lovdata.no/lov/2018-06-15-38/gdpr/a20"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center font-medium text-skyblue hover:underline"
                                        >
                                            {t(
                                                "usingAiPage.aboutRightsInfo.readMore.learnMoreLinkText"
                                            )}
                                            <m.div
                                                whileHover={{
                                                    scale: 1.1,
                                                    x: 5,
                                                }}
                                            >
                                                <ArrowRightIcon />
                                            </m.div>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className={"flex flex-row gap-1"}>
                                        <p>
                                            {t("usingAiPage.aboutRightsInfo.readMore.li6")}
                                        </p>
                                        <a
                                            href="https://lovdata.no/lov/2018-06-15-38/gdpr/a21"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center font-medium text-skyblue hover:underline"
                                        >
                                            {t(
                                                "usingAiPage.aboutRightsInfo.readMore.learnMoreLinkText"
                                            )}
                                            <m.div
                                                whileHover={{
                                                    scale: 1.1,
                                                    x: 5,
                                                }}
                                            >
                                                <ArrowRightIcon />
                                            </m.div>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    }
                    extendInfoButtonText={t("informationDropdownBoxExtendButtonText")}
                    closeInfoButtonText={t("informationDropdownBoxCloseButtonText")}
                />
            </div>
            <div className="my-4 pt-20 flex flex-col justify-center bg-white text-center py-8 font-light">
                <div className="w-full sm:w-2/3 px-4 lg:w-1/2 text-left mx-auto text-lg">
                    <p className="pb-12 text-xl">{t("usingAiPage.consent.title")}</p>
                    <div className="flex pb-8">
                        <div className="my-auto mr-4">
                            <CrossIcon />
                        </div>
                        <p>{t("usingAiPage.consent.disagreeDescription")}</p>
                    </div>
                    <div className="flex pb-8">
                        <div className="my-auto mr-4">
                            <CheckIcon />
                        </div>
                        <p>{t("usingAiPage.consent.agreeDescription")}</p>
                    </div>
                    <p className="font-semibold text-center p-8 text-2xl">
                        {t("usingAiPage.consent.question")}
                    </p>
                </div>

                <div className="flex justify-center mt-8 mb-10 sm:m-5">
                    <ConsentButton href={"/summary?consent=false"}>
                        <p>{t("usingAiPage.consent.disagreeButtonText")}</p>
                    </ConsentButton>
                    <ConsentButton href={"/summary?consent=true"}>
                        <p>{t("usingAiPage.consent.agreeButtonText")}</p>
                    </ConsentButton>
                </div>
            </div>
            <div className="p-8" />
        </Container>
    );
};

export default UsingAI;

type Props = {};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
});
