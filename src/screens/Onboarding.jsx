import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import RegistrationForm from "../components/RegistrationForm";
import ImageBg from "../components/ImageBg";
import { welcomebg } from "../assets/assets";

export default function OnboardingScreen() {
  return (
    <SafeAreaView style={styles.WelcomePage}>
      <StatusBar style="light" />
      <ImageBg title="Welcome" image={welcomebg} />
      <RegistrationForm
        titleHeader="Welcome"
        titleBody="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  WelcomePage: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
});
