import Content from "@/components/Content";
import InformationDropdownBox from "@/components/InformationDropdownBox";
import Button from "@/components/Button";
import Parent from "@/components/Parent";
import UsingAi from "@/pages/UsingAi";
import React from "react";
import Link from "next/link";

function index() {
    return (
        <Parent>
            <Content>
                <div className="index bg-gradient-to-b from-purple-300 to-slate-50 py-32">
                    <p className="text-center text-5xl m-3">
                        Estimation of sick leave
                    </p>
                    <p className="text-center text-m">
                        We will estimate you total duration of sick leave
                    </p>
                </div>

                {/*Second page that shows personal information */}
                <div className="text-center bg-slate-50 flex justify-center">
                    <div
                        className="w-3/4 
                bg-white drop-shadow-lg py-8 px-16 rounded-xl flex justify-center items-center flex-col m-8"
                    >
                        <p className="text-2xl font-semibold py-3">
                            Estimation of sick leave duration
                        </p>
                        <p className="py-3">
                            In order to provide you with the appropriate support
                            we use this information to estimate the sick leave
                            duration. There is several parameters that.
                        </p>
                        {/*Her kommer komponent om informasjon om brukeren */}
                        <div className="m-2 py-3 bg-black hover:bg-neutral-800 w-60 rounded-lg">
                            <button className="text-center text-white font-normal Sans">
                                <Link className="text-center" href={"/%"}>
                                    Is this information incorrect?
                                </Link>
                            </button>
                        </div>
                        <Button title={"Next"} path={"/UsingAi"} />
                    </div>
                </div>
                <div className="index bg-slate-50 py-18 flex-col flex items-center">
                    <InformationDropdownBox
                        title={"Information box"}
                        initialInfo={"Lorem ipsum dette er initial info"}
                        extendedInfo={"Lorem ipsum dette er extendedinfo"}
                    />
                </div>
            </Content>
        </Parent>
    );
}

export default index;
