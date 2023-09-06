import { useState } from "react";

const turns = {
  X: "x",
  O: "o",
};

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;
  return <div className={className}>{children}</div>;
};

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(turns.X);

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index}>
              {board[index]}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === turns.X}>{turns.X}</Square>
        <Square isSelected={turn === turns.O}>{turns.O}</Square>
      </section>
    </main>
  );
}

export default App;
