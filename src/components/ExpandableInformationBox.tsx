import React, { useEffect, useRef, useState } from "react";
import Button from "@/components/Button";

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
    const expandedRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (expandedRef.current && !expandedRef.current.contains(event.target as Node)) {
                setExpanded(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [expandedRef]);

    const handleExpansion = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="flex flex-col">
            {content}
            <div className="flex justify-self-end justify-center mb-16 lg:mb-0 pt-2 mt-6">
                <Button color="violet" onClick={handleExpansion}>
                    {buttonText}
                </Button>
            </div>
            {!expanded ? (
                <></>
            ) : (
                <>
                    <div
                        className="fixed inset-0 bg-black opacity-25 z-10"
                        onClick={handleExpansion}
                    ></div>
                    <div
                        ref={expandedRef}
                        className="bg-white p-14 w-3/4 rounded-xl fixed top-1/2 left-1/2 transform
                        -translate-x-1/2 -translate-y-1/2 z-50 overflow-y-auto max-h-full mt-10
                        max-w-5xl"
                    >
                        <div className="font-bold mb-6 text-xl w-5/6 xl:w-full text-left text-violet">
                            {expandedContentTitle}
                        </div>
                        <div className="text-black text-left">{expandedContent}</div>
                        <button
                            onClick={handleExpansion}
                            className="text-black hover:text-sky-600
                            absolute top-14 right-14 underline"
                        >
                            {expandedCloseButtonText}
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default ExpandableInformationBox;
