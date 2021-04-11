import { StyleSheet, Dimensions } from 'react-native';
// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const numColumns = 1;
// item size
const RECIPE_ITEM_HEIGHT = 100;
const RECIPE_ITEM_OFFSET = 10;
const RECIPE_ITEM_MARGIN = RECIPE_ITEM_OFFSET * 2;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: RECIPE_ITEM_OFFSET,
    marginTop: 30,
    width: (SCREEN_WIDTH - RECIPE_ITEM_MARGIN) / numColumns - RECIPE_ITEM_OFFSET,
    height: RECIPE_ITEM_HEIGHT + 60
  },
  title: {
    color: 'black',
    fontSize: 25,
    flex: 0.9,
    textDecorationStyle: 'solid',
    paddingLeft: 10
  },
  image: {
      width: 30,
      height: 35,
      flex: 0.1
  },
  header:{
    margin: 10,
    flexDirection: 'row'
  },
  cards: {
    fontSize: 16,
    margin: 10,
    marginLeft: 30
  },
  button: {
    color: '#4BA9FF',
    textAlign: 'center',
    width: 100,
    alignSelf: 'center',
    bottom: -225
  },
  separator: {
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: 390,
    marginLeft: 10
  },
});

export default styles;
