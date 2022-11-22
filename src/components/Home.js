import { BrowserView , MobileView } from 'react-device-detect';
import { getAuth , signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSimpleSteps from "./HomeSimpleSteps";
import HomeAbout from "./HomeAbout";
import HomeWhoWeHelp from "./HomeWhoWeHelp";
import HomeContact from "./HomeContact";
import MobileHeader from "./MobileView/MobileHeader";
import MobileFooter from "./MobileView/MobileFooter";
import MobileHome from "./MobileView/MobileHome";
import app from "../firebase/firebaseconfig";

const Home = () => {
    const user = useSelector((state) => state.auth.value);
    const ClickHandlerSignOut = () => {
        const auth=getAuth(app);
        signOut(auth).then(() => {
            console.log("Wylogowany");
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        })
    };
    return (
        <>
            <BrowserView>
                <HomeHeader user={user} signOut={ClickHandlerSignOut}/>
                <HomeThreeColumns />
                <HomeSimpleSteps user={user} />
                <HomeAbout />
                <HomeWhoWeHelp />
                <HomeContact />
            </BrowserView>
            <MobileView>
                <MobileHeader user={user} />
                <MobileHome user={user}/>
                <MobileFooter />
            </MobileView>
        </>
    );
};

export default Home;