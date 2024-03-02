import React, { useContext, useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";
import { introwords, samples } from "../Datas";
import { Appcontext } from "../App";
function Introgame() {
  const [intro, setIntrowords] = useState(introwords);
  const { setStartgame } = useContext(Appcontext);
  const playgame = () => {
    setStartgame((pre) => true);
  };
  return (
    <div className="intro">
      <div className="intropart-1">
        <div className="intropart-1-1">
          {Array.from({ length: 4 }, (x, i) => i).map((item) => (
            <div className="intropart-1-1-1" key={uuidv4()}>
              {intro[0][item]}
            </div>
          ))}
        </div>
        <div className="intropart-1-1">
          {Array.from({ length: 8 }, (x, i) => i).map((item) => (
            <div className="intropart-1-1-1" key={uuidv4()}>
              {intro[1][item]}
            </div>
          ))}
        </div>
      </div>
      <div className="intropart-2">
        Can you beat the clock by unscrambling the letters to spell the word?
      </div>
      <div className="intropart-3" onClick={playgame}>
        <FaCirclePlay />
      </div>
    </div>
  );
}
export default Introgame;
