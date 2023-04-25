import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { darkMode } from "./redux/actions/mode";
import { useEffect, useState } from "react";
function App() {
  const { mode } = useSelector((state) => state.mode);
  const [isMode, setIsMode] = useState(mode);
  const dispatch = useDispatch();
  const handleClick = (modetype) => {
    dispatch(darkMode(modetype));
  };
  useEffect(() => {
    setIsMode(mode); // mode degistikce statede tutuyoruz.
  }, [mode]);
  return (
    <div className="App">
      <button onClick={() => handleClick(!isMode)}>Change Mode</button>
      <p>Is Mode : {isMode.toString()}</p>
    </div>
  );
}

export default App;
