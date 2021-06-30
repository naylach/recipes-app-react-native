import React, { useState, createContext, useEffect } from "react";
export const DataContext = createContext({});
const user = {
  idCliente: 1,
  idUsuario: "31619",
  email: "cristi@a.es",
  password: "$2b$05$aQOxju6Pz7l3y5FxsHmjAexJFPLt.WUbvJRUfzFN4q8qEUVsLtoMm",
  categoria: "Diamante",
  verificador: null,
  documento: "95773254",
  nombre: "Cristina Cañizales",
  direccion: "Balcarce 596",
  estado: 2,
  imagen: "../../../assets/icons/selfie.jpeg",
};

const url = "http://192.168.0.16:8080/api/";

export function DataProvider(props) {
  const [catalogosList, setCatalogosList] = useState([]);
  const [usuariosList, setUsuariosList] = useState([]);
  const [publicacionesMineList, setPublicacionesMineList] = useState([]);
  const [paisesList, setPaisesList] = useState([]);
  const [clientesList, setClientesList] = useState([]);
  const [productosList, setProductosList] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [currentPropiedad, setCurrentPropiedad] = useState({});
  const [currentProducto, setCurrentProducto] = useState([]);
  const [catalogoSeleccionado, setCatalogoSeleccionado] = useState({});
  const [tarjetas, setTarjetas] = useState([]);
  const [cuentas, setCuentas] = useState([]);
  const [ currentSubasta, setCurrentSubasta ] = useState({});
  const [ primeraSubasta, setPrimeraSubasta] = useState(1);

  useEffect(() => {
    setCurrentUser(null);
    console.log("sesion iniciada con: " + JSON.stringify(currentUser));
    fetchCatalogos();
    fetchProductos();
    fetchPublicacionesMine();
  }, []);

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
        catalogoSeleccionado,
        setCatalogoSeleccionado,
        url,
        currentProducto,
        setCurrentProducto,
        tarjetas,
        setTarjetas,
        cuentas,
        setCuentas,
        currentSubasta,
        setCurrentSubasta,
        primeraSubasta,
        setPrimeraSubasta
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
  function fetchCatalogos() {
    fetch(url + "catalogo/")
      .then((response) => response.json())
      .then((res) => {
        console.log("catalogos:\n " + res.length + "\n----------------");
        setCatalogosList(res);
      });
  }
  //BUSCAR MANERA DE OBTERER IDENTIFICADOR DE CATALOGO
  function fetchProductos() {
    fetch(url + "catalogo/id?identificador=" + catalogoSeleccionado)
      .then((response) => response.json())
      .then((data) => setProductosList(data));
  }

  function fetchPublicacionesMine() {
    fetch(url + "productos/cliente")
      .then((response) => response.json())
      .then((res) => setPublicacionesMineList(res));
  }
}
