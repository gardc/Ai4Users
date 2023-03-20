import { GetStaticProps, InferGetStaticPropsType } from "next";
import { exampleDataDe } from "./api/exampleDataDe";
import { exampleDataEn } from "./api/exampleDataEn";
import { exampleDataNo } from "./api/exampleDataNo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Button from "@/components/Button";
import Content from "@/components/Content";
import DataTable from "@/components/DataTable";
import Parent from "@/components/Parent";

/**
 * The landing page component that displays initial information about the web
 * application and the data points used for sick leave duration prediction.
 * Supports i18next translation.
 *
 * @returns A React functional component representing the landing page.
 */
const LandingPage: React.FC = (
    _props: InferGetStaticPropsType<typeof getStaticProps>
) => {
    const { t } = useTranslation("common");
    const router = useRouter();
    const { locale } = router;

    return (
        <Parent>
            <Content>
                <div className="bg-sky-blue flex justify-start py-5 text-black">
                    <p className="underline underline-offset-4 pl-12 px-3">
                        {t("pageProgressBar.frontpage")}
                    </p>
                    <p className="text-gray-500">{">"}</p>
                    <p className="text-gray-500 px-3">
                        {t("pageProgressBar.usingAiPage")}
                    </p>
                    <p className="text-gray-500">{">"}</p>
                    <p className="text-gray-500 px-3">
                        {t("pageProgressBar.summaryPage")}
                    </p>
                </div>
                <div
                    className="index bg-gradient-to-b from-sky-blue to-slate-50 pt-8 pb-8 
                flex-col flex items-center"
                >
                    <p className="text-center text-prussian-blue font-semibold text-3xl">
                        {t("landingPage.title")}
                    </p>
                    <p className="px-4 sm:px-6 md:px-16 sm:w-3/4 mt-8 text-left">
                        {t("landingPage.description")}
                    </p>
                </div>
                {/*Second page that shows personal information */}
                <div className="text-center bg-slate-50 flex justify-center">
                    <div className="w-full px-4 sm:w-3/4 drop-shadow-lg sm:rounded-xl sm:m-4 sm:px-16 bg-white py-8  flex justify-center items-center flex-col">
                        <p className="text-2xl py-3">
                            {t("landingPage.dataPointsSummary.title")}
                        </p>
                        <p className="py-3 text-left mb-4">
                            {t("landingPage.dataPointsSummary.description1")}
                        </p>
                        <p className="py-3 text-left mb-4 md:w-4/6">
                            {t("landingPage.dataPointsSummary.description2")}
                        </p>
                        {/*Here there will be a component with information about the user */}
                        {locale == "en" ? (
                            <DataTable data={exampleDataEn} />
                        ) : (
                            <></>
                        )}
                        {locale == "no" ? (
                            <DataTable data={exampleDataNo} />
                        ) : (
                            <></>
                        )}
                        {locale == "de" ? (
                            <DataTable data={exampleDataDe} />
                        ) : (
                            <></>
                        )}
                        <div className="flex-col justify-center flex">
                            {/* <div className="flex justify-center mt-4">
                                <Button color="black" href="/%">
                                    Is this information incorrect?
                                </Button>
                            </div> */}
                            <div className="flex justify-center mt-4">
                                <Button color="black" href="/UsingAi">
                                    {t("landingPage.continueButtonText")}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
        </Parent>
    );
};

export default LandingPage;

type Props = {};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
});
