/**
 * Data for the feature importance component, German translation. Gives the component one
 * changable parameter/feature, arguments for this parameter, and the weights for every feature
 * given an argument. Can be modified to show feature importance of different models.
 *
 * NB! In order for the diagrams in the feature importance component to show correclty, the
 * weights in this file need to be normalized, meaning that they must be  in  the range [0,1] and
 * the sum of all weights for a given featureImportanceGivenArgument must be 1.
 *
 * @example
 * {
 *  label: "Changable feature"
 *  arguments: [
 *      {
 *          argumentName: "Value 1 for changable feature",
 *          featureImportanceGivenArgument: [
 *              {
 *                  feature: "Feature 1"
 *                  weight: 0.25
 *              },
 *              {
 *                  feature: "Feature 2"
 *                  weight: 0.25
 *              },
 *              ...
 *          ]
 *      },
 *      {
 *          argumentName: "Value 2 for changable feature",
 *          featureImportanceGivenArgument: [
 *              {
 *                  feature: "Feature 1"
 *                  weight: 0.4
 *              },
 *              {
 *                  feature: "Feature 2"
 *                  weight: 0.6
 *              },
 *          ]
 *      },
 *      ...
 *  ],
 * };
 */
export const featureImportanceDataDe = {
    label: "Age",
    arguments: [
        {
            argumentName: "16-19",
            featureImportanceGivenArgument: [
                {
                    feature: "Age",
                    weight: 0.41,
                },
                {
                    feature: "County",
                    weight: 0.12,
                },
                {
                    feature: "Gender",
                    weight: 0.13,
                },
                {
                    feature: "Diagnosis",
                    weight: 0.34,
                },
            ],
        },
        {
            argumentName: "20-24",
            featureImportanceGivenArgument: [
                {
                    feature: "Age",
                    weight: 0.35,
                },
                {
                    feature: "County",
                    weight: 0.14,
                },
                {
                    feature: "Gender",
                    weight: 0.14,
                },
                {
                    feature: "Diagnosis",
                    weight: 0.37,
                },
            ],
        },
        {
            argumentName: "25-29",
            featureImportanceGivenArgument: [
                {
                    feature: "Age",
                    weight: 0.29,
                },
                {
                    feature: "County",
                    weight: 0.15,
                },
                {
                    feature: "Gender",
                    weight: 0.16,
                },
                {
                    feature: "Diagnosis",
                    weight: 0.4,
                },
            ],
        },
        {
            argumentName: "30-34",
            featureImportanceGivenArgument: [
                {
                    feature: "Age",
                    weight: 0.26,
                },
                {
                    feature: "County",
                    weight: 0.16,
                },
                {
                    feature: "Gender",
                    weight: 0.16,
                },
                {
                    feature: "Diagnosis",
                    weight: 0.42,
                },
            ],
        },
        {
            argumentName: "35-39",
            featureImportanceGivenArgument: [
                {
                    feature: "Age",
                    weight: 0.25,
                },
                {
                    feature: "County",
                    weight: 0.15,
                },
                {
                    feature: "Gender",
                    weight: 0.17,
                },
                {
                    feature: "Diagnosis",
                    weight: 0.43,
                },
            ],
        },
        {
            argumentName: "40-44",
            featureImportanceGivenArgument: [
                {
                    feature: "Age",
                    weight: 0.24,
                },
                {
                    feature: "County",
                    weight: 0.16,
                },
                {
                    feature: "Gender",
                    weight: 0.17,
                },
                {
                    feature: "Diagnosis",
                    weight: 0.43,
                },
            ],
        },
        {
            argumentName: "45-49",
            featureImportanceGivenArgument: [
                {
                    feature: "Age",
                    weight: 0.25,
                },
                {
                    feature: "County",
                    weight: 0.15,
                },
                {
                    feature: "Gender",
                    weight: 0.17,
                },
                {
                    feature: "Diagnosis",
                    weight: 0.43,
                },
            ],
        },
        {
            argumentName: "50-54",
            featureImportanceGivenArgument: [
                {
                    feature: "Age",
                    weight: 0.26,
                },
                {
                    feature: "County",
                    weight: 0.16,
                },
                {
                    feature: "Gender",
                    weight: 0.16,
                },
                {
                    feature: "Diagnosis",
                    weight: 0.42,
                },
            ],
        },
        {
            argumentName: "55-59",
            featureImportanceGivenArgument: [
                {
                    feature: "Age",
                    weight: 0.28,
                },
                {
                    feature: "County",
                    weight: 0.15,
                },
                {
                    feature: "Gender",
                    weight: 0.16,
                },
                {
                    feature: "Diagnosis",
                    weight: 0.41,
                },
            ],
        },
        {
            argumentName: "60-64",
            featureImportanceGivenArgument: [
                {
                    feature: "Age",
                    weight: 0.35,
                },
                {
                    feature: "County",
                    weight: 0.13,
                },
                {
                    feature: "Gender",
                    weight: 0.15,
                },
                {
                    feature: "Diagnosis",
                    weight: 0.37,
                },
            ],
        },
        {
            argumentName: "65-69",
            featureImportanceGivenArgument: [
                {
                    feature: "Age",
                    weight: 0.38,
                },
                {
                    feature: "County",
                    weight: 0.13,
                },
                {
                    feature: "Gender",
                    weight: 0.14,
                },
                {
                    feature: "Diagnosis",
                    weight: 0.35,
                },
            ],
        },
    ],
};
