import React from "react";
import { View, StyleSheet } from "react-native";
import LogIn from "../pages/LogIn.jsx";
import SingIn from "../pages/SingIn.jsx";
import VoiceTest from "../pages/VoiceTest.jsx";

import Constants from "expo-constants";

const Main = () => {
  return (
    <View style={styles.container}>
      <VoiceTest />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 10,
  },
});

export default Main;
