import { createContext, useEffect, useState, useRef } from "react";
import "./App.css";
import { wordsAlphabet } from "./Datas";
import { samples } from "./Datas";
import Startedgame from "./components/Startedgame";
import Modalq from "./components/Modalq";
import Modalbackdrop from "./Modalbackdrop";
import Introgame from "./components/Introgame";
import Winnergame from "./components/Winnergame";
import Modalbackdropwinner from "./Modalbackdropwinner";
export const Appcontext = createContext();
function App() {
  const [keys, setKeys] = useState(wordsAlphabet);
  const [words, setWords] = useState([]);
  const [phrasesample, setPhrasesample] = useState({});
  const [current, setCurrent] = useState(0);
  const [modalquestion, setModalquestion] = useState(false);
  const [startgame, setStartgame] = useState(false);
  const [pausegame, setPausegame] = useState(false);
  const [showstageresultflag, setShowstageresultflag] = useState(0);
  const [hideword, setHideword] = useState([]);
  const [displaybold, setDisplaybold] = useState([]);
  const [pickwordsarray, setPickwordsarray] = useState([]);
  const [pickitemsarray, setPickitemsarray] = useState([]);
  const [score, setScore] = useState(0);
  const [nextstepflag, setNextstepflag] = useState(0);
  const [endnumquestion, setEndnumquestion] = useState(false);
  const [samplebase, setSamplebase] = useState([...samples]);
  const [samplebaselength, setSamplebaselength] = useState(samples.length);
  const [loseheart, setLoseheart] = useState(0);
  const [rightwordcase, setRightwordcase] = useState("");
  const [winstage, setWinstage] = useState(false);
  const [winloseflag, setWinloseflag] = useState(0);
  const stopTimer = useRef(null);
  const stopTimeout = useRef(null);
  const chooseword = () => {
    if (samplebase.length > 0) {
      const numrandom = Math.floor(Math.random() * samplebase.length);
      const choosedcase = samplebase[numrandom];
      samplebase.splice(numrandom, 1);
      return { choosedcase, samplebase };
    } else {
      return null;
    }
  };
  useEffect(() => {
    if (showstageresultflag % 2 === 0 && !endnumquestion) {
      const { choosedcase, samplebase } = chooseword();
      setPhrasesample((pre) => choosedcase);
      setRightwordcase((pre) => choosedcase.rightword);
    }
    if (showstageresultflag % 2 === 1) {
      setSamplebaselength((pre) => pre - 1);
    }
  }, [showstageresultflag, nextstepflag]);
  return (
    <>
      <Appcontext.Provider
        value={{
          keys,
          setKeys,
          words,
          setWords,
          current,
          setCurrent,
          modalquestion,
          setModalquestion,
          phrasesample,
          setPhrasesample,
          startgame,
          setStartgame,
          pausegame,
          setPausegame,
          stopTimer,
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
          loseheart,
          setLoseheart,
          rightwordcase,
          setRightwordcase,
          winstage,
          setWinstage,
          winloseflag,
          setWinloseflag,
          stopTimeout,
        }}
      >
        {modalquestion ? <Modalbackdrop /> : ""}
        <Modalq />
        <div className="App">
          {!endnumquestion ? startgame ? <Startedgame /> : <Introgame /> : ""}
          {endnumquestion ? <Modalbackdropwinner /> : ""}
          <Winnergame />
        </div>
      </Appcontext.Provider>
    </>
  );
}

export default App;
