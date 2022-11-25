
const MobileSignIn = ( props ) => {
    return (
        <main className="mobileSignInBox" >
            <header className="mobileSignInBox_title">
                <p className="mobileSignInBox_title__text">
                    Zaloguj się
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
                            className={`loginBox_input__field  ${props.errors.password ? `registerError_field` : ``} `}
                            type="password"
                            {...props.register("password")}
                        />
                        <p className="registerError">
                            {props.errors.password?.message}
                        </p>
                        {
                            Boolean(props.error) && <p className="invalidEmail"> Nieprawidłowy login bądź hasło</p>
                        }
                    </div>
                    <button
                        className="mobileSignInBox_button"
                        type="submit"
                    >
                        Zaloguj się
                    </button>
                </div>
            </form>
        </main>
    );
};

export default MobileSignIn;