import React from 'react';
import { FlatList, ScrollView, Text, View, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import { recipes } from '../../data/dataArrays';
import MenuImage from '../../components/MenuImage/MenuImage';
import ProfileButton from '../../components/ProfileButton/ProfileButton';
import { getCategoryName } from '../../data/MockDataAPI';

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Inicio',
    headerLeft: () => 1===1 ?
      <MenuImage
        onPress={() => {
          navigation.openDrawer();
        }}
      /> : <></>,
    headerRight: () =>
      <ProfileButton
        onPress={() => {
          navigation.navigate('MiPerfil');
        }}
      />
  });

  constructor(props) {
    super(props);
  }

  onPressRecipe = item => {
    this.props.navigation.navigate('Catalogo', { item });
  };

  renderCatalogs = ({ item }) => (
      <TouchableHighlight underlayColor='transparent'  onPress={() => this.onPressRecipe(item)}>
        <View style={styles.container}>
          <Image style={styles.photo} source={{ uri: item.photo_url }} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
        </View>
      </TouchableHighlight>
  );

  render() {
    return (
      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={recipes}
          renderItem={this.renderCatalogs}
          keyExtractor={item => `${item.recipeId}`}
        />
      </View>
    );
  }
}
