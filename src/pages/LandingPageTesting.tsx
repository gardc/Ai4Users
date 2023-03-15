import Button from "@/components/Button";
import React from "react";

/**
 * The landing page for testing component that displays information relevant
 * for the tester of the web application.
 *
 * @returns A React functional component representing the landing page for testing.
 */
const LandingPageTesting: React.FC = () => {
    return (
        <div className="break-words text-black bg-white">
            <div className="py-28 px-10 lg:px-40">
                <h1 className="text-2xl text-cyan-900 font-bold">
                    Thank you for wanting to test our web application
                </h1>
                <p className="mt-8">
                    The test involves navigating through our web application,
                    and answering a questionnaire at the end.
                </p>
                <p className="mt-12 font-bold">
                    The web application is, as of now, only intended for use on
                    desktop computers
                </p>
                <p className="mt-4">
                    If you are visiting the web application on a mobile device,
                    please consider switching to a desktop computer.
                </p>
                <p className="mt-12 font-bold">Before you begin testing</p>
                <p className="mt-4">
                    Imagine that you are on sick leave for an extended period of
                    time, and you are in need of support. Because of this, your
                    doctor has directed you to the web site you are about to
                    test.
                </p>
                <p className="mt-12 font-bold">Disclaimer</p>
                <ul className="mt-4 list-disc list-inside">
                    <li>
                        This is a student project only intended for testing a
                        user interface.
                    </li>
                    <li>
                        No data is gathered from users, and the user data
                        presented in the web application is fictional.
                    </li>
                </ul>
                <p className="mt-12 font-bold">
                    If you have any questions, please send an e-mail to
                </p>
                <p className="mt-4">jjsterke@stud.ntnu.no</p>
                <div className="mt-20">
                    <Button color="primary" href={"/LandingPage"}>
                        Begin testing the web application
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default LandingPageTesting;
