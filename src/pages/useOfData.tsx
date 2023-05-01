import { GetStaticProps, InferGetStaticPropsType } from "next";
import { changeLogItemsDe } from "./api/changelogItemsDe";
import { changeLogItemsEn } from "./api/changelogItemsEn";
import { changeLogItemsNo } from "./api/changelogItemsNo";
import { exampleDataDe } from "./api/exampleDataDe";
import { exampleDataEn } from "./api/exampleDataEn";
import { exampleDataNo } from "./api/exampleDataNo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Button from "@/components/Button";
import Changelog from "@/components/Changelog";
import Container from "@/components/Container";
import DataTable from "@/components/DataTable";
import NavBar from "@/components/NavBar";
import ProfileIcon from "@/components/Assets/profileIcon";
import ProgressBar from "@/components/ProgressBar";

/**
 * The landing page component that displays initial information about the web
 * application and the data points used for sick leave duration prediction.
 * Supports i18next translation.
 *
 * @returns A React functional component representing the landing page.
 */
const UseOfData: React.FC = (
    _props: InferGetStaticPropsType<typeof getStaticProps>
) => {
    const { t } = useTranslation("common");
    const router = useRouter();
    const { locale } = router;

    return (
        <Container>
            <NavBar
                enableLinkToFrontPage={true}
                enableChangelog={true}
                changelogTitle={t("changelog.title")}
                changelogItems={
                    locale == "no"
                        ? changeLogItemsNo
                        : locale == "de"
                        ? changeLogItemsDe
                        : changeLogItemsEn
                }
            />
            <div className="flex justify-between items-center pt-2">
                <ProgressBar
                    pages={[
                        {
                            title: t("pageProgressBar.home"),
                            titleCompressed: t(
                                "pageProgressBar.homeCompressed"
                            ),
                            href: "/landingPage",
                            currentPage: false,
                        },
                        {
                            title: t("pageProgressBar.useOfData"),
                            titleCompressed: t(
                                "pageProgressBar.useOfDataCompressed"
                            ),
                            href: "",
                            currentPage: true,
                        },
                        {
                            title: t("pageProgressBar.usingAiPage"),
                            titleCompressed: t(
                                "pageProgressBar.usingAiPageCompressed"
                            ),
                            href: "",
                            currentPage: false,
                        },
                        {
                            title: t("pageProgressBar.summaryPage"),
                            titleCompressed: t(
                                "pageProgressBar.summaryPageCompressed"
                            ),
                            href: "",
                            currentPage: false,
                        },
                    ]}
                />
                <div className="flex justify-end block lg:hidden pb-4 pr-2 sm:pr-8">
                    <Changelog
                        title={t("changelogTitle")}
                        listOfChanges={
                            locale == "no"
                                ? changeLogItemsNo
                                : locale == "de"
                                ? changeLogItemsDe
                                : changeLogItemsEn
                        }
                    />
                </div>
            </div>
            <div className="m-4 mb-20 flex justify-center">
                <div
                    className="w-full sm:w-3/4 
                bg-white drop-shadow-lg py-4 sm:py-8 px-4 sm:px-16 rounded-xl flex justify-center items-center flex-col"
                >
                    <p className="text-center text-prussian-blue font-bold text-3xl sm:text-4xl mt-8 sm:mt-4">
                        {t("useOfDataPage.title")}
                    </p>
                    <p className="py-3 px-8 sm:px-0 mt-5 text-left lg:w-4/6 text-lg font-light">
                        {t("useOfDataPage.description1")}
                    </p>

                    <p className="px-8 sm:px-0 lg:w-4/6 text-lg font-light text-left">
                        {t("useOfDataPage.description2")}
                        <span className="absolute text-sm font-medium border-black border-1 rounded-full shadow-xl py-0.5 px-9px">
                            ?
                        </span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {t("useOfDataPage.description3")}
                    </p>

                    <div className="mt-10">
                        <div className="flex flex-row items-center w-full mx-4">
                            <ProfileIcon />
                            <p className="px-2 font-bold text-prussian-blue text-lg">
                                {t("useOfDataPage.informationSummaryTitle")}
                            </p>
                        </div>
                        <DataTable
                            data={
                                locale == "no"
                                    ? exampleDataNo
                                    : locale == "de"
                                    ? exampleDataDe
                                    : exampleDataEn
                            }
                        />
                    </div>

                    <div className="flex-col justify-center flex">
                        <div className="flex justify-center mt-1 hover:text-sky-600 underline text-sm">
                            <a href="/incorrectInformation">
                                {t("useOfDataPage.incorrectData")}
                            </a>
                        </div>
                        <div className="flex justify-center mt-5 mb-10">
                            <Button color="lavaorange" href="/usingAi">
                                {t("landingPage.continueButtonText")}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default UseOfData;

type Props = {};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
});
