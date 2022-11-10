import { Link } from "react-router-dom";
import Decoration from "../assets/Decoration.svg";
import Icon1 from "../assets/Icon-1.svg";
import Icon2 from "../assets/Icon-2.svg";
import Icon3 from "../assets/Icon-3.svg";
import Icon4 from "../assets/Icon-4.svg";

const HomeSimpleSteps = (props) => {
    return (
        <section
            id="HomeSimpleSteps"
            className="homeSimpleStepsBox"
        >
            <div className="homeSimpleStepsBox_title">
                <div className="homeSimpleStepsBox_title__content">
                    <p>
                        Wystarczą 4 proste kroki
                    </p>
                </div>
                <img
                    src={Decoration}
                    alt="decoration sign"
                />
            </div>
            <div className="homeSimpleStepsBox_instruction">
                <div className="homeSimpleStepsBox_instruction__step1">
                    <img
                        src={Icon1}
                        alt="icon1"
                    />
                    <div className="step1_title">
                        <p>
                            Wybierz rzeczy
                        </p>
                    </div>
                    <div className="step1_content">
                        <p>
                            ubrania, zabawki,
                        </p>
                        <p>
                            sprzęt i inne
                        </p>
                    </div>
                </div>
                <div className="homeSimpleStepsBox_instruction__step2">
                    <img
                        src={Icon2}
                        alt="icon2"
                    />
                    <div className="step2_title">
                        <p>
                            Spakuj je
                        </p>
                    </div>
                    <div className="step2_content">
                        <p>
                            skorzystaj z
                        </p>
                        <p>
                            worków na śmieci
                        </p>
                    </div>
                </div>
                <div className="homeSimpleStepsBox_instruction__step3">
                    <img
                        src={Icon3}
                        alt="icon3"
                    />
                    <div className="step3_title">
                        <p>
                            Zdecyduj komu
                        </p>
                        <p>
                            chcesz pomóc
                        </p>
                    </div>
                    <div className="step3_content">
                        <p>
                            wybierz zaufane miejsce
                        </p>
                    </div>
                </div>
                <div className="homeSimpleStepsBox_instruction__step4">
                    <img
                        src={Icon4}
                        alt="icon4"
                    />
                    <div className="step4_title">
                        <p>
                            Zamów kuriera
                        </p>
                    </div>
                    <div className="step4_content">
                        <p>
                            kurier przyjedzie
                        </p>
                        <p>
                            w dogodnym terminie
                        </p>
                    </div>
                </div>
            </div>
            <div className="homeSimpleStepsBox_button">
                <Link
                    className="Link"
                    to={props.email ? '/oddaj-rzeczy' : '/logowanie'}
                >
                    <p>
                        oddaj
                    </p>
                    <p>
                        rzeczy
                    </p>
                </Link>
            </div>
        </section>
    );
};

export default HomeSimpleSteps;