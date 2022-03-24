import { useState } from 'react';
import StartGame from './App.StartGame/StartGame';
import PlayGame from './App.PlayGame/PlayGame';

export default function App(props) {
  let [gameStarted, setGameStarted] = useState(false);
  function startGame() {
    setGameStarted(true);
  }
  return (
    <div className="Start-Game">
      {gameStarted === false ? (
        <StartGame function={startGame} />
      ) : (
        <PlayGame />
      )}
    </div>
  );
}
