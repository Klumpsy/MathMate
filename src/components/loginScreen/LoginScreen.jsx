import React from 'react';
import "./loginScreen.css";

function LoginScreen() {
    return (
        <div className="login-container">
            <div className="login-container-inputs">
                <input placeholder="login"></input>
                <input placeholder="password" type="password"></input>
            </div>
            <div className="login-container-buttons">
                <button>Login</button>
                <button>Sign Up</button>
            </div>
        </div>
    )
}

export default LoginScreen;
