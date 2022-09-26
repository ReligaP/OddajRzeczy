import { BrowserView , MobileView } from "react-device-detect";
import Decoration from "../../../assets/Decoration.svg";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const FormThanks = () => {
    return (
        <>
            <BrowserView>
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
            </BrowserView>
            <MobileView>
                <div className="StepMobileBox">
                    <div className="thanksMobileBox">
                        <div className="thanksMobileBox_content">
                            <CheckCircleOutlineIcon sx={{color:"#188c23",fontSize:"50px",margin:"10px 0"}}/>
                            <p className="thanksMobileBox_content__text">
                                Dziękujemy za Twoją pomoc !
                            </p>
                            <p className="thanksMobileBox_content__text">
                                Szczegółowe informacje prześlemy na maila.
                            </p>
                        </div>
                    </div>
                </div>
            </MobileView>
        </>
    );
};

export default FormThanks;