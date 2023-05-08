import React from "react";

/**
 * A React functional component that ensures content within it is centered, has the correct
 * background color, with and margin.
 *
 * @param props The content to be adjusted.
 *
 * @returns A React funcional component for ensuring content uniformity on different pages.
 */
const Content = (props: any) => {
    return (
        <div className="flex justify-center">
            <div className="w-full">{props.children}</div>
        </div>
    );
};

export default Content;
