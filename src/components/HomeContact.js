import ContactForm from "../components/ContactForm";
import BackgroundContact from "../assets/Background-Contact-Form.jpg";
import Decoration from "../assets/Decoration.svg";
import Facebook from "../assets/Facebook.svg";
import Instagram from "../assets/Instagram.svg"

const HomeContact= () => {
    return (
        <div
            id="HomeContact"
            className="homeContactBox"
        >
            <img
                className="homeContactBox_img"
                src={BackgroundContact}
                alt="BackgroundContact"
            />
            <div className="homeContactBox_content">
                <div className="homeContactBox_content__title">
                    <p>
                        Skontaktuj się z nami
                    </p>
                    <img
                        className="title_img"
                        src={Decoration}
                        alt="Decoration-Sign"
                    />
                </div>
                <ContactForm />
            </div>
            <div className="homeContactBox_footer">
                <div className="homeContactBox_footer__text">
                    Copyright by Coders Lab
                </div>
                <div className="homeContactBox_footer__icons">
                    <img
                        src={Facebook}
                        alt="Facebook-sign"
                    />
                    <img
                        src={Instagram}
                        alt="Instagram-sign"
                    />
                </div>
            </div>
        </div>
    );
};

export default HomeContact;


/*
import ContactForm from "../components/ContactForm";
import BackgroundContact from "../assets/Background-Contact-FormHeader.jpg";
import Decoration from "../assets/Decoration.svg";
import Facebook from "../assets/Facebook.svg";
import Instagram from "../assets/Instagram.svg"

const HomeContact= () => {
    return (
        <div id="HomeContact" className="homeContactBox" >
            <img
                className="homeContactBox_img"
                src={BackgroundContact}
                alt="BackgroundContact"
            />
            <div className="homeContactBox_content">
                <div className="homeContactBox_content__title">
                    Skontaktuj się z nami
                </div>
                <img
                    src={Decoration}
                    alt="Decoration-Sign" />
            </div>
            <div className="homeContactBox_contactForm">
                <ContactForm />
            </div>
            <div className="homeContactBox_footer">
                <div className="homeContactBox_footer__text">
                    Copyright by Coders Lab
                </div>
                <div className="homeContactBox_footer__icons">
                    <img
                        src={Facebook}
                        alt="Facebook-sign"
                    />
                    <img
                        src={Instagram}
                        alt="Instagram-sign"
                    />
                </div>
            </div>
        </div>
    );
};

export default HomeContact;
 */