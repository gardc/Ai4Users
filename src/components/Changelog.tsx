import { useEffect, useRef, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import ChangelogIcon from "./Assets/changelogIcon";
import Link from "next/link";
import { useTranslation } from "next-i18next";

/**
 * The type definition for the `Changelog` component's props.
 */
interface ChangelogProps {
    /**
     * The title of the changelog.
     */
    title: string;

    /**
     * An array of objects reperesenting changes to display.
     */
    listOfChanges: {
        /**
         * The date of the change.
         */
        dateOfChange: string;

        /**
         * The title of the change.
         */
        titleOfChange: string;

        /**
         * Some text describing the change.
         */
        changeDescription: string;

        /**
         * The link for a page where the user can read more about the change. Can be an empty
         * string if there is no other place to read more about the change.
         */
        readMoreLink: string;
    }[];
}

/**
 * A component for a changelog, displaying a list of changes defined in an array.
 *
 * @param title the title of the changelog.
 * @param listOfChanges the array of change objects
 * @returns a React functional component for a changelog.
 *
 * @component
 * @example
 * title = "A title for the changelog"
 * listOfChanges = [
 *  {
 *      dateOfChange: "12.03.2023",
 *      titleOfChange: "A title of the most recent change",
 *      changeDescription: "A description of the most recent change",
 *      readMoreLink: "/Change12032023",
 *  },
 *  {
 *      dateOfChange: "22.02.2023",
 *      titleOfChange: "A title of the second recent change",
 *      changeDescription: "A description second recent change",
 *      readMoreLink: "",
 *  },
 * ]
 *
 * Usage <Changelog title={title} listOfChanges={listOfChanges} />
 */
const Changelog: React.FC<ChangelogProps> = ({
    title,
    listOfChanges,
}: ChangelogProps) => {
    const [changelogOpen, setChangelogOpen] = useState(false);
    const ref = useRef<HTMLInputElement>(null);
    const { t } = useTranslation("common");

    // Adds and removes an event listener to/fro the document enabling closing of the changelog
    // when clicking outside of it.
    useEffect(() => {
        function handleClickOutside(event: { target: any }) {
            if (ref.current && !ref.current.contains(event.target)) {
                setChangelogOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);

    /**
     * Toggles the visibility of the changelog.
     */
    const toggleChangelogOpen = () => {
        setChangelogOpen(!changelogOpen);
    };

    return (
        <>
            {!changelogOpen ? (
                <>
                    <div
                        onClick={toggleChangelogOpen}
                        className="flex lg:w-96 items-center mx-4 px-4 py-2 border border-prussian-blue bg-darkblue text-white text-sm font-light rounded-xl cursor-pointer hover:bg-prussian-blue"
                    >
                        <div className="pr-2">
                            <ChangelogIcon />
                        </div>
                        <p className="hidden lg:block">{title}</p>
                        <p className="pl-2 ml-auto fas fa-chevron-down"></p>
                    </div>
                </>
            ) : (
                <div className="relative mx-4 lg:w-96">
                    <div
                        onClick={toggleChangelogOpen}
                        className="flex items-center w-full justify-end px-4 py-2 border border-prussian-blue bg-darkblue text-white text-sm font-light rounded-t-xl cursor-pointer hover:bg-prussian-blue float-right"
                    >
                        <div className="pr-2">
                            <ChangelogIcon />
                        </div>
                        <p className="hidden lg:block">{title}</p>
                        <p className="ml-auto pl-2 fas fa-chevron-up"></p>
                    </div>
                    <div
                        ref={ref}
                        className="absolute drop-shadow-xl border-prussian-blue max-h-96 right-0 top-10 w-80 lg:w-full p-6 z-20 bg-prussian-blue rounded-b-xl rounded-l-xl lg:rounded-t-none text-white text-sm"
                    >
                        <p className="lg:hidden sticky text-base font-light mb-4">
                            {title}
                        </p>
                        <div className="max-h-72 overflow-y-scroll">
                            {listOfChanges.map((changeItem) => (
                                <>
                                    <p className="pb-2">
                                        {changeItem.dateOfChange}
                                    </p>
                                    <p className="pb-1">
                                        {changeItem.titleOfChange}
                                    </p>
                                    <p className="font-light text-xs pb-2">
                                        {changeItem.changeDescription}
                                    </p>
                                    {changeItem.readMoreLink.length > 0 && (
                                        <Link
                                            href={changeItem.readMoreLink}
                                            className="underline hover:text-skyblue font-light"
                                        >
                                            {t("changelog.readMore")}
                                        </Link>
                                    )}
                                    <div className="w-full mt-4 bg-white h-[1px] mb-6"></div>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Changelog;
