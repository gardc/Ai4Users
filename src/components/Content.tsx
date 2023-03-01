import React, { useState } from "react";

const Content = (props: any) => {
    return (
        <div className="flex justify-center">
            <div className="w-full bg-slate-50">{props.children}</div>
        </div>
    );
};

export default Content;
