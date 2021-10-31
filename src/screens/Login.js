import React, { useState } from 'react'
import './Login.css'
import SignInScreen from './SingInScreen'

function Login() {
    const [signIn, setsignIn] = useState(false);
    return (
        <div className='loginScreen'>
            <div className='loginScreen_background'>
                <img
                    className='loginScreen_logo'
                    src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
                    alt="Login"
                />
                <button onClick={() => setsignIn(true)} className='loginScreen_button'>Sign in</button>
                <div className="loginScreen-gradient" />
                <div className='loginScreen_body'>
                    {signIn ? (
                        <SignInScreen />
                    ) : (
                        <>
                            <h1>Unlimited movies, TV <br />shows and more.</h1>
                            <h2>Watch anywhere. Cancel at any time</h2>
                            <h3>Ready to watch? Enter your email to
                                create or restart your
                                memebership</h3>
                            <div className="loginScreen_input">
                                <form>
                                    <input type="email" placeholder="Email Address" />
                                    <button className="loginScreen_getStarted" onClick={() => setsignIn(true)} >GET STARTED</button>
                                </form>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Login
