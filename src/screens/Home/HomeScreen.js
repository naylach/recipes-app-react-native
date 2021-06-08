import React, { useLayoutEffect } from 'react';
import { FlatList, ScrollView, Text, View, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import { recipes } from '../../data/dataArrays';
import MenuImage from '../../components/MenuImage/MenuImage';
import ProfileButton from '../../components/ProfileButton/ProfileButton';
import { getCategoryName } from '../../data/MockDataAPI';

export default function HomeScreen(props) {

  const onPressRecipe = item => {
    props.navigation.navigate('Catalogo', { item });
  };

  const renderCatalogs = ({ item }) => (
      <TouchableHighlight underlayColor='#dfeef5' style={styles.touchable} onPress={() => onPressRecipe(item)}>
        <View style={styles.container}>
          <Image style={styles.photo} source={{ uri: item.photo_url }} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
        </View>
      </TouchableHighlight>
  );

    return (
      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={recipes}
          renderItem={renderCatalogs}
          keyExtractor={item => `${item.recipeId}`}
        />
      </View>
    );
}
