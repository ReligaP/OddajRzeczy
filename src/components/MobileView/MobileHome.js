import { Link } from "react-router-dom";
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import BackpackIcon from '@mui/icons-material/Backpack';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VerifiedIcon from '@mui/icons-material/Verified';

const MobileHome = (props) => {
    return (
        <main>
            <div className="mobileHomeBox">
                <section className="mobileHomeBox_greeting">
                    <header className="mobileHomeBox_sectionHeader mobileHomeBox_sectionMainHeader">
                        <p className="mobileHomeBox_sectionHeader__text">
                            Witaj w OddajRzeczy !
                        </p>
                    </header>
                    <section className="mobileHomeBox_greeting__content">
                        <p className="mobileHomeBox_greetingSectionText">
                            Masz w domu niepotrzebne rzeczy ?
                        </p>
                        <p className="mobileHomeBox_greetingSectionText">
                            Nie wiesz co z nimi zrobić ?
                        </p>
                        <div className="mobileHomeBox_greetingSectionTextBox">
                            <p className="mobileHomeBox_greetingSectionTextBox_uppercaseText">
                                oddaj je potrzebującym
                            </p>
                            <p>
                                - szybko i w zaufane ręce !
                            </p>
                        </div>
                        {
                            props.email ?
                                <nav className="mobileHomeBox_greetingSectionLogged">
                                    <div className="mobileHomeBox_greetingSectionLogged__loginBar">
                                        <p className="mobileHomeBox_greetingSectionText">
                                            Witaj , {props.email} !
                                        </p>
                                        <VerifiedIcon fontSize="large" sx={{color:"green",marginLeft:"10px"}} />
                                    </div>
                                    <Link
                                        className="mobileHomeBox_greetingSectionLink"
                                        to="/oddaj-rzeczy"
                                    >
                                        <p>
                                            Oddaj Rzeczy
                                        </p>
                                    </Link>
                                    <p className="mobileHomeBox_greetingSectionText">
                                        Zobacz historie Twoich darowizn
                                    </p>
                                    <Link
                                        className="mobileHomeBox_greetingSectionLink mobileHomeBox_greetingDonationLink"
                                        to="/darowizny"
                                    >
                                        <p>
                                            Moje darowizny
                                        </p>
                                    </Link>
                                </nav>
                                :
                                <nav className="mobileHomeBox_greetingSectionLoggedOut">
                                    <p className="mobileHomeBox_greetingSectionText">
                                        Dołącz do nas już teraz !
                                    </p>
                                    <Link
                                        className="mobileHomeBox_greetingSectionLink"
                                        to="/rejestracja"
                                    >
                                        <p>
                                            Załóż konto
                                        </p>
                                    </Link>
                                    <p className="mobileHomeBox_greetingSectionText">
                                        Masz już konto. Chcesz pomóc ?
                                    </p>
                                    <Link
                                        className="mobileHomeBox_greetingSectionLink"
                                        to="/logowanie"
                                    >
                                        <p>
                                            Zaloguj się
                                        </p>
                                    </Link>
                                </nav>
                        }
                    </section>
                </section>
                <section className="mobileHomeBox_simpleSteps">
                    <header className="mobileHomeBox_sectionHeader">
                        <p className="mobileHomeBox_sectionHeader__text">
                            Wystarczą 4 proste kroki
                        </p>
                    </header>
                    <section className="mobileHomeBox_simpleSteps__content">
                        <div className="mobileHomeBox_stepsSectionBox">
                            <VolunteerActivismIcon  sx={{width:"52px",height:"54px"}} />
                            <p className="mobileHomeBox_stepsSectionBox__text">
                                Wybierz rzeczy do oddania
                            </p>
                        </div>
                        <div className="mobileHomeBox_stepsSectionBox">
                            <BackpackIcon sx={{width:"52px",height:"54px"}} />
                            <p className="mobileHomeBox_stepsSectionBox__text">
                                Spakuj w szczelny worek
                            </p>
                        </div>
                        <div className="mobileHomeBox_stepsSectionBox">
                            <PanToolAltIcon sx={{width:"52px",height:"54px"}} />
                            <p className="mobileHomeBox_stepsSectionBox__text">
                                Zdecyduj komu chcesz pomóc
                            </p>
                        </div>
                        <div className="mobileHomeBox_stepsSectionBox">
                            <LocalShippingIcon sx={{width:"52px",height:"54px"}} />
                            <p className="mobileHomeBox_stepsSectionBox__text">
                                Zamów kuriera w dogodnym terminie
                            </p>
                        </div>
                    </section>
                </section>
                <section className="mobileHomeBox_whoWeHelp">
                    <header className="mobileHomeBox_sectionHeader">
                        <p className="mobileHomeBox_sectionHeader__text">
                            Komu pomagamy ?
                        </p>
                    </header>
                    <section className="mobileHomeBox_whoWeHelp__content">
                        <div className="mobileHomeBox_whoWeHelpSectionBox">
                            <p className="mobileHomeBox_whoWeHelpSectionBox__title">
                                Fundacjom
                            </p>
                            <p className="mobileHomeBox_whoWeHelpSectionBox__text">
                                W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy.
                                Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                            </p>
                        </div>
                        <div className="mobileHomeBox_whoWeHelpSectionBox">
                            <p className="mobileHomeBox_whoWeHelpSectionBox__title">
                                Lokalnym zbiórkom
                            </p>
                            <p className="mobileHomeBox_whoWeHelpSectionBox__text">
                                Wspieramy lokalne zbiórki organizowane przez indywidualne osoby, którym zależy na dobru
                                społeczności, w której żyją. Sam też możesz zorganizować taką zbiórkę i pomóc tym,
                                którzy są najbliżej.
                            </p>
                        </div>
                        <div className="mobileHomeBox_whoWeHelpSectionBox">
                            <p className="mobileHomeBox_whoWeHelpSectionBox__title">
                                Organizacjom pozarządowym
                            </p>
                            <p  className="mobileHomeBox_whoWeHelpSectionBox__text">
                                Pomagamy również wszelkim organizacjom pozarządowym i charytatywnym, które nie są
                                Fundacjami. Są to nasi Partnerzy, który zrobią dobry pożytek z rzeczy, które do nich trafią.
                            </p>
                        </div>
                    </section>
                </section>
            </div>
        </main>
    );
};

export default MobileHome;