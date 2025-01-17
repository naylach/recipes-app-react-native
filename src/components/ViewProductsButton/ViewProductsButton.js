import React from 'react';
import { TouchableHighlight, Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default function ViewProductsButton(props) {
    return (
      <TouchableHighlight underlayColor='#dfeef5' style={styles.touchable} onPress={props.onPress}>
        <View style={styles.container}>
          <Text style={styles.text}>Ver productos en subasta</Text>
        </View>
      </TouchableHighlight>
    );
  }

ViewProductsButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string
};
