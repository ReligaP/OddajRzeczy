import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import app from "../firebase/firebaseconfig";

const SignupSchema = yup.object().shape({
    name: yup.string()
        .matches(/^(\S+$)/, "Podane imię jest nieprawidłowe!"),
    email: yup.string()
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,"Podany email jest nieprawidłowy!"),
    text: yup.string()
        .min(120,"Wiadomość musi mieć conajmniej 120 znaków!")
});

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text,setText] = useState("");
    const [success,setSuccess] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(SignupSchema)
    });
    const submitHandler = () => {
        const db = getFirestore(app);
        const docRef = addDoc(collection(db, `/contact`), {
            name,
            email,
            text
        });
        if (docRef) {
            setSuccess(true);
        }
    };

    return (
        <section>
            {success ?
                <div className="successBox">
                    <p className="successBox_content">
                        Wiadomość została wysłana!
                    </p>
                    <p className="successBox_content">
                        Wkrótce się skontaktujemy.
                    </p>
                </div>
                :
                ""
            }
            <form className="contactBox" onSubmit={handleSubmit(submitHandler)}>
                <div className="contactBox_upBox">
                    <div className="contactBox_upBox__name">
                        <label className="upBox_label">
                            Wpisz swoje imię
                        </label>
                        <input
                            className={`upBox_input ${errors.name ? `upBox_input__isInvalid` : `` }`}
                            placeholder="Imię"
                            {...register("name")}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <p className="upBox_error">{errors.name?.message}</p>
                    </div>
                    <div className="contactBox_upBox__email">
                        <label className="upBox_label">
                            Wpisz swojego maila
                        </label>
                        <input
                            className={`upBox_input ${errors.email ? `upBox_input__isInvalid` : `` }`}
                            placeholder="Email"
                            {...register("email")}
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <p className="upBox_error">{errors.email?.message}</p>
                    </div>
                </div>
                <div className="contactBox_downBox">
                    <label className="downBox_label">
                        Wpisz swoją wiadomość
                    </label>
                    <textarea
                        className={`downBox_textarea ${errors.text ? `downBox_textarea__isInvalid` : `` }`}
                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        value={text}
                        {...register("text")}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <p className="upBox_error">{errors.text?.message}</p>
                </div>
                <button className="contactBox_button" type="submit">
                    Wyślij
                </button>
            </form>
        </section>
    );
};

export default ContactForm;

