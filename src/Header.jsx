import "./css/header.css";
import Modal from '@mui/material/Modal';
import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

export default function Header() {

    // model open/close states and functions
    const [open,setOpen] =  useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // button display based on whether user is logged in or not 
    const [loggedIn, setLoggedIn] = useState(false);
    
    if(!loggedIn) {
        return (
            <>
                <header>
                    <div className="logosection">
                            <div id="logo"><img src="./images/logo.svg" alt="LOGO"/></div>
                            <div id="logotext">SensingBharat</div>
                        </div>
                        <div className="nav-items">
                            <ul>
                                <li ><a href="/">Home</a></li>
                                <li ><a href="/about">About</a></li>
                                <li ><a href="/contact">Contact</a></li>
                            </ul>
                        </div>
                        <div className="buttons">
                            <button onClick={handleOpen}>LOG IN</button>
                            <Modal open={open} onClose={handleClose}>
                                <Login></Login>
                            </Modal>
                            <button onClick={handleOpen}>SIGN UP</button>
                            <Modal open={open} onClose={handleClose}>
                                <SignUp></SignUp>
                            </Modal>
                        </div>
                    
                </header>
            </>
        );
    }
    else if(loggedIn) {
        return (<>
            <header>
                <div className="logosection">
                        <div id="logo"><img src="./images/logo.svg" alt="LOGO"/></div>
                        <div id="logotext">SensingBharat</div>
                    </div>
                    <div className="nav-items">
                        <ul>
                            <li ><a href="/">Home</a></li>
                            <li ><a href="/about">About</a></li>
                            <li ><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="buttons">
                    <div id="icons"><img src="./images/cart.svg"></img></div>  
                    <div id="icons"><img src="./images/user.svg"></img></div> 
                    </div>
                
            </header>
        </>);
    }

    
}