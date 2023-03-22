import React from "react";
import Button from "@/components/Button";
import ModelAiIllustration from "@/components/Assets/modelAiIllustration";
import CaseHandlerIcon from "@/components/Assets/caseHandlerIcon";
import {useTranslation} from "next-i18next";

interface SandboxProps {
    description: string
    parameters: {
        label: string
        argument: {
            itemName: string
            inputValueForModel: string
        }[]
    }[]
}

const Sandbox: React.FC<SandboxProps> = (
    {
        description,
        parameters
    }) => {
    const {t} = useTranslation("common");
    return (
        <div className={"flex"}>
            <div className={"flex-col w-3/4 md:w-4/6"}>
                <p className={"md:px-8"}>{description}</p>
                <form className={"md:m-6 md:p-6 border rounded-[20px] shadow-2xl"}>
                    {
                        parameters.map(parameter => (
                            <div key={"div-" + parameter.label} className={"m-3 flex flex-col items-start mb-5"}>
                                <label htmlFor={parameter.label} className={"mb-1"}>{parameter.label}:</label>
                                <select id={parameter.label} key={parameter.label} className={"p-2 border rounded-lg shadow-md w-full"}>
                                    {parameter.argument.map(argument => (
                                        <option key={argument.inputValueForModel} value={argument.inputValueForModel}>
                                            {argument.itemName}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        ))}
                    <div className={"flex justify-center"}>
                        <Button type={"submit"}>
                            Calculate
                        </Button>
                    </div>
                </form>
            </div>
            <div className={"flex-row md:flex-col align-center w-1/4 md:w-2/6 lg:py-8"}>
                <div className={"px-5 md:10 lg:px-15"}>
                    <ModelAiIllustration/>
                </div>
                <div>
                    <div className={"m-1 p-2 md:m-3 md:p-4 lg:m-6 lg:p-6 border rounded-[20px] shadow-2xl"}>
                        <h2 className={"font-bold text-sm md:text-lg"}>{t("usingAiPage.sandbox.sickLeaveDescription")}:</h2>
                        <p>2 weeks</p>
                    </div>
                </div>
                <div className={"px-5 md:10 lg:px-15"}>
                    <CaseHandlerIcon/>
                </div>
            </div>
        </div>
    )
}

export default Sandbox