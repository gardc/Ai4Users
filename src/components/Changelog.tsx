import { useEffect, useRef, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import ChangelogIcon from "./Assets/changelogIcon";
import Link from "next/link";

/**
 * An array of objects reperesenting changes to display.
 *
 * @param dateOfChange - The date of the change.
 * @param titleOfChange - The title of the change.
 * @param changeDescription - Some text describing the change.
 * @param readMoreLink - The link for a page where the user can read more about the change. Can be an empty
 * string if there is no other place to read more about the change.
 *
 */
interface Change {
    dateOfChange: string;
    titleOfChange: string;
    changeDescription: string;
    readMoreLink: string;
}

/**
 * The type definition for the `Changelog` component's props.
 *
 * @param title - The title of the changelog.
 * @param listOfChanges - An array of objects reperesenting changes to display.
 * @param linkText - A string shown for links. Shows when an item in listOfChanges has a link
 */
interface ChangelogProps {
    title: string;
    listOfChanges: Change[];
    linkText: string;
}

/**
 * A component for a changelog, displaying a list of changes defined in an array.
 *
 * @param title the title of the changelog.
 * @param listOfChanges the array of change objets
 * @param linkText a string shown for links when change items have them
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
 * linkText = "Read more"
 *
 * Usage <Changelog title={title} listOfChanges={listOfChanges} linkText={linkText} />
 */
const Changelog: React.FC<ChangelogProps> = ({
    title,
    listOfChanges,
    linkText,
}: ChangelogProps) => {
    const [changelogOpen, setChangelogOpen] = useState(false);
    const ref = useRef<HTMLInputElement>(null);

    // Adds and removes an event listener to/from the document enabling closing of the changelog
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
                        className="flex md:w-96 items-center px-4 py-2 border border-prussian-blue bg-darkblue text-white text-sm font-light rounded-xl cursor-pointer hover:bg-prussian-blue"
                    >
                        <div className="pr-2">
                            <ChangelogIcon />
                        </div>
                        <p className="hidden md:block">{title}</p>
                        <p className="pl-2 ml-auto fas fa-chevron-up"></p>
                    </div>
                </>
            ) : (
                <div className="relative md:w-96">
                    <div
                        onClick={toggleChangelogOpen}
                        className="flex items-center w-full justify-end px-4 py-2 border border-prussian-blue bg-darkblue text-white text-sm font-light rounded-b-xl cursor-pointer hover:bg-prussian-blue float-right"
                    >
                        <div className="pr-2">
                            <ChangelogIcon />
                        </div>
                        <p className="hidden md:block">{title}</p>
                        <p className="ml-auto pl-2 fas fa-chevron-down"></p>
                    </div>
                    <div
                        ref={ref}
                        className="absolute border border-darkblue right-0 bottom-0 w-80 md:w-full z-20 bg-prussian-blue rounded-t-xl rounded-l-xl md:rounded-l-none md:rounded-t-xl text-white text-sm"
                    >
                        <p className="md:hidden px-6 pt-6 sticky text-base font-light mb-4">
                            {title}
                        </p>
                        <div className="max-h-96 md:max-h-[480px] pt-6 px-6 w-full overflow-y-scroll">
                            {listOfChanges.map((changeItem) => (
                                <div key={changeItem.titleOfChange}>
                                    <p className="pb-2">{changeItem.dateOfChange}</p>
                                    <p className="pb-1">{changeItem.titleOfChange}</p>
                                    <p className="font-light text-xs pb-2">
                                        {changeItem.changeDescription}
                                    </p>
                                    {changeItem.readMoreLink.length > 0 && (
                                        <Link
                                            href={changeItem.readMoreLink}
                                            className="underline hover:text-skyblue font-light"
                                        >
                                            {linkText}
                                        </Link>
                                    )}
                                    <div className="w-full mt-4 bg-white h-[1px] mb-6"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Changelog;
