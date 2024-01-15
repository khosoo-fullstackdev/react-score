import "../styles/card.css";
import { players } from "../utilities/students";
export default function Player() {
  return players.map(({ name, score }) => {
    return (
      <div className="card">
        <p className="name"> {name}</p>
        <div className="scoreControll">
          <button className="decreaseBtn" onClick={decrease}>
            -
          </button>
          <p>{score}</p>
          <button className="increaseBtn" onClick={increase}>
            +
          </button>
        </div>
      </div>
    );
  });
}
