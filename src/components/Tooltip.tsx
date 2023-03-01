import React, { useEffect, useRef } from "react";
import "@fortawesome/fontawesome-free/css/all.css";

interface TooltipProps {
    extendedInfo: string | JSX.Element;
}

const Tooltip: React.FC<TooltipProps> = ({ extendedInfo }) => {
    const [open, setOpen] = React.useState(false);
    const ref = useRef<HTMLInputElement>(null);

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
        <div className="flex items-center">
            <button
                className=" w-1/100 h-1/100 bg-white focus:outline-none focus:ring focus:ring-black rounded-full flex justify-center items-center text-center p-3 shadow-xl border-black border-1"
                onClick={handleOpen}
            >
                <div className="absolute text-sm font-medium">?</div>
            </button>
            <div className="">
                {open ? (
                    <div
                        ref={ref}
                        className="absolute bg-black z-50 text-white bg-opacity-80 rounded p-5"
                    >
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
