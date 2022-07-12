import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import app from "../../firebase/firebaseconfig";
import BackgroundImage from "../../assets/Form-Hero-Image.jpg";
import Decoration from "../../assets/Decoration.svg"

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
    }

    return (
        <div className="formBox">
            <div
                className="formBox_image"
                style={{backgroundImage:`url(${BackgroundImage})`}}
            >
            </div>
            <div className="formBox_content">
                <div className="formBox_content__navMenu">
                    <div className="upMenuTopLogged">
                        <p className="upMenuTopLogged_Email">
                            Cześć {props.email} !
                        </p>
                        <div className="upMenuTopLogged_Box1">
                            <Link
                                className="LinkButton"
                                to="/oddaj-rzeczy"
                            >
                                Oddaj rzeczy
                            </Link>
                        </div>
                        <div
                            className="upMenuTopLogged_Box2"
                        >
                            <Link
                                onClick={ClickHandler}
                                className="LinkButton"
                                to="/wylogowano"
                            >
                                Wyloguj
                            </Link>
                        </div>
                    </div>
                    <div className="signInBox_navMenu__downMenu">
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
                <div className="formBox_content__box">
                    <div className="box_title">
                        <p>Oddaj rzeczy, których już nie chcesz</p>
                        <p>POTRZEBUJĄCYM</p>
                    </div>
                    <img src={Decoration} alt="Decoration-Sign"/>
                    <div className="box_steps">
                        <p>Wystarczą 4 proste kroki:</p>
                    </div>
                    <div className="box_items">
                        <div className="box_items__box" />
                        <div className="box_items__box" />
                        <div className="box_items__box" />
                        <div className="box_items__box" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormHeader;