import "../css/header.css";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Header() {
  // model open/close states and functions
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  // button display based on whether user is logged in or not
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <>
      <header>
        <div className="logosection">
          <div id="logo"></div>
          <div id="logotext">Remote Sensing Data</div>
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="buttons">
          {!loggedIn && (
            <>
              <button>
                <Link to="/login">LOG IN</Link>
              </button>
              <button>
                <Link to="/sign-up">SIGN UP</Link>
              </button>
            </>
          )}
          {loggedIn && (
            <>
              <div id="icons">
              <Link to="/cart"><img src="./images/cart.svg"></img></Link>
                
              </div>
              <div id="icons">
              <Link to="/profile"><img src="./images/user.svg"></img></Link>
                
              </div>
            </>
          )}
        </div>
      </header>
    </>
  );
}
