import React from 'react';
import "./navbar.css";

//React Icons
import { FiLogOut } from "react-icons/fi";
import { BsTrophy } from "react-icons/bs";
import { CgGames } from "react-icons/cg";
import { BsFilePerson } from "react-icons/bs";

//Router
import { Link } from 'react-router-dom';

//logo
import mathMateLogo from "../../images/MathMateLogo.png";

//Redux
import { useSelector } from "react-redux";
import { selectUserName, selectUserImage } from "../../reducers/userSlice";

const Navbar = ({ handleSignOut }) => {
    const userName = useSelector(selectUserName);
    const userImage = useSelector(selectUserImage);

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
                <Link to="/personalStats">
                    <BsFilePerson className="nav-bar-personal-dashboard" size={35} />
                </Link>
            </div>
            <div className="nav-profile-container">
                <div className="nav-user-container">
                    <p>{userName}</p>
                    <img className="nav-bar-profile-picture " src={userImage} />
                </div>
                <div className="nav-bar-logout">
                    <FiLogOut className="logout" size={30} onClick={handleSignOut} />
                </div>
            </div>
        </div>
    )
};

export default Navbar;
