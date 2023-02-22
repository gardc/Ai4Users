import React from "react";
import Tooltip from "@/components/Tooltip";

interface DataTableProps {
    data: {
        label: string;
        value: string;
        description: string;
    }[];
}
const DataTable: React.FC<DataTableProps> = ({data}) => {
    const renderTableHeader = () => null;

    const renderTableBody = () => {
        return (
            <tbody>
            {data.map((row, index) => {
                return (
                    <tr key={index} className="border-t border-b">
                        <td className="p-2 px-6 font-bold border-r border-gray-200">{row.label}</td>
                        <td className="p-2 px-6 text-gray-600 border-r border-gray-200 ">
                            {row.value}{' '}
                        </td>
                        <td className="p-2 px-6">
                            {row.description && (
                                <Tooltip description={row.description}/>
                            )}
                        </td>
                    </tr>
                );
            })}
            </tbody>
        );
    };
    return (
        <table className="p-6 border rounded-[20px] shadow-[1px_1px_6px_rgba(0,0,0,0.25)]" style={{ borderCollapse: "separate"}}>
            {renderTableHeader()}
            {renderTableBody()}
        </table>
    );
};

export default DataTable;