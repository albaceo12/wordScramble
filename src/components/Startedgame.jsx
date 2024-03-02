import React, { useContext, useCallback, useEffect, useState } from "react";
import { Appcontext } from "../App";
import { FaQuestion } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";
import StartTimer from "./StartTimer";
import Modalbackresult from "../Modalbackresult";
import Resultmodal from "./Resultmodal";
function Startedgame() {
  const {
    keys,
    setWords,
    setCurrent,
    current,
    words,
    setModalquestion,
    phrasesample,
    setPhrasesample,
    setPausegame,
    showstageresultflag,
    setShowstageresultflag,
    hideword,
    setHideword,
    displaybold,
    setDisplaybold,
    pickwordsarray,
    setPickwordsarray,
    pickitemsarray,
    setPickitemsarray,
    score,
    setScore,
    nextstepflag,
    setNextstepflag,
    endnumquestion,
    setEndnumquestion,
    samplebase,
    setSamplebase,
    samplebaselength,
    setSamplebaselength,
    stopTimer,
    loseheart,
    setLoseheart,
    rightwordcase,
    setRightwordcase,
    winstage,
    setWinstage,
    winloseflag,
    setWinloseflag,
  } = useContext(Appcontext);
  const handlekeydown = (e) => {
    if (
      keys.includes(e.key.toLowerCase()) &&
      phrasesample.word &&
      phrasesample.word.includes(e.key.toLowerCase())
    ) {
      setWords((pre) => {
        if (words.indexOf("") >= 0) {
          const index = words.indexOf("");
          let newwords = words;
          newwords[index] = e.key;
          return newwords;
        } else {
          return [...pre, e.key];
        }
      });
      setCurrent((pre) => {
        if (words.indexOf("") >= 0) {
          return words.indexOf("");
        } else {
          return pre + 1;
        }
      });
      const phrasesampleword = phrasesample.word;
      const phrasesamplewordsplit = phrasesample.word.split("");
      const item = phrasesampleword.indexOf(e.key.toLowerCase());
      const pickedword = phrasesamplewordsplit[item];
      phrasesamplewordsplit[item] = " ";
      setPhrasesample((pre) => ({
        ...pre,
        word: phrasesamplewordsplit.join(""),
      }));
      setHideword((pre) => {
        if (displaybold.indexOf("") >= 0) {
          const index = displaybold.indexOf("");
          let newhideword = hideword;
          newhideword[index] = item;
          return newhideword;
        } else {
          return [...pre, item];
        }
      });
      setPickitemsarray((pre) => {
        if (pickitemsarray.indexOf("") >= 0) {
          const index = pickitemsarray.indexOf("");
          let newpickitemsarray = pickitemsarray;
          newpickitemsarray[index] = item;
          return newpickitemsarray;
        } else {
          return [...pre, item];
        }
      });
      setPickwordsarray((pre) => {
        if (pickwordsarray.indexOf("") >= 0) {
          const index = pickwordsarray.indexOf("");
          let newpickwordsarray = pickwordsarray;
          newpickwordsarray[index] = pickedword;
          return newpickwordsarray;
        } else {
          return [...pre, pickedword];
        }
      });
      setDisplaybold((pre) => {
        if (displaybold.indexOf("") >= 0) {
          const index = displaybold.indexOf("");
          let newdisplaybold = displaybold;
          newdisplaybold[index] = index;
          return newdisplaybold;
        } else {
          return [...pre, hideword.length];
        }
      });
      // if (pickitemsarray.length + 1 === phrasesamplewordsplit.length) {
      //   setSamplebaselength((pre) => pre - 1);
      // }
    } else {
      return null;
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handlekeydown);
    if (
      words.join("").length === phrasesample.rightword.length &&
      samplebaselength > 0
    ) {
      if (words.join("") === phrasesample.rightword) {
        setScore((pre) => pre + 5);
        setShowstageresultflag((pre) => pre + 1);
        setNextstepflag((pre) => pre + 1);
        setWinstage((pre) => true);
        setWinloseflag((pre) => 2 * pre);
      } else {
        setLoseheart((pre) => pre + 1);
        setShowstageresultflag((pre) => pre + 1);
        setNextstepflag((pre) => pre + 1);
        setWinloseflag((pre) => 2 * pre + 1);
      }
    }
    // if (samplebaselength <= 0) {
    //   console.log("WWWWW");
    //   const intervalstop = stopTimer.current;
    //   clearInterval(intervalstop);
    //   setShowstageresultflag((pre) => pre + 1);
    //   if (words.join("") === phrasesample.rightword) {
    //     setScore((pre) => pre + 5);
    //     setWinstage((pre) => true);
    //     setWinloseflag((pre) => 2 * pre);
    //   } else {
    //     setWinloseflag((pre) => 2 * pre + 1);
    //   }
    // }
    // if (loseheart === 3) {
    //   console.log("rt");
    //   const intervalstop = stopTimer.current;
    //   clearInterval(intervalstop);
    //   setShowstageresultflag((pre) => pre + 1);
    //   setWinloseflag((pre) => 2 * pre + 1);
    // }
    return () => {
      document.removeEventListener("keydown", handlekeydown);
    };
  }, [phrasesample.word, hideword]);
  const showmodalquestion = () => {
    setModalquestion((pre) => !pre);
    setPausegame((pre) => !pre);
  };
  const pickword = (e, item) => {
    setPickitemsarray((pre) => {
      if (pickitemsarray.indexOf("") >= 0) {
        const index = pickitemsarray.indexOf("");
        let newpickitemsarray = pickitemsarray;
        newpickitemsarray[index] = item;
        return newpickitemsarray;
      } else {
        return [...pre, item];
      }
    });
    setHideword((pre) => {
      if (displaybold.indexOf("") >= 0) {
        const index = displaybold.indexOf("");
        let newhideword = hideword;
        newhideword[index] = item;
        return newhideword;
      } else {
        return [...pre, item];
      }
    });
    setDisplaybold((pre) => {
      if (displaybold.indexOf("") >= 0) {
        const index = displaybold.indexOf("");
        let newdisplaybold = displaybold;
        newdisplaybold[index] = index;
        return newdisplaybold;
      } else {
        return [...pre, hideword.length];
      }
    });
    const phrasesamplewordsplit = phrasesample.word.split("");
    const pickedword = phrasesamplewordsplit[item];
    setPickwordsarray((pre) => {
      if (pickwordsarray.indexOf("") >= 0) {
        const index = pickwordsarray.indexOf("");
        let newpickwordsarray = pickwordsarray;
        newpickwordsarray[index] = pickedword;
        return newpickwordsarray;
      } else {
        return [...pre, pickedword];
      }
    });
    phrasesamplewordsplit[item] = " ";
    setPhrasesample((pre) => ({
      ...pre,
      word: phrasesamplewordsplit.join(""),
    }));
    setWords((pre) => {
      if (words.indexOf("") >= 0) {
        const index = words.indexOf("");
        let newwords = words;
        newwords[index] = e.target.innerHTML;
        return newwords;
      } else {
        return [...pre, e.target.innerHTML];
      }
    });
    setCurrent((pre) => {
      if (words.indexOf("") >= 0) {
        return words.indexOf("");
      } else {
        return pre + 1;
      }
    });
    // if (pickitemsarray.length + 1 === phrasesamplewordsplit.length) {
    //   setSamplebaselength((pre) => pre - 1);
    // }
  };
  const removeword = (item) => {
    if (displaybold.includes(item)) {
      const newhideword = [...hideword];
      newhideword.splice(item, 1, "");
      setHideword((pre) => newhideword);
      const newdisplaybold = [...displaybold];
      newdisplaybold.splice(item, 1, "");
      setDisplaybold((pre) => newdisplaybold);
      const newwords = [...words];
      newwords.splice(item, 1, "");
      setWords((pre) => newwords);
      setCurrent((pre) => newwords.indexOf(""));
      const itemsarray = pickitemsarray[item];
      const newpickitemsarray = [...pickitemsarray];
      newpickitemsarray[item] = "";
      setPickitemsarray((pre) => newpickitemsarray);
      const phrasesamplewordsplit = phrasesample.word.split("");
      const newpickwordsarray = [...pickwordsarray];
      phrasesamplewordsplit[itemsarray] = newpickwordsarray[item];
      newpickwordsarray[item] = "";
      setPickwordsarray((pre) => newpickwordsarray);
      setPhrasesample((pre) => ({
        ...pre,
        word: phrasesamplewordsplit.join(""),
      }));
    } else {
      return null;
    }
  };
  return (
    <div className="startedgame">
      {showstageresultflag % 2 === 1 && !endnumquestion && <Modalbackresult />}
      <Resultmodal />
      <div className="top">
        <div className="top-1">
          <div className="top-1-1" onClick={showmodalquestion}>
            <FaQuestion />
          </div>
        </div>
        <div className="top-2">
          <FaHeart
            className="top-2-icon"
            style={{
              color: `${
                showstageresultflag % 2 === 0
                  ? loseheart >= 1
                    ? "#6a4848ba"
                    : "red"
                  : ""
              }`,
            }}
          />
          <FaHeart
            className="top-2-icon"
            style={{
              color: `${
                showstageresultflag % 2 === 0
                  ? loseheart >= 2
                    ? "#6a4848ba"
                    : "red"
                  : ""
              }`,
            }}
          />
          <FaHeart
            className="top-2-icon"
            style={{
              color: `${
                showstageresultflag % 2 === 0
                  ? loseheart >= 3
                    ? "#6a4848ba"
                    : "red"
                  : ""
              }`,
            }}
          />
        </div>
        <div className="top-3">
          Score: {showstageresultflag % 2 === 0 ? score : ""}
        </div>
      </div>
      <div className="body">
        <div className="middle">
          <div className="middle-meaning-sentence">{phrasesample.meaning}</div>
          {phrasesample.word ? (
            <div className="middle-words">
              {Array.from(
                { length: phrasesample.word.length },
                (x, i) => i
              ).map((item) => (
                <div
                  className={`middle-word ${
                    displaybold.includes(item)
                      ? "display-word"
                      : current === item
                      ? "blur-space"
                      : ""
                  }`}
                  key={uuidv4()}
                  onClick={() => removeword(item)}
                >
                  {words[item]}
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
          {phrasesample.word ? (
            <div className="middle-words-case">
              {Array.from(
                { length: phrasesample.word.length },
                (x, i) => i
              ).map((item) => (
                <div
                  className={`middle-word-case ${
                    hideword.includes(item) ? "hide-word" : ""
                  }`}
                  onClick={(e) => pickword(e, item)}
                  key={uuidv4()}
                >
                  {phrasesample.word[item]}
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
        <StartTimer />
      </div>
    </div>
  );
}
export default Startedgame;
