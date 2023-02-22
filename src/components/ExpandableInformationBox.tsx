import React, { useState } from "react";

interface InformationBoxProps {
    content: string | JSX.Element;
    expandedContentTitle: string;
    expandedContent: string | JSX.Element;
    buttonText: string;
}

// TODO: Must change colors, or set colors somewhere else.

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
const ExpandableInformationBox: React.FC<InformationBoxProps> = ({
    content,
    expandedContentTitle,
    expandedContent,
    buttonText
}) => {

    const [expanded, setExpanded] = useState<Boolean>(false);

    const handleExpantion = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <div className=" w-full justify-center items-center w-full">
                {content}
                <br></br>
                <div className="flex justify-center pt-7">
                    <button onClick={handleExpantion} className="p-3 rounded-xl bg-orange-300 text-white">
                        {buttonText}
                    </button>
                </div>
            </div>
            {!expanded ? (<></>)
                : (<>
                    <div className="fixed inset-0 bg-black opacity-25 z-10"></div>
                    <div className="bg-blue-400 p-14 w-3/4 rounded-xl fixed top-1/2 left-1/2 transform 
                    -translate-x-1/2 -translate-y-1/2 z-50">
                        <p className="font-bold mb-6 text-xl text-white">
                            {expandedContentTitle}
                        </p>
                        <p className="text-white">
                            {expandedContent}
                        </p>
                        <button onClick={handleExpantion} className="text-black absolute top-14 right-14 
                        underline">
                            Close
                        </button>
                    </div>
                </>)}
        </div>
    )
}

export default ExpandableInformationBox;