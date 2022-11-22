import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import HomeHeroImage from "../assets/Home-Hero-Image.jpg";
import Decoration from "../assets/Decoration.svg";

const HomeHeader = ( props ) => {
    return (
        <header className="homeHeaderBox">
            <div
                className="homeHeaderBox_image"
                style={{backgroundImage:`url(${HomeHeroImage})`}}
            >
            </div>
            <div className="homeHeaderBox_content">
                <nav className="homeHeaderBox_content__upMenu">
                    {
                        props.user ?
                            <div className="upMenuTopLogged">
                                <p className="upMenuTopLogged_email">
                                    Cześć {props.user} !
                                </p>
                                <div className="upMenuTopLogged_box1">
                                    <Link
                                        className="linkButton"
                                        to="/oddaj-rzeczy"
                                    >
                                        Oddaj rzeczy
                                    </Link>
                                </div>
                                <div className="upMenuTopLogged_box2">
                                    <Link
                                        onClick={props.signOut}
                                        className="linkButton"
                                        to="/wylogowano"
                                    >
                                        Wyloguj
                                    </Link>
                                </div>
                            </div>
                            :
                            <div className="upMenuTop">
                                <div className="upMenuTop_box1">
                                    <Link
                                        className="Link"
                                        to="/logowanie"
                                    >
                                        Zaloguj
                                    </Link>
                                </div>
                                <div className="upMenuTop_box2">
                                    <Link
                                        className="Link"
                                        to="/rejestracja"
                                    >
                                        Załóż konto
                                    </Link>
                                </div>
                            </div>
                    }
                    <div className="upMenuDown">
                        <div className="upMenuDown_box">
                            Start
                        </div>
                        <div className="upMenuDown_box">
                            <ScrollLink
                                activeClass="active"
                                className="ScrollLink"
                                to="HomeSimpleSteps"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                O co chodzi
                            </ScrollLink>
                        </div>
                        <div className="upMenuDown_box">
                            <ScrollLink
                                activeClass="active"
                                className="ScrollLink"
                                to="HomeAbout"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                O nas
                            </ScrollLink>
                        </div>
                        <div className="upMenuDown_box">
                            <ScrollLink
                                activeClass="active"
                                className="ScrollLink"
                                to="HomeWhoWeHelp"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                Fundacja i organizacje
                            </ScrollLink>
                        </div>
                        <div className="upMenuDown_box">
                            <ScrollLink
                                activeClass="active"
                                className="ScrollLink"
                                to="HomeContact"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                Kontakt
                            </ScrollLink>
                        </div>
                    </div>
                </nav>
                <nav className="homeHeaderBox_content__downMenu">
                    <div className="downMenuTop">
                        <div className="downMenuTop_content">
                            <p>
                                Zacznij pomagać !
                            </p>
                            <p>
                                Oddaj niechciane rzeczy w zaufane ręce
                            </p>
                        </div>
                        <img
                            src={Decoration}
                            alt="Decoration sign"
                        />
                    </div>
                    <div className="downMenuDown">
                        <div className="downMenuDown_box">
                            <Link
                                className="Link"
                                to={props.user ? '/oddaj-rzeczy' : '/logowanie'}
                            >
                                <p>
                                    oddaj
                                </p>
                                <p>
                                    rzeczy
                                </p>
                            </Link>
                        </div>
                        <div className="downMenuDown_box">
                            <Link
                                className="Link"
                                to="/"
                            >
                                <p>
                                    zorganizuj
                                </p>
                                <p>
                                    zbiórkę
                                </p>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default HomeHeader;