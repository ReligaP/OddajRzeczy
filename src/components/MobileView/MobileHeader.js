import { Link } from "react-router-dom";


const MobileHeader = ( props ) => {
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
                                props.user ?
                                    <>
                                        <li>
                                            <Link to="/oddaj-rzeczy">
                                                Oddaj rzeczy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link  onClick={props.signOut} to="/">
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