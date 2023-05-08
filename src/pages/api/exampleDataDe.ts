/**
 * Data for the DataTable component, German translation. Gives the component a list of objects,
 * each object representing one parameter in the DataTable. Each parameter must have: a label, a value, and a an extendedInfo.
 *
 * @param label - The name of the parameter.
 * @param value - A sting showing the value of the parameter.
 * @param extendedInfo - A description of the parameter. This should give the user an explanation of why this parameter is included in the prediction.
 *
 * @example
 * [
 *     {
 *         label: "Age",
 *         value: "46",
 *         extendedInfo:
 *             "Age is relevant for the prediction because older age can lead to more health problems and slower recovery.",
 *     },
 *     {
 *         label: "Gender",
 *         value: "Male",
 *         extendedInfo:
 *             "Gender is relevant for the prediction because different genders have different risk factors, for example which diseases and disorders one is exposed to.",
 *     },
 *     {
 *         label: "Diagnosis",
 *         value: "Stroke",
 *         extendedInfo:
 *             "Diagnosis is relevant for the prediction because the diagnosis can give insight into the person's state of health and ability to work.",
 *     },
 * ]
 */
// TODO: MUST BE TRANSLATED
export const exampleDataDe = [
    {
        label: "Age",
        value: "46",
        extendedInfo:
            "Your age is important to the prediction because higher age usually indicates a longer sick leave duration.",
    },
    {
        label: "Gender",
        value: "Male",
        extendedInfo:
            "Your gender is a relevant factor when paired with factors such as diagnosis and profession.",
    },
    {
        label: "Profession",
        value: "Carpenter",
        extendedInfo: "Your profession is a relevant factor paired with diagnosis.",
    },
    {
        label: "Diagnosis",
        value: "Stroke",
        extendedInfo:
            "The diagnosis that caused the sick leave is one of the most relevant factors when predicting sick leave duration.",
    },
    {
        label: "Start date of current sick leave",
        value: "01.03.2023",
        extendedInfo:
            "The start date of your current sick leave. May be relevant when paired with diagnosis and age.",
    },
    {
        label: "Number of previous sick leaves",
        value: "1",
        extendedInfo:
            "The number of previous sick leaves is a relevant factor, as this may give an indication of duration compared to other people with the same number of sick leaves.",
    },
    {
        label: "Start date of last sick leave",
        value: "05.01.2020",
        extendedInfo:
            "The start date of your last sick leave is a relevant factor paired with the end date, as the duration of your last sick leave may influence the duration of your current one.",
    },
    {
        label: "End date of last sick leave",
        value: "25.03.2020",
        extendedInfo:
            "The end date of your last sick leave is a relevant factor paired with the start date, as the duration of your last sick leave may influence the duration of your current one.",
    },
];
