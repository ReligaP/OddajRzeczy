import { Link } from "react-router-dom";
import { getAuth , signOut } from "firebase/auth";
import app from "../../firebase/firebaseconfig";


const MobileHeader = (props) => {

    const ClickHandler = () => {
        const auth=getAuth(app);
        signOut(auth).then(() => {
            console.log("Wylogowany");
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        })
    }

    return (
        <div className="mobileHeaderBox">
            <div className="mobileHeaderBox_logo">
                <Link className="mobileHeaderBox_logo__link" to="/">
                    <p className="mobileHeaderBox_logo__content">
                        Oddaj
                    </p>
                    <p className="mobileHeaderBox_logo__content">
                        &nbsp;&nbsp;Rzeczy
                    </p>
                </Link>
            </div>
            <div className="mobileHeaderBox_menu">
                <input type="checkbox" className="check" />
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
                                    <Link  onClick={ClickHandler} to="/">
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
        </div>
    );
};

export default MobileHeader;