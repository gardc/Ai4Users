/**
 * Data for the Sandbox component, Norwegian translation. Gives the component a list of objects,
 * each object representing one parameter in the Sandbox. Each parameter must have: a label,
 * a labelValueForModel, and a an argument. Each argument is an array of objects, where each
 * object must have an itemName, and an itemValueForModel.
 *
 * @param label - The name of the parameter.
 * @param labelValueForModel - The name of the model as it should be processed by the AI model. This is kept separately for translation purposes.
 * @param argument - The items for the dropdown menus for each parameter. Each one must have an itemName, and an itemValueForModel.
 * of why this parameter is included in the prediction.
 *
 * @example
 * [
 *     {
 *         label: "Alder",
 *         labelValueForModel: "age",
 *         argument: [
 *             {
 *                 itemName: "16-19",
 *                 itemValueForModel: "16-19",
 *             },
 *             {
 *                 itemName: "20-24",
 *                 itemValueForModel: "20-24",
 *             },
 *             {
 *                 itemName: "25-29",
 *                 itemValueForModel: "25-29",
 *             },
 *             {
 *                 itemName: "30-34",
 *                 itemValueForModel: "30-34",
 *             },
 *             {
 *                 itemName: "35-39",
 *                 itemValueForModel: "35-39",
 *             },
 *             {
 *                 itemName: "40-44",
 *                 itemValueForModel: "40-44",
 *             },
 *             {
 *                 itemName: "45-49",
 *                 itemValueForModel: "45-49",
 *             },
 *             {
 *                 itemName: "50-54",
 *                 itemValueForModel: "50-54",
 *             },
 *             {
 *                 itemName: "55-59",
 *                 itemValueForModel: "55-59",
 *             },
 *             {
 *                 itemName: "60-64",
 *                 itemValueForModel: "60-64",
 *             },
 *             {
 *                 itemName: "65-69",
 *                 itemValueForModel: "65-69",
 *             },
 *         ],
 *     },
 *     {
 *         label: "Kjønn",
 *         labelValueForModel: "gender",
 *         argument: [
 *             {
 *                 itemName: "Mann",
 *                 itemValueForModel: "Male",
 *             },
 *             {
 *                 itemName: "Kvinne",
 *                 itemValueForModel: "Female",
 *             },
 *         ],
 *     },
 * ]
 */
export const sandboxParametersNo = [
    {
        label: "Alder",
        labelValueForModel: "age",
        argument: [
            {
                itemName: "16-19",
                itemValueForModel: "16-19",
            },
            {
                itemName: "20-24",
                itemValueForModel: "20-24",
            },
            {
                itemName: "25-29",
                itemValueForModel: "25-29",
            },
            {
                itemName: "30-34",
                itemValueForModel: "30-34",
            },
            {
                itemName: "35-39",
                itemValueForModel: "35-39",
            },
            {
                itemName: "40-44",
                itemValueForModel: "40-44",
            },
            {
                itemName: "45-49",
                itemValueForModel: "45-49",
            },
            {
                itemName: "50-54",
                itemValueForModel: "50-54",
            },
            {
                itemName: "55-59",
                itemValueForModel: "55-59",
            },
            {
                itemName: "60-64",
                itemValueForModel: "60-64",
            },
            {
                itemName: "65-69",
                itemValueForModel: "65-69",
            },
        ],
    },
    {
        label: "Fylke",
        labelValueForModel: "region",
        argument: [
            {
                itemName: "Agder",
                itemValueForModel: "Agder",
            },
            {
                itemName: "Innlandet",
                itemValueForModel: "Innlandet",
            },
            {
                itemName: "Møre og Romsdal",
                itemValueForModel: "Møre og Romsdal",
            },
            {
                itemName: "Nordland",
                itemValueForModel: "Nordland",
            },
            {
                itemName: "Oslo",
                itemValueForModel: "Oslo",
            },
            {
                itemName: "Rogaland",
                itemValueForModel: "Rogaland",
            },
            {
                itemName: "Troms og Finnmark",
                itemValueForModel: "Troms og Finnmark",
            },
            {
                itemName: "Trøndelag",
                itemValueForModel: "Trøndelag",
            },
            {
                itemName: "Vestfold og Telemark",
                itemValueForModel: "Vestfold og Telemark",
            },
            {
                itemName: "Vestland",
                itemValueForModel: "Vestland",
            },
            {
                itemName: "Viken",
                itemValueForModel: "Viken",
            },
        ],
    },
    {
        label: "Kjønn",
        labelValueForModel: "gender",
        argument: [
            {
                itemName: "Mann",
                itemValueForModel: "Male",
            },
            {
                itemName: "Kvinne",
                itemValueForModel: "Female",
            },
        ],
    },
    {
        label: "Diagnose",
        labelValueForModel: "disorder",
        argument: [
            {
                itemName: "Hjerte- og karsykdommer",
                itemValueForModel: "Cardiovascular diseases",
            },
            {
                itemName: "Muskel- og skjelettplager",
                itemValueForModel: "Muscle/skeleton disorders",
            },
            {
                itemName: "Psykiske lidelser",
                itemValueForModel: "Mental disorders",
            },
            {
                itemName: "Fordøyelsessykdommer",
                itemValueForModel: "Diseases in the digestive organs",
            },
            {
                itemName: "Respirasjonssykdommer",
                itemValueForModel: "Diseases in the respiratory tract",
            },
            {
                itemName: "Sykdommer i nervesystemet",
                itemValueForModel: "Diseases in the nervous system",
            },
        ],
    },
];
