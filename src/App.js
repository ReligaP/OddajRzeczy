import { BrowserRouter } from "react-router-dom";
import { Routes , Route } from "react-router";
import { Suspense , lazy , useEffect } from "react";
import { getAuth , onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { saveUser } from "./components/Redux/Slice/AuthSlice";
import Loading from "./components/Loading";
import PrivateRoute from "./components/PrivateRoutes/PrivateRoute";
import app from "./firebase/firebaseconfig";

const HomeSuspense = lazy(() => import('./components/Home'));
const SignInSuspense = lazy(() => import('./components/SignIn'));
const RegisterSuspense = lazy(() => import('./components/Register'));
const SignOutSuspense = lazy(() => import('./components/SignOut'));
const FormSuspense = lazy(() => import('./components/Form/Form'));

function App() {
    const auth = getAuth(app);
    const dispatch = useDispatch();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(saveUser(user.email));
            } else {
                dispatch(saveUser(undefined));
            }
        });
    }, [auth, dispatch]);
    return(
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route exact path="/" index element={<HomeSuspense />}/>
                    <Route exact path="/logowanie" element={<SignInSuspense />}/>
                    <Route exact path="/rejestracja" element={<RegisterSuspense />}/>
                    <Route exact path="/wylogowano" element={<SignOutSuspense />} />
                    <Route
                        exact path="/oddaj-rzeczy"
                        element={
                            <PrivateRoute>
                                <FormSuspense />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;