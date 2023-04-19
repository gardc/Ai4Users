import { GetStaticProps, InferGetStaticPropsType } from "next";
import { exampleDataDe } from "./api/exampleDataDe";
import { exampleDataEn } from "./api/exampleDataEn";
import { exampleDataNo } from "./api/exampleDataNo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Button from "@/components/Button";
import DataTable from "@/components/DataTable";
import Link from "next/link";
import Parent from "@/components/Parent";
import React, { useState } from "react";
import Content from "@/components/Content";
import sendApiRequest from "@/util/sendApiRequest";
import NavBar from "@/components/NavBar";

/**
 * The feedback page component that takes in feedback from users that did not consent to the usage
 * AI for prediction.
 * Supports i18next translation.
 *
 * @returns A React functional component representing the landing page.
 */
const Feedback: React.FC = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const { t } = useTranslation("common");
    const [feedbackString, setFeedbackString] = useState("");
    const [waiting, setWaiting] = useState(false);
    const [finished, setFinished] = useState(false);
    const [resultMessage, setResultMessage] = useState("");

    const handleSubmit = async () => {
        try {
            setWaiting(true);
            const response = await sendApiRequest("/api/feedback", "POST", {
                message: feedbackString,
            });
            console.log(response);
            setWaiting(false);
            setFinished(true);
            setResultMessage(`${t("feedback.success")}`);
        } catch (error) {
            console.error("Error submitting feedback:", error);
            setWaiting(false);
            setResultMessage(`${t("feedback.error")} ${error}`);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFeedbackString(event.target.value);
    };

    return (
        <div className="bg-darkblue">
            <Parent>
                <NavBar enableLinkToFrontPage={false} />
                <div className="index pt-8 pb-8 flex-col flex items-center text-black">
                    <p className="text-center font-bold text-3xl sm:text-5xl tracking-wide sm:mt-16 ">
                        {t("feedback.title")}
                    </p>
                    <p className="w-2/4 sm:w-2/4 my-10 font-light text-left tracking-wide leading-6 text-lg">
                        {t("feedback.description")}
                    </p>

                    <textarea
                        id="message"
                        rows={6}
                        value={feedbackString}
                        onChange={handleInputChange}
                        className="block p-2.5 w-[50%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder={t("feedback.placeholder")!}
                    ></textarea>
                    <div className="flex justify-center mt-8 mb-10 sm:m-5">
                        <Button
                            color="lavaorange"
                            onClick={handleSubmit}
                            disabled={finished || feedbackString.length === 0}
                            loading={waiting}
                        >
                            {t("feedback.submit")}
                        </Button>
                        <Button
                            color="lavaorange"
                            href="/UserTestingFinishedPage"
                            loading={waiting}
                        >
                            {/* If finished, show continue button, else show skip */}
                            {finished ? t("feedback.continue") : t("feedback.skip")}
                        </Button>
                    </div>
                    <p className="">{resultMessage}</p>
                </div>
            </Parent>
        </div>
    );
};

export default Feedback;

type Props = {};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
});
