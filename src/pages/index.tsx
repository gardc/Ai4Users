import UserTestingLandingPage from "./UserTestingLandingPage";
import React from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function index(_props: InferGetStaticPropsType<typeof getStaticProps>) {
	return <UserTestingLandingPage />;
}

export default index;

type Props = {};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? "en", ["common"])),
	},
});
