import React from 'react';
import "./navbar.css";

//React Icons
import { FiSettings } from "react-icons/fi";
import { BsTrophy } from "react-icons/bs";

//Router
import { Link } from 'react-router-dom';

//test profile image
import testProfilePicture from "../../images/profile.jpg";

//logo
import mathMateLogo from "../../images/MathMateLogo.png";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { selectUserEmail, selectUserName } from "../../reducers/userSlice";

const Navbar = ({ handleSignOut }) => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    const userEmail = useSelector(selectUserEmail);

    return (
        <div className="nav-bar-container">
            <div>
                <img className="nav-bar-logo" src={mathMateLogo} />
            </div>
            <div className="nav-bar-links">
                <BsTrophy className="nav-bar-trophy" size={30} />
            </div>
            <div className="nav-profile-container">
                {userName ? <button onClick={handleSignOut}>Logout</button> : ""}
                <div className="nav-user-container">
                    <p>{userName}</p>
                    <img className="nav-bar-profile-picture " src={testProfilePicture} />
                </div>
                <div className="nav-bar-settings-wheel">
                    <FiSettings className="settings-wheel" size={25} />
                </div>
            </div>
        </div>
    )
};

export default Navbar;
