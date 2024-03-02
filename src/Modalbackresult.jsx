import React, { useEffect, useContext } from "react";
import { Appcontext } from "./App";
import { samples } from "./Datas";
function Modalbackresult() {
  const {
    showstageresultflag,
    setShowstageresultflag,
    setHideword,
    setDisplaybold,
    setPickwordsarray,
    setPickitemsarray,
    setWords,
    setCurrent,
    setNextstepflag,
    endnumquestion,
    setEndnumquestion,
    samplebaselength,
    setSamplebaselength,
    setSamplebase,
    setWinstage,
    loseheart,
    setLoseheart,
    stopTimer,
    stopTimeout,
  } = useContext(Appcontext);
  const removebackdropresult = () => {
    const timeoutstop = stopTimeout.current;
    clearTimeout(timeoutstop);
    if (!endnumquestion) {
      setShowstageresultflag((pre) => pre + 1);
      setHideword((pre) => []);
      setDisplaybold((pre) => []);
      setPickwordsarray((pre) => []);
      setPickitemsarray((pre) => []);
      setCurrent((pre) => 0);
      setWords((pre) => []);
      setNextstepflag((pre) => pre + 1);
      setWinstage((pre) => false);
    }
    if (samplebaselength <= 0) {
      setEndnumquestion((pre) => true);
      setLoseheart((pre) => 0);
      setNextstepflag((pre) => 0);
      setSamplebase((pre) => [...samples]);
      setSamplebaselength((pre) => samples.length);
      setHideword((pre) => []);
      setDisplaybold((pre) => []);
      setPickwordsarray((pre) => []);
      setPickitemsarray((pre) => []);
      setCurrent((pre) => 0);
      setWords((pre) => []);
      setWinstage((pre) => false);
    }
    if (loseheart === 3) {
      const intervalstop = stopTimer.current;
      clearInterval(intervalstop);
      setEndnumquestion((pre) => true);
      setLoseheart((pre) => 0);
      setNextstepflag((pre) => 0);
      setSamplebase((pre) => [...samples]);
      setSamplebaselength((pre) => samples.length);
      setHideword((pre) => []);
      setDisplaybold((pre) => []);
      setPickwordsarray((pre) => []);
      setPickitemsarray((pre) => []);
      setCurrent((pre) => 0);
      setWords((pre) => []);
      setWinstage((pre) => false);
    }
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!endnumquestion) {
        if (samplebaselength <= 1) {
          setEndnumquestion((pre) => true);
          setLoseheart((pre) => 0);
          setNextstepflag((pre) => 0);
          setSamplebase((pre) => [...samples]);
          setSamplebaselength((pre) => samples.length);
          setHideword((pre) => []);
          setDisplaybold((pre) => []);
          setPickwordsarray((pre) => []);
          setPickitemsarray((pre) => []);
          setCurrent((pre) => 0);
          setWords((pre) => []);
          setWinstage((pre) => false);
          setShowstageresultflag((pre) => pre + 1);
        } else {
          setShowstageresultflag((pre) => pre + 1);
          setHideword((pre) => []);
          setDisplaybold((pre) => []);
          setPickwordsarray((pre) => []);
          setPickitemsarray((pre) => []);
          setCurrent((pre) => 0);
          setWords((pre) => []);
          setNextstepflag((pre) => pre + 1);
          setWinstage((pre) => false);
          if (loseheart === 3) {
            const intervalstop = stopTimer.current;
            clearInterval(intervalstop);
            setEndnumquestion((pre) => true);
            setLoseheart((pre) => 0);
            setNextstepflag((pre) => 0);
            setSamplebase((pre) => [...samples]);
            setSamplebaselength((pre) => samples.length);
            setHideword((pre) => []);
            setDisplaybold((pre) => []);
            setPickwordsarray((pre) => []);
            setPickitemsarray((pre) => []);
            setCurrent((pre) => 0);
            setWords((pre) => []);
            setWinstage((pre) => false);
          }
        }
      }
    }, 1500);
    stopTimeout.current = timeout;
  }, [showstageresultflag]);
  return <div className="modalbackdrop" onClick={removebackdropresult}></div>;
}
export default Modalbackresult;
