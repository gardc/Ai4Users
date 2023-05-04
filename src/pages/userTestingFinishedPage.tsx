import { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Button from "@/components/Button";

/**
 * The end page for userTesting component that displays some information and buttons for restarting
 * the demo and for navigating to a survey. Supports i18next translation.
 *
 * If user testing is desired, change the end of the flow to redirect to this page.
 *
 * @returns A React functional component representing the end page for userTesting.
 */
export default function UserTestingFinishedPage(
    _props: InferGetStaticPropsType<typeof getStaticProps>
) {
    const { t } = useTranslation("common");

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-white">
            {/* Infobox */}
            <div className="max-w-xl flex flex-col justify-center items-center rounded-md bg-darkblue gap-5 px-8 py-5 shadow-md text-white text-center">
                <h1 className="text-xl font-semibold">{t("userTestingFinishedPage.title")}</h1>
                <p className="text-white">{t("userTestingFinishedPage.information")}</p>
                {/* Buttons */}
                <div className="flex gap-5">
                    <Button href="/" color="orange">
                        {t("userTestingFinishedPage.toFrontPageButtonText")}
                    </Button>
                    <Button href={t("userTestingSurvey") as string} color="orange">
                        {t("userTestingFinishedPage.toSurveyButtonText")}
                    </Button>
                </div>
            </div>
        </div>
    );
}

type Props = {};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
});
