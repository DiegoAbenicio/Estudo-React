import "./App.css";
//import Card from "./Card.js";

function App() {

  function handleClick() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt("Digite um numero");
    alert(`Número computado: ${randomNum}, Seu chute: ${userInput}`);
  }

  return (
    <div>
      <h1>Tarefa: Adicione um botao e um evento</h1>
      <button onClick={handleClick}>Chute um número de 1 a 3</button>
    </div>
  );
}

export default App;
