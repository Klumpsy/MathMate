import React from 'react';
import "./loginScreen.css";

import mathMateLogo from "../../images/MathMateLogo.png";

function LoginScreen({ handleSignIn }) {

    return (
        <div className="login-container">
            <img className="login-container-logo" src={mathMateLogo} />
            <div className="login-container-text">
                <p>Welkom bij</p>
                <h1>MathMate</h1>
                <p>De tool om jouw rekenskills te verbeteren!</p>
            </div>
            <div className="login-container-buttons">
                <button onClick={handleSignIn}>Login</button>
            </div>
        </div>
    )
}

export default LoginScreen;
