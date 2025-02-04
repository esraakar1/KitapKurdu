import { NavLink, Outlet } from "react-router-dom";

const Category = () => {
  return (
    <div className="d-flex align-items-center gap-4 p-5">
        <aside className="d-flex flex-column bg-white p-5 rounded-4">
          <NavLink to="/kategori/hikaye"> Hikaye</NavLink>
          <NavLink to="/kategori/roman"> Roman</NavLink>
       </aside>
       {/* ilgili alt bileşeni render et  */}
     <Outlet/>
    </div>
  );
};

export default Category;
