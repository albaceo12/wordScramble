import React from "react";
import { useContext } from "react";
import { Appcontext } from "./App";
function Modalbackdrop() {
  const { setModalquestion, setPausegame } = useContext(Appcontext);
  const removebackdrop = () => {
    setModalquestion((pre) => !pre);
    setPausegame((pre) => !pre);
  };
  return <div className="modalbackdrop" onClick={removebackdrop}></div>;
}
export default Modalbackdrop;
