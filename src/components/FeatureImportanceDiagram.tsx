import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import * as d3 from "d3";
import BarChartIcon from "./Assets/barChartIcon";
import PieChartIcon from "./Assets/pieChartIcon";
import TransparentBoxIcon from "./Assets/transparentBoxIcon";

/**
 * @param feature - The name of the feature.
 * @param weight - The weight of the feature importance, given the chosen argument/value for the changeable parameter.
 * The sum of all weights for a given featureImportanceGivenArgument object should be 1 to display the intended charts.
 */
interface FeatureWithWeight {
    feature: string;
    weight: number;
}

/**
 * An argument (values) with the changeable parameter of the feature.
 *
 * @param argumentName - The name of one of the arguments/values the parameter may have.
 * @param featureImportanceGivenArgument - A list of features that are affected by the change of the parameter value.
 */
interface Argument {
    argumentName: string;
    featureImportanceGivenArgument: FeatureWithWeight[];
}

/**
 * An object for the parameter the user can modify.
 *
 * @param label - The label of the parameter the user can modify.
 * @param arguments - A list of objects for the arguments (values) the changeable parameter may have.
 */
interface Parameter {
    label: string;
    arguments: Argument[];
}

/**
 * The type definition for the `FeatureImportanceDiagram` component's props.
 *
 * @param title - The title for the feature importance section.
 * @param description - A description of the feature importance.
 * @param parameter - An object for the parameter the user can modify.
 */
interface FeatureImportanceDiagramProps {
    title: string;
    description: string | JSX.Element;
    parameter: Parameter;
}

