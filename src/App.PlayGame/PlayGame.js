import { useState } from 'react';
import logo from '../Assets/logo.svg';
import ZapCard from './zapCards';
import ZapFooter from './zapFooter';

let questions = [
  {
    pergunta: 'O que é JSX?',
    resposta: ' Uma extensão de linguagem do JavaScript',
  },
  {
    pergunta: 'O React é __',
    resposta: ' uma biblioteca JavaScript para construção de interfaces',
  },
  { pergunta: 'Componentes devem iniciar com __', resposta: 'letra maiúscula' },
  { pergunta: 'Podemos colocar __ dentro do JSX', resposta: 'expressões' },
  {
    pergunta: 'O ReactDOM nos ajuda __ ',
    resposta: 'interagindo com a DOM para colocar componentes React na mesma',
  },
  {
    pergunta: 'Usamos o npm para __',
    resposta: 'gerenciar os pacotes necessários e suas dependências',
  },

  {
    pergunta: 'Usamos props para __ ',
    resposta: 'passar diferentes informações para componentes ',
  },
  {
    pergunta: ' Usamos estado (state) para __ ',
    resposta:
      'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente',
  },
];
function fisherYatesShuffle(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1)); //random index
    [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
  }
}

fisherYatesShuffle(questions);
export default function PlayGame(props) {
  let [count, setCount] = useState(0);
  let [icons, setIcons] = useState([]);
  let counter = 0;

  function setInfosFooter(ie) {
    setCount(count + 1);
    setIcons([...icons, ie]);
  }
  return (
    <div className="game-started">
      <div className="logo-nav">
        <img src={logo} alt="logo" className="logo-zap" />
        <p>ZapRecall</p>
      </div>
      {questions.map((element) => {
        counter++;
        return (
          <ZapCard
            functionProps={setInfosFooter}
            key={element.pergunta}
            numberQuestion={'pergunta ' + counter}
            textQuestion={element.pergunta}
            textAnswer={element.resposta}
          />
        );
      })}
      <ZapFooter number={count} icons={icons} />
    </div>
  );
}
