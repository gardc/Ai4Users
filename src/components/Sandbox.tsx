import { useTranslation } from "next-i18next";
import ArrowToModelIcon from "@/components/Assets/arrowToModelIcon";
import Button from "@/components/Button";
import CaseHandlerIcon from "@/components/Assets/caseHandlerIcon";
import CogIconLarge from "@/components/Assets/cogIconLarge";
import React, { FormEvent, useState } from "react";

/**
 * A selectable arguments for the parameter.
 *
 * @param itemName - The human-readable and translated name of the argument.
 * @param itemValueForModel - The value to be sent to the model for the argument. This is separated for the purposes of translation.
 */
interface Argument {
    itemName: string;
    itemValueForModel: string;
}

/**
 * A parameter that the user can select values for.
 *
 * @param label - The human-readable and translated label for the parameter.
 * @param labelValueForModel - The label value to be sent to the model. This is separated for the purposes of translation.
 * @param argument - The list of selectable arguments for the parameter.
 */
interface Parameter {
    label: string;
    labelValueForModel: string;
    argument: Argument[];
}

/**
 * The type definition for the `Sandbox` component's props.
 *
 * @param description - The description text for the sandbox.
 * @param parameters - The parameters that the user can select values for.
 */
interface SandboxProps {
    description: string;
    parameters: Parameter[];
}

/**
 * Sandbox component, allowing users to input parameters and get a predicted sick-leave duration.
 *
 * @component
 * @example
 * description = "Some description text";
 * parameters = [
 *   {
 *     label: "Parameter 1",
 *     labelValueForModel: "param1",
 *     argument: [
 *       { itemName: "Option 1", itemValueForModel: "option1" },
 *       { itemName: "Option 2", itemValueForModel: "option2" },
 *     ],
 *   },
 *   {
 *     label: "Parameter 2",
 *     labelValueForModel: "param2",
 *     argument: [
 *       { itemName: "Option 1", itemValueForModel: "option1" },
 *       { itemName: "Option 2", itemValueForModel: "option2" },
 *     ],
 *   },
 * ];
 * Usage <Sandbox description={description} parameters={parameters} />
 */
