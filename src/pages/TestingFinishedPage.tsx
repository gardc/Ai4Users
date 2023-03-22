import { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Link from "next/link";

/**
 * The end page for testing component that displays some information and buttons for restarting
 * the demo and for navigating to a questionnaire. Supports i18next translation.
 *
 * @returns A React functional component representing the end page for testing.
 */
export default function TestingFinishedPage(
    _props: InferGetStaticPropsType<typeof getStaticProps>
) {
    const { t } = useTranslation("common");

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-white">
            {/* Infobox */}
            <div className="max-w-xl flex flex-col justify-center items-center rounded-md bg-zinc-800 gap-5 px-8 py-5 shadow-md border border-gray-600 text-white text-center">
                <h1 className="text-xl font-semibold">{t("testingFinishedPage.title")}</h1>
                <p className="text-neutral-200">{t("testingFinishedPage.information")}</p>
                {/* Buttons */}
                <div className="flex gap-5">
                    <InfoButton
                        href={"/"}
                        text={t("testingFinishedPage.toFrontPageButtonText")}
                        bg={"bg-neutral-600 bg-opacity-25"}
                    />
                    <a
                        href="https://forms.gle/wF7tcB194UTanhwD6"
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-1 cursor-pointer border border-neutral-700 bg-purple-600 bg-opacity-25 rounded-md hover:px-5 transition-all"
                    >
                        {t("testingFinishedPage.toQuestionnaireButtonText")}
                    </a>
                </div>
            </div>
        </div>
    );
}

const InfoButton = ({ href, text, bg }: { href: string; text: string; bg: string }) => {
    return (
        <Link
            href={href}
            className={`px-4 py-1 cursor-pointer border border-neutral-700 ${bg} rounded-md hover:px-5 transition-all`}
        >
            {text}
        </Link>
    );
};

type Props = {};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
});
