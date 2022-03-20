const ResultCard = ({ props }) => {
    // console.log(props);
    return (
        <>
            <section className="today-result">
                <div className="max-width">
                    <div className="title">
                        <h1>Today Result</h1>
                    </div>
                    <div className="box-div">
                        {props.map((currentElement) => {
                            const { id, time, number } = currentElement;
                            return (
                                <div className="box" key={id}>
                                    <div className="time">
                                        <p>{time}</p>
                                    </div>
                                    <div className="number">
                                        <h1>{number}</h1>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ResultCard;
