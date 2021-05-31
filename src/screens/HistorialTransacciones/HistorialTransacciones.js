import React from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
} from 'react-native';
import styles from './styles';
import { historial } from '../../data/dataArrays.js';

export default class HistorialTransacciones extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Historial de Transacciones'
    };
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    const Separator = () => (
        <View style={styles.separator} />
      );
    return (
        <ScrollView style={styles.mainContainer}>
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.header}>
                    <Image style={styles.image} source={require('../../../assets/icons/expense.png')}/>
                    <Text style={styles.title}>Compras</Text>
                </View>
                <Separator />
                {historial.map((transaccion, i) => {
                  return transaccion.tipo === "compra" ? <Text style={styles.item} key={i}>{`${transaccion.producto} - ${transaccion.monto}`}</Text> : null})}
            </View>    
            <View style={styles.row}>
                <View style={styles.header}>
                    <Image style={styles.image} source={require('../../../assets/icons/wallet.png')}/>
                    <Text style={styles.title}>Ventas</Text>
                </View>
                <Separator />
                {historial.map((transaccion, i) => {
                  return transaccion.tipo === "venta" ? <Text style={styles.item} key={i}>{`${transaccion.producto} - ${transaccion.monto}`}</Text> : null})}
            </View>
        </View>
      </ScrollView>

    );
  }
}
