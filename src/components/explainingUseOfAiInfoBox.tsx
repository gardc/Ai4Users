import BookIcon from "./Assets/bookIcon";
import CogIcon from "./Assets/cogIcon";
import FastForwardIcon from "./Assets/fastForwardIcon";
import Image from "next/image";
import InformationDropdownBox from "./InformationDropdownBox";
import React from "react";
import TripleRowExpandableInformationBox from "./TripleRowExpandableInformationBox";

/**
 * Complete component for an information box containing information about the use of an AI model
 * in the prediction of sick leave duration. Contains "what", "how" and "why" parts, which may
 * be expanded by the user for additional information.
 *
 * @returns HTML code for the component
 */
const ExplainingUseOfAiInfoBox: React.FC = () => {
    return (
        <div className="flex-col flex items-center">
            <br></br>
            <InformationDropdownBox
                title={""}
                initialInfo={`In order to provide you with the most appropriate support 
                        given your situation, we offer the use of an artificial intelligence (AI) 
                        model to aid the case handler in predicting the duration of your sick 
                        leave. You can read more about what this entails and how the model works 
                        by expanding this box. Whether you wish to use the AI model for prediction 
                        is completely up to you.`}
                extendedInfo={
                    <TripleRowExpandableInformationBox
                        expandableInformationBox1={{
                            content: (
                                <div className="text-left h-full">
                                    <BookIcon />
                                    <p className="font-bold text-center">
                                        What agreeing to the use entails
                                    </p>
                                    <br></br>
                                    <p>
                                        The support you will receive is
                                        determined by a case handler, and one of
                                        the factors in this decision is the
                                        prediction of your sick leave duration.
                                    </p>
                                    <br></br>
                                    <p>
                                        The AI model is an aid the case handler
                                        can use in this prediction, but only if
                                        you agree to its use.
                                    </p>
                                </div>
                            ),
                            expandedContentTitle:
                                "What agreeing to use the AI model entails",
                            expandedContent: (
                                <div className="text-base">
                                    <br></br>
                                    <p>
                                        You are free to choose whether you would
                                        like to have the AI model used as an aid
                                        in predicting the duration of your sick
                                        leave or not.
                                    </p>
                                    <br></br>
                                    <br></br>
                                    <ul className="list-disc list-inside">
                                        <p className="font-bold">
                                            No matter your choice, it will be
                                            the case that{" "}
                                        </p>
                                        <br></br>
                                        <li>
                                            the exact same personal data is used
                                        </li>
                                        <li>
                                            a case handler makes the final
                                            decision
                                        </li>
                                        <li>
                                            you have the exact same rights
                                            regarding your personal data
                                        </li>
                                    </ul>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <p className="font-bold">
                                        If you disagree to the use of the AI
                                        model
                                    </p>
                                    <br></br>
                                    <p>
                                        If you choose to disagree to the use of
                                        the AI model in predicating you sick
                                        leave, your case handler will process
                                        the data without the use of an automated
                                        tool. This might result in longer
                                        processing time.
                                    </p>
                                    <br></br>
                                    <Image
                                        src={"/img/disagreeToUseFlow.jpg"}
                                        alt={
                                            "Flow of declining or accepting the use of the AI model"
                                        }
                                        width={1000}
                                        height={1000}
                                    />
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <p className="font-bold">
                                        If you agree to the use of the AI model
                                    </p>
                                    <br></br>
                                    <p>
                                        If you choose to agree to the use of the
                                        AI model in predicating you sick leave,
                                        the data will first be processed by the
                                        model, and the result of the prediction
                                        will be handed to a case handler. The
                                        case handler then uses this prediction,
                                        along with other factors, to decide what
                                        support is appropriate for you in your
                                        situation.
                                    </p>
                                    <br></br>
                                    <Image
                                        src={"/img/agreeToUseFlow.jpg"}
                                        alt={
                                            "Flow of declining or accepting the use of the AI model"
                                        }
                                        width={1000}
                                        height={1000}
                                    />
                                    <br></br>
                                    <br></br>
                                </div>
                            ),
                            buttonText: "Learn more",
                        }}
                        expandableInformationBox2={{
                            content: (
                                <div className="text-left h-full">
                                    <CogIcon />
                                    <p className="font-bold text-center">
                                        How the AI model works
                                    </p>
                                    <br></br>
                                    <p>
                                        The AI model is a computational tool
                                        that makes a prediction of your total
                                        sick leave duration based its knowledge
                                        of previous predictions.
                                    </p>
                                    <br></br>
                                    <p>
                                        The output it provides to the case
                                        handler is the number of weeks it
                                        predicts that your sick leave duration
                                        will be, and what data points
                                        contributed most to this prediction.
                                    </p>
                                </div>
                            ),
                            expandedContentTitle: "How the AI model works",
                            expandedContent: (
                                <div className="text-base">
                                    <br></br>
                                    <p className="font-bold">
                                        Artificial intelligence is an umbrella
                                        term that describes computer systems
                                        that can solve complex problems and
                                        learn from previous experiences.
                                    </p>
                                    <br></br>
                                    <br></br>
                                    <p>
                                        The type of artificial intelligence we
                                        use for estimation is a so called
                                        machine learning model, which has the
                                        following traits:
                                        <br></br>
                                        <br></br>
                                        <ul className="list-disc list-inside">
                                            <li>
                                                It initially learns from a
                                                select set of starting data that
                                                contains patterns or
                                                similarities
                                            </li>
                                            <li>
                                                The patterns are revealed
                                                through processing
                                            </li>
                                            <li>
                                                A model is generated that can
                                                recognize these patterns in
                                                other data of the same category
                                            </li>
                                        </ul>
                                    </p>
                                    <br></br>
                                    <br></br>
                                    <Image
                                        src={"/img/trainingTheModel.jpg"}
                                        alt={
                                            "Illustration of how the model is trained"
                                        }
                                        width={1000}
                                        height={1000}
                                    />
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <p>
                                        The model is the resulting pattern
                                        matching program, and it is this that is
                                        used for prediction. New data of the
                                        same category is used as input, meaning
                                        it has the same data points and the same
                                        domain (for example estimation of sick
                                        leave duration), and the result is the
                                        prediction.
                                    </p>
                                    <br></br>
                                    <br></br>
                                    <Image
                                        src={
                                            "/img/usingTheModelForPrediction.jpg"
                                        }
                                        alt={
                                            "Illustration of how the model is used"
                                        }
                                        width={1000}
                                        height={1000}
                                    />
                                </div>
                            ),
                            buttonText: "Learn more",
                        }}
                        expandableInformationBox3={{
                            content: (
                                <div className="text-left h-full">
                                    <FastForwardIcon />
                                    <p className="font-bold text-center">
                                        Why we offer use of an AI model
                                    </p>
                                    <br></br>
                                    <p>
                                        Our goal is to ensure the most helpful
                                        support for the highest number of
                                        people.
                                    </p>
                                    <br></br>
                                    <p>
                                        The AI model may aid case workers in
                                        making more accurate predictions of sick
                                        leave duration, and its use may
                                        therefore contribute to achieve this
                                        aim.
                                    </p>
                                </div>
                            ),
                            expandedContentTitle:
                                "Why we offer the use of the AI model in predicting sick leave duration",
                            expandedContent: (
                                <div className="text-base">
                                    <br></br>
                                    <br></br>
                                    <p className="font-bold">
                                        Our goal is to ensure the most helpful
                                        support for the highest number of
                                        people. To aid our case handlers achieve
                                        this aim, we offer the use of an AI
                                        model for estimation to:{" "}
                                    </p>
                                    <br></br>
                                    <ul className="list-disc list-inside">
                                        <li>
                                            help case handlers make more
                                            accurate assessments
                                        </li>
                                        <li>
                                            help in ensuring appropriate support
                                            where it is needed
                                        </li>
                                        <li>
                                            save resources and time, and thus
                                            letting the case handlers help more
                                            people
                                        </li>
                                    </ul>
                                    <br></br>
                                    <br></br>
                                    <p>
                                        It is your right to choose whether the
                                        case handler should use the AI model for
                                        prediction or not. You can read more
                                        about this and other rights further down
                                        the page.
                                    </p>
                                    <br></br>
                                </div>
                            ),
                            buttonText: "Learn more",
                        }}
                    />
                }
            />
            <br></br>
            <br></br>
        </div>
    );
};

export default ExplainingUseOfAiInfoBox;
