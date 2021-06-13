import { StyleSheet, Dimensions } from "react-native";
// screen sizing
const { width, height } = Dimensions.get("window");
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const numColumns = 1;
// item size
const RECIPE_ITEM_HEIGHT = 100;
const RECIPE_ITEM_OFFSET = 10;
const RECIPE_ITEM_MARGIN = RECIPE_ITEM_OFFSET * 2;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: RECIPE_ITEM_OFFSET,
    marginTop: 30,
    width:
      (SCREEN_WIDTH - RECIPE_ITEM_MARGIN) / numColumns - RECIPE_ITEM_OFFSET,
    height: RECIPE_ITEM_HEIGHT + 60,
    backgroundColor: "#E7F3FF",
  },
  title: {
    margin: 5,
    padding: 5,
    color: "black",
    fontSize: 15,
    textAlign: "center",
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
  },
  btnimage: {
    fontSize: 10,
    textAlign: "center",
    alignSelf: "center",
    width: 100,
    color: "#8dbfe3",
  },
  input: {
    borderRadius: 5,
    backgroundColor: "#8dbfe3",
    width: 220,
    height: 30,
    fontSize: 15,
    alignSelf: "center",
    textAlign: "center",
  },
  description: {
    borderRadius: 5,
    backgroundColor: "#8dbfe3",
    width: 300,
    height: 80,
    fontSize: 15,
    alignSelf: "center",
    textAlign: "left",
  },
  editIcon: {
    marginTop: 10,
    width: 40,
    height: 40,
    alignSelf: "center",
  },
  buttonLogin: {
    borderRadius: 20,
    textAlign: "center",
    width: 180,
    alignSelf: "center",
    margin: 10,
  },
  buttonAdd: {
    borderRadius: 20,
    textAlign: "center",
    width: 50,
    alignSelf: "center",
    bottom: -50,
    margin: 10,
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
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalTitle: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 10,
    fontWeight: "bold",
  },
  imageModal: {
    width: 60,
    height: 60,
    alignSelf: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  buttonClose: {
    borderRadius: 20,
    textAlign: "center",
    width: 100,
    alignSelf: "center",
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;