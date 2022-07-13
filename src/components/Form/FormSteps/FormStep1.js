import { useState } from "react";


const FormStep1 = ({ update }) => {
    const [type, setType] = useState('ubrania, które nadają się do ponownego użycia');

    return (
        <div className="step1Box">
            <div className="step">
                <p className="step_content">
                    Krok 1/4
                </p>
            </div>
            <div className="text">
                <p className="text_content">
                    Zaznacz co chcesz oddać:
                </p>
            </div>
            <div className="step1Box_content">
                <div className="step1Box_content__box">
                    <label className="container">
                        <span className="container_text">
                            ubrania, które nadają się do ponownego użycia
                        </span>
                        <input
                            type="radio"
                            name="radio"
                            value={"ubrania, które nadają się do ponownego użycia"}
                            onClick={() => setType("ubrania, które nadają się do ponownego użycia")}
                            onBlur={() => update("type",type)}
                        />
                        <span className="checkmark" />
                    </label>
                    <label className="container">
                        <span className="container_text">
                            ubrania, do wyrzucenia
                        </span>
                        <input
                            type="radio"
                            name="radio"
                            onClick={() => setType("ubrania, do wyrzucenia")}
                            onBlur={() => update("type",type)}
                        />
                        <span className="checkmark" />
                    </label>
                    <label className="container">
                        <span className="container_text">
                            zabawki
                        </span>
                        <input
                            type="radio"
                            name="radio"
                            onClick={() => setType("zabawki")}
                            onBlur={() => update("type",type)}
                        />
                        <span className="checkmark" />
                    </label>
                    <label className="container">
                        <span className="container_text">
                            książki
                        </span>
                        <input
                            type="radio"
                            name="radio"
                            onClick={() => setType("książki")}
                            onBlur={() => update("type",type)}
                        />
                        <span className="checkmark" />
                    </label>
                    <label className="container">
                        <span className="container_text">
                            Inne
                        </span>
                        <input
                            type="radio"
                            name="radio"
                            onClick={() => setType("Inne")}
                            onBlur={() => update("type",type)}
                        />
                        <span className="checkmark" />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default FormStep1;