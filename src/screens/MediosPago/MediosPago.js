import React, { useState, useEffect,useContext } from 'react';
import { Button, CheckBox } from 'react-native-elements';
// import { Overlay } from 'react-native-modal-overlay';
import {
  ScrollView,
  Text,
  View,
  Image,
  TextInput,
  Picker,
  StyleSheet
} from 'react-native';
import styles from './styles';
import { tarjetas1, cuentas1, mediosSinVerificar1 } from '../../data/dataArrays';
import Modal from "react-native-simple-modal";
import { DataContext } from "../../context";


export default function MediosPago(props) {
  const [tipo, setTipo]= useState("s");
  const [nombre, setNombre]= useState("");
  const [numero, setNumero]= useState("");
  const [vencimiento, setVencimiento]= useState("");
  const [cvv, setCVV]= useState("");
  const [tipoCuenta, setTipoCuenta] = useState("");
  const [CUIL, setCUIL] = useState("");
  const [CBU, setCBU] = useState("");
  const [alias, setAlias] = useState("");

  const [visibilityModal1, setVisibilityModal1]= useState(false);
  const [visibilityModal2, setVisibilityModal2]= useState(false);
  const [deleting, setDeleting]= useState(null);
  const [visibilityModalCreado, setVisibilityModalCreado]= useState(false);
  const [visibilityModalEliminado, setVisibilityModalEliminado]= useState(false);
  const [checked, setChecked]= useState(null);
  const [visibilityModalError, setVisibilityModalError]= useState(false);
  const [cuentas, setCuentas]= useState(cuentas1);

  useEffect( () => {
    setCuentas(cuentas);
  });

  const openModal = () => setVisibilityModal1(true);
  const closeModal = () => setVisibilityModal1(false);
  const openModal2 = () => setDeleting(checked);
  const closeModal2 = () => setDeleting(null);
  const openModalEliminado = () => {
    setTarjetas(tarjetas.filter((t) => t.id !== deleting));
    setCuentas(cuentas.filter((c) => c.id !== deleting));
    setMedios(mediosSinVerificar.filter((m) => m.id !== deleting));
    setDeleting(null);
  };
  //pendiente de los ids iguales
  const openModalCreado = () => setVisibilityModalCreado(true);
  const openModalError = () => setVisibilityModalError(true);

    const Separator = () => (
        <View style={styles.separator} />
      );
    const closeModalEliminado = () => {
      setVisibilityModal2(false);
      setVisibilityModalEliminado(false);
      props.navigation.navigate('MediosPago');
    };
    const closeModalCreado = () => {
      setVisibilityModalCreado(false);
      setVisibilityModal1(false);
      props.navigation.navigate('MediosPago');
    };
    const closeModalError = () => {
      setVisibilityModalError(false);
      setVisibilityModal1(false);
      props.navigation.navigate('MediosPago');
    };
    const handleAgregarMedio = () => {
      const tarjetita = {
        numero: numero,
        nombre: nombre,
        vencimiento: vencimiento,
        cvv: cvv,
        estado: "en revision",
        //por quilombos de la relacion hay dos campos de id de usuario. No me preguntes porqué
        usuario: {
        usuarioidCliente: 1, //hardcodeo (?)
        idCliente: 1 //hardcodeo (?)
      }
      }
      const checkTextInput = (e) => {
        if (!nombre.trim()) {
          alert("Por favor, ingrese el nombre de la tarjeta");
          return;
        }
        if (!numero.trim()) {
          alert("Por favor, ingrese el numero de la tarjeta");
          return;
        }
        if (!cvv.trim()) {
          alert("Por favor, ingrese el cvv de la tarjeta");
          return;
        }
        if (!vencimiento.trim()) {
          alert("Por favor, selecione el vencimiento de producto");
          return;
        }
        return true;
     };
      if (checkTextInput){
        fetch(url+"tarjetas/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(tarjetita),
          })
          .catch((error) => {
            console.error("Error tarjeta:", error);
          });
        closeModalCreado();
        openModalCreado();
      }else{
        openModalError();
      }
    };
    console.log(tarjetas, cuentas);
    const {tarjetas, setTarjetas, url} = useContext(DataContext);
    return (
      <ScrollView style={styles.mainContainer}>
        <View>
            <View style={styles.header}>
                <Image style={styles.image} source={require('../../../assets/icons/credit-card.png')}/>
                <Text style={styles.title}>Tarjetas</Text>
            </View>
            <Separator />
            {tarjetas.map((tarjeta, i) => {
              if(tarjeta.estado === "Aprobado"){
                return <CheckBox
                  key={i}
                  checked={tarjeta.idTarjeta===checked}
                  title={`${tarjeta.nombre}   **** ${tarjeta.numero.substr(-4,4)}`}
                  style={styles.checkbox}
                  onPress={() => setChecked(tarjeta.idTarjeta === checked ? null: tarjeta.idTarjeta)}
                />
              }
            })}
            <View style={styles.header}>
                <Image style={styles.image} source={require('../../../assets/icons/bank.png')}/>
            <Text style={styles.title}>Cuentas bancarias</Text>
            </View>
            <Separator />
            {cuentas.map((cuenta, i) => {
              return <CheckBox
                key={i}
                checked={cuenta.id===checked}
                title={`${cuenta.name}       **** ${cuenta.number.substr(-4,4)}`}
                style={styles.checkbox}
                onPress={() => setChecked(cuenta.id === checked ? null: cuenta.id)}
             />
            })}
            <View style={styles.header}>
              <Image style={styles.image} source={require('../../../assets/icons/circles-loader.png')}/>
              <Text style={styles.title}>En proceso de verificación</Text>
            </View>
            <Separator />
            {tarjetas.map((tarjeta, i) => {
              if(tarjeta.estado != "Aprobado"){
                return  <CheckBox
                  key={i}
                  checked={tarjeta.idTarjeta===checked}
                  title={`${tarjeta.nombre}       **** ${tarjeta.numero.substr(-4,4)}`}
                  style={styles.checkbox}
                  onPress={() => setChecked(tarjeta.idTarjeta === checked ? null: tarjeta.idTarjeta)}
                />
              }
            })}
            <View style={styles.buttonArea}>
              <Modal
                offset={-300}
                open={visibilityModal1}
                containerStyle={{
                  justifyContent: "center"
                }}
                overlayStyle={{backgroundColor:'transparent'}}
              >
                <View style={styles.mainModal}>
                  <Text style={styles.modalTitle}>Nuevo medio de pago</Text>
                  <View style={styles.modal}>
                    <View style={styles.column}>
                      <Text style={styles.modalLabel}>Tipo:</Text>
                      {tipo === "Tarjeta" && <>
                      <Text style={styles.modalLabel}>Nombre:</Text>
                      <Text style={styles.modalLabel}>Número:</Text>
                      <Text style={styles.modalLabel}>Vencimiento:</Text>
                      <Text style={styles.modalLabel}>CVV:</Text>
                      </>}
                      {tipo === "Cuenta bancaria" && <>
                      <Text style={styles.modalLabel}>Tipo de cuenta:</Text>
                      <Text style={styles.modalLabel}>CUIL:</Text>
                      <Text style={styles.modalLabel}>CBU:</Text>
                      <Text style={styles.modalLabel}>Alias:</Text>
                      </>}
                    </View>
                    <View style={styles.column}>
                      <Picker selectedValue={tipo} onValueChange={(itemValue, itemIndex) => setTipo(itemValue)}>
                        <Picker.Item label="Cuenta bancaria" value="cuenta" />
                        <Picker.Item label="Tarjeta" value="tarjeta" />
                      </Picker>
                      {/* <TextInput style={styles.modalInput} onChangeText={text => setTipo(text)} value={tipo} ></TextInput> */}
                      {tipo === "Tarjeta" && 
                      <>
                        <TextInput style={styles.modalInput} onChangeText={text => setNombre(text)} value={nombre} ></TextInput>
                        <TextInput style={styles.modalInput} onChangeText={text => setNumero(text)} value={numero} ></TextInput>
                        <TextInput style={styles.modalInput} onChangeText={text => setVencimiento(text)} value={vencimiento} ></TextInput>
                        <TextInput style={styles.modalInput} onChangeText={text => setCVV(text)} value={cvv} ></TextInput>
                      </>}
                      {tipo === "Cuenta bancaria" && 
                      <>
                        <TextInput style={styles.modalInput} onChangeText={text => setTipoCuenta(text)} value={tipoCuenta} ></TextInput>
                        <TextInput style={styles.modalInput} onChangeText={text => setCUIL(text)} value={CUIL} ></TextInput>
                        <TextInput style={styles.modalInput} onChangeText={text => setCBU(text)} value={CBU} ></TextInput>
                        <TextInput style={styles.modalInput} onChangeText={text => setAlias(text)} value={alias} ></TextInput>
                      </>}             
                    </View>
                  </View>
                  <View style={styles.columns}>
                    <Button style={styles.modalButton} title='Agregar' type='solid' onPress={handleAgregarMedio}/>
                    <Button style={styles.modalButton} title='Cerrar' type='solid' onPress={closeModal}/>
                  </View>
                </View>
              </Modal>
              <Button style={styles.button} title='Nuevo' type='solid' onPress={openModal}/>
              <Modal
                offset={-300}
                open={visibilityModalCreado}
              >
                <View style={styles.confirmationModal}>
                  <Text style={styles.modalTitle}>Medio de pago en proceso de verificación</Text>
                  <Image style={styles.imageModal} source={require('../../../assets/icons/check.png')}/>
                  <Button style={styles.modalButton} title='Aceptar' type='solid' onPress={closeModalCreado}/>
                </View>
              </Modal>
              <Modal
                offset={-300}
                open={visibilityModalError}
              >
                <View style={styles.confirmationModal}>
                  <Text style={styles.modalTitle}>Los datos ingresados están incompletos</Text>
                  <Image style={styles.imageModal} source={require('../../../assets/icons/cancel.png')}/>
                  <Button style={styles.modalButton} title='Aceptar' type='solid' onPress={closeModalError}/>
                </View>
              </Modal>
              <Button style={styles.button} title='Borrar' type='solid' onPress={openModal2}/>
              <Modal
                offset={-300}
                open={deleting !== null}
                overlayStyle={{backgroundColor:'transparent'}}
              >
                <View style={styles.confirmationModal}>
                  <Text style={styles.modalTitle}>¿Está seguro de que desea borrar el medio de pago seleccionado?</Text>
                  <View style={styles.columns}>
                    <Button style={styles.modalButton} title='Sí' type='solid' onPress={openModalEliminado}/>
                    <Button style={styles.modalButton} title='No' type='solid' onPress={closeModal2}/>
                  </View>
                </View>
              </Modal>
              <Modal
                offset={-300}
                open={visibilityModalEliminado}
              >
                <View style={styles.confirmationModal}>
                  <Text style={styles.modalTitle}>Medio de pago eliminado</Text>
                  <Image style={styles.imageModal} source={require('../../../assets/icons/check.png')}/>
                  <Button style={styles.modalButton} title='Aceptar' type='solid' onPress={closeModalEliminado}/>
                </View>
              </Modal>
            </View>
        </View>
      </ScrollView>
    );
}
