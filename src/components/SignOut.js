import { Link } from "react-router-dom";
import Decoration from "../assets/Decoration.svg"

const SignOut = () => {
    return (
        <div className="signOutBox">
            <div className="signOutBox_navMenu">
                    <div className="signOutBox_navMenu__upMenu">
                        <div className="upMenuBox1">
                            <Link
                                className="Link"
                                to="/logowanie"
                            >
                                Zaloguj
                            </Link>
                        </div>
                        <div className="upMenuBox2">
                            <Link
                                className="Link"
                                to="/rejestracja"
                            >
                                Załóż konto
                            </Link>
                        </div>
                    </div>
                    <div className="signOutBox_navMenu__downMenu">
                        <Link
                            className="Link_downMenu"
                            to="/"
                        >
                            Start
                        </Link>
                        <p>
                            O co chodzi?
                        </p>
                        <p>
                            O nas
                        </p>
                        <p>
                            Fundacja i organizacje
                        </p>
                        <p>
                            Kontakt
                        </p>
                    </div>
                </div>
            <div className="signOutBox_title">
                <div className="signOutBox_title__text">
                    Wylogowanie nastąpiło pomyślnie!
                </div>
                <div>
                    <img src={Decoration} alt="Decoration-Sign"/>
                </div>
            </div>
            <div className="signOutBox_button">
                <Link
                    className="LinkButton"
                    to="/"
                >
                    Strona główna
                </Link>
            </div>
        </div>
    );
};

export default SignOut;