import React from "react";
import { View, StyleSheet } from "react-native";
import LogIn from "../pages/LogIn.jsx";
import SingIn from "../pages/SingIn.jsx";
import VoiceTest from "../pages/VoiceTest.jsx";
import APITEST from "../pages/APITest.jsx";
import Home from "../pages/Home.jsx";

import Constants from "expo-constants";

const Main = () => {
  return (
    <View style={styles.container}>
      {/* <Home nameDoctor={"Ramirez"} /> */}
      <SingIn />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    // paddingTop: Constants.statusBarHeight,
  },
});

export default Main;
