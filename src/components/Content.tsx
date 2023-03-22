import React from "react";

const Content = (props: any) => {
    return (
        <div className="flex justify-center">
            <div className="w-full sm:mb-6">{props.children}</div>
        </div>
    );
};

export default Content;
