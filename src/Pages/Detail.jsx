import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Info from "../Components/Info";

const Detail = () => {

   // url deki id değerine eriş
  const { id } = useParams();

  // kitap verisini yönetmek için olustur stateyi 
  const [book, setBook] = useState(null);

  // id si bilinen elemanı api dan alma 
  useEffect(() => {
    axios.get(`http://localhost:3030/books/${id}`)
    .then((res) => setBook(res.data));
  }, []);

  return (
    <div className="row my-5 p-5 mx-auto container">
     {/* Kitap Resim Area */}
       <div className="col-md-6 d-flex justify-content-center align-items-center">
        <img src={book?.image} className="rounded img-fluid shadow" alt="" />
        </div>
       {/* Kitap Detay Area */}
        <div className="col-md-6 d-flex  flex-column justify-content-center align-items-center my-4">
        <h1>{book?.title} </h1>
            <div className="my-4">
              <Info title='yazar' value={book?.author}/>
              <Info title='yıl' value={book?.year} />
              <Info title='sayfa sayısı' value={book?.page}/>
              <Info title='Açıklama' value={book?.description}/>
              <Info title='Kategori' value={book?.category}/>
            </div>
          
        </div>
    </div>
  );
};

export default Detail;