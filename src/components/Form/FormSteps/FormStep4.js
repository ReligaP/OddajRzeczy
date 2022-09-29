import { useState } from "react";
import { BrowserView , MobileView } from "react-device-detect";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const FormStep4 = ({ update }) => {
    const [street,setStreet] = useState("");
    const [city,setCity] = useState("");
    const [code,setCode] = useState("");
    const [tel,setTel] = useState("");
    const [date,setDate] = useState("");
    const [hour,setHour] = useState("");
    const [delivery,setDelivery] = useState("");
    const [currentInput,setCurrentInput] = useState('');

    const handlerClickStreet = (e) => {
        setStreet(e.target.value);
    };
    const handlerClickStreetUpdate = () => {
        update("street", street);
        setCurrentInput('');
    };
    const handlerClickCity = (e) => {
        setCity(e.target.value);
    };
    const handlerClickCityUpdate = () => {
        update("city", city);
        setCurrentInput('');
    };
    const handlerClickCode = (e) => {
        setCode(e.target.value);
    };
    const handlerClickCodeUpdate = () => {
        update("postCode", code);
        setCurrentInput('');
    };
    const handlerClickTel = (e) => {
        setTel(e.target.value);
    };
    const handlerClickTelUpdate = () => {
        update("phone", tel);
        setCurrentInput('');
    };
    const handlerClickDate = (e) => {
        setDate(e.target.value);
    };
    const handlerClickDateUpdate = () => {
        update("date", date);
        setCurrentInput('');
    };
    const handlerClickHour = (e) => {
        setHour(e.target.value);
    };
    const handlerClickHourUpdate = () => {
        update("time", hour);
        setCurrentInput('');
    };
    const handlerClickDelivery = (e) => {
        setDelivery(e.target.value);
    };
    const handlerClickDeliveryUpdate = () => {
        update("deliveryNote", delivery);
        setCurrentInput('');
    };
    const currentSelector = (e) => {
        setCurrentInput(e.target.name);
    };
    return (
        <>
            <BrowserView>
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
                                    onChange={handlerClickStreet}
                                    onBlur={() => update ("street",street)}
                                />
                            </div>
                            <div className="step4Box_box">
                                <p className="step4Box_box__text">
                                    Miasto
                                </p>
                                <input
                                    className="step4Box_box__input"
                                    onChange={handlerClickCity}
                                    onBlur={() => update ("city",city)}
                                />
                            </div>
                            <div className="ste4Box_largeBox">
                                <p className="ste4Box_largeBox__text">
                                    Kod pocztowy
                                </p>
                                <input
                                    className="step4Box_box__input"
                                    onChange={handlerClickCode}
                                    onBlur={() => update ("postCode",code)}
                                />
                            </div>
                            <div className="ste4Box_largeBox">
                                <p className="ste4Box_largeBox__text">
                                    Numer telefonu
                                </p>
                                <input
                                    className="step4Box_box__input"
                                    onChange={handlerClickTel}
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
                                    onChange={handlerClickDate}
                                    onBlur={() => update ("date",date)}
                                />
                            </div>
                            <div className="step4Box_box">
                                <p className="step4Box_box__text">
                                    Godzina
                                </p>
                                <input
                                    className="step4Box_box__input"
                                    onChange={handlerClickHour}
                                    onBlur={() => update ("time",hour)}
                                />
                            </div>
                            <div className="step4Box_xlBox">
                                <p className="step4Box_box__text">
                                    Uwagi dla kuriera
                                </p>
                                <textarea
                                    className="step4Box_xlBox__textarea"
                                    onChange={handlerClickDelivery}
                                    onBlur={() => update ("note",delivery)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <section>
                    <div className="StepMobileBox">
                        <header>
                            <div className="stepMobileBox_header headerStep2">
                                <p className="stepMobileBox_header__content headerStep2_content">
                                    Wybierz datę odbioru rzecz przez kuriera
                                </p>
                            </div>
                        </header>
                        <div className="stepMobileBox_warning warningStep4">
                            <InfoOutlinedIcon sx={{fontSize:"50px",color:"#fff"}} />
                            <div className="stepMobileBox_warning__content">
                                <p className="stepWarningText warningTextStep2">
                                    Podaj adres oraz termin odbioru rzeczy.
                                </p>
                            </div>
                        </div>
                        <form>
                            <div className="stepMobileBox_step4Box">
                                <div className="stepMobileBox_step4Box__deliveryBox">
                                    <div className="deliveryBox_title">
                                        <p className="deliveryBox_title__content">
                                            Adres odbioru
                                        </p>
                                    </div>
                                    <div className="deliveryBox_input">
                                        <p className="deliveryBox_input__title">
                                            Ulica
                                        </p>
                                        <input
                                            className={`step4Box_box__input deliveryBox_input__content 
                                                ${currentInput === "street" ? 'focusStep4Box' : ''} `}
                                            name="street"
                                            onChange={handlerClickStreet}
                                            onClick={currentSelector}
                                            onBlur={handlerClickStreetUpdate}
                                        />
                                    </div>
                                    <div className="deliveryBox_input">
                                        <p className="deliveryBox_input__title">
                                            Miasto
                                        </p>
                                        <input
                                            className={`step4Box_box__input deliveryBox_input__content 
                                                ${currentInput === "city" ? 'focusStep4Box' : ''} `}
                                            name="city"
                                            onChange={handlerClickCity}
                                            onFocus={currentSelector}
                                            onBlur={handlerClickCityUpdate}
                                        />
                                    </div>
                                    <div className="deliveryBox_input">
                                        <p className="deliveryBox_input__title">
                                            Kod Pocztowy
                                        </p>
                                        <input
                                            className={`step4Box_box__input deliveryBox_input__content 
                                                ${currentInput === "code" ? 'focusStep4Box' : ''} `}
                                            name="code"
                                            onChange={handlerClickCode}
                                            onFocus={currentSelector}
                                            onBlur={handlerClickCodeUpdate}
                                        />
                                    </div>
                                    <div className="deliveryBox_input">
                                        <p className="deliveryBox_input__title">
                                            Nr Telefonu
                                        </p>
                                        <input
                                            className={`step4Box_box__input deliveryBox_input__content 
                                                ${currentInput === "tel" ? 'focusStep4Box' : ''} `}
                                            name="tel"
                                            onChange={handlerClickTel}
                                            onFocus={currentSelector}
                                            onBlur={handlerClickTelUpdate}
                                        />
                                    </div>
                                </div>
                                <div className="stepMobileBox_step4Box__deliveryBox">
                                    <div className="deliveryBox_title">
                                        <p className="deliveryBox_title__content">
                                            Termin odbioru
                                        </p>
                                    </div>
                                    <div className="deliveryBox_input">
                                        <p className="deliveryBox_input__title">
                                            Data
                                        </p>
                                        <input
                                            className={`step4Box_box__input deliveryBox_input__content 
                                                ${currentInput === "date" ? 'focusStep4Box' : ''} `}
                                            name="date"
                                            onChange={handlerClickDate}
                                            onFocus={currentSelector}
                                            onBlur={handlerClickDateUpdate}
                                        />
                                    </div>
                                    <div className="deliveryBox_input">
                                        <p className="deliveryBox_input__title">
                                            Godzina
                                        </p>
                                        <input
                                            className={`step4Box_box__input deliveryBox_input__content 
                                                ${currentInput === "time" ? 'focusStep4Box' : ''} `}
                                            name="time"
                                            onChange={handlerClickHour}
                                            onFocus={currentSelector}
                                            onBlur={handlerClickHourUpdate}
                                        />
                                    </div>
                                    <div className="deliveryBox_textarea">
                                        <p className="deliveryBox_input__title deliveryBox_textarea__title">
                                            Uwagi
                                        </p>
                                        <textarea
                                            className={`step4Box_box__input deliveryBox_input__content 
                                                deliveryBox_textarea__content
                                                ${currentInput === "delivery" ? 'focusStep4Box' : ''}`}
                                            name="delivery"
                                            onChange={handlerClickDelivery}
                                            onFocus={currentSelector}
                                            onBlur={handlerClickDeliveryUpdate}
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </MobileView>
        </>
    );
};

export default FormStep4;