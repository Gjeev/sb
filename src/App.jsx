import Header from "./Header.jsx";
import Body from "./Body.jsx";
import Login from './Login.jsx';
import SignUp from "./SignUp.jsx";
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

            </Switch>
        </Router>
            
        </>
    );
}