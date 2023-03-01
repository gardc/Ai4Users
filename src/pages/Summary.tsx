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
    let predictionChoiceTitle = "";
    let predictionChoiceText = "";
    if (consent === "true") {
        predictionChoiceTitle =
            "You have chosen to use the AI model for prediction";
        predictionChoiceText =
            "The case handler will use the AI model to predict the total duration of your sick leave.";
    } else if (consent === "false") {
        predictionChoiceTitle =
            "You have chosen <b>not</b> to use the AI model for prediction";
        predictionChoiceTitle = predictionChoiceTitle.replace(
            /(<b>not<\/b>)/,
            "<b>$1</b>"
        );
        predictionChoiceText =
            "The case handler will make a prediction of the total duration of your sick leave without the use of the AI model. This may result in a longer processing time.";
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
                    <div className="flex flex-col justify-center text-2xl items-center text-center">
                        <h1
                            dangerouslySetInnerHTML={{
                                __html: predictionChoiceTitle,
                            }}
                        />
                        <p
                            className="text-base mt-2 w-1/2 text-center"
                            dangerouslySetInnerHTML={{
                                __html: predictionChoiceText,
                            }}
                        />
                        <p className="text-base mt-10 w-1/2 text-center">
                            To change your choice, click on &quot;Using AI&quot;
                            in the top left corner.
                        </p>
                    </div>

                    <div className="flex justify-center mt-16">
                        <h2 className="text-base font-bold text-prussian-blue text-center">
                            Summary of the information used to predict your sick
                            leave duration
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
                    <div className="flex justify-center mt-4 pb-16">
                        <Button color="black" href="/TestingFinishedPage">
                            Submit your choice
                        </Button>
                    </div>
                </div>
            </div>
        </Parent>
    );
};

export default Summary;
