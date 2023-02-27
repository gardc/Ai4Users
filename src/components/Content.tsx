import React, { useState } from "react";

const Content = (props: any) => {
    return (
        <div className="flex justify-center">
            <div className="w-full">{props.children}</div>
        </div>
    );
};

export default Content;
