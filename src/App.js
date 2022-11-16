import { BrowserRouter } from "react-router-dom";
import { Routes , Route } from "react-router";
import { Suspense , lazy } from "react";
import Loading from "./components/Loading";
const HomeSuspense = lazy(() => import('./components/Home'));
const SignInSuspense = lazy(() => import('./components/SignIn'));
const RegisterSuspense = lazy(() => import('./components/Register'));
const SignOutSuspense = lazy(() => import('./components/SignOut'));
const FormSuspense = lazy(() => import('./components/Form/Form'));

function App() {
    return(
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route exact path="/" index element={<HomeSuspense />}/>
                    <Route exact path="/logowanie" element={<SignInSuspense />}/>
                    <Route exact path="/rejestracja" element={<RegisterSuspense />}/>
                    <Route exact path="/wylogowano" element={<SignOutSuspense />}/>
                    <Route exact path="/oddaj-rzeczy" element={<FormSuspense />}/>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;