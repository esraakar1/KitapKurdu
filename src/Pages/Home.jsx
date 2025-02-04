import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="container my-5 d-flex flex-column align-items-center gap-5">
      <h1>Hoş Geldiniz</h1>
      <img src="/welcome.webp" className="img-fluid rounded image" alt="" />
      <p> <Link to="/Ürünler"> Ürünler </Link> Sayfasında Yeni Çıkan Bütün Kitaplara Ulaşabilirsiniz</p>
    </div>
    
  );
};

export default Home;
