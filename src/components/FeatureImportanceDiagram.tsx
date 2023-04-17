import { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

/**
 * The type definition for the `FeatureImportanceDiagram` component's props.
 */
interface FeatureImportanceDiagramProps {
    /**
     * The title for the feature importance section.
     */
    title: string;

    /**
     * A description of the feature importance.
     */
    description: string | JSX.Element;

    /**
     * An object for the parameter the user can modify.
     */
    parameter: {
        /**
         * The label of the parameter the user can modify.
         */
        label: string;

        /**
         * A list of objects for the arguments (values) the changable parameter may have.
         */
        arguments: {
            /**
             * The name of one of the arguments/values the parameter may have.
             */
            argumentName: string;

            /**
             * A list of features that are affected by the change of the parameter value.
             */
            featureImportanceGivenArgument: {
                /**
                 * The name of the feature.
                 */
                feature: string;

                /**
                 * The weight of the feature importance, given the chosen argument/value for the
                 * changable parameter. The sum of all weights for a given
                 * featureImportanceGivenArgument object should be 1 to display the intended
                 * charts.
                 */
                weight: number;
            }[];
        }[];
    };
}

/**
 * A component for displaying feature importance with a pie chart, allowing users to modify one
 * parameter/feature to see the feature importance of all features, given the selected value.
 *
 * @component
 * @example
 * title = "A title"
 * description = "Some description text";
 * parameter = {
 *  label: "Changable Feature"
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
 *  ],
 * };
 * Usage <FeatureImportanceDiagram title={title} description={description} parameter={parameter} />
 */
const FeatureImportanceDiagram: React.FC<FeatureImportanceDiagramProps> = ({
    title,
    description,
    parameter,
}) => {
    const [importanceWeightsOfFeatures, setImportanceWeightsOfFeatures] = useState<
        {
            feature: string;
            weight: number;
        }[]
    >([]);

    const pieChartRef = useRef<SVGSVGElement>(null);
    const featureNames = importanceWeightsOfFeatures.map((d) => d.feature);
    const colorsForDiagram = [
        "#003049",
        "#9B2226",
        "#EE9B00",
        "#0A9396",
        "#AE2012",
        "#CA6702",
        "#94D2BD",
        "#BB3E03",
        "#E9D8A6",
        "#005F73",
    ];

    useEffect(() => {
        drawPieChart();
    });

    /**
     * Draws the pie chart as an SVG based on the selected value for thechangable parameter.
     */
    const drawPieChart = () => {
        if (importanceWeightsOfFeatures.length === 0) {
            console.log([parameter.arguments[0].featureImportanceGivenArgument[0]]);
            setImportanceWeightsOfFeatures(parameter.arguments[0].featureImportanceGivenArgument);
        }

        const svg = d3.select(pieChartRef.current);

        const colorScale = d3.scaleOrdinal().domain(featureNames).range(colorsForDiagram);

        const colorMapping: { [key: string]: any } = {};
        featureNames.forEach((name) => {
            colorMapping[name] = colorScale(name);
        });

        const pieChartLayout = d3.pie<{ feature: string; weight: number }>().value((d) => d.weight);

        const pieChartData = pieChartLayout(importanceWeightsOfFeatures);

        const arcGenerator = d3
            .arc<d3.PieArcDatum<{ feature: string; weight: number }>>()
            .innerRadius(0)
            .outerRadius(150);

        const g = svg
            .append("g")
            .attr(
                "transform",
                `translate(${parseInt(svg.attr("width")) / 2}, ${parseInt(svg.attr("height")) / 2})`
            );

        g.selectAll("path")
            .data(pieChartData)
            .enter()
            .append("path")
            .attr("d", arcGenerator)
            .attr("fill", (d) => colorMapping[d.data.feature])
            .append("title")
            .text((d) => `${d.data.feature}: ${d.data.weight}`);

        g.selectAll("text")
            .data(pieChartData)
            .enter()
            .append("text")
            .attr("transform", (d) => `translate(${arcGenerator.centroid(d)})`)
            .attr("dy", "0.35em")
            .text((d) => d.data.weight)
            .style("fill", "white")
            .style("text-anchor", "middle");
    };

    /**
     * Sets the state holding the feature importance weights of the features, given the selected
     * value of the changable parameter.
     *
     * @param event The event that triggered the change of value for the changable parameter.
     */
    const handleparameterelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const targetValue: string = event.target.value;
        const importanceWeightsOfFeatures: { feature: string; weight: number }[] =
            parameter.arguments
                .find((arg) => arg.argumentName === targetValue)
                ?.featureImportanceGivenArgument?.map((ri) => ({
                    feature: ri.feature,
                    weight: ri.weight,
                })) ?? [];
        setImportanceWeightsOfFeatures(importanceWeightsOfFeatures);
    };

    return (
        <div className="md:px-8 pt-12">
            <div className="lg:flex shadow-2xl rounded-xl">
                <div className="bg-prussian-blue rounded-t-xl lg:rounded-r-none lg:rounded-l-xl lg:w-1/2 text-white p-8  flex flex-col">
                    <p className="text-lg font-bold">{title}</p>
                    <p className="mt-8 text-lg">{description}</p>
                </div>

                <div className="flex flex-col lg:w-1/2 bg-white rounded-xl pl-12 p-8 mx-auto">
                    <label className="text-xl font-bold">{parameter.label}</label>
                    <select
                        className="mt-2 p-2 border rounded-lg shadow-md w-full"
                        onChange={handleparameterelection}
                    >
                        {parameter.arguments.map((argument) => (
                            <option key={argument.argumentName} value={argument.argumentName}>
                                {argument.argumentName}
                            </option>
                        ))}
                    </select>
                    <svg
                        className="mx-auto my-auto w-4/5 lg:w-full"
                        ref={pieChartRef}
                        viewBox="-200 -200 400 400"
                        preserveAspectRatio="xMidYMid meet"
                    ></svg>
                    {featureNames.map((name, index) => (
                        <div className="flex">
                            <div
                                className={`mt-1 h-4 w-4 rounded-xl`}
                                style={{ backgroundColor: `${colorsForDiagram[index]}` }}
                            ></div>
                            <p className="ml-2 text-lg">{name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeatureImportanceDiagram;
