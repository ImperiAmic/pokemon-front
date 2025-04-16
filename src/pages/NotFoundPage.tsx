import "./NotFoundPage.css";

const NotFoundPage: React.FC = () => {
  return (
    <div className="notfound-container">
      <span className="notfound__quote">Pikapi, Pika-Pika!</span>
      <span className="notfound__text">
        The page you are looking for does not exist, poke-sorry.
      </span>
    </div>
  );
};

export default NotFoundPage;
