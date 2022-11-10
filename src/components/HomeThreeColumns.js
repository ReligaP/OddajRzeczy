import Background from "../assets/3ColumnsBackground.png";

const HomeThreeColumns = () => {
    return (
        <section
            className="homeThreeColumnsBox"
            style={{backgroundImage:`url(${Background})`}}
        >
            <div className="homeThreeColumnsBox_boxes">
                <div className="homeThreeColumnsBox_boxes__number">
                    10
                </div>
                <div className="homeThreeColumnsBox_boxes__title">
                    <p>
                        Oddanych worków
                    </p>
                </div>
                <div className="homeThreeColumnsBox_boxes__content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque
                        vel enim a elit viverra elementuma. Aliquam erat volutpat.
                    </p>
                </div>
            </div>
            <div className="homeThreeColumnsBox_boxes">
                <div className="homeThreeColumnsBox_boxes__number">
                    5
                </div>
                <div className="homeThreeColumnsBox_boxes__title">
                    <p>
                        Wspartych organizacji
                    </p>
                </div>
                <div className="homeThreeColumnsBox_boxes__content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque
                        vel enim a elit viverra elementuma. Aliquam erat volutpat.
                    </p>
                </div>
            </div>
            <div className="homeThreeColumnsBox_boxes">
                <div className="homeThreeColumnsBox_boxes__number">
                    7
                </div>
                <div className="homeThreeColumnsBox_boxes__title">
                    <p>
                        Zorganizowanych zbiórek
                    </p>
                </div>
                <div className="homeThreeColumnsBox_boxes__content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque
                        vel enim a elit viverra elementuma.
                    </p>
                    <p>
                        Aliquam erat volutpat.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HomeThreeColumns;