import { useEffect, useState } from "react";
import Filter from "../Components/Filter";
import axios from "axios";
import Card from "../Components/Card";
import { useNavigate, useSearchParams } from "react-router-dom";

const Products = () => {
  // useNavigate : react router dom içerisinde bulunan link elemanının fonksiyon hali olan useNavigate ile belirli şartlar dahilinde yçnlendirme işlemi yapılır
  const navigate = useNavigate();
     
  const [books, setBooks] = useState([]);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    // url deki parametrelere erişip bunları api ya gönder 
    const params = {
      q: searchParams.get("search"),
      _sort: "title",
      _order: searchParams.get('sort') === "z-a" ? "desc" : "asc",
    };
    // bileşen ekrana geldiğinde api a istek at 
    axios.get(' http://localhost:3030/books', {params})
    .then((res) => setBooks(res.data))
    .catch((err) => navigate('/NotFound'));
  }, [searchParams]);
  return (
    <div className="container my-5">
      {books.length === 0 ? (
        <h3 className="bg-danger rounded p-3 fs-2 text-center">Aratılan Kitap Bulunamadı !</h3>
      ) : (
        <h3>{books.length} kitap bulundu</h3>
        )}
         {/* filtreleme alanı  */}
      <Filter/>
      {/* kitaplar alanı  */}
      <div className="cards-container">
          {books.map((book) => <Card key={book.id} book={book} /> )}
      </div>
    </div>
  );
};

export default Products;