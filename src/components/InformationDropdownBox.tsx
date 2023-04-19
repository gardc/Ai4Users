import React, { ReactNode, useRef, useState } from "react";
import { motion as m } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.css";

/**
 * Interface for the input props for InformationDropBox component.
 *
 * Contains:
 *
 * title: string, initialInfo: string | JSX.Element, extendedInfo: string | JSX.Element
 */
export interface InformationDropdownBoxProps {
    title: string;
    initialInfo: string | JSX.Element;
    extendInfoButtonText: string;
    extendedInfo: string | JSX.Element;
    closeInfoButtonText: string;
    icon?: JSX.Element;
}

/**
 * Returns HTML code for an information box component, that may have a title, some initial
 * info that is always shown, and some extended info that is only shown  when the user
 * extends the box by clicking a button.
 *
 * @param title A string, the title of the information box.
 * @param initialInfo A string or a JSX element, the information that is always shown
 * in the box.
 * @param extendedInfo A string or a JSX element, the information that is shown when the
 * information box is extended.
 * @returns HTML code for an information box component.
 */
const InformationDropdownBox: React.FC<InformationDropdownBoxProps> = ({
    title,
    initialInfo,
    extendInfoButtonText,
    extendedInfo,
    closeInfoButtonText,
    icon,
}) => {
    const [open, setOpen] = useState<Boolean>(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleOpen = () => {
        if (open && containerRef.current) {
            containerRef.current.scrollIntoView({ behavior: "smooth" });
        }
        setOpen(!open);
    };

    return (
        <div
            ref={containerRef}
            className="bg-white rounded-xl shadow-lg sm:w-19/20 md:w-3/4 text-left justify-center items-center m-2"
        >
            <div className="row flex px-4 sm:px-12 pt-8 sm:pt-14">
                {icon}
                {title.length !== 0 && (
                    <h2 className={"font-bold text-xl text-prussian-blue px-2"}>
                        {title}
                    </h2>
                )}
            </div>
            <div className="p-4 sm:p-8 md:px-12">{initialInfo}</div>
            {!open && (
                <div className="flex flex-col justify-center pb-6">
                    <p className="flex justify-center text-xs pb-2">
                        {extendInfoButtonText}
                    </p>
                    <m.button
                        initial={false}
                        whileHover={{
                            scale: 1.2,
                            transition: { duration: 0.3 },
                            y: 5,
                        }}
                        onClick={handleOpen}
                    >
                        <p className="text-xs"></p>
                        <i className="fas fa-chevron-down"></i>
                    </m.button>
                </div>
            )}
            {open ? (
                <div className="bg-slate-50 rounded-b-xl">
                    <div className="px-6 pt-6">{extendedInfo}</div>
                    {open && (
                        <div className="flex justify-center sm:pt-6 pb-4">
                            <button onClick={handleOpen}>
                                <i className="fas fa-chevron-up pb-4" />
                                <p className="text-xs">{closeInfoButtonText}</p>
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

export default InformationDropdownBox;
