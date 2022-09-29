import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';

const MobileFooter = () => {
    return (
        <footer>
            <div className="mobileFooterBox">
                <div className="mobileHeaderBox_logo">
                    <p className="mobileHeaderBox_logo__text mobileLogoUpperText">
                        Oddaj
                    </p>
                    <p className="mobileHeaderBox_logo__text">
                        &nbsp;&nbsp;Rzeczy
                    </p>
                </div>
                <div className="mobileFooterBox_content">
                    <div className="mobileFooterBox_content__contact">
                        <p className="mobileFooter_contactText">
                            skontaktuj się z nami
                        </p>
                        <LocalPhoneIcon sx={{margin:"0 5px"}}/>
                        <MailIcon sx={{margin:"0 5px"}}/>
                        <FacebookIcon sx={{margin:"0 5px"}}/>
                    </div>
                    <div className="mobileFooterBox_content__instructions">
                        <p className="mobileFooter_instructionsText">
                            Regulamin
                        </p>
                        <p className="mobileFooter_instructionsText">
                            Polityka Prywatności
                        </p>
                        <p className="mobileFooter_instructionsText">
                            Instrukcja jak spakować rzeczy do oddania
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default MobileFooter;