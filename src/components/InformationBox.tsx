import React, { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.css';

interface InformationBoxProps {
    title: string
    initialInfo: string | JSX.Element;
    extendedInfo: string | JSX.Element;
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
const InformationBox: React.FC<InformationBoxProps> = ({ title, initialInfo, extendedInfo }) => {

    const [open, setOpen] = useState<Boolean>(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    return (
        <div className='w-full bg-teal-200'> {/* TODO: Must change color, or set color somewhere else.*/}
            {title.length !== 0 && <h2 className='font-bold px-12 pt-14 text-xl'>
                {title}
            </h2>}
            <div className='px-12 pt-12 pb-12'>
                {initialInfo}
            </div>
            {!open && <div className="flex justify-center pb-7">
                <button onClick={handleOpen}>
                    <p className='text-xs'>More info</p>
                    <i className='fas fa-chevron-down'></i>
                </button>
            </div>}
            {open ? <div className='bg-teal-100'>
                <div className='px-12 py-12'>
                    {extendedInfo}
                </div>
                {open && <div className="flex justify-center pb-7">
                    <button onClick={handleOpen}>
                        <i className='fas fa-chevron-up'></i>
                        <br></br>
                        <p className='text-xs'>Less info</p>
                    </button>
                </div>}
            </div> : <></>}
        </div>
    )

}

export default InformationBox