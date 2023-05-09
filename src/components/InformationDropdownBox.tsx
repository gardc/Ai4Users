import React, { useRef, useState } from "react";
import { motion as m } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.css";

/**
 * Interface for the input props for InformationDropBox component.
 *
 * @param title - Title of the dropdown box.
 * @param initialInfo - The first layer of information. This is displayed before the box is expanded.
 * @param extendedInfo - The second layer of information. This content is revealed when the box is expanded.
 * @param extendInfoButtonText - Text for the button to expand the box.
 * @param extendedInfo - A string or a JSX element, the information that is shown when the
 * information box is extended.
 * @param closeInfoButtonText - Text for the button to close the box
 * @param icon - Icon in the title line.
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
 * @param title - A string, the title of the information box.
 * @param initialInfo - A string or a JSX element, the information that is always shown
 * in the box.
 * @param extendInfoButtonText - Text for the button to expand the box.
 * @param extendedInfo - A string or a JSX element, the information that is shown when the
 * information box is extended.
 * @param closeInfoButtonText - Text for the button to close the box
 * @param icon - Icon in the title line.
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

    /**
     * Smoothly scrolls the window to a target vertical position using requestAnimationFrame.
     *
     * @param targetY - The target Y position (in pixels) to scroll to.
     * @param duration - The duration (in milliseconds) of the scrolling animation. Default is
     * 250ms.
     */
    const smoothScrollTo = (targetY: number, duration: number = 250) => {
        const startY = window.scrollY;
        const difference = targetY - startY;
        const startTime = performance.now();

        const step = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            window.scrollTo(0, startY + difference * progress);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    };

    /**
     * Handles the opening and closing of the InformationDropdownBox. When closing the box,
     * smoothly scrolls the window to the top of the closed InformationDropdownBox element.
     */
    const handleOpen = () => {
        if (open && containerRef.current) {
            const containerTop =
                containerRef.current.getBoundingClientRect().top +
                window.pageYOffset;
            setTimeout(() => {
                smoothScrollTo(containerTop);
            }, 1);
        }
        setOpen(!open);
    };

    return (
        <div
            ref={containerRef}
            className="max-w-7xl bg-white rounded-xl shadow-lg sm:w-19/20 md:w-3/4 text-left justify-center items-center m-2"
        >
            <div className="row flex px-4 sm:px-12 pt-8 sm:pt-14 items-center">
                <div className="text-prussian-blue">{icon}</div>
                {title.length !== 0 && (
                    <h2 className={"font-bold text-xl text-prussian-blue px-2"}>
                        {title}
                    </h2>
                )}
            </div>
            <div className="p-4 sm:p-8 md:px-12">{initialInfo}</div>
            {!open && (
                <div className="flex flex-col justify-center pb-6">
                    <p
                        onClick={handleOpen}
                        className="flex justify-center text-xs pb-2 cursor-pointer"
                    >
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
                <div className="bg-lightslate rounded-b-xl">
                    <div className="px-6 pt-6">{extendedInfo}</div>
                    {open && (
                        <div className="flex justify-center pt-6 pb-4">
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
