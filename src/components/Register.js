import { useState } from "react";
import { Link } from "react-router-dom";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebaseconfig";
import {useNavigate} from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Decoration from "../assets/Decoration.svg";

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
    const [invalidEmail,setInvalidEmail] = useState("")
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
        <div className="registerBox">
            <div className="registerBox_navMenu">
                <div className="registerBox_navMenu__upMenu">
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
                </div>
                <div className="registerBox_navMenu__downMenu">
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
            <div className="registerBox_title">
                <div className="registerBox_title__text">
                    Załóż konto
                </div>
                <div>
                    <img src={Decoration} alt="Decoration-Sign"/>
                </div>
            </div>
            <form
                className="registerBox_login"
                onSubmit={handleSubmit(submitHandler)}
            >
                <div className="registerBox_login__loginBox">
                    <div className="loginBox_input">
                        <label className="loginBox_input__label">
                                Email
                        </label>
                        <input
                            className={`loginBox_input__field ${errors.email ? `registerError_field` : ``} `}
                            type="email"
                            {...register("email")}
                        />
                        <p className="registerError">{errors.email?.message}</p>
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
                        <p className="registerError">{errors.password?.message}</p>
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
                        <p className="registerError">{errors.confirmPassword?.message}</p>
                    </div>
                    </div>
                    <div className="registerBox_login__loginButtons">
                        <div className="loginButton">
                            <Link className="LinkButton" to="/logowanie">
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
        </div>
    );
};

export default Register;





/*
import { Link } from "react-router-dom";
import Decoration from "../assets/Decoration.svg"


const Register = () => {
    return (
        <div className="registerBox">
            <div className="registerBox_navMenu">
                <div className="registerBox_navMenu__upMenu">
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
                </div>
                <div className="registerBox_navMenu__downMenu">
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
            <div className="registerBox_title">
                <div className="registerBox_title__text">
                    Załóż konto
                </div>
                <div>
                    <img src={Decoration} alt="Decoration-Sign"/>
                </div>
            </div>
            <div className="registerBox_login">
                <div className="registerBox_login__loginBox">
                    <div className="loginBox_input">
                        <label className="loginBox_input__label">
                            Email
                        </label>
                        <input
                            className="loginBox_input__field"
                            type="email"
                        />
                    </div>
                    <div className="loginBox_input passwordInput">
                        <label className="loginBox_input__label">
                            Hasło
                        </label>
                        <input
                            className="loginBox_input__field"
                            type="password"
                        />
                    </div>
                    <div className="loginBox_input">
                        <label className="loginBox_input__label">
                            Powtórz Hasło
                        </label>
                        <input
                            className="loginBox_input__field"
                            type="password"
                        />
                    </div>
                </div>
                <div className="registerBox_login__loginButtons">
                    <div className="loginButton">
                        <Link className="LinkButton" to="/logowanie">
                            Zaloguj się
                        </Link>
                    </div>
                    <div className="loginButton">
                        Załóż konto
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
 */
/*
import { useState} from "react";
import { Link } from "react-router-dom";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebaseconfig";
import {useNavigate} from "react-router";
import Decoration from "../assets/Decoration.svg"


const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                signInWithEmailAndPassword(auth, email, password)
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
            });
    }

    return (
        <div className="registerBox">
            <div className="registerBox_navMenu">
                <div className="registerBox_navMenu__upMenu">
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
                </div>
                <div className="registerBox_navMenu__downMenu">
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
            <div className="registerBox_title">
                <div className="registerBox_title__text">
                    Załóż konto
                </div>
                <div>
                    <img src={Decoration} alt="Decoration-Sign"/>
                </div>
            </div>
            <form className="registerBox_login" onSubmit={e => submitHandler(e)}
            >
                    <div className="registerBox_login__loginBox">
                        <div className="loginBox_input">
                            <label className="loginBox_input__label">
                                Email
                            </label>
                            <input
                                className="loginBox_input__field"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="loginBox_input passwordInput">
                            <label className="loginBox_input__label">
                                Hasło
                            </label>
                            <input
                                className="loginBox_input__field"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="loginBox_input">
                            <label className="loginBox_input__label">
                                Powtórz Hasło
                            </label>
                            <input
                                className="loginBox_input__field"
                                type="password"
                            />
                        </div>
                    </div>
                    <div className="registerBox_login__loginButtons">
                        <div className="loginButton">
                            <Link className="LinkButton" to="/logowanie">
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
        </div>
    );
};

export default Register;
 */
/*
import { useState} from "react";
import { Link } from "react-router-dom";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebaseconfig";
import {useNavigate} from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Decoration from "../assets/Decoration.svg";

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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(RegisterSchema)
    });

    const submitHandler = () => {
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                signInWithEmailAndPassword(auth, email, password)
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
            });
    }

    return (
        <div className="registerBox">
            <div className="registerBox_navMenu">
                <div className="registerBox_navMenu__upMenu">
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
                </div>
                <div className="registerBox_navMenu__downMenu">
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
            <div className="registerBox_title">
                <div className="registerBox_title__text">
                    Załóż konto
                </div>
                <div>
                    <img src={Decoration} alt="Decoration-Sign"/>
                </div>
            </div>
            <form className="registerBox_login" onSubmit={handleSubmit(submitHandler)}>
                    <div className="registerBox_login__loginBox">
                        <div className="loginBox_input">
                            <label className="loginBox_input__label">
                                Email
                            </label>
                            <input
                                className={`loginBox_input__field ${errors.email ? `registerError_field` : ``} `}
                                type="email"
                                {...register("email")}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <p className="registerError">{errors.email?.message}</p>
                        </div>
                        <div className="loginBox_input passwordInput">
                            <label className="loginBox_input__label">
                                Hasło
                            </label>
                            <input
                                className={`loginBox_input__field ${errors.password ? `registerError_field` : ``} `}
                                type="password"
                                {...register("password")}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <p className="registerError">{errors.password?.message}</p>
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
                            <p className="registerError">{errors.confirmPassword?.message}</p>
                        </div>
                    </div>
                    <div className="registerBox_login__loginButtons">
                        <div className="loginButton">
                            <Link className="LinkButton" to="/logowanie">
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
        </div>
    );
};

export default Register;
 */