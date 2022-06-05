import React, { useState, useEffect } from "react";
import { TouchableHighlight, View } from "react-native";
import StyledText from "../components/StyledText.jsx";

const APITEST = () => {
  const [message, setMessage] = useState("");

  const getMessageAPI = async () => {
    const response = await globalThis.fetch("http:/10.0.2.2:5000");
    // const response = await globalThis.fetch(
    //   "https://restcountries.com/v3.1/name/peru"
    // );
    const json = await response.json();
    console.log(json);
    setMessage(json.mensaje);
  };

  // useEffect(() => {
  //   getMessageAPI();
  // }, []);

  return (
    <View>
      <TouchableHighlight onPress={getMessageAPI}>
        <StyledText>enviar peticion a API</StyledText>
      </TouchableHighlight>
      <StyledText>El mensaje recibido es {message}</StyledText>
    </View>
  );
};

export default APITEST;
