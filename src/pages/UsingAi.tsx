import Button from "@/components/Button";
import Content from "@/components/Content";
import ExpandableInformationBox from "@/components/ExpandableInformationBox";
import InformationDropdownBox from "@/components/InformationDropdownBox";
import NavBar from "@/components/NavBar";
import Parent from "@/components/Parent";
import ExplainingUseOfAiInfoBox from "@/components/ExplainingUseOfAiInfoBox";
import Link from "next/link";
import React from "react";

const UsingAI = () => {
    return (
        <Parent>
            <Content>
                <NavBar />
                <div className="bg-gradient-to-b from-purple-300 to-slate-50 pt-5 pb-16 text-center">
                    <p className="text-center text-3xl m-3">
                        Using Artificial Intelligence for estimation
                    </p>
                </div>
                <div className="text-center bg-slate-50 flex justify-center flex-col items-center">
                    <ExplainingUseOfAiInfoBox />
                    <InformationDropdownBox
                        title={""}
                        initialInfo={
                            "You have the right to choose whether to use this AI-model or not. If you choose to not use the model the case worker will handle your case without any involvement from the artificial intelligence model. This may result in longer processing time for your case"
                        }
                        extendedInfo={
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                        }
                    />
                    <InformationDropdownBox
                        title={""}
                        initialInfo={"Explore how it works with our sandbox!"}
                        extendedInfo={
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                        }
                    />
                </div>
                <div className="flex justify-center justify-evenly m-5 ">
                    <button className="m-2 py-3 bg-black hover:bg-neutral-800 w-60 rounded-lg text-center text-white font-normal Sans">
                        <Link
                            className="text-center"
                            href={"/Summary?consent=false"}
                        >
                            Dont evaluate with AI
                        </Link>
                    </button>
                    <button className="m-2 py-3 bg-black hover:bg-neutral-800 w-60 rounded-lg text-center text-white font-normal Sans">
                        <Link
                            className="text-center"
                            href={"/Summary?consent=true"}
                        >
                            Consent to use AI
                        </Link>
                    </button>
                </div>
            </Content>
        </Parent>
    );
};

export default UsingAI;
