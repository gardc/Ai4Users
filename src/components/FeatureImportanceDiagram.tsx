import React, {
    useState,
    useEffect,
    useRef,
    useCallback,
    useMemo,
} from "react";
import * as d3 from "d3";
import BarChartIcon from "./Assets/barChartIcon";
import PieChartIcon from "./Assets/pieChartIcon";
import TransparentBoxIcon from "./Assets/transparentBoxIcon";

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
         * A list of objects for the arguments (values) the changeable parameter may have.
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
                 * changeable parameter. The sum of all weights for a given
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
     * Holds a list of the current features and feature  importance weights, given the selected
     * value of the changeable parameter.
     */
    const [importanceWeightsOfFeatures, setImportanceWeightsOfFeatures] =
        useState<{ feature: string; weight: number }[]>([]);

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
     * The names of the saved features in the "importanceWeightsOfFeatures" state.
     */
    let featureNames = importanceWeightsOfFeatures.map((d) => d.feature);

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
     * Draws the bar plot as an SVG based on the selected value for the changeable parameter.
     */
    const drawBarPlot = useCallback(() => {
        const svg = d3.select(barPlotRef.current);
        svg.selectAll("*").remove();

        const margin = { top: 20, right: 20, bottom: 30, left: 40 };
        const width = +svg.attr("width") - margin.left - margin.right;
        const height = +svg.attr("height") - margin.top - margin.bottom;

        const maxWeight =
            d3.max(
                importanceWeightsOfFeatures.filter(
                    (d) => d.weight !== undefined
                ),
                (d) => d.weight as number
            )! * 100;
        const tickValues = d3.ticks(0, maxWeight, 5);

        const x = d3.scaleLinear().range([0, width]).domain([0, maxWeight]);

        const y = d3
            .scaleBand()
            .range([height, 0])
            .padding(0.25)
            .domain(importanceWeightsOfFeatures.map((d) => d.feature));

        const g = svg
            .append("g")
            .attr(
                "transform",
                "translate(" + margin.left + "," + margin.top + ")"
            );

        g.append("g")
            .attr("class", "axis axis--x")
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
                    ? (y?.(d.feature) ?? 0) +
                      y?.bandwidth() / 2 -
                      0.5 * y?.bandwidth()
                    : null
            )
            .attr("width", (d: { weight: number }) =>
                d && d.weight * 100 ? x(d.weight * 100) : null
            )
            .attr("fill", "#c14922");

        bars.append("text")
            .text((d) => d.feature)
            .attr("x", 10)
            .attr("y", (d: { feature?: string }) =>
                d && d.feature
                    ? (y?.(d.feature) ?? 0) + y?.bandwidth() / 2 + 5
                    : null
            )
            .attr("fill", "white")
            .style("font-size", "20px");

        svg.attr("viewBox", `0 0 ${+svg.attr("width")} ${+svg.attr("height")}`);
        svg.style("width", "100%");
        svg.style("height", "auto");
    }, [importanceWeightsOfFeatures]);

    /**
     * Draws the pie chart as an SVG based on the selected value for the changeable parameter.
     */
    const drawPieChart = useCallback(() => {
        const svg = d3.select(pieChartRef.current);
        svg.selectAll("*").remove();

        const colorScale = d3
            .scaleOrdinal()
            .domain(featureNames)
            .range(colorsForDiagram);
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

        const g = svg
            .append("g")
            .attr(
                "transform",
                `translate(${parseInt(svg.attr("width")) / 2}, ${
                    parseInt(svg.attr("height")) / 2
                })`
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
            .text((d) => d.data.weight * 100 + "%")
            .style("fill", "white")
            .style("text-anchor", "middle");
    }, [importanceWeightsOfFeatures, colorsForDiagram, featureNames]);

    useEffect(() => {
        //  Sets the initial contents of the "importanceWeightsOfFeatures" state.
        if (importanceWeightsOfFeatures.length === 0) {
            setImportanceWeightsOfFeatures(
                parameter.arguments[0].featureImportanceGivenArgument
            );
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

    /**
     * Sets the state holding the feature importance weights of the features, given the selected
     * value of the changeable parameter.
     *
     * @param event The event that triggered the change of value for the changeable parameter.
     */
    const handleParameterSelection = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
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
        featureNames = importanceWeightsOfFeatures.map((d) => d.feature);
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
                    <p className="mt-8 text-lg">{description}</p>
                </div>

                <div className="flex flex-col xl:w-1/2 bg-white rounded-xl pl-12 p-8 mx-auto">
                    <div>
                        <label className="text-xl font-bold">
                            {parameter.label}
                        </label>
                    </div>
                    <select
                        className="mt-2 p-2 border rounded-lg shadow-md w-full"
                        onChange={handleParameterSelection}
                    >
                        {parameter.arguments.map((argument) => (
                            <option
                                key={argument.argumentName}
                                value={argument.argumentName}
                            >
                                {argument.argumentName}
                            </option>
                        ))}
                    </select>
                    {!pieChartVisible && (
                        <div className="w-3/4 xl:w-full mx-auto">
                            <svg
                                className="mx-auto mt-0 xl:mt-8 mb-8 my-auto py-4"
                                ref={barPlotRef}
                                width="480"
                                height="500"
                            ></svg>
                        </div>
                    )}
                    {pieChartVisible && !moreThanFiveFeatures && (
                        <svg
                            className="mx-auto my-auto w-3/4 lg:w-1/2 xl:w-full"
                            ref={pieChartRef}
                            viewBox="-200 -200 400 400"
                            preserveAspectRatio="xMidYMid meet"
                        ></svg>
                    )}
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
                                    <p className="ml-2 text-lg font-light">
                                        {name}
                                    </p>
                                </div>
                            ))}
                    </div>
                    <div>
                        {!moreThanFiveFeatures && (
                            <button
                                className="text-white rounded-md bg-prussian-blue p-3 float-right hover:bg-lightblue"
                                onClick={switchDiagram}
                            >
                                {pieChartVisible ? (
                                    <BarChartIcon />
                                ) : (
                                    <PieChartIcon />
                                )}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureImportanceDiagram;
