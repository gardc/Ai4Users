import React, { useState } from "react";
import Button from "@/components/Button";
import InformationSignIcon from "./Assets/informationSignIcon";

export interface ExpandableInformationBoxProps {
    content: string | JSX.Element;
    expandedContentTitle: string;
    expandedContent: string | JSX.Element;
    expandedCloseButtonText: string;
    buttonText: string;
}

/**
 * An information box that displays content with an optional title. The box can be expanded to show additional information.
 *
 * @param content - The initial content of the information box. Can  be  a string or a JSX/TSX Element.
 * @param expandedContentTitle - The title of the information box. A string that can be empty.
 * @param expandedContent - The content shown when the information box is expanded. Can  be  a string or a JSX/TSX Element.
 * @param expandedCloseButtonText - A string that is shown on the close button on the expanded content.
 * @param buttonText - A string that is shown on the button that expands the box to reveal additional content.
 *
 * @returns An expandable information box as a React functional component.
 */
const ExpandableInformationBox: React.FC<ExpandableInformationBoxProps> = ({
    content,
    expandedContentTitle,
    expandedContent,
    expandedCloseButtonText,
    buttonText,
}) => {
    const [expanded, setExpanded] = useState<boolean>(false);

    const handleExpansion = () => {
        setExpanded(true);
        document.body.style.overflow = "hidden";
    };

    const handleExpansionClose = () => {
        setExpanded(false);
        document.body.style.overflow = "";
    };

    return (
        <div className="flex flex-col">
            {content}
            <div className="flex justify-self-end justify-center mb-16 lg:mb-0 pt-2 mt-6">
                <Button color="darkblue" onClick={handleExpansion}>
                    {buttonText}
                </Button>
            </div>
            {!expanded ? (
                <></>
            ) : (
                <>
                    <div
                        className="fixed inset-0 bg-black opacity-25 z-10"
                        onClick={handleExpansionClose}
                    ></div>
                    <div
                        className="bg-white w-full sm:w-3/4 sm:rounded-xl fixed top-[40%] left-1/2 transform
                        -translate-x-1/2 -translate-y-1/2 z-50 overflow-y-auto max-h-[85%] sm:mt-10"
                    >
                        <div className="w-full p-8 sm:px-14 sm:py-8 bg-prussian-blue sticky top-0">
                            <button
                                onClick={handleExpansionClose}
                                className="text-white hover:text-sky-600 mt-4 underline float-right justify-end"
                            >
                                {expandedCloseButtonText}
                            </button>
                            <div className="font-bold flex text-xl w-5/6 text-left text-white">
                                <InformationSignIcon />
                                <p className="ml-4 mt-3">
                                    {expandedContentTitle}
                                </p>
                            </div>
                        </div>
                        <div className="text-black text-left p-8 sm:p-14">
                            {expandedContent}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ExpandableInformationBox;
