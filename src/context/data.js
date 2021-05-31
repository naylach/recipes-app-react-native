import React, { useState, createContext, useEffect } from "react";

export const DataContext = createContext({});

export function DataProvider(props) {
  const [catalogosList, setCatalogosList] = useState([]);
  const [usuarios, setUsuariosList] = useState([]);
  const [publicacionesMineList, setPublicacionesMineList] = useState([]);
  const [paisesList, setPaisesList] = useState([]);
  const [clientesList, setClientesList] = useState([]);
  const [notificacionesList, setNotificacionesList] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  const [currentPropiedad, setCurrentPropiedad] = useState({});

  useEffect(() => {
    fetchCatalogos();
    fetchUsuarios();
    fetchNotificaciones();
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
        notificacionesList,
        setNotificacionesList,
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
    fetch(`http://localhost:8000/api/publicacion/list`)
      .then((response) => response.json())
      .then((res) => setCatalogosList(res));
  }

  function fetchUsuarios() {
    fetch(`http://localhost:8000/api/publicacion/list`)
      .then((response) => response.json())
      .then((res) => setUsuariosList(res));
  }

  function fetchPaises() {
    fetch(`http://localhost:8000/api/vecino/list`)
      .then((response) => response.json())
      .then((res) => setPaisesList(res));
  }

  function fetchNotificaciones() {
    fetch(`http://localhost:8000/api/notificacion/list`)
      .then((response) => response.json())
      .then((res) => setNotificacionesList(res));
  }

  function fetchPublicacionesMine() {
    fetch(`http://localhost:8000/api/publicacion/list/vecino/1`)
      .then((response) => response.json())
      .then((res) => setPublicacionesMineList(res));
  }

  function fetchClientes() {
    fetch(`http://localhost:8000/api/rol/list`)
      .then((response) => response.json())
      .then((res) => setClientesList(res));
  }
}
