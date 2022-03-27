import NotFoundImg from "../assets/img/404.svg";
import '../App.css'
const Error = () => {
  return (
    <div className="error-wrapper">
      <div><h1>Not Found</h1></div>
      <div className="notfound-img-container">
        <img src={NotFoundImg} />
      </div>
    </div>
  );
};

export default Error;