/**
 * A component for displaying feature importance with a pie chart, allowing users to modify one
 * parameter/feature to see the feature importance of all features, given the selected value.
 *
 * @param title - Title of the component to be displayed above the description
 * @param description - Description text for the component
 * @param parameter - The parameter to be used for display of feature importance
 * @component
 * @example
 * title = "A title"
 * description = "Some description text";
 * parameter = {
 *  label: "Changeable Feature"
 *  arguments: [
 *      {
 *          argumentName: "Value 1 for changeable feature",
 *          featureImportanceGivenArgument: [
 *              {
 *                  feature: "Feature 1"
 *                  weight: 0.5
 *              },
 *              {
 *                  feature: "Feature 2"
 *                  weight: 0.5
 *              },
 *          ]
 *      },
 *      {
 *          argumentName: "Value 2 for changeable feature",
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
    /**
     * Holds an array of the current features and feature  importance weights, given the selected
     * value of the changeable parameter.
     */
    const [importanceWeightsOfFeatures, setImportanceWeightsOfFeatures] = useState(
        parameter.arguments[0].featureImportanceGivenArgument
    );

    /**
     * The names of the saved features in the "importanceWeightsOfFeatures" state.
     */
    const [featureNames, setFeatureNames] = useState<string[]>([]);

    /**
     * Holds a boolean representing whether the pie chart should be visible or not.
     */
    const [pieChartVisible, setPieChartVisible] = useState(true);

    /**
     * Holds a boolean representing whether there are more than five features with weights
     * currently saved in the "importanceWeightsOfFeatures" state.
     */
    const [moreThanFiveFeatures, setMoreThanFiveFeatures] = useState(false);

    /**
     * The ref of the pie chart SVG.
     */
    const pieChartRef = useRef<SVGSVGElement>(null);

    /**
     * The ref of the bar plot SVG.
     */
    const barPlotRef = useRef<SVGSVGElement>(null);

    /**
     * A list of HEX-values for colors used in the pie chart. Only five colors are defined as the
     * pie chart will not show if more than five features are provided.
     */
    const colorsForDiagram = useMemo(
        () => ["#003049", "#9B2226", "#EE9B00", "#0A9396", "#E9D8A6"],
        []
    );

    /**
     * Sets the state of the boolean pieChartVisible to its opposite, effectively switching
     * between showing the pie chart and the bar plot.
     */
    const switchDiagram = () => {
        setPieChartVisible(!pieChartVisible);
    };

    /**
     * Draws or updates the bar plot as an SVG based on the selected value for the changeable
     * parameter.
     */
    const drawBarPlot = useCallback(() => {
        const svg = d3.select(barPlotRef.current);

        const margin = { top: 20, right: 20, bottom: 30, left: 40 };
        const width = +svg.attr("width") - margin.left - margin.right;
        const height = +svg.attr("height") - margin.top - margin.bottom;

        /**
         * * Checks if the number of existing bars is not equal to the length of
         * importanceWeightsOfFeatures, meaning that the SVG needs to be redrawn to avoid
         * overlapping bars.
         */
        const existingBars = svg.selectAll(".bar").size();
        if (existingBars != importanceWeightsOfFeatures.length) {
            svg.selectAll("*").remove();
        }

        const maxWeight =
            d3.max(
                importanceWeightsOfFeatures.filter((d) => d.weight !== undefined),
                (d) => d.weight as number
            )! * 100;
        const tickValues = d3.ticks(0, maxWeight, 5);

        const x = d3.scaleLinear().range([0, width]).domain([0, maxWeight]);

        const y = d3
            .scaleBand()
            .range([height, 0])
            .padding(0.25)
            .domain(importanceWeightsOfFeatures.map((d) => d.feature));

        let g = svg.select<SVGGElement>("g");

        if (g.empty()) {
            g = svg
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        }

        let xAxis = g.select<SVGGElement>(".axis.axis--x");
        let yAxis = g.select<SVGGElement>(".axis.axis--y");

        if (xAxis.empty()) {
            g.append("g").attr("class", "axis axis--x");
            xAxis = g.select<SVGGElement>(".axis.axis--x");
        }

        if (yAxis.empty()) {
            g.append("g").attr("class", "axis axis--y");
            yAxis = g.select<SVGGElement>(".axis.axis--y");
        }

        xAxis
            .attr("transform", "translate(0," + height + ")")
            .call(
                d3
                    .axisBottom(x)
                    .tickValues(tickValues)
                    .tickFormat(function (d) {
                        return d + "%";
                    })
            )
            .selectAll("text")
            .style("font-size", "20px");

        yAxis.call(d3.axisLeft(y).ticks(10, "%")).selectAll("text").remove();

        const bars = g.selectAll(".bar").data(importanceWeightsOfFeatures);

        bars.select("rect")
            .attr("x", 0)
            .attr("height", y?.bandwidth())
            .attr("y", (d: { feature?: string }) =>
                d && d.feature
                    ? (y?.(d.feature) ?? 0) + y?.bandwidth() / 2 - 0.5 * y?.bandwidth()
                    : null
            )
            .transition()
            .duration(700)
            .attr("width", (d: { weight: number }) =>
                d && d.weight * 100 ? x(d.weight * 100) : null
            )
            .attr("fill", "currentColor");

        bars.select("text")
            .text((d) => d.feature)
            .attr("x", 10)
            .attr("y", (d: { feature?: string }) =>
                d && d.feature ? (y?.(d.feature) ?? 0) + y?.bandwidth() / 2 + 5 : null
            )
            .attr("fill", "white")
            .style("font-size", "20px");

        const newBars = bars.enter().append("g").attr("class", "bar");

        newBars
            .append("rect")
            .attr("x", 0)
            .attr("height", y?.bandwidth())
            .attr("y", (d: { feature?: string }) =>
                d && d.feature
                    ? (y?.(d.feature) ?? 0) + y?.bandwidth() / 2 - 0.5 * y?.bandwidth()
                    : null
            )
            .attr("fill", "currentColor")
            .attr("width", 0)
            .transition()
            .duration(700)
            .attr("width", (d: { weight: number }) =>
                d && d.weight * 100 ? x(d.weight * 100) : null
            );

        newBars
            .append("text")
            .text((d) => d.feature)
            .attr("x", 10)
            .attr("y", (d: { feature?: string }) =>
                d && d.feature ? (y?.(d.feature) ?? 0) + y?.bandwidth() / 2 + 5 : null
            )
            .attr("fill", "white")
            .style("font-size", "20px");

        xAxis.selectAll("path").style("stroke", "black");
        xAxis.selectAll("line").style("stroke", "black");
        xAxis.selectAll("text").style("fill", "black");

        yAxis.selectAll("path").style("stroke", "black");
        yAxis.selectAll("line").style("stroke", "black");

        svg.attr("viewBox", `0 0 ${+svg.attr("width")} ${+svg.attr("height")}`);
        svg.style("width", "100%");
        svg.style("height", "auto");
    }, [importanceWeightsOfFeatures]);

    /**
     * Draws or updates the pie chart as an SVG based on the selected value for the changeable
     * parameter.
     */
    const drawPieChart = useCallback(() => {
        const svg = d3.select(pieChartRef.current);

        const colorScale = d3.scaleOrdinal().domain(featureNames).range(colorsForDiagram);
        const colorMapping: { [key: string]: any } = {};

        featureNames.forEach((name) => {
            colorMapping[name] = colorScale(name);
        });

        const pieChartLayout = d3
            .pie<{ feature: string; weight: number }>()
            .value((d) => d.weight)
            .sort((a, b) => {
                const aIndex = featureNames.indexOf(a.feature);
                const bIndex = featureNames.indexOf(b.feature);
                return aIndex - bIndex;
            });

        const pieChartData = pieChartLayout(importanceWeightsOfFeatures);

        const arcGenerator = d3
            .arc<d3.PieArcDatum<{ feature: string; weight: number }>>()
            .innerRadius(0)
            .outerRadius(150);

        let g = svg.select<SVGGElement>("g");

        if (g.empty()) {
            g = svg
                .append("g")
                .attr(
                    "transform",
                    `translate(${parseInt(svg.attr("width")) / 2}, ${
                        parseInt(svg.attr("height")) / 2
                    })`
                );
        }

        const paths = g.selectAll("path").data(pieChartData);

        paths
            .enter()
            .append("path")
            .attr("fill", (d) => colorMapping[d.data.feature])
            .append("title")
            .text((d) => `${d.data.feature}: ${d.data.weight}`);

        paths
            .transition()
            .duration(700)
            .attr("d", arcGenerator)
            .attr("fill", (d) => colorMapping[d.data.feature])
            .select("title")
            .text((d) => `${d.data.feature}: ${d.data.weight}`);

        paths.exit().remove();

        const labels = g.selectAll("text").data(pieChartData);

        labels.enter().append("text").style("fill", "white").style("text-anchor", "middle");

        labels
            .transition()
            .duration(700)
            .attr("transform", (d) => `translate(${arcGenerator.centroid(d)})`)
            .attr("dy", "0.35em")
            .text((d) => Math.floor(d.data.weight * 100) + "%");

        labels.exit().remove();
    }, [importanceWeightsOfFeatures, colorsForDiagram, featureNames]);

    useEffect(() => {
        //  Sets the initial contents of the "importanceWeightsOfFeatures" state.
        if (importanceWeightsOfFeatures.length === 0) {
            setImportanceWeightsOfFeatures(parameter.arguments[0].featureImportanceGivenArgument);
        }

        // Disables the pie chart if the number of features saved in the
        // "importanceWeightsOfFeatures" state is more than 5.
        if (importanceWeightsOfFeatures.length > 5) {
            setMoreThanFiveFeatures(true);
            setPieChartVisible(false);
        } else setMoreThanFiveFeatures(false);

        if (pieChartVisible) {
            drawPieChart();
        } else {
            drawBarPlot();
        }
    }, [
        importanceWeightsOfFeatures.length,
        pieChartVisible,
        parameter.arguments,
        drawPieChart,
        drawBarPlot,
    ]);

    useEffect(() => {
        // Sets the contents of the "featureNames" every time the "importanceWeightsOfFeatures"
        // state is altered.
        setFeatureNames(importanceWeightsOfFeatures.map((d) => d.feature));
    }, [importanceWeightsOfFeatures]);

    /**
     * Sets the state holding the feature importance weights of the features, given the selected
     * value of the changeable parameter.
     *
     * @param event The event that triggered the change of value for the changeable parameter.
     */
    const handleParameterSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const targetValue: string = event.target.value;
        const importanceWeightsOfFeaturesFromParam: {
            feature: string;
            weight: number;
        }[] =
            parameter.arguments
                .find((arg) => arg.argumentName === targetValue)
                ?.featureImportanceGivenArgument?.map((ri) => ({
                    feature: ri.feature,
                    weight: ri.weight,
                })) ?? [];
        setImportanceWeightsOfFeatures(importanceWeightsOfFeaturesFromParam);
        setFeatureNames(importanceWeightsOfFeatures.map((d) => d.feature));
    };

    return (
        <div className="md:px-8 pt-12">
            <div className="xl:flex shadow-2xl rounded-xl">
                <div className="bg-prussian-blue rounded-t-xl xl:rounded-r-none xl:rounded-l-xl xl:w-1/2 text-white p-8 flex flex-col">
                    <div className="flex">
                        <div className="w-10">
                            <TransparentBoxIcon />
                        </div>
                        <p className="text-lg mt-1 font-bold">{title}</p>
                    </div>
                    <div className="mt-8 xl:text-lg">{description}</div>
                </div>

                <div className="flex flex-col xl:w-1/2 bg-white rounded-xl pl-12 p-8 mx-auto">
                    <div>
                        <label className="text-xl font-bold">{parameter.label}</label>
                    </div>
                    <select
                        className="mt-2 p-2 border rounded-lg shadow-md w-full"
                        onChange={handleParameterSelection}
                    >
                        {parameter.arguments.map((argument) => (
                            <option key={argument.argumentName} value={argument.argumentName}>
                                {argument.argumentName}
                            </option>
                        ))}
                    </select>
                    <div className="w-full sm:w-3/4 md:w-full lg:w-3/4 xl:w-full mx-auto">
                        <svg
                            className={`mx-auto mt-0 xl:mt-8 mb-8 my-auto py-4 text-darkorange ${
                                !pieChartVisible ? "block" : "hidden"
                            }`}
                            ref={barPlotRef}
                            width="480"
                            height="500"
                        ></svg>
                    </div>
                    <div className="w-full mx-auto">
                        <svg
                            className={`mx-auto my-auto w-3/4 lg:w-1/2 xl:w-full ${
                                pieChartVisible && !moreThanFiveFeatures ? "block" : "hidden"
                            }`}
                            ref={pieChartRef}
                            viewBox="-200 -200 400 400"
                            preserveAspectRatio="xMidYMid meet"
                        ></svg>
                    </div>
                    <div>
                        {pieChartVisible &&
                            !moreThanFiveFeatures &&
                            featureNames.map((name, index) => (
                                <div key={name} className="flex">
                                    <div
                                        className={`mt-1 h-4 w-4 rounded-xl`}
                                        style={{
                                            backgroundColor: `${colorsForDiagram[index]}`,
                                        }}
                                    ></div>
                                    <p className="ml-2 text-lg font-light">{name}</p>
                                </div>
                            ))}
                    </div>
                    <div>
                        {!moreThanFiveFeatures && (
                            <button
                                className="text-white rounded-md bg-prussian-blue p-3 float-right hover:bg-opacity-70"
                                onClick={switchDiagram}
                            >
                                {pieChartVisible ? <BarChartIcon /> : <PieChartIcon />}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureImportanceDiagram;
