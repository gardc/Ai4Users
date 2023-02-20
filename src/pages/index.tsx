import Parent from "@/components/Parent";
import React from "react";

function index() {
    return (
        <Parent>
            <div className="index bg-backgroundColor py-32">
                <p className="text-center text-3xl">Estimation of sick leave</p>
                <p className="text-center text-m">
                    We will estimate you total duration of sick leave
                </p>
            </div>
        </Parent>
    );
}

export default index;
