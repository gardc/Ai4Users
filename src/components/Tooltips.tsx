import React, { useEffect, useRef, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";

interface Tooltips {
    extendedInfo: string | JSX.Element;
}

const Tooltips: React.FC<Tooltips> = ({
    extendedInfo,
}) => {
    const [open, setOpen] = React.useState(false);
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event: { target: any; }) {
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
   
    const handleOpen = () => {
      setOpen(!open);
    };
  
    return (
      <div className="">
        <button className=" w-1/100 h-1/100 bg-white focus:outline-none focus:ring focus:ring-black rounded-full flex justify-center items-center text-center p-5 shadow-xl" onClick={handleOpen}>
        <div className="absolute" >?</div> 
        </button>
        {open ? (
        <div ref={ref} className="absolute bg-black aspect-square text-white bg-opacity-80 rounded-xl p-5">{extendedInfo}</div>) 
        : (<div></div>)}
      </div>
    );
  };
  
  export default Tooltips;