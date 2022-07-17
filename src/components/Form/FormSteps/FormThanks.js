import Decoration from "../../../assets/Decoration.svg";

const FormThanks = () => {
    return (
        <div className="thanksBox">
            <div className="thanksBox_content">
                <p className="thanksBox_content__text">
                    Dziękujemy za przesłanie formularza
                </p>
                <p className="thanksBox_content__text">
                    Na maila prześlemy wszelkie
                </p>
                <p className="thanksBox_content__text">
                    informacje o odbiorze.
                </p>
            </div>
            <img
                src={Decoration}
                alt="Decoration-Sign"
            />
        </div>
    );
};

export default FormThanks;