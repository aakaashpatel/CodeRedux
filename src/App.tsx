import "./App.css";
const App = () => {
  return (
    <div className="main">
      <p className="resultValue">0</p>
      <div className="mainBtn">
        <button className="btn" handleIncrement = {handleIncrement()}>Increment</button>
        <button className="btn">Decrement</button>
      </div>
    </div>
  );
};

export default App;
