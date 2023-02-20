import Button from "@/components/Button";
import DataTable from "@/components/DataTable"
import Link from "next/link";
import Parent from "@/components/Parent";
import React from "react";

const tempData = [
    { name: 'Ola Normann', age: '25', occupation: 'Programmer' },
    { name: 'Hanna Normann', age: '30', occupation: 'Designer' },
    { name: 'John Doe', age: '40', occupation: 'Manager' },
    { name: 'Jane Doe', age: '42', occupation: 'Manager' },
];

const summary: React.FC = () => {
    return (
        <Parent>
            <div>
                <div className="flex items-center mt-5 ml-5">
                    <Link href="/" className="px-4 py-2 bg-blue-500 text-white rounded">
                        Go back
                    </Link>
                </div>
                <div className="flex justify-center">
                    <h1 className="text-2xl font-bold text-center">You have chosen to use the AI-model for estimation</h1>
                </div>

                <div className="flex justify-center">
                    <h2 className="text-lg font-bold text-gray-600 text-center">Summary of information used to estimate sick leave duration</h2>
                </div>
                <div className="flex justify-center mt-4">
                    <DataTable data={tempData} />
                </div>
                <div className="flex justify-center mt-4">
                    <Button color="blue" onClick={() => alert('Okay')} >
                        Is this information incorrect?
                    </Button>
                </div>
                <div className="flex justify-center mt-4">
                    <Button color="red" href="/estimate">
                        Estimate sick leave
                    </Button>
                </div>
            </div>
        </Parent>
    );
}
export default summary;