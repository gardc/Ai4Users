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
    const barPlotRef = useRef<SVGSVGElement>(null);
    const featureNames = importanceWeightsOfFeatures.map((d) => d.feature);
    const colorsForDiagram = ["#003049", "#9B2226", "#EE9B00", "#0A9396", "#E9D8A6"]; //ONLY 5 COLORS

    useEffect(() => {
        if (importanceWeightsOfFeatures.length === 0) {
            console.log([parameter.arguments[0].featureImportanceGivenArgument[0]]);
            setImportanceWeightsOfFeatures(parameter.arguments[0].featureImportanceGivenArgument);
        }
        //drawPieChart();
        drawBarPlot();
    });

    const drawBarPlot = () => {
        const svg = d3.select(barPlotRef.current);
        svg.selectAll("*").remove();

        const margin = { top: 20, right: 20, bottom: 30, left: 40 };
        const width = +svg.attr("width") - margin.left - margin.right;
        const height = +svg.attr("height") - margin.top - margin.bottom;

        const maxWeight = d3.max(
            importanceWeightsOfFeatures.filter((d) => d.weight !== undefined),
            (d) => d.weight as number
        )!;

        const tickValues = d3.ticks(0, maxWeight, 5);

        const x = d3.scaleLinear().range([0, width]).domain([0, maxWeight]);

        const y = d3
            .scaleBand()
            .range([height, 0])
            .padding(0.25)
            .domain(importanceWeightsOfFeatures.map((d) => d.feature));

        const g = svg
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        g.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x).tickValues(tickValues))
            .selectAll("text")
            .style("font-size", "20px");

        g.append("g")
            .attr("class", "axis axis--y")
            .call(d3.axisLeft(y).ticks(10, "%"))
            .selectAll("text")
            .remove();

        const bars = g
            .selectAll(".bar")
            .data(importanceWeightsOfFeatures)
            .enter()
            .append("g")
            .attr("class", "bar");

        bars.append("rect")
            .attr("x", 0)
            .attr("height", y?.bandwidth())
            .attr("y", (d: { feature?: string }) =>
                d && d.feature
                    ? (y?.(d.feature) ?? 0) + y?.bandwidth() / 2 - 0.5 * y?.bandwidth()
                    : null
            )
            .attr("width", (d: { weight?: number }) => (d && d.weight ? x(d.weight) : null))
            .attr("fill", "#c14922");

        bars.append("text")
            .text((d) => d.feature)
            .attr("x", 5)
            .attr("y", (d: { feature?: string }) =>
                d && d.feature ? (y?.(d.feature) ?? 0) + y?.bandwidth() / 2 + 5 : null
            )
            .attr("fill", "white")
            .style("font-size", "20px");

        svg.attr("viewBox", `0 0 ${+svg.attr("width")} ${+svg.attr("height")}`);

        svg.style("width", "100%");
        svg.style("height", "auto");
    };

    /**
     * Draws the pie chart as an SVG based on the selected value for thechangable parameter.
     */
    const drawPieChart = () => {
        const svg = d3.select(pieChartRef.current);
        svg.selectAll("*").remove();

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
                    {/* <svg
                        className="mx-auto my-auto w-4/5 lg:w-full"
                        ref={pieChartRef}
                        viewBox="-200 -200 400 400"
                        preserveAspectRatio="xMidYMid meet"
                    ></svg> */}
                    <svg
                        className="mx-auto my-auto py-4"
                        ref={barPlotRef}
                        width="480"
                        height="500"
                    ></svg>

                    {/* {featureNames.map((name, index) => (
                        <div className="flex">
                            <div
                                className={`mt-1 h-4 w-4 rounded-xl`}
                                style={{ backgroundColor: `${colorsForDiagram[index]}` }}
                            ></div>
                            <p className="ml-2 text-lg">{name}</p>
                        </div>
                    ))} */}
                </div>
            </div>
        </div>
    );
};

export default FeatureImportanceDiagram;
