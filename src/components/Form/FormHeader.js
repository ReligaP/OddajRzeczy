import { Link } from "react-router-dom";
import { getAuth , signOut } from "firebase/auth";
import app from "../../firebase/firebaseconfig";
import BackgroundImage from "../../assets/Form-Hero-Image.jpg";
import Decoration from "../../assets/Decoration.svg";

const FormHeader = (props) => {
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
        <header className="formBox">
            <div
                className="formBox_image"
                style={{backgroundImage:`url(${BackgroundImage})`}}
            >
            </div>
            <div className="formBox_content">
                <nav className="formBox_content__navMenu">
                    <div className="upMenuTopLogged">
                        <p className="upMenuTopLogged_email">
                            Cześć {props.email} !
                        </p>
                        <div className="upMenuTopLogged_box1">
                            <Link
                                className="linkButton"
                                to="/oddaj-rzeczy"
                            >
                                Oddaj rzeczy
                            </Link>
                        </div>
                        <div
                            className="upMenuTopLogged_box2"
                        >
                            <Link
                                onClick={ClickHandler}
                                className="linkButton"
                                to="/wylogowano"
                            >
                                Wyloguj
                            </Link>
                        </div>
                    </div>
                    <div className="authBox_navMenu__downMenu">
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
                    </div>
                </nav>
                <div className="formBox_content__box">
                    <div className="box_title">
                        <p>
                            Oddaj rzeczy, których już nie chcesz
                        </p>
                        <p>
                            POTRZEBUJĄCYM
                        </p>
                    </div>
                    <img
                        src={Decoration}
                        alt="Decoration-Sign"
                    />
                    <div className="box_steps">
                        <p>
                            Wystarczą 4 proste kroki:
                        </p>
                    </div>
                    <div className="box_items">
                        <div className="box_items__box" />
                        <div className="box_items__box" />
                        <div className="box_items__box" />
                        <div className="box_items__box" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default FormHeader;