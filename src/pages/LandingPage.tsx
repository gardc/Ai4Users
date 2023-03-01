import { exampleData } from "./api/exampleData";
import Button from "@/components/Button";
import Content from "@/components/Content";
import DataTable from "@/components/DataTable";
import NavBar from "@/components/NavBar";
import Parent from "@/components/Parent";

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
                <div className="index bg-gradient-to-b from-sky-blue to-slate-50 py-32 flex-col flex items-center">
                    <p className="text-center text-5xl">
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
                bg-white drop-shadow-lg py-8 px-16 rounded-xl flex justify-center items-center flex-col m-4"
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
                        <DataTable data={exampleData}></DataTable>
                        <div className="flex-col justify-center flex">
                            <div className="flex justify-center mt-4">
                                <Button color="black" href="/%">
                                    Is this information incorrect?
                                </Button>
                            </div>
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
