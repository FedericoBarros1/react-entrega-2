import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home.jsx";
import DetalleProducto from "../Pages/DetalleProducto.jsx";
import Login from "../Pages/Login.jsx";
import Registro from "../Pages/Registro.jsx";
import NotFound from "../Pages/NotFound.jsx";

function Public() {
  
  return (
    <Routes>
          <Route path="/home" element ={<Home />} />
          <Route path="/ingresar" element={<Login />} />
          <Route path="/alta" element={<Registro />} />
          <Route path="/producto/:id" element={<DetalleProducto />} />
          <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Public;