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
      <h4>{props.weight.metric ? props.weight.metric : props.weight} kg</h4>
      <h4>{props.height.metric ? props.height.metric : props.height} cm</h4>
      <div className="img">
        <img
          src={
            props.img
              ? props.img
              : "https://previews.123rf.com/images/red33/red331112/red33111200014/11546849-skizzieren-sie-doodle-crazy-verr%C3%BCckt-puppy-dog-vektor-illustration.jpg"
          }
          media="(max-width: 400px)"
          alt="imagen"
        />
      </div>
    </div>
  );
}
