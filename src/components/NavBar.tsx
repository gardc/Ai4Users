import Link from "next/link";
import React from "react";

const NavBar = () => {
    return (
        <div className="flex bg-purple-300 text-xl p-12 justify-between">
            <Link className="text-white px-2" href={"/"}>
                SickLeave
            </Link>
            {/*
            <div className="text-end">
                <Link className="px-8" href={"/UsingAi"}>
                    Use of AI
                </Link>
                <Link className="px-8" href={"/Sandbox"}>
                    Sandbox
                </Link>
            </div> 
            */}
        </div>
    );
};

export default NavBar;
