import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import app from "../firebase/firebaseconfig";
import { getAuth , signOut } from "firebase/auth";
import HomeHeroImage from "../assets/Home-Hero-Image.jpg";
import Decoration from "../assets/Decoration.svg";

const HomeHeader = (props) => {
    const ClickHandler = () => {
        const auth=getAuth(app);
        signOut(auth).then(() => {
            console.log("Wylogowany");
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        })
    };
    return (
        <section className="homeHeaderBox">
            <div
                className="homeHeaderBox_image"
                style={{backgroundImage:`url(${HomeHeroImage})`}}
            >
            </div>
            <div className="homeHeaderBox_content">
                <div className="homeHeaderBox_content__upMenu">
                    {
                        props.email ?
                            <div className="upMenuTopLogged">
                                <p className="upMenuTopLogged_email">
                                    Cześć {props.email} !
                                </p>
                                <div className="upMenuTopLogged_box1">
                                    <Link
                                        className="LinkButton"
                                        to="/oddaj-rzeczy"
                                    >
                                        Oddaj rzeczy
                                    </Link>
                                </div>
                                <div className="upMenuTopLogged_box2">
                                    <Link
                                        onClick={ClickHandler}
                                        className="LinkButton"
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
                </div>
                <div className="homeHeaderBox_content__downMenu">
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
                </div>
            </div>
        </section>
    );
};

export default HomeHeader;