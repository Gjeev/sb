import Header from "./Header.jsx";
import Body from "./Body.jsx";
import Login from './Login.jsx';
import SignUp from "./SignUp.jsx";
import About from "./About.jsx";
import "./css/styles.css";

import {BrowserRouter as Router,Route,Switch} from "react-router-dom";


export default function App()
{
    return (
        <>
        <Router>
            <Switch>
                <Route exact path="/">
                <Header />
                <Body/>
                </Route>

                <Route exact path="/about">
                <Header />
                <About></About>
                </Route>

                <Route exact path="/login">
                <Login />
                </Route>

                <Route exact path="/sign-up">
                <SignUp />
                </Route>

            </Switch>
        </Router>
            
        </>
    );
}