import React, { useState, createContext, useEffect } from "react";
import * as SecureStore from 'expo-secure-store';
export const DataContext = createContext({});
const user ={
  "idCliente": 1,
  "idUsuario": "31619",
  "email": "augusto@a.es",
  "password": "$2b$05$aQOxju6Pz7l3y5FxsHmjAexJFPLt.WUbvJRUfzFN4q8qEUVsLtoMm",
  "categoria": "comun",
  "verificador": null,
  "documento": "789456126",
  "nombre": "cris cañizales",
  "direccion": "santa fe 3000",
  "estado": 2,
  "imagen": ""
};

const url = 'http://192.168.0.182:8080/api/'

export function DataProvider(props) {
  const [catalogosList, setCatalogosList] = useState([]);
  const [usuariosList, setUsuariosList] = useState([]);
  const [publicacionesMineList, setPublicacionesMineList] = useState([]);
  const [paisesList, setPaisesList] = useState([]);
  const [clientesList, setClientesList] = useState([]);
  const [productosList, setProductosList] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [currentUser, setCurrentUser] = useState(user);
  const [currentPropiedad, setCurrentPropiedad] = useState({}); 
  const [currentProducto, setCurrentProducto] = useState([]); 
  const [catalogoSeleccionado, setCatalogoSeleccionado] = useState("");
  const [tarjetas, setTarjetas] = useState([]);
  async function asyncSessionVerifier(){

  }
  useEffect(() => {
    // checkPassword()
    // checkMail();
   
    if(!currentUser.idCliente){
      setCurrentUser(user); 
      console.log("inicialice usuario: "+currentUser.idCliente)
    }
    console.log("sesion iniciada con: "+currentUser.idCliente)
    fetchCatalogos();
    fetchTarjetas();
    
    // fetchMisPublicaciones()
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
        setCurrentProducto,
        tarjetas, 
        setTarjetas

      }}
    >
      {props.children}
    </DataContext.Provider>
  );

  function fetchTarjetas(){
    if(currentUser.idCliente){
      console.log(user.idCliente)
      fetch(url+'tarjetas/?idCliente='+currentUser.idCliente)
      .then((response) =>response.json())
      .then((res) => {
        console.log(res)
        setTarjetas(res)
      });
    }
  }
  // function fetchMisPublicaciones(){
  //   if(currentUser.idCliente){
  //     fetch(url+'productos/cliente?idCliente='+currentUser.idCliente)
  //     .then ((response)=> response.json())
  //     .then ((res)=>{
  //       console.log("productos de cliente:\n"+res.length+"\n---------------")
  //       setPublicacionesMineList(res)
  //     })
  //   } 
  // }
  function fetchCatalogos() {
    fetch(url+'catalogo/')
      .then((response) =>response.json())
      .then((res) => {
        console.log("catalogos:\n "+res.length+"\n----------------")
        
        setCatalogosList(res)
      });
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
