import { useRouter } from "next/router";

const LocaleSelection = () => {
    const router = useRouter();
    const { locale } = router;

    const changeLocale = (newLocale: string) => {
        const { pathname, asPath, query } = router;
        router.push({ pathname, query }, asPath, { locale: newLocale });
    };

    return (
        <div>
            <select
                className="px-2 py-1 bg-neutral-200/25 rounded-md border border-neutral-700/25 cursor-pointer"
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
