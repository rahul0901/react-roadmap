import './Contact.css';
import './MediaContact.css';

const Contact = () => {
    return (
        <>
            <div className="screen-contact">
                <div className="contact-parent">
                    <div className="contact-banner">
                        <div className="contact-banner-void"></div>
                        <div className="contact-banner-content">
                            <form >
                                <input type="email" placeholder='Enter Email' required />
                                <input type="password" name="" id="" placeholder='Enter Password' />
                                <input type="submit" value="Sign In" />
                            </form>
                            <div className="contact-banner-signup">
                                <p>Don't have account?</p>
                                <p>Sign Up</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;