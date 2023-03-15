import BookIcon from "@/components/Assets/bookIcon";
import Button from "@/components/Button";
import CogIcon from "@/components/Assets/cogIcon";
import Content from "@/components/Content";
import ExpandableInformationBox from "@/components/ExpandableInformationBox";
import FastForwardIcon from "@/components/Assets/fastForwardIcon";
import Image from "next/image";
import InformationDropdownBox from "@/components/InformationDropdownBox";
import Parent from "@/components/Parent";
import React from "react";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { GetStaticProps, InferGetStaticPropsType } from "next";

/**
 * The page component for explaining the use of an AI model for the tester of the web application.
 *
 * @returns A React functional component representing the page
 * containing information about the use of an AI model.
 */
const UsingAI = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const { t } = useTranslation("common");

    return (
        <Parent>
            <Content>
                <div className="bg-gradient-to-b from-sky-blue to-slate-50 pb-16 text-center">
                    <div className="flex justify-start py-5 pt-10 text-white">
                        <Link className="text-white pl-12 px-3" href={"/LandingPage"}>
                            Frontpage
                        </Link>
                        {">"}
                        <Link className="text-white px-3" href={"/UsingAi"}>
                            Using AI
                        </Link>
                    </div>

                    <p className="text-center text-prussian-blue font-semibold text-3xl m-3">
                        {t("usingAiPageTitle")}
                    </p>
                </div>
                <div className="text-center bg-slate-50 flex justify-center flex-col items-center">
                    <InformationDropdownBox
                        title={""}
                        initialInfo={`In order to provide you with the most appropriate support 
                        given your situation, we offer the use of an artificial intelligence (AI) 
                        model to aid the case handler in predicting the duration of your sick 
                        leave. You can read more about what this entails and how the model works 
                        by expanding this box. Whether you wish to use the AI model for prediction 
                        is completely up to you.`}
                        extendedInfo={
                            <div className="lg:grid lg:grid-cols-3 lg:gap-x-10 text-sm pt-4 px-6">
                                <ExpandableInformationBox
                                    content={
                                        <div className="text-left h-full">
                                            <BookIcon />
                                            <h1 className="font-bold text-center pb-4">
                                                What agreeing to the use entails
                                            </h1>
                                            <p className="pb-4">
                                                The support you will receive is determined by a case
                                                handler, and one of the factors in this decision is
                                                the prediction of your sick leave duration.
                                            </p>
                                            <p>
                                                The AI model is an aid the case handler can use in
                                                this prediction, but only if you agree to its use.
                                            </p>
                                        </div>
                                    }
                                    expandedContentTitle={
                                        "What agreeing to use the AI model entails"
                                    }
                                    expandedContent={
                                        <div className="text-base pb-4">
                                            <p className="pb-4">
                                                You are free to choose whether you would like to
                                                have the AI model used as an aid in predicting the
                                                duration of your sick leave or not.
                                            </p>
                                            <ul className="list-disc list-inside pb-6">
                                                <p className="font-bold pb-4">
                                                    No matter your choice, it will be the case that
                                                </p>
                                                <li>the exact same personal data is used</li>
                                                <li>a case handler makes the final decision</li>
                                                <li>
                                                    you have the exact same rights regarding your
                                                    personal data
                                                </li>
                                            </ul>
                                            <p className="font-bold pb-4">
                                                If you disagree to the use of the AI model
                                            </p>
                                            <p className="pb-4">
                                                If you choose to disagree to the use of the AI model
                                                in predicating you sick leave, your case handler
                                                will process the data without its use. This might
                                                result in longer processing time.
                                            </p>
                                            <Image
                                                src={"/img/disagreeToUseFlow.jpg"}
                                                alt={
                                                    "Flow of declining or accepting the use of the AI model"
                                                }
                                                width={1000}
                                                height={1000}
                                                className="pb-8"
                                            />
                                            <p className="font-bold pb-4">
                                                If you agree to the use of the AI model
                                            </p>
                                            <p className="pb-4">
                                                If you choose to agree to the use of the AI model in
                                                predicating you sick leave, the data will first be
                                                processed by the model, and the result of the
                                                prediction will be handed to a case handler. The
                                                case handler then uses this prediction, along with
                                                other factors, to decide what support is appropriate
                                                for you in your situation.
                                            </p>
                                            <Image
                                                src={"/img/agreeToUseFlow.jpg"}
                                                alt={
                                                    "Flow of declining or accepting the use of the AI model"
                                                }
                                                width={1000}
                                                height={1000}
                                                className="pb-4"
                                            />
                                        </div>
                                    }
                                    buttonText={"Learn more"}
                                />
                                <ExpandableInformationBox
                                    content={
                                        <div className="text-left h-full">
                                            <CogIcon />
                                            <p className="font-bold text-center pb-4">
                                                How the AI model works
                                            </p>
                                            <p className="pb-4">
                                                The AI model is a computational tool that makes a
                                                prediction of your total sick leave duration based
                                                on its knowledge of previous predictions.
                                            </p>
                                            <p>
                                                The output it provides to the case handler is the
                                                number of weeks it predicts that your sick leave
                                                duration will be, and what data points contributed
                                                most to this prediction.
                                            </p>
                                        </div>
                                    }
                                    expandedContentTitle={"How the AI model works"}
                                    expandedContent={
                                        <div className="text-base pb-4">
                                            <p className="font-bold pb-4">
                                                Artificial intelligence is an umbrella term that
                                                describes computer systems that can solve complex
                                                problems and learn from previous experiences.
                                            </p>
                                            <div className="pb-4">
                                                The type of artificial intelligence we use for
                                                prediction is a so called machine learning model,
                                                which has the following traits:
                                                <ul className="list-disc list-inside pt-4">
                                                    <li>
                                                        It initially learns from a select set of
                                                        training data that contains patterns or
                                                        similarities
                                                    </li>
                                                    <li>
                                                        The patterns are revealed through processing
                                                    </li>
                                                    <li>
                                                        A model is generated that can recognize
                                                        these patterns in other data of the same
                                                        category
                                                    </li>
                                                </ul>
                                            </div>
                                            <Image
                                                src={"/img/trainingTheModel.jpg"}
                                                alt={"Illustration of how the model is trained"}
                                                width={1000}
                                                height={1000}
                                                className="pb-8"
                                            />
                                            <p className="pb-4">
                                                The model is the resulting pattern matching program,
                                                and it is this that is used for prediction. New data
                                                of the same category is used as input, meaning the
                                                data has the same data points and the same domain
                                                (for example estimation of sick leave duration), and
                                                the result is the prediction.
                                            </p>
                                            <Image
                                                src={"/img/usingTheModelForPrediction.jpg"}
                                                alt={"Illustration of how the model is used"}
                                                width={1000}
                                                height={1000}
                                            />
                                        </div>
                                    }
                                    buttonText={"Learn more"}
                                />
                                <ExpandableInformationBox
                                    content={
                                        <div className="text-left h-full">
                                            <FastForwardIcon />
                                            <p className="font-bold text-center pb-4">
                                                Why we offer use of an AI model
                                            </p>
                                            <p className="pb-4">
                                                Our goal is to ensure the most helpful support for
                                                the highest number of people.
                                            </p>
                                            <p>
                                                The AI model may help case workers in making more
                                                accurate predictions of sick leave duration, and its
                                                use may contribute to achieve this aim.
                                            </p>
                                        </div>
                                    }
                                    expandedContentTitle={
                                        "Why we offer the use of the AI model in predicting sick leave duration"
                                    }
                                    expandedContent={
                                        <div className="text-base pb-4">
                                            <p className="font-bold pb-4">
                                                Our goal is to ensure the most helpful support for
                                                the highest number of people. To help our case
                                                handlers achieve this aim, we offer the use of an AI
                                                model for estimation to:
                                            </p>
                                            <ul className="list-disc list-inside pb-4">
                                                <li>
                                                    help case handlers make more accurate
                                                    assessments
                                                </li>
                                                <li>
                                                    help in ensuring appropriate support where it is
                                                    needed
                                                </li>
                                                <li>
                                                    save resources and time, letting the case
                                                    handlers help more people
                                                </li>
                                            </ul>
                                            <p>
                                                It is your right to choose whether the case handler
                                                should use the AI model for prediction or not.
                                            </p>
                                        </div>
                                    }
                                    buttonText={"Learn more"}
                                />
                            </div>
                        }
                    />
                    <div className="h-6"></div>
                    <InformationDropdownBox
                        title={"Your rights as a user"}
                        initialInfo={
                            <>
                                {/* <p>
                                    You have the right to choose whether to use
                                    this AI model or not. If you choose to not
                                    use the model the case handler will process
                                    your case entirely without its use. This may
                                    result in longer processing time.
                                </p> */}
                                <p>
                                    As a user of this service you have certain rights, especially
                                    related to your personal data.
                                </p>
                                <p>
                                    You can read more about your rights as a user by expanding this
                                    box.
                                </p>
                            </>
                        }
                        extendedInfo={
                            <div className="space-y-4 ml-4 flex flex-col justify-center items-center my-6">
                                <h2 className="font-semibold">As a user you have the right to:</h2>
                                <ul className="space-y-4 list-disc text-left">
                                    <li>
                                        <p className="">
                                            Get information on which of your personal data is being
                                            used and why{" "}
                                            <a
                                                href="https://lovdata.no/lov/2018-06-15-38/gdpr/a15"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                            >
                                                Learn more
                                                <svg
                                                    aria-hidden="true"
                                                    className="w-5 h-5 ml-1"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="">
                                            Correct faulty data about yourself{" "}
                                            <a
                                                href="https://lovdata.no/lov/2018-06-15-38/gdpr/a16"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                            >
                                                Learn more
                                                <svg
                                                    aria-hidden="true"
                                                    className="w-5 h-5 ml-1"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="">
                                            At any time request the removal of your personal data
                                            from our system{" "}
                                            <a
                                                href="https://lovdata.no/lov/2018-06-15-38/gdpr/a17"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                            >
                                                Learn more
                                                <svg
                                                    aria-hidden="true"
                                                    className="w-5 h-5 ml-1"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="">
                                            Request that the process which is using your data is
                                            canceled{" "}
                                            <a
                                                href="https://lovdata.no/lov/2018-06-15-38/gdpr/a18"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                            >
                                                Learn more
                                                <svg
                                                    aria-hidden="true"
                                                    className="w-5 h-5 ml-1"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="">
                                            Be presented with your personal information in an
                                            understandable way{" "}
                                            <a
                                                href=" https://lovdata.no/lov/2018-06-15-38/gdpr/a20"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                            >
                                                Learn more
                                                <svg
                                                    aria-hidden="true"
                                                    className="w-5 h-5 ml-1"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="">
                                            At any time protest against processing of your personal
                                            data{" "}
                                            <a
                                                href="https://lovdata.no/lov/2018-06-15-38/gdpr/a21"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                            >
                                                Learn more
                                                <svg
                                                    aria-hidden="true"
                                                    className="w-5 h-5 ml-1"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        }
                    />
                    {/*<InformationDropdownBox
                        title={""}
                        initialInfo={"Explore how it works with our sandbox!"}
                        extendedInfo={
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                        }
                    /> */}
                    <p className="mt-16 font-semibold text-lg">
                        Do you consent to the use of the AI model for predicting your sick leave
                        duration?
                    </p>
                </div>
                <div className="flex justify-center justify-evenly mt-16 m-5 mb-24">
                    <Button color="black" href="/Summary?consent=false">
                        I do not consent to usage of the AI model
                    </Button>
                    <Button color="black" href="/Summary?consent=true">
                        I consent to usage of the AI model
                    </Button>
                </div>
            </Content>
        </Parent>
    );
};

export default UsingAI;

type Props = {};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
});
