import React from "react";
import DocumentApprovedIcon from "./Assets/documentApprovedIcon";

/**
 * A logo for a generic social service entity.
 *
 * @returns A logo as a React functional component.
 */
const SocialServiceLogo = () => {
    return (
        <div className="flex flex-row">
            <DocumentApprovedIcon />
            <div>
                <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-cyan-600">
                    National
                </p>
                <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-cyan-600">
                    Social Service
                </p>
            </div>
        </div>
    );
};

export default SocialServiceLogo;
