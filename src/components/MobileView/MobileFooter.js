import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const MobileFooter = () => {

    return (
        <div className="mobileFooterBox">
            <div className="mobileFooterBox_logo">
                <p className="mobileFooterBox_logo__content logoContent">
                    Oddaj
                </p>
                <p className="mobileFooterBox_logo__content">
                    &nbsp;&nbsp;Rzeczy
                </p>
            </div>
            <div className="mobileFooterBox_contact">
                <p className="mobileFooterBox_contact__text">
                    Skontaktuj się z nami
                </p>
                <LocalPhoneIcon />
                <MailIcon />
            </div>
            <div className="mobileFooterBox_content">
                <p className="mobileFooterBox_content__text">
                    Regulamin
                </p>
                <p className="mobileFooterBox_content__text">
                    Polityka Prywatności
                </p>
                <p className="mobileFooterBox_content__text">
                    Instrukcja jak spakować rzeczy do oddania
                </p>
            </div>
        </div>
    );
};

export default MobileFooter;