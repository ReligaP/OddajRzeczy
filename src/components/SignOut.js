import { Link } from "react-router-dom";
import Decoration from "../assets/Decoration.svg";

const SignOut = () => {
    return (
        <main className="authBox signOutAuthBox">
            <header className="authBox_navMenu">
                    <nav className="authBox_navMenu__upMenu">
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
                    </nav>
                    <nav className="authBox_navMenu__downMenu">
                        <Link
                            className="link_downMenu"
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
                    </nav>
            </header>
            <section className="authBox_title signOutAuthBox_title">
                <div className="authBox_title__text signOutAuthBox_title__text">
                    Wylogowanie nastąpiło pomyślnie!
                </div>
                <div>
                    <img
                        src={Decoration}
                        alt="Decoration-Sign"
                    />
                </div>
            </section>
            <nav className="signOutAuthBox_button">
                <Link
                    className="linkButton"
                    to="/"
                >
                    Strona główna
                </Link>
            </nav>
        </main>
    );
};

export default SignOut;