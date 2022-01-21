
//Routing
import { BrowserRouter as Router, Route } from "react-router-dom"; 

//components 
import MathTester from "./components/mathTester/MathTester";
import Navbar from "./components/navbar/Navbar"; 
import LoginScreen from "./components/loginScreen/LoginScreen"; 

import "./app.css"

function App() {
  
  return (
    <Router>
       <div className="App">
          <Navbar/>
          <Route exact path = "/login" component = {LoginScreen}/>
          <Route exact path = "/" component = {MathTester}/>
       </div>
    </Router>
  );
}

export default App;

//https://www.youtube.com/watch?v=unr4s3jd9qA

