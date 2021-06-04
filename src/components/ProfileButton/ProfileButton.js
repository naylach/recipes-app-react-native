import React from 'react';
import { TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default class ProfileButton extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.headerButtonContainer} onPress={this.props.onPress}>
        <Image style={styles.image} source={1===1 ? require('../../../assets/icons/selfie.jpeg') : require('../../../assets/icons/user.png')}/>
      </TouchableOpacity>
    );
  }
}

ProfileButton.propTypes = {
  onPress: PropTypes.func
};
