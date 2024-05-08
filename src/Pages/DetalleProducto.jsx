/*import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ItemCount from '../Components/ItemCount';

const DetalleProducto = () => {
  const { id } = useParams();
  const history = useHistory();
  const [producto, setProducto] = useState({});
  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(1);

  // Función para agregar el producto al carrito y redirigir a Home
  const handleAgregarAlCarrito = (cantidad) => {
    console.log(`Producto ${producto.title} agregado al carrito con ${cantidad} unidades.`);
    // Redireccionar a Home
    history.push('/');
  };

  // Simulación de obtener los detalles del producto desde una API
  useEffect(() => {
    fetch(`https://api.mercadolibre.com/items/${id}`)
      .then(response => response.json())
      .then(data => setProducto(data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [id]);

  return (
    <Container>
      <h2>Detalle del Producto</h2>
      <Row>
        <Col xs={12} md={6}>
          <img
            src={producto.thumbnail}
            alt={producto.title}
            style={{ width: '70%', maxHeight: '400px', objectFit: 'cover' }}
          />
        </Col>
        <Col xs={12} md={6}>
          <p>Descripción: {producto.description}</p>
          <p>Nombre: {producto.title}</p>
          <p>Precio: ${producto.price}</p>
          
          <ItemCount
            initial={1}
            stock={10}
            onAdd={(cantidad) => {
              setCantidadSeleccionada(cantidad);
            }}
          />
          <Button variant="primary" onClick={() => handleAgregarAlCarrito(cantidadSeleccionada)}>
            Agregar al carrito
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default DetalleProducto;*/
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ItemCount from '../Components/ItemCount';

const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});
  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(1);
  const [agregadoAlCarrito, setAgregadoAlCarrito] = useState(false);

  // Función para agregar el producto al carrito
  const handleAgregarAlCarrito = (cantidad) => {
    console.log(`Producto ${producto.title} agregado al carrito con ${cantidad} unidades.`);
    setAgregadoAlCarrito(true);
  };

  // Simulación de obtener los detalles del producto desde una API
  useEffect(() => {
    fetch(`https://api.mercadolibre.com/items/${id}`)
      .then(response => response.json())
      .then(data => setProducto(data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [id]);

  return (
    <Container>
      <h2>Detalle del Producto</h2>
      <Row>
        <Col xs={12} md={6}>
          <img
            src={producto.thumbnail}
            alt={producto.title}
            style={{ width: '70%', maxHeight: '400px', objectFit: 'cover' }}
          />
        </Col>
        <Col xs={12} md={6}>
          <p>Descripción: {producto.description}</p>
          <p>Nombre: {producto.title}</p>
          <p>Precio: ${producto.price}</p>
          
          <ItemCount
            initial={1}
            stock={10}
            onAdd={(cantidad) => {
              setCantidadSeleccionada(cantidad);
            }}
          />
          <Button variant="primary" onClick={() => handleAgregarAlCarrito(cantidadSeleccionada)}>
            Agregar al carrito
          </Button>
          {agregadoAlCarrito && <p>¡El producto ha sido agregado al carrito!</p>}
        </Col>
      </Row>
    </Container>
  );
};

export default DetalleProducto;
