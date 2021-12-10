import React from 'react';
import PNG from "../assets/Decoration.svg"
import Icon1 from "../assets/Icon-1.svg"
import Icon2 from "../assets/Icon-2.svg"
import Icon3 from "../assets/Icon-3.svg"
import Icon4 from "../assets/Icon-4.svg"
import {Link} from "react-router-dom";

const HomeSimpleSteps = () => {

    return (
        <div id="HomeSimpleSteps" className="homeSimpleStepsBox">
            <div className="homeSimpleStepsBox_title">
                <div className="homeSimpleStepsBox_title__content">
                    Wystarczą 4 proste kroki
                </div>
                <img src={PNG} alt="decoration sign"/>
            </div>
            <div className="homeSimpleStepsBox_instruction">
                <div className="homeSimpleStepsBox_instruction__step1">
                    <img src={Icon1} alt="icon1"/>
                    <div className="step1_title">
                        Wybierz rzeczy
                    </div>
                    <div className="step1_content">
                        ubrania, zabawki,<br/> sprzęt i inne
                    </div>
                </div>
                <div className="homeSimpleStepsBox_instruction__step2">
                    <img src={Icon2} alt="icon2"/>
                    <div className="step2_title">
                        Spakuj je
                    </div>
                    <div className="step2_content">
                        skorzystaj z <br/> worków na śmieci
                    </div>
                </div>
                <div className="homeSimpleStepsBox_instruction__step3">
                    <img src={Icon3} alt="icon3" />
                    <div className="step3_title">
                        Zdecyduj komu<br/>chcesz pomóc
                    </div>
                    <div className="step3_content">
                        wybierz zaufane miejsce
                    </div>
                </div>
                <div className="homeSimpleStepsBox_instruction__step4">
                    <img src={Icon4} alt="icon4" />
                    <div className="step4_title">
                        Zamów kuriera
                    </div>
                    <div className="step4_content">
                        kurier przyjedzie w dogodnym terminie
                    </div>
                </div>
            </div>
            <div className="homeSimpleStepsBox_button">
                <Link className="Link" to="/logowanie">ODDAJ<br/>RZECZY</Link>
            </div>
        </div>
    );
};

export default HomeSimpleSteps;