import "./NotFound.css";
import  Astronaft  from "../../assets/astronaft.png";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-main-text">Сторінку не знайдено</p>
      <p className="notfound-sub-text">
        Можливо, вона була видалена або ви ввели неправильну адресу.
      </p>
      <img src={Astronaft} alt="Astronaft" className="astronaut" />
      <Link to="/" className="home-button">
        🏠 Повернутись на головну
      </Link>
    </div>
  );
}
