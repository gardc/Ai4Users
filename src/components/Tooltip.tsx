import React, { useEffect, useRef } from "react";
import "@fortawesome/fontawesome-free/css/all.css";

interface TooltipProps {
    extendedInfo: string | JSX.Element;
}

/**
 * A component for a tooltip with an expandable information section.
 *
 * @param extendedInfo The information shown when the tooltip is clicked.
 *
 * @returns A tooltip as a React functional component.
 */
const Tooltip: React.FC<TooltipProps> = ({ extendedInfo }) => {
    const [open, setOpen] = React.useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // set "open" to false so extendedInfo disappears
        function handleClickOutside(event: { target: any }) {
            if (ref.current && !ref.current.contains(event.target)) {
                setOpen(false);
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);

    // Function to flip value on boolean "open"
    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div ref={ref} className="flex relative items-center">
            <button
                className={`w-1/100 h-1/100 bg-white focus:outline-none ${
                    open && "ring ring-black"
                } rounded-full flex justify-center items-center text-center p-3 shadow-xl border-black border-1`}
                onClick={handleOpen}
            >
                <div className="absolute text-sm font-medium">?</div>
            </button>
            <div>
                {open ? (
                    <div className="absolute origin-bottom-right right-full bottom-full sm:left-full w-48 sm:w-28 md:w-40 text-left bg-black z-50 text-white bg-opacity-80 rounded p-2 text-xs">
                        {extendedInfo}
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    );
};
export default Tooltip;
