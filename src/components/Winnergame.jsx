import React from "react";
import { useContext } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Appcontext } from "../App";
import { samples } from "../Datas";
function Winnergame() {
  const {
    setShowstageresultflag,
    endnumquestion,
    setEndnumquestion,
    setStartgame,
    score,
    setScore,
  } = useContext(Appcontext);
  const removemodalwinner = () => {
    setEndnumquestion((pre) => false);
    setStartgame((pre) => false);
    setShowstageresultflag((pre) => 0);
    setScore((pre) => 0);
  };
  return (
    <>
      {score / 5 === samples.length ? (
        <div className={`winnergame ${endnumquestion ? "winnergameshow" : ""}`}>
          <div className="firstpartwinner">
            <div className="firstpartwinnerspan">Omg!!!...</div>
            <div className="closewinnermodal" onClick={removemodalwinner}>
              <IoMdCloseCircleOutline />
            </div>
          </div>
          <div className="secondtextwinner">
            You are so brilliant...You answered all the question
          </div>
          <div className="lasttextwinner">Congratulation</div>
        </div>
      ) : (
        <div className={`winnergame ${endnumquestion ? "winnergameshow" : ""}`}>
          <div className="firstpartwinner">
            <div className="firstpartwinnerspan">Game Over</div>
            <div className="closewinnermodal" onClick={removemodalwinner}>
              <IoMdCloseCircleOutline />
            </div>
          </div>
          <div className="secondtextwinner">Your score: {score}</div>
          <div className="lasttextwinner">Your effort was commendable</div>
        </div>
      )}
    </>
  );
}
export default Winnergame;
