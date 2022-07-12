import { useEffect , useState } from "react";
import { getAuth , onAuthStateChanged }  from "firebase/auth";
import FormHeader from "./FormHeader";
import HomeContact from "../HomeContact";
import FormSelect from "./FormSelect";
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
            <FormHeader email={email}/>
            <FormSelect email={email}/>
            <HomeContact />
        </>
    );
};

export default Form;