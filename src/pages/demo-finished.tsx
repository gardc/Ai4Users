import Link from "next/link";

export default function demoFinishedPage() {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-neutral-800">
            {/* Infobox */}
            <div
                className="max-w-xl flex flex-col justify-center items-center rounded-md bg-zinc-800 gap-5 px-8 py-5 shadow-md border border-gray-600 text-white text-center">
                <h1 className="text-xl font-semibold">Thanks for testing AI4Users!</h1>
                <p className="text-neutral-200">
                    You have now completed the demo. You can either go back to the
                    beginning of the demo (front page), or continue to our questionnaire
                    (Google Forms) if you have now completed a user test of the site.
                </p>
                {/* Buttons */}
                <div className="flex gap-5">
                    <InfoButton
                        href={"/"}
                        text={"Front page"}
                        bg={"bg-neutral-600 bg-opacity-25"}
                    />
                    <a
                        href="https://forms.gle/wF7tcB194UTanhwD6"
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-1 cursor-pointer border border-neutral-700 bg-purple-600 bg-opacity-25 rounded-md hover:px-5 transition-all"
                    >
                        Questionnaire
                    </a>
                </div>
            </div>
        </div>
    );
}

const InfoButton = ({href, text, bg}: { href: string; text: string, bg: string }) => {
    return (
        <Link
            href={href}
            className={`px-4 py-1 cursor-pointer border border-neutral-700 ${bg} rounded-md hover:px-5 transition-all`}
        >
            {text}
        </Link>
    );
};