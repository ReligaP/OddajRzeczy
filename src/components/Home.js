import { useEffect , useState } from 'react';
import { getAuth , onAuthStateChanged } from "firebase/auth";
import { BrowserView , MobileView } from 'react-device-detect';
import app from "../firebase/firebaseconfig";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSimpleSteps from "./HomeSimpleSteps";
import HomeAbout from "./HomeAbout";
import HomeWhoWeHelp from "./HomeWhoWeHelp";
import HomeContact from "./HomeContact";
import MobileHeader from "./MobileView/MobileHeader";
import MobileFooter from "./MobileView/MobileFooter";
import MobileHome from "./MobileView/MobileHome";



const Home = () => {

    const [email, setEmail] = useState("");
    useEffect(() => {
        const auth = getAuth(app);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user.email);
                setEmail(user.email);
            }
            else {
                console.log("Użytkownik wylogowany")
                setEmail("");
            }
        });
    }, []);

    return (
        <>
            <BrowserView>
                <HomeHeader email={email}/>
                <HomeThreeColumns />
                <HomeSimpleSteps email={email}/>
                <HomeAbout />
                <HomeWhoWeHelp />
                <HomeContact />
            </BrowserView>
            <MobileView>
                <MobileHeader email={email}/>
                <MobileHome email={email}/>
                <MobileFooter />
            </MobileView>
        </>
    );
};

export default Home;