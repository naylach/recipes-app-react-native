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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 50,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonAcept: {
    backgroundColor: "#2196F3",
    marginLeft: 10,
  },
  columns: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    marginLeft: 10,
  },
  txtInput:{
    marginBottom:20, 
    borderBottomColor:"#000000",
    height: 40,
    width:100,
    borderBottomWidth: 1,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  buttonLogin: {
    borderRadius: 20,
    textAlign: 'center',
    width: 100,
    alignSelf: 'center',
    bottom: -50
  //  margin: 10
  },

  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category
});

export default styles;
