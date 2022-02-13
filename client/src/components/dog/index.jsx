import { Link } from "react-router-dom";
import "./index.css";
export default function Dog(props) {
  return (
    <div className="dog">
      <h5>{props.id}</h5>
      <Link key={props.id} to={`/home/${props.id}`}>
        <h3>{props.name}</h3>
      </Link>
      <h4>{props.temperament}</h4>
      <h4>{props.weight.metric} kg</h4>
      <div className="img">
        <img src={props.img} media="(max-width: 400px)" alt="imagen" />
      </div>
    </div>
  );
}
