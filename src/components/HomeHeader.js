import React from 'react';
import {Link as Link1} from "react-scroll";
import {Link as Link2} from "react-router-dom";
import HomeHeroImage from "../assets/Home-Hero-Image.jpg"
import Decoration from "../assets/Decoration.svg"


const HomeHeader = () => {
    return (
        <div className="homeHeaderBox">
            <div className="homeHeaderBox_Image"
                 style={{backgroundImage:`url(${HomeHeroImage})`}}>
            </div>
            <div className="homeHeaderBox_Content">
                <div className="homeHeaderBox_Content__UpMenu">
                    <div className="upMenuTop">
                        <div className="upMenuTop_Box1">
                            <Link2 className="Link2" to="/logowanie">Zaloguj</Link2>
                        </div>
                        <div className="upMenuTop_Box2">
                            <Link2 className="Link2" to="/rejestracja">Załóż konto</Link2>
                        </div>
                    </div>
                    <div className="upMenuDown">
                        <div className="upMenuDown_Box">Start</div>
                        <div className="upMenuDown_Box">
                            <Link1
                                activeClass="active"
                                className="Link1"
                                to="HomeSimpleSteps"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >O co chodzi</Link1>
                        </div>
                        <div className="upMenuDown_Box">
                            <Link1
                                activeClass="active"
                                className="Link1"
                                to="HomeAbout"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >O nas</Link1>
                        </div>
                        <div className="upMenuDown_Box">
                            <Link1
                                activeClass="active"
                                className="Link1"
                                to="HomeWhoWeHelp"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >Fundacja i organizacje</Link1>
                        </div>
                        <div className="upMenuDown_Box">
                            <Link1
                                activeClass="active"
                                className="Link1"
                                to="HomeContact"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >Kontakt</Link1>
                        </div>
                    </div>
                </div>
                <div className="homeHeaderBox_Content__DownMenu">
                    <div className="downMenuTop">
                        <div className="downMenuTop_content">
                            Zacznij pomagać <br/> Oddaj niechciane rzeczy w zaufane ręce
                        </div>
                        <img src={Decoration} alt="Decoration sign"/>
                    </div>
                    <div className="downMenuDown">
                        <div className="downMenuDown_Box">
                            <Link2 className="Link2" to="/logowanie">Logowanie</Link2>
                        </div>
                        <div className="downMenuDown_Box">
                            <Link2 className="Link2" to="/logowanie">Zorganizuj<br/> zbiórke</Link2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;