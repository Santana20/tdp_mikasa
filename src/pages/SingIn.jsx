import React from "react";
import { Formik } from "formik";
import { ScrollView, StyleSheet, Button, Image } from "react-native";
import StyledTextInput from "../components/StyledTextInput.jsx";
import StyledText from "../components/StyledText.jsx";
import { singinValidationScheme } from "../validationSchemas/singin.js";
import FormikInputValue from "../components/FormikInputValue.jsx";

const SingIn = () => {
  return (
    <Formik
      validationSchema={singinValidationScheme}
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit }) => {
        return (
          <ScrollView style={styles.form}>
            <Image
              style={styles.image}
              source={require("../../assets/logo.png")}
            />
            {/* Nombres */}
            <FormikInputValue name="nombres" placeholder="Nombres" />
            <FormikInputValue name="apellidos" placeholder="Apellidos" />
            <FormikInputValue
              name="password"
              placeholder="Contraseña"
              secureTextEntry
            />
            <FormikInputValue
              name="confirm_password"
              placeholder="Confirmar Contraseña"
              secureTextEntry
            />
            <FormikInputValue name="email" placeholder="Correo" />
            <FormikInputValue
              name="codigo_doctor"
              placeholder="Codigo del doctor/enfermera"
            />
            <FormikInputValue name="dni" placeholder="DNI" />
            <FormikInputValue
              name="centro_salud"
              placeholder="Centro de salud"
            />
            <FormikInputValue
              name="ubic_centro_salud"
              placeholder="Ubicacion de centro de salud"
            />
            <Button onPress={handleSubmit} title="Registrar" />
          </ScrollView>
        );
      }}
    </Formik>
  );
};

const initialValues = {
  nombres: "prueba",
  apellidos: "prueba",
  password: "prueba",
  confirm_password: "prueba",
  email: "prueba@prueba.com",
  codigo_doctor: "",
  dni: "",
  centro_salud: "prueba",
  ubic_centro_salud: "prueba",
};

const styles = StyleSheet.create({
  form: {
    margin: 12,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    alignSelf: "center",
  },
});

export default SingIn;
