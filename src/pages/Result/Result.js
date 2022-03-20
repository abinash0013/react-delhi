import React, { useState } from "react";
import ResultApiData from "./api/resultApi";
import ResultCard from "./ResultCard";

// const uniqueList = [
//     ...new Set(
//         ResultApi.map((curElem) => {
//             return curElem.category;
//         })
//     ),
//     "All",
// ];

const Result = () => {
    const [resultData, setResultDate] = useState(ResultApiData);
    return (
        <>
            <ResultCard props={resultData} />
        </>
    );
};

export default Result;
