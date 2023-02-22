import Button from "@/components/Button";
import Content from "@/components/Content";
import Parent from "@/components/Parent";
import Link from "next/link";
import React from "react";

const UsingAI = () => {
    return (
        <Parent>
            <Content>
                <div className="py-28 text-center">
                    <p className="text-center text-2xl m-3">
                        Using Artificial Intelligence for estimation
                    </p>
                    <Button title={"Back"} path={"/"} />
                </div>
            </Content>
        </Parent>
    );
};

export default UsingAI;
