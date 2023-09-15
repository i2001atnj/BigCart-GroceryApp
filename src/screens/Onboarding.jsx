import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import RegistrationForm from "../components/RegistrationForm";
import ImageBg from "../components/ImageBg";
import { signUpVector, welcomebg } from "../assets/assets";
import { useNavigation } from "@react-navigation/native";

export default function OnboardingScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.WelcomePage}>
      <StatusBar style="light" />
      <ImageBg title="Welcome" image={welcomebg} style={{ height: "90%" }} />
      <RegistrationForm
        titleHeader="Welcome"
        titleBody="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy"
        continueWithGoogle
        buttonFunction={() => navigation.navigate("Signup")}
        buttonTitle="Create an account"
        buttonIcon={signUpVector}
        sectionStyle={styles.Section}
        optionalText="Already have an account?"
        optionalButtonText="Login"
        optionalScreen="Login"
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
  Section: {
    backgroundColor: "#F4F5F9",
    width: "100%",
    zIndex: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position: "relative",
    bottom: 0,
    top: "62%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 17,
  },
});
