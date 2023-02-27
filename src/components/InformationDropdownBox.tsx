import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import { InformationDropdownBoxProps } from "./interfaces";

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
    extendedInfo,
}) => {
    const [open, setOpen] = useState<Boolean>(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className="bg-white rounded-xl shadow-lg w-3/4 justify-center items-center m-2">
            {" "}
            {/* TODO: Must change color, or set color somewhere else.*/}
            {title.length !== 0 && (
                <h2 className="font-bold px-12 pt-14 text-xl">{title}</h2>
            )}
            <div className="px-6 pt-6 pb-6">{initialInfo}</div>
            {!open && (
                <div className="flex justify-center pb-4">
                    <button onClick={handleOpen}>
                        <p className="text-xs">Read more</p>
                        <i className="fas fa-chevron-down"></i>
                    </button>
                </div>
            )}
            {open ? (
                <div className="bg-slate-50 rounded-b-xl">
                    <div className="px-6 py-6">{extendedInfo}</div>
                    {open && (
                        <div className="flex justify-center pb-4">
                            <button onClick={handleOpen}>
                                <i className="fas fa-chevron-up"></i>
                                <br></br>
                                <p className="text-xs">Close</p>
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
