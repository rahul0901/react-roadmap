import { useState } from 'react';
import './Contact.css';
import './MediaContact.css';

const Contact = () => {

    const [signOption, setSignOption] = useState(false);
    const [userData, setUserData] = useState({userName:"", userEmail:"", userPassword:"", userNumber:""});

    const handleSignIn = () =>{
        setSignOption(true);
    }

    const handleOnChange = (event) =>{
        setUserData({[event.target.name]: event.target.value});
    }

    const sendData = async (event) =>{
        event.preventDefault();
        if(userData.userName || userData.userEmail || userData.userPassword || userData.userNumber){
            
        }
    }

    return (
        <>
            <div className="screen-contact">
                <div className="contact-parent">
                    <div className="contact-banner">
                        <div className="contact-banner-void"></div>
                        <div className="contact-banner-content">
                            {signOption? 
                            <>
                                <div className="signup">
                                    <form onSubmit={sendData}>
                                        <label htmlFor="name">Name</label>
                                        <input type="text" name="userName" id="name" />
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name="userEmail" id="email" />
                                        <label htmlFor="password">Password</label>
                                        <input type="password" name="userPassword" id="password" />
                                        <label htmlFor="number">Number</label>
                                        <input type="number" name="userNumber" id="number" />
                                        <input type="submit" value="Register Here" />
                                    </form>
                                    <p>Sign up here!</p>
                                    <p>Already a member!<p onClick={()=>setSignOption(false)}>Login Here!</p></p>
                                </div>
                            </>:<>
                            <form >
                                <input type="email" placeholder='Enter Email' required />
                                <input type="password" name="" id="" placeholder='Enter Password' />
                                <input type="submit" value="Sign In" />
                                <div className="social-signup-options">
                                    <i class="fa-brands fa-google"></i>
                                    <i class="fa-brands fa-instagram"></i>
                                </div>
                            </form>
                            <div className="contact-banner-signup">
                                <p>Don't have account?</p>
                                <p onClick={handleSignIn}>Sign Up</p>
                            </div>
                            </>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Contact;