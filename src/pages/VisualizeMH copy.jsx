import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  Text,
  ScrollView,
} from "react-native";
import { Formik } from "formik";
import FormikInputValue from "../components/FormikInputValue.jsx";
import StyledText from "../components/StyledText.jsx";
import VoiceToText from "../components/VoiceToText.jsx";

const VisualizeMH = ({ nameDoctor }) => {
  const { textDni, setTextDni } = useState("");
  const { result, setResult } = useState([]);

  return (
    <>
      <View style={styles.header}>
        <StyledText style={styles.text}>Médico: {nameDoctor}</StyledText>
      </View>

      <View style={styles.body}>
        <Image style={styles.image} source={require("../../assets/logo.png")} />
      </View>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleSubmit }) => {
          return (
            <View style={styles.form}>
              {/* Nombres */}
              <FormikInputValue
                style={styles.input}
                name="dni"
                placeholder="DNI"
                onChangeText={(text) => setTextDni({ text })}
                value={textDni}
              />
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <StyledText style={styles.text}>Buscar</StyledText>
              </TouchableOpacity>
            </View>
          );
        }}
      </Formik>
      <Text>Nombre - DNI</Text>
      <ScrollView style={styles.viewResult}>
        <Text>Ingrese una consulta</Text>
      </ScrollView>
    </>
  );
};

const initialValues = {
  dni: "",
};

const styles = StyleSheet.create({
  viewResult: {
    borderColor: "#1B5BB5",
    borderRadius: 15,
    borderWidth: 2,
    marginBottom: 10,
  },
  form: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "70%",
  },
  textAreaContainer: {
    borderColor: "#1B5BB5",
    borderRadius: 15,
    borderWidth: 2,
    marginBottom: 10,
  },
  textArea: {
    height: 350,
    width: 320,
    justifyContent: "center",
    textAlignVertical: "top",
    padding: 5,
  },
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
  dictado: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
  },
  button: {
    marginHorizontal: 5,
    backgroundColor: "#AEC0B6",
    textDecorationColor: "white",
    borderRadius: 10,
    width: "28%",
    justifyContent: "center",
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

export default VisualizeMH;
