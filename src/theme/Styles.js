import { StyleSheet } from "react-native";

export const GeneralStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
    marginTop: +20,
  },
  container1: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -150,
  },
  title: {
    fontSize: 80,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 20,
    color: "gray",
  },
  subTitleI: {
    fontSize: 20,
    color: "black",
    marginBottom: 30,
  },
  Input: {
    backgroundColor: "#fff",
    padding: 10,
    width: "80%",
    marginTop: 20,
    borderRadius: 30,
    height: 50,
  },
  boton: {
    height: 50,
    width: 150,
    alignItems: "center",
    borderRadius: 20,
    marginTop: 15,
    marginBottom: 10,
    backgroundColor: '#000000',
    width: '40%',
    color: '#ffffff',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export const TempStyles = StyleSheet.create({
  TempContainer: {
    backgroundColor: "#87CEEB",
    height: 200,
    width: 350,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 80,
  },
  Grades: {
    fontSize: 100,
    color: "#fff",
    marginTop: 20,
  },
  TempSlider: {
    width: "80%", marginTop: -20,
    marginTop: 7
  },
  TempSubTitle: {
    marginTop: 70,
    fontSize: 25,
    color: "#000",
  },
})
