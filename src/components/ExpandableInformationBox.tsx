import React, { useState } from "react";
import Button from "@/components/Button";
import InformationSignIcon from "@/components/Assets/informationSignIcon";
import { createPortal } from "react-dom";

/**
 * The props for the ExpandableInformationBox component.
 *
 * @param content - The initial content of the information box. Can  be  a string or a JSX/TSX Element.
 * @param expandedContentTitle - The title of the information box. A string that can be empty.
 * @param expandedContent - The content shown when the information box is expanded. Can be a string or a JSX/TSX Element.
 * @param expandedCloseButtonText - A string that is shown on the close button on the expanded content.
 * @param buttonText - A string that is shown on the button that expands the box to reveal additional content.
 */
export interface ExpandableInformationBoxProps {
    content: string | JSX.Element;
    expandedContentTitle: string;
    expandedContent: string | JSX.Element;
    expandedCloseButtonText: string;
    buttonText: string;
}

/**
 * An information box that displays content with an optional title. The box can be expanded to show
 *  additional information.
 *
 * @param content - The initial content of the information box. Can  be  a string or a JSX/TSX Element.
 * @param expandedContentTitle - The title of the information box. A string that can be empty.
 * @param expandedContent - The content shown when the information box is expanded. Can be a string or a JSX/TSX Element.
 * @param expandedCloseButtonText - A string that is shown on the close button on the expanded content.
 * @param buttonText - A string that is shown on the button that expands the box to reveal additional content.
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
            <div className="justify-self-end justify-center mb-16 lg:mb-0 pt-2 mt-6">
                <Button color={"prussian-blue"} onClick={handleExpansion}>
                    {buttonText}
                </Button>
            </div>
            {!expanded ? (
                <></>
            ) : (
                <>
                    {createPortal(
                        <div>
                            <div
                                className="fixed inset-0 bg-black opacity-25"
                                onClick={handleExpansionClose}
                            ></div>
                            <div
                                className="max-w-7xl bg-white w-full md:w-3/4 sm:rounded-xl fixed top-[40%] left-1/2
                        -translate-x-1/2 -translate-y-1/2 overflow-y-auto max-h-[85%] sm:mt-10"
                            >
                                <div className="p-8 sm:px-14 sm:py-8 bg-prussian-blue sticky top-0">
                                    <button
                                        onClick={handleExpansionClose}
                                        className="text-white hover:text-skyblue mt-4 underline float-right justify-end"
                                    >
                                        {expandedCloseButtonText}
                                    </button>
                                    <div className="font-bold flex text-sm lg:text-xl w-5/6 text-left text-white">
                                        <div className="my-auto">
                                            <InformationSignIcon />
                                        </div>
                                        <p className="ml-4 mt-3">{expandedContentTitle}</p>
                                    </div>
                                </div>
                                <div className="text-black text-left font-light w-5/6 mx-auto p-8 sm:p-14">
                                    {expandedContent}
                                </div>
                            </div>
                        </div>,
                        document.body
                    )}
                </>
            )}
        </div>
    );
};

export default ExpandableInformationBox;
