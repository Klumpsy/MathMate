import { useSelector, useDispatch } from "react-redux"; 
import {useState, useEffect} from "react"; 
import {correctAnswer, wrongAnswer} from "./actions"; 

function App() {
  const counter = useSelector(state => state.sumCheckReducer);
  const logged = useSelector(state => state.isLoggedReduder);
  const dispatch = useDispatch(); 

  const [sum, setSum] = useState({}); 

  const createSum = () => { 
    const randomNumberOne = Math.floor(Math.random() * 10); 
    const randomNumberTwo = Math.floor(Math.random() * 10); 
    const answer = randomNumberOne + randomNumberTwo; 

    const sumObject = { 
      number1: randomNumberOne, 
      number2: randomNumberTwo, 
      answer
    }
    setSum(sumObject); 
  }

  const handleSubmit = (event) => { 
    event.preventDefault(); 

    console.log(event.target[0].value)
    console.log(sum.answer)
    
    if(event.target[0].value == sum.answer) { 
      dispatch(correctAnswer())
    }
      else { 
        dispatch(wrongAnswer())
      }
    }

  useEffect(() => { 
    createSum(); 
  }, [counter])

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <h2>Logged: {logged ? "Welcome!" : "User not logged"}</h2>

      <div>
        <h3>Your Sum:</h3>
        <p>{sum.number1}</p>
        <p>{sum.number2}</p>
      </div>
      <form onSubmit = {handleSubmit}>
        <input placeholder="Answer"/>
        <button type ="submit"></button>
      </form>
    </div>
  );
}

export default App;
