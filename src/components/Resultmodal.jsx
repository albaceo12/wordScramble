import React, { useContext } from "react";
import { Appcontext } from "../App";
function Resultmodal() {
  const {
    showstageresultflag,
    endnumquestion,
    winstage,
    rightwordcase,
    score,
    winloseflag,
  } = useContext(Appcontext);
  return (
    <div
      className={`resultmodal ${
        showstageresultflag % 2 === 1 && !endnumquestion
          ? "showresultmodal"
          : ""
      }`}
      style={{
        backgroundColor: `${
          winstage || winloseflag % 2 === 0 ? "green" : "black"
        }`,
      }}
    >
      {winstage || winloseflag % 2 === 0 ? (
        <div>Your score: {score}</div>
      ) : (
        <>
          <div> You lost 1 of your heart(❤️)</div>
          <div>the right word: {rightwordcase}</div>
        </>
      )}
    </div>
  );
}
export default Resultmodal;
