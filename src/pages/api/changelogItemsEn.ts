/**
 * Data for the changelog component, English translation. Gives the component a list of objects,
 * each object containing a date, title, the description of the change, and a link to another page (can
 * be left empty). These objects represent changes, for example to the AI model, that can be
 * displayed by the changelog component.
 *
 * @example
 * [
 *  {
 *      dateOfChange: "12.03.2023",
 *      titleOfChange: "Improved training data for county feature",
 *      changeDescription: "The AI model has been retrained with ...",
 *      readMoreLink: "/Changes12032023",
 *  },
 *  {
 *      dateOfChange: "22.02.2023",
 *      titleOfChange: "Increased training data",
 *      changeDescription: "The AI model now has access to a larger dataset ...",
 *      readMoreLink: "",
 *  },
 * ]
 */
export const changeLogItemsEn = [
    {
        dateOfChange: "12.03.2023",
        titleOfChange: "Improved training data for county feature",
        changeDescription:
            "The AI model has been retrained with a more diverse and up-to-date dataset for the county feature. This should result in more accurate predictions of sick leave duration, as the model can better capture regional differences in health outcomes and medical practices.",
        readMoreLink: "",
    },
    {
        dateOfChange: "22.02.2023",
        titleOfChange: "Increased training data",
        changeDescription:
            "The AI model now has access to a larger dataset with more diverse cases, which should improve its accuracy in predicting sick leave durations.",
        readMoreLink: "",
    },
    {
        dateOfChange: "15.01.2023",
        titleOfChange: "Improved normalization technique",
        changeDescription:
            "We have updated the normalization technique used in the AI model to better account for outliers and improve its ability to handle non-standard cases.",
        readMoreLink: "",
    },
    {
        dateOfChange: "30.11.2022",
        titleOfChange: "Added new input feature",
        changeDescription:
            "We have added a new input feature to the AI model, which takes into account the patient's occupation. This should improve the model's accuracy in predicting sick leave durations for individuals in specific professions.",
        readMoreLink: "",
    },
];
