import React from "react";
import Tooltip from "@/components/Tooltip";

/**
 * The props for the DataTable component.
 *
 * @param data - The data to display in the table. Each row of data needs to have a label, a value, and a description.
 */
interface DataTableProps {
    data: {
        label: string;
        value: string;
        extendedInfo: string;
    }[];
}

/**
 * A table that displays data with labels and optional descriptions.
 *
 * @param data - The data to display in the table. Each row of data needs to have a label, a value, and a description.
 *
 * @returns A table of the data as a React functional component.
 */
const DataTable: React.FC<DataTableProps> = ({ data }) => {
    /**
     * Removes the table header.
     *
     * @returns Nothing
     */
    const renderTableHeader = () => null;

    /**
     * Renders the table body. Required to remove the header row.
     *
     * @returns The rendered table body.
     */
    const renderTableBody = () => {
        return (
            <tbody>
                {data.map((row, index) => {
                    return (
                        <tr key={index} className="border-t border-b">
                            <td className="p-2 pr-6 text-sm lg:text-base font-bold border-r border-lightgray text-left">
                                {row.label}
                            </td>
                            <td className="p-2 pr-6 text-sm lg:text-base text-darkgray border-lightgray text-left ">
                                {row.value}
                            </td>
                            <td className="p-2">
                                {row.extendedInfo && <Tooltip extendedInfo={row.extendedInfo} />}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        );
    };
    return (
        <table
            className="bg-white m-2 p-2 sm:p-6 border-2  rounded-[20px]" //shadow-[1px_1px_6px_rgba(0,0,0,0.25)]
            style={{ borderCollapse: "separate" }}
        >
            {renderTableHeader()}
            {renderTableBody()}
        </table>
    );
};

export default DataTable;
