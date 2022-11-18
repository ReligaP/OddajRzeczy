import { BrowserRouter } from "react-router-dom";
import { Routes , Route , Navigate } from "react-router";
import { Suspense , lazy , useState , useEffect } from "react";
import { getAuth , onAuthStateChanged } from "firebase/auth";
import Loading from "./components/Loading";
import app from "./firebase/firebaseconfig";

const HomeSuspense = lazy(() => import('./components/Home'));
const SignInSuspense = lazy(() => import('./components/SignIn'));
const RegisterSuspense = lazy(() => import('./components/Register'));
const SignOutSuspense = lazy(() => import('./components/SignOut'));
const FormSuspense = lazy(() => import('./components/Form/Form'));

function App() {
    const [email,setEmail] = useState("");
    useEffect(() => {
        const auth = getAuth(app);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setEmail(user.email);
            }
            else {
                console.log("Użytkownik wylogowany")
                setEmail("");
            }
        });
    }, []);
    const ProtectedRoute = ({
                                email,
                                redirectPath = '/',
                                children,
                            }) => {
        if (email === "") {
            return <Navigate to={redirectPath} replace />;
        }
        return children;
    };
    return(
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route exact path="/" index element={<HomeSuspense />}/>
                    <Route exact path="/logowanie" element={<SignInSuspense />}/>
                    <Route exact path="/rejestracja" element={<RegisterSuspense />}/>
                    <Route element={<ProtectedRoute email={email}/>}>
                        <Route exact path="/wylogowano" element={<SignOutSuspense />}/>
                        <Route exact path="/oddaj-rzeczy" element={<FormSuspense />}/>
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;