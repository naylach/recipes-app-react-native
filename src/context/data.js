import React, { useState, createContext, useEffect } from "react";

export const DataContext = createContext({});

export function DataProvider(props) {
  const [catalogosList, setCatalogosList] = useState([]);
  const [usuariosList, setUsuariosList] = useState([]);
  const [publicacionesMineList, setPublicacionesMineList] = useState([]);
  const [paisesList, setPaisesList] = useState([]);
  const [clientesList, setClientesList] = useState([]);
  const [productosList, setProductosList] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  const [currentPropiedad, setCurrentPropiedad] = useState({});

  useEffect(() => {
    fetchCatalogos();
    fetchUsuarios();
    fetchProductos();
    fetchPublicacionesMine();
    fetchPaises();
    fetchClientes();
  }, [refresh]);

  return (
    <DataContext.Provider
      value={{
        catalogosList,
        setCatalogosList,
        usuariosList,
        setUsuariosList,
        paisesList,
        setPaisesList,
        currentUser,
        setCurrentUser,
        currentPropiedad,
        setCurrentPropiedad,
        publicacionesMineList,
        setPublicacionesMineList,
        productosList,
        setProductosList,
        clientesList,
        setClientesList,
        refresh,
        setRefresh,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );

  function fetchCatalogos() {
    fetch(`http://localhost:8000/catalogos/list`)
      .then((response) => response.json())
      .then((res) => setCatalogosList(res));
  }

  function fetchUsuarios() {
    fetch(`http://localhost:8000/publicaciones/list`)
      .then((response) => response.json())
      .then((res) => setUsuariosList(res));
  }

  function fetchPaises() {
    fetch(`http://localhost:8000/paises/list`)
      .then((response) => response.json())
      .then((res) => setPaisesList(res));
  }

  function fetchProductos() {
    fetch(`http://localhost:8000/productos/list`)
      .then((response) => response.json())
      .then((res) => setProductosList(res));
  }

  function fetchPublicacionesMine() {
    fetch(`http://localhost:8000/api/publicacion/list/vecino/1`)
      .then((response) => response.json())
      .then((res) => setPublicacionesMineList(res));
  }

  function fetchClientes() {
    fetch(`http://localhost:8000/clientes/list`)
      .then((response) => response.json())
      .then((res) => setClientesList(res));
  }
}
