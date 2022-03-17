import React, { useState } from "react";
import ResultApi from "./api/resultApi";
import ResultCard from "./ResultCard";

const Result = () => {
    const [resultData, setResultDate] = useState(ResultApi);
    return (
        <>
            <ResultCard resultDataa={resultData} />
        </>
    );
};

export default Result;
