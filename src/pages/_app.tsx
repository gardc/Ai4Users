import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation, useTranslation } from "next-i18next";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
    const { t } = useTranslation("common");

    const title =
        t("nationalSocialServiceEntityNameLine1") +
        t("nationalSocialServiceEntityNameLine2");

    return (
        <div className="bg-zinc">
            <Head>
                <title>{title}</title>
            </Head>
            <Component {...pageProps} />
        </div>
    );
}

export default appWithTranslation(App);
