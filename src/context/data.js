import React, { useState, createContext, useEffect } from "react";
import * as SecureStore from 'expo-secure-store';
export const DataContext = createContext({});


const url = 'http://192.168.1.22:8080/api/'




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
  const [currentProducto, setCurrentProducto] = useState([]); 
  const [catalogoSeleccionado, setCatalogoSeleccionado] = useState("");

  useEffect(() => {
    // checkPassword()
    // checkMail();
    fetchCatalogos();
    // fetchUsuarios();
    //fetchProductos();
    // fetchPublicacionesMine();
    // fetchPaises();
    // fetchClientes();
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
        catalogoSeleccionado, 
        setCatalogoSeleccionado,  
        url,
        currentProducto, 
        setCurrentProducto

      }}
    >
      {props.children}
    </DataContext.Provider>
  );

  function fetchCatalogos() {
    fetch(url+'catalogo/')
      .then((response) =>response.json())
      .then((res) => setCatalogosList(res));
  }

  //Hace falta?
  function fetchUsuarios() {
    fetch(url+'publicaciones/list')
      .then((response) => response.json())
      .then((res) => setUsuariosList(res));
  }

  function fetchPaises() {
    fetch(url+'paises/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }})
      .then((response) => response.json())
      .then((res) => setPaisesList(res));
  }

  //BUSCAR MANERA DE OBTERER IDENTIFICADOR DE CATALOGO
  function fetchProductos() {
    
    fetch(url+'catalogo/id?identificador='+catalogoSeleccionado)
      .then((response) => response.json())
      .then((data) => setProductosList(data));
    
  }

  function fetchPublicacionesMine() {
    fetch(url+'productos/cliente')
      .then((response) => response.json())
      .then((res) => setPublicacionesMineList(res));
  }

  function fetchClientes() {
    fetch(url+'clientes/list')
      .then((response) => response.json())
      .then((res) => setClientesList(res));
  }
}
