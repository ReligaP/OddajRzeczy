import { useEffect , useState } from "react";
import { getAuth , onAuthStateChanged }  from "firebase/auth";
import { BrowserView , MobileView } from "react-device-detect";
import FormHeader from "./FormHeader";
import HomeContact from "../HomeContact";
import FormSelect from "./FormSelect";
import MobileHeader from "../MobileView/MobileHeader";
import MobileFooter from "../MobileView/MobileFooter";
import app from "../../firebase/firebaseconfig";

const Form = () => {
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
                <FormHeader email={email}/>
                <FormSelect email={email}/>
                <HomeContact />
            </BrowserView>
            <MobileView>
                <MobileHeader email={email} />
                <FormSelect />
                <MobileFooter />
            </MobileView>
        </>
    );
};

export default Form;