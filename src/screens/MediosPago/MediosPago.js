import React from 'react';
import { Button, CheckBox } from 'react-native-elements';
// import { Overlay } from 'react-native-modal-overlay';
import {
  ScrollView,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';
import styles from './styles';
import { tarjetas, cuentas } from '../../data/dataArrays';
import Modal from "react-native-simple-modal";

export default class MediosPago extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Medios de Pago'
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      tipo: "", 
      nombre: "", 
      numero: "", 
      vencimiento: "", 
      cvv: "", 
      visibilityModal1: false, 
      deleting: null,
      //visibilityModal2: false, 
      visibilityModalCreado: false,
      visibilityModalEliminado: false, 
      checked: null, 
      visibilityModalError: false,
      tarjetas: [],
      cuentas: []
    }
  }

  componentDidMount(){
    //api
    this.setState({cuentas, tarjetas});
  }

  openModal = () => this.setState({ visibilityModal1: true });
  closeModal = () => this.setState({ visibilityModal1: false });
  openModal2 = () => this.setState({ deleting: this.state.checked });
  //openModal2 = () => this.setState({ visibilityModal2: true });
  closeModal2 = () => this.setState({ visibilityModal2: false });
  openModalEliminado = () => {
    this.setState({
      tarjetas:this.state.tarjetas.filter((t) => t.id !== this.state.deleting),
      cuentas:this.state.cuentas.filter((t) => t.id !== this.state.deleting),
      deleting: null
    })
  };
  //pendiente de los ids iguales
  //openModalEliminado = () => this.setState({ visibilityModalEliminado: true });
  openModalCreado = () => this.setState({ visibilityModalCreado: true });
  openModalError = () => this.setState({ visibilityModalError: true });

  render() {
    const { navigation } = this.props;
    const Separator = () => (
        <View style={styles.separator} />
      );
    const closeModalEliminado = () => {
      this.setState({ visibilityModal2: false });
      this.setState({ visibilityModalEliminado: false });
      navigation.navigate('MediosPago');
    };
    const closeModalCreado = () => {
      this.setState({ visibilityModalCreado: false });
      this.setState({ visibilityModal1: false });
      navigation.navigate('MediosPago');
    };
    const closeModalError = () => {
      this.setState({ visibilityModalError: false });
      this.setState({ visibilityModal1: false });
      navigation.navigate('MediosPago');
    };
    const handleAgregarMedio = () => {
      //if (true)
        closeModalCreado();
        this.openModalCreado();
      //else
      //this.openModalError();
    };
    return (

      <ScrollView style={styles.mainContainer}>
        <View>
            <View style={styles.header}>
                <Image style={styles.image} source={require('../../../assets/icons/credit-card.png')}/>
                <Text style={styles.title}>Tarjetas</Text>
            </View>
            <Separator />
            {this.state.tarjetas.map((tarjeta, i) => {
              return  <CheckBox
                key={i}
                checked={tarjeta.id===this.state.checked}
                title={`${tarjeta.name}       **** ${tarjeta.number.substr(-4,4)}`}
                style={styles.checkbox}
                onPress={() => this.setState({checked: tarjeta.id === this.state.checked ? null: tarjeta.id})}
               />
            })}
            <View style={styles.header}>
                <Image style={styles.image} source={require('../../../assets/icons/bank.png')}/>
            <Text style={styles.title}>Cuentas bancarias</Text>
            </View>
            <Separator />
            {this.state.cuentas.map((cuenta, i) => {
              return <CheckBox
                key={i}
                checked={cuenta.id===this.state.checked}
                title={`${cuenta.name}       **** ${cuenta.number.substr(-4,4)}`}
                style={styles.checkbox}
                onPress={() => this.setState({checked: cuenta.id === this.state.checked ? null: cuenta.id})}
             />
            })}
            <View style={styles.buttonArea}>
              <Modal
                offset={-300}
                open={this.state.visibilityModal1}
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
                      <Text style={styles.modalLabel}>Nombre:</Text>
                      <Text style={styles.modalLabel}>Número:</Text>
                      <Text style={styles.modalLabel}>Vencimiento:</Text>
                      <Text style={styles.modalLabel}>CVV:</Text>
                    </View>
                    <View style={styles.column}>
                      <TextInput style={styles.modalInput} onChangeText={text => this.setState({tipo: text})} value={this.state.tipo} ></TextInput>
                      <TextInput style={styles.modalInput} onChangeText={text => this.setState({nombre: text})} value={this.state.nombre} ></TextInput>
                      <TextInput style={styles.modalInput} onChangeText={text => this.setState({numero: text})} value={this.state.numero} ></TextInput>
                      <TextInput style={styles.modalInput} onChangeText={text => this.setState({vencimiento: text})} value={this.state.vencimiento} ></TextInput>
                      <TextInput style={styles.modalInput} onChangeText={text => this.setState({cvv: text})} value={this.state.cvv} ></TextInput>                    
                    </View>
                  </View>
                  <View style={styles.columns}>
                    <Button style={styles.modalButton} title='Agregar' type='solid' onPress={handleAgregarMedio}/>
                    <Button style={styles.modalButton} title='Cerrar' type='solid' onPress={this.closeModal}/>
                  </View>
                </View>
              </Modal>
              <Button style={styles.button} title='Nuevo' type='solid' onPress={this.openModal}/>
              <Modal
                offset={-300}
                open={this.state.visibilityModalCreado}
              >
                <View style={styles.confirmationModal}>
                  <Text style={styles.modalTitle}>Medio de pago en proceso de verificación</Text>
                  <Image style={styles.imageModal} source={require('../../../assets/icons/check.png')}/>
                  <Button style={styles.modalButton} title='Aceptar' type='solid' onPress={closeModalCreado}/>
                </View>
              </Modal>
              <Modal
                offset={-300}
                open={this.state.visibilityModalError}
              >
                <View style={styles.confirmationModal}>
                  <Text style={styles.modalTitle}>Los datos ingresados están incompletos</Text>
                  <Image style={styles.imageModal} source={require('../../../assets/icons/cancel.png')}/>
                  <Button style={styles.modalButton} title='Aceptar' type='solid' onPress={closeModalError}/>
                </View>
              </Modal>
              <Button style={styles.button} title='Borrar' type='solid' onPress={this.openModal2}/>
              <Modal
                offset={-300}
                open={this.state.deleting !== null}
                overlayStyle={{backgroundColor:'transparent'}}
              >
                <View style={styles.confirmationModal}>
                  <Text style={styles.modalTitle}>¿Está seguro de que desea borrar el medio de pago seleccionado?</Text>
                  <View style={styles.columns}>
                    <Button style={styles.modalButton} title='Sí' type='solid' onPress={this.openModalEliminado}/>
                    <Button style={styles.modalButton} title='No' type='solid' onPress={this.closeModal2}/>
                  </View>
                </View>
              </Modal>
              <Modal
                offset={-300}
                open={this.state.visibilityModalEliminado}
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
}
