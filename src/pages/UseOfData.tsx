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
import Link from "next/link";
import Parent from "@/components/Parent";

/**
 * The landing page component that displays initial information about the web
 * application and the data points used for sick leave duration prediction.
 * Supports i18next translation.
 *
 * @returns A React functional component representing the landing page.
 */
const UseOfData: React.FC = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const { t } = useTranslation("common");
    const router = useRouter();
    const { locale } = router;

    return (
        <Parent>
            <div className="flex justify-start py-5 text-black">
                <Link
                    className="hover:font-bold text-sm lg:text-base sm:pl-12 px-3"
                    href={"/LandingPage"}
                >
                    {t("pageProgressBar.home")}
                </Link>
                <p className="text-black">{">"}</p>
                <p className="font-bold text-sm lg:text-base underline underline-offset-4 text-black px-3">
                    {t("pageProgressBar.useOfData")}
                </p>
                <p className="text-gray-500">{">"}</p>
                <p className="text-gray-500 text-sm lg:text-base px-3">
                    {t("pageProgressBar.usingAiPage")}
                </p>
                <p className="text-gray-500">{">"}</p>
                <p className="text-gray-500 text-sm lg:text-base px-3">
                    {t("pageProgressBar.summaryPage")}
                </p>
            </div>

            {/*Second page that shows personal information */}
            <div className="m-4 text-cente flex justify-center">
                <div
                    className="w-full sm:w-3/4 
                bg-white drop-shadow-lg py-4 sm:py-8 px-4 sm:px-16 rounded-xl flex justify-center items-center flex-col"
                >
                    <p className="text-center text-prussian-blue font-bold text-3xl sm:text-4xl">
                        {t("useOfDataPage.title")}
                    </p>
                    <p className="py-3 mt-5 text-left lg:w-3/4">
                        {t("useOfDataPage.description1")}
                    </p>
                    <p className="py-3 text-left mb-4 lg:w-3/4">
                        {t("useOfDataPage.description2")}
                    </p>
                    {/*Here there will be a component with information about the user */}
                    {locale == "en" ? <DataTable data={exampleDataEn} /> : <></>}
                    {locale == "no" ? <DataTable data={exampleDataNo} /> : <></>}
                    {locale == "de" ? <DataTable data={exampleDataDe} /> : <></>}
                    <div className="flex-col justify-center flex">
                        {/* <div className="flex justify-center mt-4">
                                <Button color="black" href="/%">
                                    Is this information incorrect?
                                </Button>
                            </div> */}
                        <div className="flex justify-center mb-48">
                            <Button color="lavaorange" href="/UsingAi">
                                {t("useOfDataPage.continueButtonText")}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Parent>
    );
};

export default UseOfData;

type Props = {};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
});