import Button from "@/components/Button";
import Content from "@/components/Content";
import NavBar from "@/components/NavBar";
import Parent from "@/components/Parent";
import Link from "next/link";
import React from "react";

const UsingAI = () => {
    return (
        <Parent>
            <Content>
                <NavBar />
                <div className="py-28 text-center">
                    <p className="text-center text-2xl m-3">
                        Using Artificial Intelligence for estimation
                    </p>
                </div>
            </Content>
        </Parent>
    );
};

export default UsingAI;
