import { Link } from "react-router-dom";
import "./index.css";

export default function LandingPage() {
  return (
    <div className="landingPage">
      {/* <img
        className="landingPageImage"
        src="https://wallpaperaccess.com/full/3845930.jpg"
        alt="landingPageImage"
      /> */}
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div className="landingPageText">
        <Link to="/home">Let's go see some dogs!</Link>
      </div>
    </div>
  );
}
