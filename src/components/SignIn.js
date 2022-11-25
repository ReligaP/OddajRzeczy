import { useState } from "react";
import { getAuth , signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { BrowserView , MobileView } from "react-device-detect";
import MobileHeader from "./MobileView/MobileHeader";
import MobileFooter from "./MobileView/MobileFooter";
import MobileSignIn from "./MobileView/MobileSignIn";
import * as yup from "yup";
import app from "../firebase/firebaseconfig";
import Decoration from "../assets/Decoration.svg";

const SignInSchema = yup.object().shape({
    email: yup.string()
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,"Podany email jest nieprawidłowy!"),
    password: yup.string()
        .min(6,"Podane hasło jest za krótkie!"),
});

const SignIn = () => {
    const [error,setError] = useState("");
    let navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(SignInSchema)
    });
    const submitHandler = ( data ) => {
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then(() => {
                navigate("/")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                setError(errorCode)
            })
    };
    return (
        <>
            <BrowserView>
                <main className="authBox">
                    <header className="authBox_navMenu">
                        <nav className="authBox_navMenu__upMenu">
                            <div className="upMenuBox1">
                                Zaloguj
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
                    <section className="authBox_title">
                        <div className="authBox_title__text">
                            Zaloguj się
                        </div>
                        <div>
                            <img
                                src={Decoration}
                                alt="Decoration-Sign"
                            />
                        </div>
                    </section>
                    <form
                        className="authBox_login"
                        onSubmit={handleSubmit(submitHandler)}
                    >
                        <div className="authBox_login__loginBox">
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
                            </div>
                            <div className="loginBox_input">
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
                                {
                                    Boolean(error) && <p className="invalidEmail"> Nieprawidłowy login bądź hasło</p>
                                }
                            </div>
                        </div>
                        <div className="authBox_login__loginButtons">
                            <div className="loginButton">
                                <Link
                                    className="linkButton"
                                    to="/rejestracja"
                                >
                                    Załóż konto
                                </Link>
                            </div>
                            <button
                                className="loginSubmit"
                                type="submit"
                            >
                                Zaloguj się
                            </button>
                        </div>
                    </form>
                </main>
            </BrowserView>
            <MobileView>
                <MobileHeader />
                <MobileSignIn
                    onClick = {handleSubmit(submitHandler)}
                    signSchema = {SignInSchema}
                    errors = {errors}
                    error = {error}
                    register = {register}
                />
                <MobileFooter />
            </MobileView>
        </>
    );
};

export default SignIn;

