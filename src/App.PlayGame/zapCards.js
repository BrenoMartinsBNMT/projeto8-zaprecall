import { useState } from 'react';
import arrow from '../Assets/arrow.svg';
import refresh from '../Assets/refresh.svg';
import ZapButtons from './zapButtons';

export default function ZapCard(props) {
  let [isButtonPressed, setIsButtonPressed] = useState(false);
  let [isQuestionAnswerd, setIsQuestionAnswerd] = useState(false);

  let [buttonsIcons, setButtonsIcons] = useState(arrow);
  function setDisplayInfos() {
    if (isButtonPressed === false && isQuestionAnswerd === false) {
      setIsQuestionAnswerd(!isQuestionAnswerd);
      setButtonsIcons(refresh);
    }
    if (isQuestionAnswerd === true) {
      setIsButtonPressed(!isButtonPressed);
    }
  }
  return (
    <div className="question-card ">
      {isQuestionAnswerd === false ? (
        props.numberQuestion
      ) : isButtonPressed === false ? (
        props.textQuestion
      ) : (
        <p>{props.textAnswer}</p>
      )}
      <img src={buttonsIcons} alt="" onClick={setDisplayInfos} />
      <ZapButtons />
    </div>
  );
}
