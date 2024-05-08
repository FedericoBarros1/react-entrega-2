import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap'; 
const Home = () => {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState(''); 
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=iphone')
      .then(response => response.json())
      .then(data => setProductos(data.results))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleBusquedaChange = (e) => {
    setBusqueda(e.target.value);
  };

  const productosFiltrados = productos.filter(producto =>
    producto.title.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <Container>
      <h2>Home</h2>
      <Form className="mb-3">
        <Form.Control type="text" placeholder="Buscar productos..." value={busqueda} onChange={handleBusquedaChange} />
      </Form>
      <Row>
        
        {productosFiltrados.map(producto => (
          <Col key={producto.id} xs={12} sm={6} md={3} lg={3} xl={3}>
            <Card style={{ height: '100%' }}>
              <Card.Img
                variant="top"
                src={producto.thumbnail}
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{producto.title}</Card.Title>
                <Card.Text>
                  Precio: ${producto.price}
                </Card.Text>
              </Card.Body>
              <Link to={`/detalleProducto/${producto.id}`} className="btn btn-primary btn-sm">Ver Detalles</Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;