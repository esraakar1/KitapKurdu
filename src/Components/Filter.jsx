import { useSearchParams } from "react-router-dom";


const Filter = () => {
    // url deki arama parametrelerine erişmek ve bu parametreleri yönetmek için useSearchParams kullanıloır bu metod url deki parametrelere erişmek ve güncellemek için kullanılır 
  const [searchParams, setSearchParams] = useSearchParams();

  // aratma işlemini yapan fonksiyon 
  const handleSubmit = (e) => {
    // sayfa yenilemesini engelle 
      e.preventDefault();
     const text = e.target[0].value;

     searchParams.set("search", text);

     setSearchParams(searchParams);
  };

  // sıralama işlemini yapan fonksiyon 
  const handleChange = (e) => {
    // select alanındaki değere eriş  
     const text = e.target.value;
    //  erişilen bu değer ile url ye parametre gec 
    searchParams.set("sort", text);
    // url yi güncelle 
    setSearchParams(searchParams);
  };
 

  return (
    <div className="d-flex justify-content-between align-items-center my-4 gap-3">
        {/* select  */}
        <div>
            <select onChange={handleChange} className="form-select">
                <option disabled value="">sırala</option>
                <option value="a-z">a-z</option>
                <option value="z-a">z-a</option>
            </select>
        </div>
        <form onSubmit={handleSubmit} className="d-flex gap-2">
            <input type="text"className="form-control" placeholder= 'kitap ismi giriniz...'/>
            <button type="submit" className="btn btn-primary">Ara</button>
        </form>
    </div>
  );
};

export default Filter;