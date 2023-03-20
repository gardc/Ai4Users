// Importing modules
import React, { useState, useEffect } from "react";

export async function getServerSideProps() {

    const response = await fetch("http://127.0.0.1:5000/data");
    const result = await response.json()
    console.log(result);
    return {

        props: {
            ...result
        }, // will be passed to the page component as props
    }

}

function AImodel(props: any) {
    console.log("PROPS", props)
    // usestate for setting a javascript
    // object for storing and using data
    const [data, setdata] = useState({
        name: "",
        age: 0,
        date: "",
        programming: "",
    });

    return (
        <div className="App">
            <header className="App-header">
                <h1>React and flask</h1>
                {/* Calling a data from setdata for showing */}
                <p>{props.name}</p>
                <p>{props.age}</p>
                <p>{props.date}</p>
                <p>{props.programming}</p>

            </header>
        </div>
    );
}

export default AImodel;