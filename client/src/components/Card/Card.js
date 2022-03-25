import "./card.css";
const Card = ({title, value}) => {
  return (
    <div className="card">
      <h2 id="card-title">{title}</h2>
      <p id="card-value">{value}</p>
    </div>
  );
};

export default Card;
