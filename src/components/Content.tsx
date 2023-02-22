import React, { useState } from "react";

const Content = (props: any) => {
    return (
        <div className="flex justify-center">
            <div className="max-w-7xl w-full">{props.children}</div>
        </div>
    );
};

export default Content;
