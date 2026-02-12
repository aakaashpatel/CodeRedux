import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment, addingfive, reset , addValue , increaseby} from "./redux/features/counterSlice";
const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="main">
      <p className="resultValue">{count}</p>
      <div className="mainBtn">
        <button className="btn" onClick = {() => {
          dispatch(increment());
        }}>Increment</button>
        <button className="btn" onClick = {() =>{
          dispatch(decrement());
        }}>Decrement</button>
        <button className="btn" onClick={()=> {
          dispatch(addingfive())
        }}>Add the value 5</button>
        <button className="btn" onClick={() =>{
          dispatch(addValue(10))
        }} >
           increase by value
        </button>
        <button className="btn" 
        onClick={()=>{
          dispatch(increaseby(3))
        }}>Increase by +3</button>
        <button className="btn"  onClick={()=>{
          dispatch(reset())
        }}>Reset</button>
      </div>
    </div>
  );
};

export default App;
