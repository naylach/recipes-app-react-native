import React, { useContext } from 'react';
import { FlatList, ScrollView, Text, View, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import { recipes } from '../../data/dataArrays';
import { getCategoryName } from '../../data/MockDataAPI';
import { DataContext } from "../../context";

// export default function HomeScreen(props) {
//   const { catalogosList } = useContext(DataContext);

//   const onPressRecipe = item => {
//     props.navigation.navigate('Catalogo', { item });
//   };

//   const renderCatalogs = ({ item }) => (
//       <TouchableHighlight underlayColor='#dfeef5' style={styles.touchable} onPress={() => onPressRecipe(item)}>
//         <View style={styles.container}>
//           <Image style={styles.photo} source={{ uri: item.photo_url }} />
//           <Text style={styles.title}>{item.title}</Text>
//           <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
//         </View>
//       </TouchableHighlight>
//   );

//     return (
//       <View>
//         {console.log(catalogosList)}
//         <FlatList
//           vertical
//           showsVerticalScrollIndicator={false}
//           numColumns={2}
//           data={recipes}
//           renderItem={renderCatalogs}
//           keyExtractor={item => `${item.recipeId}`}
//         />
//       </View>
//     );
// }
export default function HomeScreen(props) {
  const { catalogosList } = useContext(DataContext);

  const onPressRecipe = item => {
    props.navigation.navigate('Catalogo', { item });
  };

  const renderCatalogs = ({ item }) => (
      <TouchableHighlight underlayColor='#dfeef5' style={styles.touchable} onPress={() => onPressRecipe(item)}>
        <View style={styles.container}>
          <Image style={styles.photo} source={{ uri: item.imagenes[0] }} />
          <Text style={styles.title}>{item.descripcion}</Text>
          <Text style={styles.category}>{getCategoryName(item.identificador)}</Text>
        </View>
      </TouchableHighlight>
  );
    return (
      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={catalogosList}
          renderItem={renderCatalogs}
          keyExtractor={item => `${item.identificador}`}
        />
      </View>
    );
}