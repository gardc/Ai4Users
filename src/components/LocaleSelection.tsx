import { useRouter } from "next/router";

/**
 * A component for an HTML select element for choosing preferred language. Includes options
 * for english, norwegian and german.
 *
 * @returns A React functional component for language selection
 */
const LocaleSelection = () => {
    const router = useRouter();
    const { locale } = router;

    /**
     * Modifies the path to include the preferred language. This will change the language of the
     * enabled parts of the web application with the help of i18next.
     *
     * @param newLocale string, defining the locale of the preferred language
     */
    const changeLocale = (newLocale: string) => {
        const { pathname, asPath, query } = router;
        router.push({ pathname, query }, asPath, { locale: newLocale });
    };

    return (
        <div>
            <select
                className="px-2 py-1 bg-darkblue rounded-md border border-prussian-blue hover:bg-prussian-blue
                cursor-pointer text-white"
                name="Language"
                onChange={(e) => changeLocale(e.target.value)}
                defaultValue={locale}
            >
                <option value="en" key="en">
                    🇬🇧 English
                </option>
                <option value="no" key="no">
                    🇳🇴 Norsk
                </option>
                <option value="de" key="de">
                    🇩🇪 Deutsch
                </option>
            </select>
        </div>
    );
};

export default LocaleSelection;
