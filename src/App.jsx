import Header from "./components/Header.jsx";
import Body from "./pages/home/Body.jsx";
import Login from './pages/user/Login.jsx';
import SignUp from "./pages/user/SignUp.jsx";
import About from "./pages/about/About.jsx";
import Cart from "./pages/checkout/Cart.jsx";
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

                <Route exact path="/cart">
                <Cart />
                </Route>

            </Switch>
        </Router>
            
        </>
    );
}