import React, { useState } from "react";
import PreviousResultApiData from "./api/previousResultApi";
import PreviousResultCard from "./PreviousResultCard";

const PreviousResult = () => {
//     const [PreviousResultData, setPreviousResultData] = useState(
//         PreviousResultApiData
//     );
    const [PreviousResultData] = useState(
        PreviousResultApiData
    );
    return (
        <>
            <PreviousResultCard props={PreviousResultData} />
        </>
    );
};

export default PreviousResult;
