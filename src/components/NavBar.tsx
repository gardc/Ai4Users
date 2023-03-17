import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import LocaleSelection from "./LocaleSelection";

const NavBar = () => {
    return (
        <div className="bg-sky-blue ">
            <div className="px-12 pt-8 pb-2 flex justify-between">
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
