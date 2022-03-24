import { useState } from 'react';
import arrow from '../Assets/arrow.svg';
import refresh from '../Assets/refresh.svg';
import red from '../Assets/red.svg';
import orange from '../Assets/orange.svg';
import green from '../Assets/green.svg';

export default function ZapCard(props) {
  let [isButtonPressed, setIsButtonPressed] = useState(false);
  let [isQuestionAnswerd, setIsQuestionAnswerd] = useState(false);
  let [buttonsIcons, setButtonsIcons] = useState(arrow);
  let [zapAnswers, setZapAnswers] = useState(false);
  let [lineThrough, setLineThrough] = useState('');
  let [disable, setDisable] = useState(false);

  let functionProps = props.functionProps;
  function setDisplayInfos() {
    if (isButtonPressed === false && isQuestionAnswerd === false) {
      setIsQuestionAnswerd(true);
      setButtonsIcons(refresh);
    }
    if (isQuestionAnswerd === true) {
      setIsButtonPressed(true);
      setZapAnswers(!zapAnswers);
      setButtonsIcons('');
    }
  }

  function setDisplayNoneInfos(e) {
    if (e.target.value === 'red') {
      setIsQuestionAnswerd(false);
      setIsButtonPressed(false);
      setButtonsIcons(red);
      setDisable(true);
      setZapAnswers(false);
      setLineThrough('line-through-red');

      functionProps(red);
    }
    if (e.target.value === 'orange') {
      setIsQuestionAnswerd(false);
      setIsButtonPressed(false);
      setButtonsIcons(orange);
      setZapAnswers(false);
      setLineThrough('line-through-orange');
      functionProps(orange);
    }
    if (e.target.value === 'green') {
      setIsQuestionAnswerd(false);
      setIsButtonPressed(false);
      setButtonsIcons(green);
      setZapAnswers(false);
      setLineThrough('line-through-green');
      functionProps(green);
    }
  }

  return (
    <div className={'question-card ' + lineThrough}>
      <div className="texts-to-show-in-the-zaps">
        {' '}
        {isQuestionAnswerd === false ? (
          props.numberQuestion
        ) : isButtonPressed === false ? (
          props.textQuestion
        ) : (
          <p>{props.textAnswer}</p>
        )}
        <button
          onClick={setDisplayInfos}
          className="button-play-question"
          disabled={disable}
        >
          <img src={buttonsIcons} alt="" />{' '}
        </button>
      </div>
      {zapAnswers === true ? (
        <div className="buttons-answers-zap">
          <button className="red" onClick={setDisplayNoneInfos} value="red">
            Não lembrei
          </button>
          <button
            className="orange"
            onClick={setDisplayNoneInfos}
            value="orange"
          >
            Quase não lembrei
          </button>
          <button className="green" onClick={setDisplayNoneInfos} value="green">
            Zap!
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
