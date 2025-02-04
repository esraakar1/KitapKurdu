import { Link } from "react-router-dom";


const Card = ({book}) => {
  return (
    <div className="card shadow p-2">
        <img className="rounded" src={book.image} alt="" />
        <div className="card-body">
            <h4>{book.title}</h4>
            <h4>{book.author}</h4>
        </div>
        <Link to={`/detay/${book.id}`} className="btn btn-primary w-100" >detay gör</Link>
    </div>
  );
};

export default Card;