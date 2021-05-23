import { StyleSheet } from 'react-native';
import { RecipeCard } from '../../AppStyles';

const styles = StyleSheet.create({
  titleIngredient: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center'
  },
  photoIngredient: {
    width: '100%',
    height: 250,
    alignSelf: 'center'
  },
  ingredientInfo: {
    color: 'black',
    margin: 10,
    fontSize: 15,
    textAlign: 'left',
    fontWeight: 'bold'
  },

  //eliminar este texto despues
  nayla:{
    fontSize: 8,
    textAlign: 'left',
    margin: 2

  },

  buttonLogin: {
    borderRadius: 20,
    textAlign: 'center',
    width: 100,
    alignSelf: 'center',
    bottom: -50,
    margin: 10
  },

  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category
});

export default styles;
