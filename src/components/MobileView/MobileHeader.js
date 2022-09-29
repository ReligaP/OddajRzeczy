import { Link } from "react-router-dom";
import { getAuth , signOut } from "firebase/auth";
import app from "../../firebase/firebaseconfig";

const MobileHeader = (props) => {

    const clickHandlerSignOut = () => {
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
        <header>
            <div className="mobileHeaderBox">
                <div className="mobileHeaderBox_logo">
                    <p className="mobileHeaderBox_logo__text mobileLogoUpperText">
                        Oddaj
                    </p>
                    <p className="mobileHeaderBox_logo__text">
                        &nbsp;&nbsp;Rzeczy
                    </p>
                </div>
                <nav>
                    <div className="mobileHeaderBox_menu">
                        <input
                            type="checkbox"
                            className="check"
                        />
                        <ul className="menu-items">
                            <li>
                                <Link to="/">
                                    Strona główna
                                </Link>
                            </li>
                            {
                                props.email ?
                                    <>
                                        <li>
                                            <Link to="/oddaj-rzeczy">
                                                Oddaj rzeczy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link  onClick={clickHandlerSignOut} to="/">
                                                Wyloguj się
                                            </Link>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li>
                                            <Link to="/logowanie">
                                                Zaloguj się
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/rejestracja">
                                                Załóż konto
                                            </Link>
                                        </li>
                                    </>
                            }
                        </ul>
                        <div className="ham-menu">
                            <span className="line line1" />
                            <span className="line line2" />
                            <span className="line line3" />
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default MobileHeader;