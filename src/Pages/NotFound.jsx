import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center container mx-auto p-5 d-flex flex-column gap-4">
        <h1 className="text-warning">ARATILAN SAYFA BULUNAMADI</h1>
        <img src="/notFound.gif" className="w-100 rounded not-found" alt="" />
        <p className="fs-1"> <Link to="/" >Ana Sayfaya </Link> ' ya Gidiniz. </p>
    </div>
  );
};

export default NotFound;