import { useEffect, useState } from "react";
import { useAuthContext } from "../../Context/AuthContext";
import { getProductos } from "../../Services/productosServices";

function useFetchProducts() {
  //Inicializar el estado
  const [productos, setProductos] = useState([]);
  const [paging, setPaging] = useState({ limit: 12, offset: 0 });
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [buscar, setBuscar] = useState("ipod");
  const { login } = useAuthContext();
  //componentDidMount
  useEffect(() => {
    const request = async () => {
      try {
        const limit = paging?.limit;
        const offset = page * paging?.limit - paging?.limit;
        const response = await getProductos(limit, offset);
        setProductos(response.results);
        setPaging(response.paging);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    request();
  }, [buscar, page]);

  const handleBuscar = (event) => {
    const { value } = event.target;
    setBuscar(value);
  };

  const handleChangePage = (number) => {
    setPage(number);
  };

  return {
    productos,
    loading,
    buscar,
    handleBuscar,
    handleChangePage,
    login,
    paging,
  };
}

export default useFetchProducts;
