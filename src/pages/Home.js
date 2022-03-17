import React from "react";
import "./../style.css";
import Topbar from "./Header/Topbar/Topbar";
import Navbar from "./Header/Navbar/Navbar";
import Banner from "./Header/Banner/Banner";
// import Result from "./Result/Result";

function Home() {
    return (
        <div>
            <Topbar />
            <Navbar />
            <Banner />
            {/* <Result /> */}
        </div>
    );
}

export default Home;
