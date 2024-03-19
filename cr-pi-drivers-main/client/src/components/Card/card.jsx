import stayle from "../Card/card.module.css";
import { Link } from "react-router-dom";

const Card = ({ id, firstName, team, birthDate, image, eliminar }) => {
  return (
    <div className={stayle.card}>
      <div
        className={stayle.x}
        onClick={() => {
          eliminar(id);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          class="main-grid-item-icon"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <line x1="10" x2="10" y1="11" y2="17" />
          <line x1="14" x2="14" y1="11" y2="17" />
        </svg>
      </div>
      <div className={stayle.cardImg}>
        <Link to={`/detail/${id}`}>
          <img src={image} alt={firstName} />
        </Link>
      </div>
      <h1>{firstName}</h1>
      <h4>{team}</h4>
      <h5>{birthDate}</h5>
    </div>
  );
};
export default Card;
