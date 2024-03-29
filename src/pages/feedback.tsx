import { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import Container from "@/components/Container";
import React, { useState } from "react";
import sendApiRequest from "@/util/sendApiRequest";

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
        <Container>
            <NavBar enableLinkToFrontPage={false} />
            <div className="index pt-8 pb-8 flex-col flex items-center text-black">
                <p className="text-center font-bold text-3xl sm:text-5xl tracking-wide sm:mt-16 ">
                    {t("feedback.title")}
                </p>
                <p className="max-w-2xl w-4/5 sm:w-1/2 my-10 font-light text-left tracking-wide leading-6 text-lg">
                    {t("feedback.description")}
                </p>
                {!finished && (
                    <textarea
                        id="message"
                        rows={6}
                        value={feedbackString}
                        onChange={handleInputChange}
                        className="max-w-2xl w-4/5 sm:w-1/2 p-2.5 text-sm bg-lightslate rounded-lg border border-darkgray focus:ring-skyblue focus:border-skyblue"
                        placeholder={t("feedback.placeholder")!}
                    ></textarea>
                )}
                <p className="text-lg px-8 font-bold">{resultMessage}</p>
                <div className="flex justify-center mt-8 mb-10 sm:m-5">
                    {!finished && (
                        <Button
                            color="orange"
                            onClick={handleSubmit}
                            disabled={feedbackString.length === 0}
                            loading={waiting}
                        >
                            {t("feedback.submit")}
                        </Button>
                    )}
                    <Button color="orange" href="/submittedPage?consent=false" loading={waiting}>
                        {/* If finished, show continue button, else show skip */}
                        {finished ? t("feedback.continue") : t("feedback.skip")}
                    </Button>
                </div>
            </div>
        </Container>
    );
};

export default Feedback;

type Props = {};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
});