const Sandbox: React.FC<SandboxProps> = ({ description, parameters }) => {
    const initialState = parameters.reduce<Record<string, string>>((acc, param) => {
        const firstItemValueForModel = param.argument[0]?.itemValueForModel;
        if (firstItemValueForModel) {
            acc[param.labelValueForModel] = firstItemValueForModel;
        }
        return acc;
    }, {});
    const { t } = useTranslation("common");
    const [cogSpin, setCogSpin] = useState(false);
    const [resultPulse, setResultPulse] = useState(false);
    const [selectedValues, setSelectedValues] = useState(initialState);
    const [weeksOfPredictedSickLeave, setWeeksOfPredictedSickLeave] = useState(
        t("usingAiPage.sandbox.initialPredictionText")
    );

    /**
     * Updates the values in the selected values state based on the user's input.
     *
     * @param labelValueForModel - The untranslated label of the parameter that will be sent to the AI model.
     * @param itemValueForModel - The untranslated value that will be sent to the AI model.
     */
    const handleChangeOfValues = (labelValueForModel: string, itemValueForModel: string) => {
        setSelectedValues((prevState) => ({
            ...prevState,
            [labelValueForModel]: itemValueForModel,
        }));
    };

    /**
     * Submits the form data of selected values to the server for processing and updates the state
     * with the predicted weeks of sick leave.
     *
     * @param e - The form event triggered by clicking the submit button.
     */
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setCogSpin(true);
        const response = await fetch("/api/processData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(selectedValues),
        });
        const data = await response.json();
        let weeksText: string = t("usingAiPage.sandbox.weeks");
        if (data.weeks == 8) {
            weeksText = t("usingAiPage.sandbox.weeksEight");
        } else if (data.weeks == 3) {
            weeksText = t("usingAiPage.sandbox.weeksThree");
        }
        weeksText = data.weeks + " " + weeksText;
        console.log(data);
        setCalculatedWeeksWithAnimation(weeksText);
    };

    /**
     * Disables the spinning animation of the cog after 600 milliseconds, sets the predicted weeks
     * to the right value, enables a bounce and color change animation for the text showing the
     * predicted weeks, and disables it after 400 milliseconds.
     *
     * @param weeksText - A string showing the predicted number of weeks of sick leave.
     */
    async function setCalculatedWeeksWithAnimation(weeksText: string) {
        await new Promise((resolve) => setTimeout(resolve, 600));
        setCogSpin(false);
        setWeeksOfPredictedSickLeave(weeksText);
        setResultPulse(true);
        await new Promise((resolve) => setTimeout(resolve, 400));
        setResultPulse(false);
    }

    return (
        <div>
            <p className={"md:px-8 lg:px-24 font-light mt-8"}>{description}</p>
            <div className={"flex flex-col mt-12 lg:flex-row justify-center"}>
                <div className={"flex-col lg:w-1/2"}>
                    <form
                        className={"m-6 p-6 border rounded-[20px] shadow-2xl"}
                        onSubmit={handleSubmit}
                    >
                        {parameters.map((parameter) => (
                            <div
                                key={"div-" + parameter.label}
                                className={"m-3 flex flex-col items-start mb-5"}
                            >
                                <label htmlFor={parameter.label} className={"mb-1 font-bold"}>
                                    {parameter.label}:
                                </label>
                                <select
                                    id={parameter.labelValueForModel}
                                    key={parameter.labelValueForModel}
                                    className={"p-2 border rounded-lg shadow-md w-full"}
                                    onChange={(e) =>
                                        handleChangeOfValues(
                                            parameter.labelValueForModel.toLowerCase(),
                                            e.target.value.toLowerCase()
                                        )
                                    }
                                >
                                    {parameter.argument.map((argument) => (
                                        <option
                                            key={argument.itemValueForModel}
                                            value={argument.itemValueForModel}
                                        >
                                            {argument.itemName}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        ))}
                        <div className={"flex justify-center"}>
                            <Button color="orange" type={"submit"}>
                                {t("usingAiPage.sandbox.calculate")}
                            </Button>
                        </div>
                    </form>
                </div>
                <div className={"flex flex-col items-center py-8"}>
                    <div>
                        {cogSpin ? (
                            <div className="animate-spin text-darkblue">
                                <CogIconLarge />
                            </div>
                        ) : (
                            <div className="text-darkblue">
                                <CogIconLarge />
                            </div>
                        )}
                        <div
                            className={
                                "m-1 p-2 md:m-3 md:p-4 lg:m-6 lg:p-6 lg:mt-2 w-80 border text-center rounded-[20px] shadow-2xl"
                            }
                        >
                            <h2 className={"text-xs md:text-lg font-light"}>
                                {t("usingAiPage.sandbox.sickLeaveDescription")}:
                            </h2>
                            {resultPulse ? (
                                <p
                                    className={
                                        "text-md font-bold animate-bounce text-skyblue md:text-lg"
                                    }
                                >
                                    {weeksOfPredictedSickLeave}
                                </p>
                            ) : (
                                <p className={"text-md font-bold md:text-lg"}>
                                    {weeksOfPredictedSickLeave}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="w-28 rotate-90 text-orange">
                        <ArrowToModelIcon />
                    </div>
                    <div className="w-28 text-darkblue">
                        <CaseHandlerIcon />
                    </div>
                    <p className="mt-4 text-sm"> {t("usingAiPage.sandbox.caseHandlerText1")} </p>
                    <p className="text-sm">{t("usingAiPage.sandbox.caseHandlerText2")}</p>
                </div>
            </div>
        </div>
    );
};

export default Sandbox;
