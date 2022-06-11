import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import StyledText from "../components/StyledText.jsx";

const Home = ({ nameDoctor }) => {
  return (
    <>
      <View style={styles.header}>
        <StyledText style={styles.text}>Bienvenido {nameDoctor} </StyledText>
      </View>
      <View style={styles.body}>
        <Image style={styles.image} source={require("../../assets/logo.png")} />
      </View>
      <View style={styles.buttons}>
        <View style={styles.row_buttons}>
          <TouchableOpacity style={styles.button} title="">
            <StyledText style={styles.text}>Registrar HC </StyledText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <StyledText style={styles.text}>Visualizar HC </StyledText>
          </TouchableOpacity>
        </View>
        <View style={styles.row_buttons}>
          <TouchableOpacity style={styles.button}>
            <StyledText style={styles.text}>Reporte de edicion</StyledText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <StyledText style={styles.text}>Cerrar Sesion</StyledText>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 20,
  },

  header: {
    backgroundColor: "#AEC0B6",
  },
  body: {
    margin: 12,
    // backgroundColor: "black",
  },
  buttons: {
    alignItems: "center",
  },
  row_buttons: {
    flexDirection: "row",
  },
  button: {
    margin: 7,
    backgroundColor: "#AEC0B6",
    textDecorationColor: "white",
    borderRadius: 20,
    alignItems: "center",
    width: "40%",
    justifyContent: "center",
    padding: 15,
  },
  text: {
    color: "white",
    padding: 5,
    textAlign: "center",
    fontSize: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 20,
    alignSelf: "center",
  },
});

export default Home;
