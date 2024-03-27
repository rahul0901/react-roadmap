import { useState } from 'react';
import './Contact.css';
import './MediaContact.css';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Contact = () => {

    const [signOption, setSignOption] = useState(false);
    const [userData, setUserData] = useState({userName:"", userEmail:"", userPassword:"", userNumber:""});
    const [loginData, setLoginData] = useState({userEmail:"", userPassword:""});

    const route = useNavigate();

    const handleSignIn = () =>{
        setSignOption(true);
    }

    const handleOnChange = (event) =>{
        setUserData({...userData, [event.target.name]: event.target.value});
    }

    const sendRegisterData = async (event) =>{
        event.preventDefault();
        if(userData.userName || userData.userEmail || userData.userPassword || userData.userNumber){
            if(userData.userPassword.length>=6){
                try {
                    const response = await axios.post("http://localhost:8000/api/v1/auth/register", { userData });

                    if(response.data.success){
                        toast.success('Registration Successfull!');
                        setUserData({userName:"", userEmail:"", userPassword:"", userNumber:""});
                        route('/');
                    }else{
                        toast.error(response.data.message);
                    }
                } catch (error) {
                    toast.error(error.response.data.message);
                }
            }else{
                toast.error('Password must be more than 6 characters!')
            }
        }else{
            toast.error('All Fields Required!');
        }
    }

    const handleOnChangeLogin = (event) =>{
        setLoginData({...loginData, [event.target.name]: event.target.value});
    }

    const sendLoginData = async (event) =>{
        event.preventDefault();
        if(loginData.userEmail || loginData.userPassword){
            // if(loginData.userPassword.length>=6){
                try {
                    const response = await axios.post("http://localhost:8000/api/v1/auth/login", { loginData });

                    if(response.data.success){
                        toast.success('Login Successfull!');
                        setLoginData({userEmail:"", userPassword:""});
                        route('/');
                    }else{
                        toast.error(response.data.message);
                    }
                } catch (error) {
                    toast.error(error.response.data.message);
                }
            // }else{
            //     toast.error('Password must be more than 6 characters!')
            // }
        }else{
            toast.error('All Fields Required!');
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
                                    <form onSubmit={sendRegisterData}>
                                        <label htmlFor="name">Name</label>
                                        <input type="text" name="userName" id="name" value={userData.userName} onChange={handleOnChange} />
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name="userEmail" id="email" value={userData.userEmail} onChange={handleOnChange} />
                                        <label htmlFor="password">Password</label>
                                        <input type="password" name="userPassword" id="password"  value={userData.userPassword} onChange={handleOnChange} />
                                        <label htmlFor="number">Number</label>
                                        <input type="number" name="userNumber" id="number" value={userData.userNumber} onChange={handleOnChange} />
                                        <input type="submit" value="Register Here" />
                                    </form>
                                    <p>Sign up here!</p>
                                    <p>Already a member!<p onClick={()=>setSignOption(false)}>Login Here!</p></p>
                                </div>
                            </>:<>
                            <form onSubmit={sendLoginData}>
                                <input type="email" placeholder='Enter Email' required name='userEmail' value={loginData.userEmail} onChange={handleOnChangeLogin} />
                                <input type="password" name="userPassword" id="" placeholder='Enter Password' value={loginData.userPassword} onChange={handleOnChangeLogin} />
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