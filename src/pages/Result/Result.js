import React, { useState } from "react";
import ResultApiData from "./api/resultApi";
import ResultCard from "./ResultCard";

const Result = () => {
    const [resultData, setResultDate] = useState(ResultApiData);
    return (
        <>
            <ResultCard props={resultData} />
        </>
    );
};

export default Result;
