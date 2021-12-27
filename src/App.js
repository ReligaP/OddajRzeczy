import React from "react";
import {BrowserRouter} from "react-router-dom";
import { Routes, Route } from "react-router";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import Register from "./components/Register";
import SignOut from "./components/SignOut";
import Form from "./components/Form/Form";

function App() {
  return(
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/logowanie" element={<SignIn />}/>
            <Route exact path="/rejestracja" element={<Register />}/>
            <Route exact path="/wylogowano" element={<SignOut />}/>
            <Route exact path="/oddaj-rzeczy" element={<Form />}/>
        </Routes>
      </BrowserRouter>
  );
}
export default App;
