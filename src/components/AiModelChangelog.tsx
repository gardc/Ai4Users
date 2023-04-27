import { useState } from "react";
import ChangelogIcon from "./Assets/changelogIcon";
import "@fortawesome/fontawesome-free/css/all.css";

interface AiModelChangelogProps {
    title: string;
    listOfChanges: {
        dateOfChange: string;
        titleOfChange: string;
        change: string;
    }[];
}

const AiModelChangelog: React.FC<AiModelChangelogProps> = ({
    title,
    listOfChanges,
}: AiModelChangelogProps) => {
    const [changelogOpen, setChangelogOpen] = useState(false);

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
                    <div className="absolute border-prussian-blue max-h-96 right-0 top-10 w-96 lg:w-full p-6 z-20 bg-prussian-blue rounded-b-xl rounded-l-xl lg:rounded-t-none text-white text-sm">
                        <p className="lg:hidden sticky text-base font-light mb-4">{title}</p>
                        <div className="max-h-72 overflow-y-scroll">
                            {listOfChanges.map((listOfChanges) => (
                                <>
                                    <p className="pb-2">{listOfChanges.dateOfChange}</p>
                                    <p className="pb-1">{listOfChanges.titleOfChange}</p>
                                    <p className="font-light text-xs pb-4">
                                        {listOfChanges.change}
                                    </p>
                                    <div className="w-full bg-white h-[1px] mb-6"></div>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AiModelChangelog;
