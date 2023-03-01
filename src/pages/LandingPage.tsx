import { exampleData } from "./api/exampleData";
import Button from "@/components/Button";
import Content from "@/components/Content";
import DataTable from "@/components/DataTable";
import NavBar from "@/components/NavBar";
import Parent from "@/components/Parent";
import InformationDropdownBox from "@/components/InformationDropdownBox";

/**
 * The landing page component that displays initial information about the web
 * application and the  data points used for sick leave duration prediction.
 *
 * @returns A React functional component representing the landing page.
 */
const LandingPage: React.FC = () => {
    return (
        <Parent>
            <Content>
                {/* <NavBar /> */}
                <div className="index bg-gradient-to-b from-sky-blue to-slate-50 pt-24 pb-16 flex-col flex items-center">
                    <p className="text-center text-prussian-blue font-semibold text-3xl">
                        Prediction of sick leave duration
                    </p>
                    <p className="w-3/4 mt-8 text-left">
                        In order to provide you with appropriate support during
                        your sick leave, we will make a prediction of its
                        duration based on your data. This is helpful in planning
                        for support measures such as follow-up meetings and
                        economical support for a longer period of time.
                    </p>
                </div>
                {/*Second page that shows personal information */}
                <div className="text-center bg-slate-50 flex justify-center">
                    <div
                        className="w-3/4 
                bg-white drop-shadow-lg py-8 px-16 rounded-xl flex justify-center items-center flex-col m-4"
                    >
                        <p className="text-2xl py-3">
                            Data that is used in the prediction
                        </p>
                        <p className="py-3 text-left mb-4 w-4/6">
                            Below are all the data points about you that will be
                            used in predicting your sick leave duration. Click
                            on the "?" beside each data point to see the reason
                            for its use.
                        </p>
                        {/*Her kommer komponent om informasjon om brukeren */}
                        <DataTable data={exampleData}></DataTable>
                        <div className="flex-col justify-center flex">
                            {/* <div className="flex justify-center mt-4">
                                <Button color="black" href="/%">
                                    Is this information incorrect?
                                </Button>
                            </div> */}
                            <div className="flex justify-center mt-4">
                                <Button color="black" href="/UsingAi">
                                    Continue
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
        </Parent>
    );
};

export default LandingPage;
