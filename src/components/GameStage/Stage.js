import React from "react";
import "./Stage.css";
import { HardSvg, EasySvg, MediumSvg } from "../../assets/StageSvg.js";

const Stage = (_props) => {
  const { selectStageFunc } = _props;
  return (
    <section className="app-stage">
      <div className="app-stage__options">
        <div onClick={() => selectStageFunc("hard")}>
          <div className="align-content">
            <HardSvg />
            <span>Hard</span>
          </div>
        </div>
        <div onClick={() => selectStageFunc("medium")}>
          <div className="align-content">
            <MediumSvg />
            <span>Medium</span>
          </div>
        </div>
        <div onClick={() => selectStageFunc("easy")}>
          <div className="align-content">
            <EasySvg />
            <span>Easy</span>
          </div>
        </div>
      </div>
      <div className="app-stage__play">
        <button>play</button>
      </div>
    </section>
  );
};

export default Stage;
