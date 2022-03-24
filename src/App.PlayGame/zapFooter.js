export default function ZapFooter(props) {
  let icons = props.icons;

  return (
    <div className="footer">
      {props.number}/8 Conculídos{' '}
      <div>
        {icons.map((element) => {
          return <img src={element} alt="" />;
        })}
      </div>
    </div>
  );
}
