import React, { useState, createContext, useEffect } from "react";

export const DataContext = createContext({});

export function DataProvider(props) {
  const [publicacionesMineList, setPublicacionesMineList] = useState([]);
  const [publicacionesList, setPublicacionesList] = useState([]);
  const [vecinosList, setVecinosList] = useState([]);
  const [rolesList, setRolesList] = useState([]);
  const [notificacionesList, setNotificacionesList] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  const [currentPropiedad, setCurrentPropiedad] = useState({});

  useEffect(() => {
    fetchNotificaciones();
    fetchPublicaciones();
    fetchPublicacionesMine();
    fetchVecinos();
    fetchRoles();
  }, [refresh]);

  return (
    <DataContext.Provider
      value={{
        vecinosList,
        setVecinosList,
        currentUser,
        setCurrentUser,
        currentPropiedad,
        setCurrentPropiedad,
        publicacionesMineList,
        setPublicacionesMineList,
        publicacionesList,
        setPublicacionesList,
        notificacionesList,
        setNotificacionesList,
        rolesList,
        setRolesList,
        refresh,
        setRefresh,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );

  function fetchVecinos() {
    fetch(`http://localhost:8000/api/vecino/list`)
      .then((response) => response.json())
      .then((res) => setVecinosList(res));
  }

  function fetchNotificaciones() {
    fetch(`http://localhost:8000/api/notificacion/list`)
      .then((response) => response.json())
      .then((res) => setNotificacionesList(res));
  }

  function fetchPublicaciones() {
    fetch(`http://localhost:8000/api/publicacion/list`)
      .then((response) => response.json())
      .then((res) => setPublicacionesList(res));
  }

  function fetchPublicacionesMine() {
    fetch(`http://localhost:8000/api/publicacion/list/vecino/1`)
      .then((response) => response.json())
      .then((res) => setPublicacionesMineList(res));
  }

  function fetchRoles() {
    fetch(`http://localhost:8000/api/rol/list`)
      .then((response) => response.json())
      .then((res) => setRolesList(res));
  }
}
