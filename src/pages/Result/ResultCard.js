const ResultCard = (resultDataa) => {
    return (
        <>
            <section class="today-result">
                <div class="max-width">
                    <div class="title">
                        <h1>Today Result</h1>
                    </div>
                    {resultDataa.map((currentElement) => {
                        const { id, time, number } = currentElement;
                        return (
                            <div class="box-div" key={id}>
                                <div class="box">
                                    <div class="time">
                                        <p>{time}</p>
                                    </div>
                                    <div class="number">
                                        <h1>{number}</h1>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default ResultCard;
