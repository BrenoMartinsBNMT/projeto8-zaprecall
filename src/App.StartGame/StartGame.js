import logo from '../Assets/logo.svg';

export default function StartGame(props) {
  return (
    <div className="button-and-logo">
      <img
        src={logo}
        alt="logo
  "
      />
      <p>ZapRecall</p>
      <button onClick={props.function}>iniciar Recall!!!</button>
    </div>
  );
}
