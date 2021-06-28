import { StyleSheet } from "react-native";
import { RecipeCard } from "../../AppStyles";

const styles = StyleSheet.create({
  titleIngredient: {
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
  },
  TimeContainer: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },

  photoIngredient: {
    width: "100%",
    height: 250,
    alignSelf: "center",
  },
  ingredientInfo: {
    color: "black",
    margin: 10,
    fontSize: 15,
    textAlign: "left",
    fontWeight: "bold",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonAcept: {
    backgroundColor: "#2196F3",
    marginLeft: 10,
  },
  columns: {
    flexDirection: "row",
    alignSelf: "center",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    marginLeft: 10,
  },
  txtInput: {
    marginBottom: 20,
    borderBottomColor: "#000000",
    height: 40,
    width: 100,
    borderBottomWidth: 1,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  buttonLogin: {
    borderRadius: 20,
    textAlign: "center",
    width: 100,
    alignSelf: "flex-end",
    bottom: -20,
    marginRight: 30,
  },
  modalSelector: {
    justifyContent: "space-around",
    padding: 5,
    alignSelf: "center",
    width: 240,
    height: 45,
    backgroundColor: "#8dbfe3",
    borderRadius: 5,
    borderColor: "blue",
    marginBottom: 20,
  },
  container__puja: {
    flex: 0.3,
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    width: 240,
    height: 45,
    marginBottom: 25,
  },
  button__puja: {
    alignItems: "center",
    backgroundColor: "#228df7",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  text__puja: {
    width: 100,
    fontSize: 25,
    marginLeft: 15,
    marginRight: 15,
    textAlign: "center",

    backgroundColor: "white",
  },
  submit__puja: {
    paddingBottom: 20,
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },

  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category,
});

export default styles;
