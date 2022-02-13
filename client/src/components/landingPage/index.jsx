import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <img
        src="https://wallpaperaccess.com/full/3845930.jpg"
        alt="imagenLandingPage"
      />
      <Link to="/home">Let's go see some dogs!</Link>
    </div>
  );
}
