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
import ProfileIcon from "@/components/Assets/profileIcon";
import Parent from "@/components/Parent";
import NavBar from "@/components/NavBar";

/**
 * The landing page component that displays initial information about the web
 * application and the data points used for sick leave duration prediction.
 * Supports i18next translation.
 *
 * @returns A React functional component representing the landing page.
 */
const UseOfData: React.FC = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { t } = useTranslation("common");
	const router = useRouter();
	const { locale } = router;

	return (
		<Parent>
			<NavBar enableLinkToFrontPage={true} />
			<div className="flex justify-start py-5 text-black">
				<Link
					className="hover:font-bold text-sm lg:text-base sm:pl-12 px-3"
					href={"/LandingPage"}
				>
					{t("pageProgressBar.home")}
				</Link>
				<p className="text-black">{">"}</p>
				<p className="font-bold text-sm lg:text-base underline underline-offset-4 text-black px-3">
					{t("pageProgressBar.useOfData")}
				</p>
				<p className="text-gray-500">{">"}</p>
				<p className="text-gray-500 text-sm lg:text-base px-3">
					{t("pageProgressBar.usingAiPage")}
				</p>
				<p className="text-gray-500">{">"}</p>
				<p className="text-gray-500 text-sm lg:text-base px-3">
					{t("pageProgressBar.summaryPage")}
				</p>
			</div>

			{/*Second page that shows personal information */}
			<div className="m-4 mb-20 flex justify-center">
				<div
					className="w-full sm:w-3/4 
                bg-white drop-shadow-lg py-4 sm:py-8 px-4 sm:px-16 rounded-xl flex justify-center items-center flex-col"
				>
					<p className="text-center text-prussian-blue font-bold text-3xl sm:text-4xl mt-8 sm:mt-4">
						{t("useOfDataPage.title")}
					</p>
					<p className="py-3 px-8 sm:px-0 mt-5 text-left lg:w-4/6 text-lg font-light">
						{t("useOfDataPage.description1")}
					</p>

					<p className="px-8 sm:px-0 lg:w-4/6 text-lg font-light text-left">
						{t("useOfDataPage.description2")}
						<span className="absolute text-sm font-medium border-black border-1 rounded-full shadow-xl py-0.5 px-9px">
							?
						</span>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						{t("useOfDataPage.description22")}
					</p>

					<div className="mt-10">
						<div className="flex flex-row items-center w-full mx-4">
							<ProfileIcon />
							<p className="px-2 font-bold text-prussian-blue text-lg">
								{t("useOfDataPage.informationSummaryTitle")}
							</p>
						</div>
						{/*Here there will be a component with information about the user */}
						{locale == "en" ? <DataTable data={exampleDataEn} /> : <></>}
						{locale == "no" ? <DataTable data={exampleDataNo} /> : <></>}
						{locale == "de" ? <DataTable data={exampleDataDe} /> : <></>}
					</div>

					<div className="flex-col justify-center flex">
						<div className="flex justify-center mt-5 mb-10">
							<Button color="lavaorange" href="/UsingAi">
								{t("landingPage.continueButtonText")}
							</Button>
						</div>
					</div>
				</div>
			</div>
		</Parent>
	);
};

export default UseOfData;

type Props = {};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? "en", ["common"])),
	},
});
