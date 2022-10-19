
const MobileRegister = (props) => {
    return (
        <main className="mobileRegisterBox">
            <header className="mobileSignInBox_title">
                <p className="mobileSignInBox_title__text">
                    Załóż konto
                </p>
            </header>
            <form
                className="mobileSignInBox_form"
                onSubmit={props.onClick}
            >
                <div className="mobileSignInBox_form__content">
                    <div className="mobileSignInBox_input">
                        <label className="mobileSignInBox_input__label">
                            Email
                        </label>
                        <input
                            className={`loginBox_input__field ${props.errors.email ? `registerError_field` : ``} `}
                            type="email"
                            {...props.register("email")}
                        />
                        <p className="registerError mobileError">
                            {props.errors.email?.message}
                        </p>
                    </div>
                    <div className="mobileSignInBox_input">
                        <label className="mobileSignInBox_input__label">
                            Hasło
                        </label>
                        <input
                            className={`loginBox_input__field ${props.errors.password ? `registerError_field` : ``} `}
                            type="password"
                            {...props.register("password")}
                        />
                        <p className="registerError">
                            {props.errors.password?.message}
                        </p>
                    </div>
                    <div className="mobileSignInBox_input">
                        <label className="mobileSignInBox_input__label">
                            Powtórz Hasło
                        </label>
                        <input
                            className={`loginBox_input__field ${props.errors.confirmPassword ? `registerError_field` : ``} `}
                            type="password"
                            {...props.register("confirmPassword")}
                        />
                        <p className="registerError">
                            {props.errors.confirmPassword?.message}
                        </p>
                        {
                            Boolean(props.invalidEmail) && <p className="invalidEmail">Adres email zajęty</p>
                        }
                    </div>
                    <button
                        className="mobileSignInBox_button mobileRegisterBox_button"
                        type="submit"
                    >
                        Załóż konto
                    </button>
                </div>
            </form>
        </main>
    );
};

export default MobileRegister;