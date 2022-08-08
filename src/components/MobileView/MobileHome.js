import { Link } from "react-router-dom";
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import BackpackIcon from '@mui/icons-material/Backpack';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const MobileHome = (props) => {

    return (
        <div className="mobileHomeBox">
            <div className="mobileHomeBox_content">
                <p className="mobileHomeBox_content__title">
                    Masz w domu rzeczy, z którymi nie wiesz co zrobić?
                </p>
                <div className="mobileHomeBox_content__text">
                    <p>
                        ODDAJ JE POTRZEBUJĄCYM
                    </p>
                    <p>
                        - szybko i w zaufane ręce
                    </p>
                </div>
                {
                    props.email ?
                        <div className="mobileHomeBox_content__login">
                            <p className="mobileHomeBox_login">
                                Witaj w OddajRzeczy, {props.email} !
                            </p>
                        </div>
                        :
                        <div className="mobileHomeBox_content__buttons">
                            <div className="mobileHomeBox_button">
                                <Link className="mobileHomeBox_button__link" to="/rejestracja">
                                    <p>
                                        Załóż konto
                                    </p>
                                </Link>
                            </div>
                        </div>
                }
            </div>
            <div className="mobileHomeBox_simpleSteps">
                <p className="mobileHomeBox_simpleSteps__title">
                    Wystarczą 4 proste kroki
                </p>
                <div className="mobileHomeBox_simpleSteps__content">
                    <div className="mobileHomeBox_steps">
                        <VolunteerActivismIcon  sx={{width:"52px",height:"54px"}} />
                        <p className="mobileHomeBox_steps__text">
                            Wybierz rzeczy do oddania
                        </p>
                    </div>
                    <div className="mobileHomeBox_steps">
                        <BackpackIcon sx={{width:"52px",height:"54px"}} />
                        <p className="mobileHomeBox_steps__text">
                            Spakuj w szczelny worek
                        </p>
                    </div>
                    <div className="mobileHomeBox_steps">
                        <PanToolAltIcon sx={{width:"52px",height:"54px"}} />
                        <p className="mobileHomeBox_steps__text">
                            Zdecyduj komu chcesz pomóc
                        </p>
                    </div>
                    <div className="mobileHomeBox_steps">
                        <LocalShippingIcon sx={{width:"52px",height:"54px"}} />
                        <p className="mobileHomeBox_steps__text">
                            Zamów kuriera w dogodnym terminie
                        </p>
                    </div>
                </div>
            </div>
            <div className="mobileHomeBox_whoWeHelp">
                <p className="mobileHomeBox_whoWeHelp__title">
                    Komu pomagamy?
                </p>
                <div className="mobileHomeBox_whoWeHelp__content">
                    <div className="mobileHomeBox_who">
                        <div className="mobileHomeBox_who__content">
                            <p>
                                Fundacjom
                            </p>
                        </div>
                        <p className="whoContent_text">
                            W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy.
                            Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                        </p>
                    </div>
                    <div className="mobileHomeBox_who">
                        <div className="mobileHomeBox_who__content">
                            <p>
                                Lokalnym
                            </p>
                            <p>
                                zbiórkom
                            </p>
                        </div>
                        <p className="whoContent_text">
                            Wspieramy lokalne zbiórki organizowane przez indywidualne osoby, którym zależy na dobru
                            społeczności, w której żyją. Sam też możesz zorganizować taką zbiórkę i pomóc tym,
                            którzy są najbliżej.
                        </p>
                    </div>
                    <div className="mobileHomeBox_who">
                        <div className="mobileHomeBox_who__content organizationsContent">
                            <p>
                                Organizacjom
                            </p>
                            <p>
                                pozarządowym
                            </p>
                        </div>
                        <p  className="whoContent_text">
                            Pomagamy również wszelkim organizacjom pozarządowym i charytatywnym, które nie są
                            Fundacjami. Są to nasi Partnerzy, który zrobią dobry pożytek z rzeczy, które do nich trafią.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileHome;