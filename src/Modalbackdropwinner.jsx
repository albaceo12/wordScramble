import React from "react";
import { useContext } from "react";
import { Appcontext } from "./App";
import { samples } from "./Datas";
function Modalbackdropwinner() {
  const {
    setShowstageresultflag,
    endnumquestion,
    setEndnumquestion,
    setStartgame,
    setScore,
  } = useContext(Appcontext);
  const removebackdropwinner = () => {
    setEndnumquestion((pre) => false);
    setStartgame((pre) => false);
    setShowstageresultflag((pre) => 0);
    setScore((pre) => 0);
  };
  return (
    <div
      className={`Modalbackdropwinner ${
        endnumquestion ? "Modalbackdropwinnershow" : ""
      }`}
      onClick={removebackdropwinner}
    ></div>
  );
}
export default Modalbackdropwinner;
