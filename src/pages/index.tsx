import LandingPageTesting from "./LandingPageTesting";
import React from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function index(_props: InferGetStaticPropsType<typeof getStaticProps>) {
    return <LandingPageTesting />
}

export default index;

type Props = {};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
});
