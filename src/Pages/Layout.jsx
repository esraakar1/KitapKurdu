import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";


const Layout = () => {
  return (
    <div className="page">
     <Header/>

     <Outlet/>

     <Footer/>
    </div>
  );
};

export default Layout;