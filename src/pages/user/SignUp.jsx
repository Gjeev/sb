import "../../css/signup.css";

export default function SignUp()
{
    return (
        <>
        <div className="login-page">
            <div className="globe">
                <h1>Sensing Bharat</h1>
                <h4>Search your data and let us provide you the package!</h4>
                <img src="/images/globe.png"/>
            </div>
            <div className="login">
                <a href="/">Back</a>
                <h1>Sign Up</h1>
                <p>Welcome Back! Please set up your account.</p>
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="E-mail"/>
                <input type="text" placeholder="Password"/>
                <button>Sign Up</button>
            </div>
        </div>
            
        </>
    );
    // const [show, setShow] = useState(false);
    // const handleShow = () => setShow(true);
    // const handleClose = () => setShow(false);

    // return (
    //     <>
    //     {/* write handleshow function in header */}
    //     <Modal show={ show } onHide={ handleClose }>
    //     <Modal.Body>
    //     <div className="login-page">
    //         <div className="globe">
    //             <h1>Sensing Bharat</h1>
    //             <h4>Search your data and let us provide you the package!</h4>
    //             <img src="/images/globe.png"/>
    //         </div>
    //         <div className="login">
    //             <a href="/">Back</a>
    //             <h1>Sign Up</h1>
    //             <p>Welcome Back! Please set up your account.</p>
    //             <input type="text" placeholder="Name"/>
    //             <input type="text" placeholder="E-mail"/>
    //             <input type="text" placeholder="Password"/>
    //             <button>Sign Up</button>
    //         </div>
    //     </div>
    //     </Modal.Body>
    //     </Modal>
        
        
    //     </>
    // );
}
