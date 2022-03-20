const PreviousResultCard = ({ props }) => {
    console.log(props);
    return (
        <>
            {/* <!-- previous-result section start--> */}
            <section class="previous-result">
                <div class="max-width">
                    <div class="title">
                        <h1>Previous Result</h1>
                    </div>
                    <div class="year-div">
                        {props.map((currentElement) => {
                            const { id, years } = currentElement;
                            return (
                                <div class="year-box" key={id}>
                                    <div class="years-text">
                                        <p>{years}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            {/* <!-- previous-result section finished--> */}
        </>
    );
};

export default PreviousResultCard;
