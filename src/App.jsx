import "../src/styles/global.css";
import Header from "./components/Header";
import Player from "./components/Player";
import ResetBtn from "./components/Reset";
export default function App() {
  const [scores, setScores] = useState(<Player />);

  const increase = (index) => {
    const updatedScores = [...scores];
    updatedScores[index].playerScore += 1;
    setScores(updatedScores);
  };

  const decrease = (index) => {
    const updatedScores = [...scores];
    updatedScores[index].playerScore -= 1;
    setScores(updatedScores);
  };

  // const increase = (index) => {
  //   setScores(({Player}[index].playerScore = +1));
  //   result (number, string)
  // };
  return (
    <div className="body">
      <Header />
      <div className="cards">
        <Player increase={increase} decrease={decrease} />
      </div>
      <ResetBtn />
    </div>
  );
}
