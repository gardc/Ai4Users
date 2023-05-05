import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

function App({ Component, pageProps }: AppProps) {
    return (
        <div className="bg-zinc">
            <Component {...pageProps} />
        </div>
    );
}

export default appWithTranslation(App);
