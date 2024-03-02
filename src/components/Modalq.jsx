import React from "react";
import { useContext } from "react";
import { Appcontext } from "../App";
import { IoMdCloseCircleOutline } from "react-icons/io";
function Modalq() {
  const { modalquestion, setModalquestion, setPausegame } =
    useContext(Appcontext);
  const closemodal = () => {
    setModalquestion((pre) => !pre);
    setPausegame((pre) => !pre);
  };
  return (
    <div
      className={`modal-class hide-modal ${modalquestion ? "show-modal" : ""}`}
    >
      <div className="modal-title">
        <div className="modal-title-1">How to play Word Scramble</div>
        <div className="modal-title-2" onClick={closemodal}>
          <IoMdCloseCircleOutline />
        </div>
      </div>
      <div className="modal-body-1">
        Read the definition of a word. Use the letter tiles to spell the word
        that matches the definition before time runs out.
      </div>
      <div className="modal-body-2">
        &bull; Select letters one at a time to fill in the blank spaces from
        left to right.
        <br />
        &bull; To change a letter, select it again. It will return to its
        original position.
        <br />
        &bull; You must move the last letter into the last space before the
        timer bar at the bottom reaches the other side.
      </div>
      <div className="tipmodaldiv">
        <b>TIP:</b> Don't put the last letter in place until you're sure!
      </div>
      <div className="modal-body-3">
        Each puzzle has only one correct answer. The letters shown on the screen
        can spell many words, so make sure your answer matches the definition.
        You will earn points for each correct answer based on the amount of time
        you used. Points increase with each correct answer. You have three lives
        (❤️). You lose a life for each incorrect answer and whenever the timer
        runs out before you've placed the last letter. You can earn an extra
        life by watching an ad. Come back every day to try and beat your
        previous scores!
      </div>
    </div>
  );
}
export default Modalq;
