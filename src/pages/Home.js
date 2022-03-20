import React from "react";
import "./../style.css";
import Topbar from "./Header/Topbar/Topbar";
import Navbar from "./Header/Navbar/Navbar";
import Banner from "./Header/Banner/Banner";
import Result from "./Result/Result";
import PreviousResult from "./PreviousResult/PreviousResult";
import Desclaimer from "./Desclaimer/Desclaimer";

function Home() {
    return (
        <div>
            <Topbar />
            <Navbar />
            <Banner />
            <Result />
            <PreviousResult />
            <Desclaimer />
        </div>
    );
}

export default Home;
