import React from "react";
import spinLottery from "./../../../Images/spinLottery.png";

function Banner() {
    return (
        <>
            {/* <!-- banner section start--> */}
            <section className="banner">
                <div className="max-width">
                    <div className="banner-content">
                        <div className="column left">
                            <img
                                src={spinLottery}
                                alt="spin-lottery"
                                className="loader"
                            />
                            <div className="center-fig">
                                <span>13</span>
                            </div>
                        </div>
                        <div className="column right">
                            <div className="search-form">
                                <div className="title">
                                    <h1>Search Result</h1>
                                </div>
                                <form action="">
                                    <div className="start-date">
                                        <input
                                            type="text"
                                            placeholder="Start Date"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="end-date">
                                        <input
                                            type="text"
                                            placeholder="End Date"
                                            className="form-control"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="search-form-btn"
                                    >
                                        Search
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- banner section finished--> */}
        </>
    );
}

export default Banner;
