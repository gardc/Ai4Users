import { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

interface FeatureImportanceDiagramProps {
    title: string;
    description: string | JSX.Element;
    parameters: {
        label: string;
        argument: {
            itemName: string;
            relativeImportance: {
                feature: string;
                value: number;
            }[];
        }[];
    };
}

const FeatureImportanceDiagram: React.FC<FeatureImportanceDiagramProps> = ({
    title,
    description,
    parameters,
}) => {
    const [importanceValuesOfFeatures, setimportanceValuesOfFeatures] = useState<
        {
            feature: string;
            value: number;
        }[]
    >([]);

    const pieChartRef = useRef<SVGSVGElement>(null);

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

    const featureNames = importanceValuesOfFeatures.map((d) => d.feature);

    useEffect(() => {
        if (importanceValuesOfFeatures.length === 0) {
            console.log([parameters.argument[0].relativeImportance[0]]);
            setimportanceValuesOfFeatures(parameters.argument[0].relativeImportance);
        }

        const svg = d3.select(pieChartRef.current);

        const colorScale = d3.scaleOrdinal().domain(featureNames).range(colorsForDiagram);

        const colorMapping: { [key: string]: any } = {};
        featureNames.forEach((name) => {
            colorMapping[name] = colorScale(name);
        });

        const pieChartLayout = d3.pie<{ feature: string; value: number }>().value((d) => d.value);

        const pieChartData = pieChartLayout(importanceValuesOfFeatures);

        const arcGenerator = d3
            .arc<d3.PieArcDatum<{ feature: string; value: number }>>()
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
            .text((d) => `${d.data.feature}: ${d.data.value}`);

        g.selectAll("text")
            .data(pieChartData)
            .enter()
            .append("text")
            .attr("transform", (d) => `translate(${arcGenerator.centroid(d)})`)
            .attr("dy", "0.35em")
            .text((d) => d.data.value)
            .style("fill", "white")
            .style("text-anchor", "middle");
    }, [importanceValuesOfFeatures]);

    const handleParameterSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const targetValue: string = event.target.value;
        const importanceValuesOfFeatures: { feature: string; value: number }[] =
            parameters.argument
                .find((arg) => arg.itemName === targetValue)
                ?.relativeImportance?.map((ri) => ({
                    feature: ri.feature,
                    value: ri.value,
                })) ?? [];
        setimportanceValuesOfFeatures(importanceValuesOfFeatures);
    };

    return (
        <div className="md:px-8 pt-12">
            <div className="lg:flex shadow-2xl rounded-xl">
                <div className="bg-prussian-blue rounded-t-xl lg:rounded-r-none lg:rounded-l-xl lg:w-1/2 text-white p-8  flex flex-col">
                    <p className="text-lg font-bold">{title}</p>
                    <p className="mt-8 text-lg">{description}</p>
                </div>

                <div className="flex flex-col lg:w-1/2 bg-white rounded-xl pl-12 p-8 mx-auto">
                    <label className="text-xl font-bold">{parameters.label}</label>
                    <select
                        className="mt-2 p-2 border rounded-lg shadow-md w-full"
                        onChange={handleParameterSelection}
                    >
                        {parameters.argument.map((argument) => (
                            <option key={argument.itemName} value={argument.itemName}>
                                {argument.itemName}
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
