import { useState } from "react";
import "./App.css";
import Stage from "./components/GameStage/Stage";
function App() {
  const [selectStage, setSelectStage] = useState("medium");

  const selectStageFunc = (value) => {
    setSelectStage(value);
  };
  return (
    <div className="app-main">
      <div className="app-container">
        <Stage selectStageFunc={selectStageFunc} />
        <section className="app-game">{selectStage}</section>
      </div>
    </div>
  );
}

export default App;
