import React, { useState } from "react";
import { ExpandableInformationBoxProps } from "./interfaces";

/**
 * Returns HTML code for an expandable information box component. The initial box contains space 
 * for content and a button, that when clicked, opens a new box on top of all other content 
 * with more information. The boxes are responsive to the content, but have a fixed width based on
 * the screen size.
 * 
 * @param content string or a JSX element. The initial content of the information box.
 * @param expandedContentTitle string. The title of the expanded information box.
 * @param buttonText string or a JSX element. The content of the expanded information box.
 * @param buttonText string. The text of the button that opens the expanded information box.
 * @returns HTML code for an expandable information box.
 */
const ExpandableInformationBox: React.FC<ExpandableInformationBoxProps> = ({
    content,
    expandedContentTitle,
    expandedContent,
    buttonText
}) => {

    const [expanded, setExpanded] = useState<Boolean>(false);

    /**
     * Sets the expanded boolean to it's negation, triggering the HTML for the expanded box
     * to show or hide.
     */
    const handleExpantion = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <div className="h-3/5 justify-center items-center w-full">
                {content}
                <br></br>
                <div className="flex justify-center mb-16 lg:mb-0 lg:pt-7 mt-2 lg:mt-5">
                    <button onClick={handleExpantion} className="p-3 text-xs mt-5 rounded-xl 
                    bg-orange-300 hover:bg-orange-200 text-white">
                        {buttonText}
                    </button>
                </div>
            </div>
            {!expanded ? (<></>)
                : (<>
                    <div className="fixed inset-0 bg-black opacity-25 z-10"></div>
                    <div className="bg-white p-14 w-3/4 rounded-xl fixed top-1/2 left-1/2 transform
                    -translate-x-1/2 -translate-y-1/2 z-50 overflow-y-auto max-h-full mt-10 
                    max-w-5xl">
                        <p className="font-bold mb-6 text-xl w-5/6 xl:w-full text-orange-400">
                            {expandedContentTitle}
                        </p>
                        <p className="text-black">
                            {expandedContent}
                        </p>
                        <button onClick={handleExpantion} className="text-black hover:text-sky-600
                        absolute top-14 right-14 underline">
                            Close
                        </button>
                    </div>
                </>)}
        </div>
    )
}

export default ExpandableInformationBox;