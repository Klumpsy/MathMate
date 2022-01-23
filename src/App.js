//Routing
import { BrowserRouter as Router, Route } from "react-router-dom"; 

//Firebase
import {auth, provider} from "./firebase"; 

//Redux
import { useDispatch, useSelector } from "react-redux";
import { setActiveUser, setLogoutUser, selectUserEmail, selectUserName } from "./reducers/userSlice"; 

//components 
import MathTester from "./components/mathTester/MathTester";
import Navbar from "./components/navbar/Navbar"; 
import LoginScreen from "./components/loginScreen/LoginScreen"; 

//styling
import "./app.css"

function App() {
  const dispatch = useDispatch(); 
  const userName = useSelector(selectUserName); 
  const userEmail = useSelector(selectUserEmail); 

  const handleSignIn = () => { 
    auth.signInWithPopup(provider).then(result => { 
        dispatch(setActiveUser({ 
          userName: result.user.displayName, 
          email: result.user.email
        }))
    })
  }

  const handleSignOut = () => { 
      auth.signOut().then(() => { 
        dispatch(setLogoutUser())
      }).catch(err => alert(err.message))
  }
  
  return (
    <Router>
      {
        !userName ? 
      <div className = "login-screen-container">
          <LoginScreen handleSignIn = {handleSignIn}/> 
      </div>
      :
       <div className="App">
          <Navbar handleSignOut = {handleSignOut}/>
          <MathTester/>
       </div>
      }
    </Router>
  );
}

export default App;

//https://www.youtube.com/watch?v=unr4s3jd9qA

