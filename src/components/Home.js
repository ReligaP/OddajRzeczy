import { useEffect , useState } from 'react';
import { getAuth , onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebaseconfig";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSimpleSteps from "./HomeSimpleSteps";
import HomeAbout from "./HomeAbout";
import HomeWhoWeHelp from "./HomeWhoWeHelp";
import HomeContact from "./HomeContact";



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
            <HomeHeader email={email}/>
            <HomeThreeColumns />
            <HomeSimpleSteps />
            <HomeAbout />
            <HomeWhoWeHelp />
            <HomeContact />
        </>
    );
};

export default Home;