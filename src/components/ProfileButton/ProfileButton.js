import React, { useContext, useState } from 'react';
import { TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { DataContext } from '../../context';

export default function ProfileButton(props) {
  const { currentUser } = useContext(DataContext);
    return (
      <TouchableOpacity style={styles.headerButtonContainer} onPress={props.onPress}>
        <Image style={styles.image} source={currentUser ? require('../../../assets/icons/selfie.jpeg') : require('../../../assets/icons/user.png')}/>
      </TouchableOpacity>
    );
}

ProfileButton.propTypes = {
  onPress: PropTypes.func
};
