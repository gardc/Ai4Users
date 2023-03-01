import Button from "@/components/Button";
import DataTable from "@/components/DataTable";
import { useRouter } from "next/router";
import Parent from "@/components/Parent";
import React from "react";
import Link from "next/link";
import { exampleData } from "./api/exampleData";

/**
 * The summary page component that displays a summary of information used to estimate sick leave duration.
 *
 * @returns A React functional component representing the summary page.
 */
const Summary: React.FC = () => {
    const router = useRouter();
    const { consent } = router.query;

    /**
     * The model query value that determines whether the AI-model is used for estimation or not.
     */
    let text = "";
    if (consent === "true") {
        text = "You have chosen to use the AI-model for estimation";
    } else if (consent === "false") {
        text = "You have chosen <b>not</b> to use the AI-model for estimation";
        text = text.replace(/(<b>not<\/b>)/, "<b>$1</b>");
    }

    return (
        <Parent>
            <div className="bg-slate-50 h-screen">
                <div className="bg-gradient-to-b from-sky-blue to-slate-50">
                    <div className="flex justify-start py-5 pt-10 text-white">
                        <Link
                            className="text-white pl-12 px-3"
                            href={"/LandingPage"}
                        >
                            Frontpage
                        </Link>
                        {">"}
                        <Link className="text-white px-3" href={"/UsingAi"}>
                            Using AI
                        </Link>
                        {">"}
                        <Link className="text-white px-3" href={"/Summary"}>
                            Summary
                        </Link>
                    </div>
                    {/*
                    <div className="flex items-center ml-5">
                        <Button color="black" href={"/UsingAi"}>
                            Go back
                        </Button>
                    </div> */}
                    <div className="flex justify-center text-2xl text-center">
                        <h1 dangerouslySetInnerHTML={{ __html: text }} />
                    </div>

                    <div className="flex justify-center pb-8">
                        <h2 className="text-lg font-bold text-gray-600 text-center">
                            Summary of information used to estimate sick leave
                            duration
                        </h2>
                    </div>
                </div>
                <div className="bg-slate-50">
                    <div className="flex justify-center pt-4">
                        <DataTable data={exampleData} />
                    </div>
                    {/* <div className="flex justify-center mt-4">
                        <Button color="black" onClick={() => alert("Okay")}>
                            Is this information incorrect?
                        </Button>
                    </div> */}
                    <div className="flex justify-center mt-4">
                        <Button color="black" href="/estimate">
                            Estimate sick leave
                        </Button>
                    </div>
                </div>
            </div>
        </Parent>
    );
};

export default Summary;
