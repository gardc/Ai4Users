import React from "react";

const Content = (props: any) => {
    return (
        <div className="flex justify-center">
            <div className="w-full bg-slate-50 mb-6">{props.children}</div>
        </div>
    );
};

export default Content;
