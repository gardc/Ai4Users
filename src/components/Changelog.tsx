import { useEffect, useRef, useState } from "react";
import ChangelogIcon from "./Assets/changelogIcon";
import "@fortawesome/fontawesome-free/css/all.css";
import Link from "next/link";

interface ChangelogProps {
    title: string;
    listOfChanges: {
        dateOfChange: string;
        titleOfChange: string;
        change: string;
        readMoreLink: string;
    }[];
}

const Changelog: React.FC<ChangelogProps> = ({ title, listOfChanges }: ChangelogProps) => {
    const [changelogOpen, setChangelogOpen] = useState(false);
    const ref = useRef<HTMLInputElement>(null);

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
                        <p className="lg:hidden sticky text-base font-light mb-4">{title}</p>
                        <div className="max-h-72 overflow-y-scroll">
                            {listOfChanges.map((changeItem) => (
                                <>
                                    <p className="pb-2">{changeItem.dateOfChange}</p>
                                    <p className="pb-1">{changeItem.titleOfChange}</p>
                                    <p className="font-light text-xs pb-2">{changeItem.change}</p>
                                    {changeItem.readMoreLink.length > 0 && (
                                        <Link
                                            href={changeItem.readMoreLink}
                                            className="underline hover:text-sky-600 font-light"
                                        >
                                            Read more
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
