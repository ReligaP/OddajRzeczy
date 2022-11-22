import { BrowserView , MobileView } from "react-device-detect";
import { useSelector } from "react-redux";
import { getAuth , signOut } from "firebase/auth";
import FormHeader from "./FormHeader";
import HomeContact from "../HomeContact";
import FormSelect from "./FormSelect";
import MobileHeader from "../MobileView/MobileHeader";
import MobileFooter from "../MobileView/MobileFooter";
import app from "../../firebase/firebaseconfig";


const Form = () => {
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
                <FormHeader user={user} signOut={ClickHandlerSignOut}/>
                <FormSelect user={user}/>
                <HomeContact />
            </BrowserView>
            <MobileView>
                <MobileHeader user={user} signOut={ClickHandlerSignOut}/>
                <FormSelect user={user} />
                <MobileFooter />
            </MobileView>
        </>
    );
};

export default Form;