export default function Dog(props) {
  return (
    <div>
      <h5>{props.id}</h5>
      <h3>{props.name}</h3>
      <img src={props.img} alt="imagen" />
    </div>
  );
}
