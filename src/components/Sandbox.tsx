import Button from "@/components/Button";
import ModelAiIllustration from "@/components/Assets/modelAiIllustration";
import CaseHandlerIcon from "@/components/Assets/caseHandlerIcon";
import {useTranslation} from "next-i18next";
import React, {FormEvent, useState} from "react";

interface SandboxProps {
    description: string
    parameters: {
        label: string
        labelValueForModel: string
        argument: {
            itemName: string
            itemValueForModel: string
        }[]
    }[]
}

const Sandbox: React.FC<SandboxProps> = (
    {
        description,
        parameters
    }) => {
    const initialState = parameters.reduce<Record<string, string>>((acc, param) => {
        const firstItemValueForModel = param.argument[0]?.itemValueForModel;
        if (firstItemValueForModel) {
            acc[param.labelValueForModel] = firstItemValueForModel;
        }
        return acc;
    }, {});
    const {t} = useTranslation("common");
    const [selectedValues, setSelectedValues] = useState(initialState);
    const [weeks, setWeeks] = useState(t("usingAiPage.sandbox.initialPredictionText"));

    const handleChange = (parameterLabel: string, itemValueForModel: string) => {
        setSelectedValues((prevState) => ({
            ...prevState,
            [parameterLabel]: itemValueForModel,
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        console.log(selectedValues)
        const response = await fetch("/api/processData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(selectedValues),
        });
        const data = await response.json();
        setWeeks(data.weeks + " " + t("usingAiPage.sandbox.weeks"));
        console.log(data)
    };

    return (
        <div className={"flex"}>
            <div className={"flex-col w-3/4 md:w-4/6"}>
                <p className={"md:px-8"}>{description}</p>
                <form className={"md:m-6 md:p-6 border rounded-[20px] shadow-2xl"} onSubmit={handleSubmit}>
                    {
                        parameters.map(parameter => (
                            <div key={"div-" + parameter.label} className={"m-3 flex flex-col items-start mb-5"}>
                                <label htmlFor={parameter.label} className={"mb-1"}>{parameter.label}:</label>
                                <select id={parameter.labelValueForModel} key={parameter.labelValueForModel}
                                        className={"p-2 border rounded-lg shadow-md w-full"}
                                onChange={(e) => handleChange(parameter.labelValueForModel.toLowerCase(), e.target.value.toLowerCase())}>
                                    {parameter.argument.map(argument => (
                                        <option key={argument.itemValueForModel} value={argument.itemValueForModel}>
                                            {argument.itemName}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        ))}
                    <div className={"flex justify-center"}>
                        <Button type={"submit"}>
                            {t("usingAiPage.sandbox.calculate")}
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
                        <p>{weeks}</p>
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