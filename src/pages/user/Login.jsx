import "../../css/login.css";

export default function Login()
{
    return (
        
        <div className="login-page">
            <div className="globe">
                <h1>Sensing Bharat</h1>
                <h4>Search your data and let us provide you the package!</h4>
                <img src="/images/globe.png"/>
            </div>
            <div className="login">
                <a href="/">Back</a>
                <h1>Login</h1>
                <p>Welcome Back! Please Log in to your account.</p>
                <input type="text" placeholder="E-mail"/>
                <input type="text" placeholder="Password"/>
                <a href="#" className="fp">Forgot Password?</a>
                <button>Login</button>
            </div>
        </div>
            
        
    );
}