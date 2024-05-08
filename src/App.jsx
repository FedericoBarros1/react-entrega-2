/*import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "./Components/Navbar.jsx"; // Importa directamente el componente Navbar
import Home from "./Pages/Home.jsx";
import DetalleProducto from "./Pages/DetalleProducto.jsx";
import NotFound from "./Pages/NotFound.jsx";
import ItemCount from "./Components/ItemCount.jsx"; // Importar el nuevo componente
import { CartWidget } from "./Components/CartWidget.jsx"; // Importa directamente el componente CartWidget

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/detalleProducto/:id" element={<DetalleProducto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <div>Footer</div>
    </Router>
  );
}

export default App;*/
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "./Components/Navbar.jsx"; // Importa directamente el componente Navbar
import Home from "./Pages/Home.jsx";
import DetalleProducto from "./Pages/DetalleProducto.jsx";
import NotFound from "./Pages/NotFound.jsx";
import ItemCount from "./Components/ItemCount.jsx"; // Importar el nuevo componente
import { CartWidget } from "./Components/CartWidget.jsx"; // Importa directamente el componente CartWidget

function App() {
  const [cartItems, setCartItems] = useState([]); // Estado para los elementos en el carrito

  // Función para agregar un elemento al carrito
  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <Router>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/detalleProducto/:id" element={<DetalleProducto />} />
          {/* Utilizar el nuevo componente ItemCount en una nueva ruta */}
          <Route
            path="/itemCount"
            element={<ItemCount initial={1} stock={10} onAdd={handleAddToCart} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <div>Footer</div>
    </Router>
  );
}

export default App;