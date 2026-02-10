import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./redux/features/counterSlice";
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
      </div>
    </div>
  );
};

export default App;
