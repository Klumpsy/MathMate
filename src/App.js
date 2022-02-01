import { useEffect } from "react";

//Routing
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { useLocation } from "react-router";

//Firebase
import {auth, provider} from "./firebase"; 

//Redux
import { useDispatch, useSelector } from "react-redux";
import { setActiveUser, setLogoutUser, selectUserEmail, selectUserName } from "./reducers/userSlice"; 
import { setGameStatusNone, setStop } from "./reducers/timerSlice";

//components 
import MathTester from "./components/mathTester/MathTester";
import Navbar from "./components/navbar/Navbar"; 
import LoginScreen from "./components/loginScreen/LoginScreen"; 
import Statspage from "./components/statsPage/Statspage";
import PersonalDashboard from "./components/personalDashboard/PersonalDashboard";

//styling
import "./app.css"

function App() {
  const dispatch = useDispatch(); 
  const userName = useSelector(selectUserName); 
  const userEmail = useSelector(selectUserEmail); 

  const location = useLocation(); 

  const handleSignIn = () => { 
    auth.signInWithPopup(provider).then(result => { 
        dispatch(setActiveUser({ 
          userName: result.user.displayName, 
          userEmail: result.user.email,
          userImage: result.user.photoURL
        }))
    })
  }

  const handleSignOut = () => { 
      auth.signOut().then(() => { 
        dispatch(setLogoutUser())
      }).catch(err => alert(err.message))
  }

  useEffect(() => {
    if(location.pathname != "/") { 
      dispatch(setGameStatusNone()); 
      dispatch(setStop()); 
    }
  }, [location])
  
  return (
      <div className = "application-container">
        {userName && <Navbar handleSignOut = {handleSignOut}/>}
        {userName ? 
        <Routes>
          <Route path="/" element = { <MathTester/>}/>
          <Route path="/stats" element ={<Statspage/>}/>
          <Route path = "/personalStats" element = {<PersonalDashboard/>}/>
        </Routes>
        :
        <div className = "login-screen-container">
          <LoginScreen handleSignIn = {handleSignIn}/>
        </div>
        }
      </div>
  );
}

export default App;

//https://www.youtube.com/watch?v=unr4s3jd9qA

