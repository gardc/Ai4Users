import Content from "@/components/Content";
import InformationDropdownBox from "@/components/InformationDropdownBox";
import Parent from "@/components/Parent";
import React from "react";

function index() {
    return (
        <Parent>
            <Content>
                <div className="index bg-purple-200 bg-gradient-to-b from-purple-300 to-slate-50 py-32">
                    <p className="text-center text-5xl m-3">
                        Estimation of sick leave
                    </p>
                    <p className="text-center text-m">
                        We will estimate you total duration of sick leave
                    </p>
                </div>

                {/*Page that shows personal */}
                <div className="text-center bg-slate-50 flex justify-center">
                    <div
                        className="w-2/3 
                bg-white drop-shadow-lg py-8 px-16 rounded-lg flex justify-center items-center flex-col m-8"
                    >
                        <p className="text-2xl font-semibold py-3">
                            Estimation of sick leave duration
                        </p>
                        <p className="py-3">
                            In order to provide you with the appropriate support
                            we use this information to estimate the sick leave
                            duration. There is several parameters that.{" "}
                        </p>
                    </div>
                </div>
                <div className="index bg-backgroundColor py-32 flex-col flex items-center">
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
