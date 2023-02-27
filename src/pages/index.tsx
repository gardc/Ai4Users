import Content from "@/components/Content";
import InformationDropdownBox from "@/components/InformationDropdownBox";
import Parent from "@/components/Parent";
import React from "react";

function index() {
    return (
        <Parent>
            <Content>
                <div className="index bg-backgroundColor py-32 flex-col flex items-center">
                    <p className="text-center text-3xl">
                        Estimation of sick leave
                    </p>
                    <p className="text-center text-m">
                        We will estimate you total duration of sick leave
                    </p>
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
