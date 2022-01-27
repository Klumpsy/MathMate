import React from 'react';
import "./navbar.css";
//Components
import Statspage from '../statsPage/Statspage';

//React Icons
import { FiLogOut } from "react-icons/fi";
import { BsTrophy } from "react-icons/bs";
import { CgGames } from "react-icons/cg";

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
                <Link to="/">
                    <img className="nav-bar-logo" src={mathMateLogo} />
                </Link>
            </div>
            <div className="nav-bar-links">
                <Link to="/">
                    <CgGames className="nav-bar-controller" size={35} />
                </Link>
                <Link to="/stats">
                    <BsTrophy className="nav-bar-trophy" size={35} />
                </Link>
            </div>
            <div className="nav-profile-container">
                <div className="nav-user-container">
                    <p>{userName}</p>
                    <img className="nav-bar-profile-picture " src={testProfilePicture} />
                </div>
                <div className="nav-bar-logout">
                    <FiLogOut className="logout" size={30} onClick={handleSignOut} />
                </div>
            </div>
        </div>
    )
};

export default Navbar;
