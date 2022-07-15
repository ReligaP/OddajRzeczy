import Icon1 from "../../../assets/Icon-1.svg";
import Icon2 from "../../../assets/Icon-4.svg";

const FormSummary = ({ data }) => {
    return (
        <div className="summaryBox">
            <div className="text">
                <p className="text_content">
                    Podsumowanie Twojej darowizny
                </p>
            </div>
            <div className="summaryBox_content">
                <div className="contentUpBox">
                    <p className="contentUpBox_title">
                        Oddajesz:
                    </p>
                    <div className="contentUpBox_text" >
                        <img
                            src={Icon1}
                            alt="Icon1"
                            className="contentUpBox_text__img"
                        />
                        <p className="contentUpBox_text__info">
                            {data.bags} worki,{data.type}
                        </p>
                    </div>
                    <div className="contentUpBox_text">
                        <img
                            src={Icon2}
                            alt="Icon2"
                            className="contentUpBox_text__img"
                        />
                        <p className="contentUpBox_text__info">
                            dla lokalizacji: {data.localization}
                        </p>
                    </div>
                </div>
                <div className="contentDownBox">
                    <div className="contentDownBox_box1">
                        <p className="contentDownBox_box1__title">
                            Adres odbioru:
                        </p>
                        <div className="contentDownBox_box1__text1">
                            <p className="contentDownBox_text">
                                Ulica
                            </p>
                            <p className="contentDownBox_text">
                                {data.street}
                            </p>
                        </div>
                        <div className="contentDownBox_box1__text2">
                            <p className="contentDownBox_text">
                                Miasto
                            </p>
                            <p className="contentDownBox_text">
                                {data.city}
                            </p>
                        </div>
                        <div className="contentDownBox_box1__text3">
                            <p className="contentDownBox_text contentDownBox_text3">
                                Kod Pocztowy
                            </p>
                            <p className="contentDownBox_text">
                                {data.postCode}
                            </p>
                        </div>
                        <div className="contentDownBox_box1__text3">
                            <p className="contentDownBox_text contentDownBox_text4">
                                Numer telefonu
                            </p>
                            <p className="contentDownBox_text">
                                {data.phone}
                            </p>
                        </div>
                    </div>
                    <div className="contentDownBox_box2">
                        <p className="contentDownBox_box2__title">
                            Termin odbioru:
                        </p>
                        <div className="contentDownBox_box2__text1">
                            <p className="contentDownBox_text">
                                Data
                            </p>
                            <p className="contentDownBox_text contentDownBox_marginText">
                                {data.date}
                            </p>
                        </div>
                        <div className="contentDownBox_box2__text2">
                            <p className="contentDownBox_text">
                                Godzina
                            </p>
                            <p className="contentDownBox_text contentDownBox_marginText">
                                {data.time}
                            </p>
                        </div>
                        <div className="contentDownBox_box2__text3">
                            <p className="contentDownBox_text contentDownBox_text5">
                                Uwagi dla kuriera
                            </p>
                            <p className="contentDownBox_text">
                                {data.note}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormSummary;