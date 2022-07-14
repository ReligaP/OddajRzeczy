import { useState } from "react";

const FormStep4 = ({ update }) => {
    const [street,setStreet] = useState("");
    const [city,setCity] = useState("");
    const [code,setCode] = useState("");
    const [tel,setTel] = useState("");
    const [date,setDate] = useState("");
    const [hour,setHour] = useState("");
    const [delivery,setDelivery] = useState("");

    const handlerClick1 = (e) => {
        setStreet(e.target.value);
    };
    const handlerClick2 = (e) => {
        setCity(e.target.value);
    };
    const handlerClick3 = (e) => {
        setCode(e.target.value);
    };
    const handlerClick4 = (e) => {
        setTel(e.target.value);
    };
    const handlerClick5 = (e) => {
        setDate(e.target.value);
    };
    const handlerClick6 = (e) => {
        setHour(e.target.value);
    };
    const handlerClick7 = (e) => {
        setDelivery(e.target.value);
    };

    return (
        <div className="step4Box">
            <div className="step">
                <p className="step_content">
                    Krok 4/4
                </p>
            </div>
            <div className="text">
                <p className="text_content">
                    Podaj adres oraz termin odbioru rzecz przez kuriera
                </p>
            </div>
            <div className="step4Box_content">
                <div className="step4Box_content__box1">
                    <p className="step4Box_title">
                        Adres odbioru:
                    </p>
                    <div className="step4Box_box">
                        <p className="step4Box_box__text">
                            Ulica
                        </p>
                        <input
                            className="step4Box_box__input"
                            onChange={handlerClick1}
                            onBlur={() => update ("street",street)}
                        />
                    </div>
                    <div className="step4Box_box">
                        <p className="step4Box_box__text">
                            Miasto
                        </p>
                        <input
                            className="step4Box_box__input"
                            onChange={handlerClick2}
                            onBlur={() => update ("city",city)}
                        />
                    </div>
                    <div className="ste4Box_largeBox">
                        <p className="ste4Box_largeBox__text">
                            Kod pocztowy
                        </p>
                        <input
                            className="step4Box_box__input"
                            onChange={handlerClick3}
                            onBlur={() => update ("postCode",code)}
                        />
                    </div>
                    <div className="ste4Box_largeBox">
                        <p className="ste4Box_largeBox__text">
                            Numer telefonu
                        </p>
                        <input
                            className="step4Box_box__input"
                            onChange={handlerClick4}
                            onBlur={() => update ("phone",tel)}
                        />
                    </div>
                </div>
                <div className="step4Box_content__box2">
                    <p className="step4Box_title">
                        Termin odbioru:
                    </p>
                    <div className="step4Box_box">
                        <p className="step4Box_box__text">
                            Data
                        </p>
                        <input
                            className="step4Box_box__input"
                            onChange={handlerClick5}
                            onBlur={() => update ("date",date)}
                        />
                    </div>
                    <div className="step4Box_box">
                        <p className="step4Box_box__text">
                            Godzina
                        </p>
                        <input
                            className="step4Box_box__input"
                            onChange={handlerClick6}
                            onBlur={() => update ("time",hour)}
                        />
                    </div>
                    <div className="step4Box_xlBox">
                        <p className="step4Box_box__text">
                            Uwagi dla kuriera
                        </p>
                        <textarea
                            className="step4Box_xlBox__textarea"
                            onChange={handlerClick7}
                            onBlur={() => update ("note",delivery)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormStep4;