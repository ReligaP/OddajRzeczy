import { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import { BrowserView , MobileView } from "react-device-detect";
import app from "../firebase/firebaseconfig";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Decoration from "../assets/Decoration.svg";
import MobileHeader from "./MobileView/MobileHeader";
import MobileFooter from "./MobileView/MobileFooter";
import MobileRegister from "./MobileView/MobileRegister";

const RegisterSchema = yup.object().shape({
    email: yup.string()
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,"Podany email jest nieprawidłowy!"),
    password: yup.string()
        .min(6,"Podane hasło jest za krótkie!"),
    confirmPassword: yup.string()
        .min(6,"Podane hasło jest za krótkie!")
        .oneOf([yup.ref('password'), null], 'Podane hasła nie pasują do siebie'),
});

const Register = () => {
    const [invalidEmail,setInvalidEmail] = useState("");
    let navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(RegisterSchema)
    });
    const submitHandler = (data) => {
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then(() => {
                signInWithEmailAndPassword(auth, data.email, data.password)
                    .then((userCredential) => {
                        console.log(userCredential);
                        navigate("/")
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode, errorMessage);
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                setInvalidEmail(errorCode)
            });
    };
    return (
        <>
            <BrowserView>
                <main className="authBox">
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
                                Załóż konto
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
                    <section className="authBox_title">
                        <div className="authBox_title__text registerAuthBox_title__text">
                            Załóż konto
                        </div>
                        <div>
                            <img
                                src={Decoration}
                                alt="Decoration-Sign"
                            />
                        </div>
                    </section>
                    <form
                        className="authBox_login registerAuthBox_login"
                        onSubmit={handleSubmit(submitHandler)}
                    >
                        <div className="authBox_login__loginBox registerAuthBox_login__loginBox">
                            <div className="loginBox_input">
                                <label className="loginBox_input__label">
                                    Email
                                </label>
                                <input
                                    className={`loginBox_input__field ${errors.email ? `registerError_field` : ``} `}
                                    type="email"
                                    {...register("email")}
                                />
                                <p className="registerError">
                                    {errors.email?.message}
                                </p>
                                {
                                    Boolean(invalidEmail) && <p className="invalidEmail">Adres email zajęty</p>
                                }
                            </div>
                            <div className="loginBox_input passwordInput">
                                <label className="loginBox_input__label">
                                    Hasło
                                </label>
                                <input
                                    className={`loginBox_input__field ${errors.password ? `registerError_field` : ``} `}
                                    type="password"
                                    {...register("password")}
                                />
                                <p className="registerError">
                                    {errors.password?.message}
                                </p>
                            </div>
                            <div className="loginBox_input">
                                <label className="loginBox_input__label">
                                    Powtórz Hasło
                                </label>
                                <input
                                    className={`loginBox_input__field ${errors.confirmPassword ? `registerError_field` : ``} `}
                                    type="password"
                                    {...register("confirmPassword")}
                                />
                                <p className="registerError">
                                    {errors.confirmPassword?.message}
                                </p>
                            </div>
                        </div>
                        <div className="authBox_login__loginButtons registerAuthBox_login__loginButtons">
                            <div className="loginButton">
                                <Link
                                    className="linkButton"
                                    to="/logowanie"
                                >
                                    Zaloguj się
                                </Link>
                            </div>
                            <button
                                className="loginSubmit"
                                type="submit"
                            >
                                Załóż konto
                            </button>
                        </div>
                    </form>
                </main>
            </BrowserView>
            <MobileView>
                <MobileHeader />
                <MobileRegister
                    onClick = {handleSubmit(submitHandler)}
                    registerSchema = {RegisterSchema}
                    errors = {errors}
                    invalidEmail = {invalidEmail}
                    register = {register}
                />
                <MobileFooter />
            </MobileView>
        </>
    );
};

export default Register;


