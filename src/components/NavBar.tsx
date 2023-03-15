import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import LocaleSelection from "./LocaleSelection";

const NavBar = () => {
    return (
        <div className="w-full flex justify-center align-center bg-sky-blue ">
            <div className="m-4 max-w-4xl flex flex-row justify-between w-full ">
                {/* Left side */}
                <div>
                    <Link
                        href="/"
                        className="italic text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-700"
                    >
                        LeaveEstimation
                    </Link>
                </div>
                {/* Right side */}
                <LocaleSelection />
            </div>
        </div>
        /*
        <div className="flex bg-purple-300 text-xl p-12 pb-2 justify-between">
            <div className="text-end">
                <Link className="px-8" href={"/UsingAi"}>
                    Use of AI
                </Link>
                <Link className="px-8" href={"/Sandbox"}>
                    Sandbox
                </Link>
            </div> 
            </div>
        */
    );
};

export default NavBar;
