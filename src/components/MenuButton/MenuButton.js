import React from 'react';
import { TouchableHighlight, Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default function MenuButton(props) {
    return (
      <TouchableHighlight
        onPress={props.onPress}
        style={styles.btnClickContain}
        underlayColor="rgba(128, 128, 128, 0.1)"
      >
        <View style={styles.btnContainer}>
          <Image source={props.source} style={styles.btnIcon} />
          <Text style={styles.btnText}>{props.title}</Text>
        </View>
      </TouchableHighlight>
    );
}

MenuButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string
};
