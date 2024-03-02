import React, { useContext, useEffect, useState } from "react";
import { Appcontext } from "../App";
function StartTimer() {
  const [seconds, setSeconds] = useState(20);
  const [secondsover, setSecondsover] = useState(null);
  const {
    pausegame,
    stopTimer,
    showstageresultflag,
    setShowstageresultflag,
    endnumquestion,
    setLoseheart,
    setWinloseflag,
  } = useContext(Appcontext);
  let distance, nextstepseconds;
  const startTime = () => {
    const countdowntime = Date.now() + seconds * 1000 + 100;
    const interval = setInterval(() => {
      const now = new Date().getTime();
      distance = countdowntime - now;
      if (distance <= 0.0) {
        setSeconds((pre) => 0);
        setShowstageresultflag((pre) => pre + 1);
        setLoseheart((pre) => pre + 1);
        setWinloseflag((pre) => 2 * pre + 1);
        const intervalstop = stopTimer.current;
        clearInterval(intervalstop);
      } else {
        setSeconds((pre) => pre - 0.1);
      }
    }, 100);
    stopTimer.current = interval;
  };
  useEffect(() => {
    if (pausegame) {
      const intervalstop = stopTimer.current;
      clearInterval(intervalstop);
    }
    if (!pausegame && showstageresultflag % 2 === 0) {
      startTime();
    }
    if (showstageresultflag > 0 && showstageresultflag % 2 === 1) {
      const intervalstop = stopTimer.current;
      clearInterval(intervalstop);
      nextstepseconds = seconds;
      setSecondsover((pre) => nextstepseconds);
      setSeconds((pre) => 20);
    }
  }, [pausegame, showstageresultflag, endnumquestion]);
  return (
    <div className="bottom">
      <div
        className="full"
        style={{
          width: `${
            showstageresultflag % 2 === 1 ? secondsover * 5 : seconds * 5
          }%`,
          backgroundColor: `${
            showstageresultflag % 2 === 1
              ? secondsover > 15
                ? "green"
                : secondsover > 10
                ? "yellow"
                : secondsover > 5
                ? "orange"
                : "red"
              : seconds > 15
              ? "green"
              : seconds > 10
              ? "yellow"
              : seconds > 5
              ? "orange"
              : "red"
          }`,
        }}
      ></div>
    </div>
  );
}
export default StartTimer;
