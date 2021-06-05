import Counter from "./components/Counter";
import "./App.css";
import { useSelector } from "react-redux";

const App = () => {
  const total = useSelector(
    (state) => state.count1 + state.count2 + state.count3
  );
  return (
    <div>
      <h1 className="header">Counter App: </h1>
      <Counter name="count1" />
      <Counter name="count2" />
      <Counter name="count3" />
      <h2 className="total">Tổng là: <span>{total}</span></h2>
    </div>
  );
};

export default App;
