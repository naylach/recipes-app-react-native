import React, { useState, useContext } from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  TouchableHighlight
} from 'react-native';
import styles from './styles';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { getIngredientName, getCategoryName, getCategoryById } from '../../data/MockDataAPI';
import ViewProductsButton from '../../components/ViewProductsButton/ViewProductsButton';
import { DataContext } from "../../context";
import { recipes } from '../../data/dataArrays';

const { width: viewportWidth } = Dimensions.get('window');

export default function CatalogoScreen(props) {
  const { productosList } = useContext(DataContext);
  const [activeSlide, setActiveSlide] = useState(0);

  const renderImage = ({ item }) => (
    <TouchableHighlight>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item }} />
      </View>
    </TouchableHighlight>
  );
    const item1 = recipes[0];
    const item = productosList[0]
    const category = getCategoryById(0);
    const title = getCategoryName(category.id);
    

    return (
      <ScrollView style={styles.container}>
        <View style={styles.carouselContainer}>
          <View style={styles.carousel}>
            <Carousel
              // ref={c => {
              //   this.slider1Ref = c;
              // }}
              data={item1.photosArray}
              renderItem={renderImage}
              sliderWidth={viewportWidth}
              itemWidth={viewportWidth}
              inactiveSlideScale={1}
              inactiveSlideOpacity={1}
              firstItem={0}
              loop={false}
              autoplay={false}
              autoplayDelay={500}
              autoplayInterval={3000}
              onSnapToItem={index => setActiveSlide(index)}
            />
            <Pagination
              dotsLength={item1.photosArray.length}
              activeDotIndex={activeSlide}
              containerStyle={styles.paginationContainer}
              dotColor="#15a8ed"
              dotStyle={styles.paginationDot}
              inactiveDotColor="white"
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
              // carouselRef={this.slider1Ref}
              // tappableDots={!!this.slider1Ref}
            />
          </View>
        </View>
        <View style={styles.infoRecipeContainer}>
          <Text style={styles.infoRecipeName}>{item.descripcionCatalogo}</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.category}>{getCategoryName(item1.categoryId).toUpperCase()}</Text>
          </View>

          <View style={styles.infoContainer}>
            <Image style={styles.infoPhoto} source={require('../../../assets/icons/time.png')} />
            <Text style={styles.infoRecipe}>{item.fecha==="01-01-2021" ? "En curso" : "Próximamente"}  </Text>
          </View>

          <View style={styles.infoContainer}>
            <ViewProductsButton
              onPress={() => {
                let products = productosList;
                let title = '' + item.descripcionCatalogo;
                props.navigation.navigate('ListadoProductos', { products, title });
              }}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoDescriptionRecipe}>{item.descripcionCompleta}</Text>
          </View>
        </View>
      </ScrollView>
    );
}