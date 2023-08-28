import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { welcomebg, googleLogo, signUpVector } from "../assets/assets";
import OptionalButton from "../components/OptionalButton";
import ButtonComponent from "../components/ButtonComponent";
import { useNavigation } from "@react-navigation/native";

export default function OnboardingScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.WelcomePage}>
      <StatusBar style="light" />
      <ImageBackground
        source={welcomebg}
        resizeMode="cover"
        style={styles.BackgroundImage}
      >
        <View style={styles.Title}>
          <Text style={styles.TitleText}>Welcome</Text>
        </View>
      </ImageBackground>
      <View style={styles.Section}>
        <View style={{ width: 320, gap: 10, marginTop: 15 }}>
          <Text style={{ fontWeight: 600, fontSize: 24, textAlign: "center" }}>
            Welcome
          </Text>
          <Text
            style={{
              color: "#868889",
              textAlign: "center",
              marginBottom: 10,
              fontSize: 15,
              fontWeight: 400,
            }}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy
          </Text>
        </View>
        <View style={styles.ButtonContainer1}>
          <TouchableOpacity style={styles.Button}>
            <Image
              source={googleLogo}
              style={{ position: "relative", right: 70 }}
            />
            <Text style={styles.ButtonText1}>Continue with Google</Text>
          </TouchableOpacity>
        </View>
        <ButtonComponent
          image={signUpVector}
          text={"Create an account"}
          buttonFunction={() => navigation.navigate("Sign Screen")}
          left
        />
        <View style={styles.Login}>
          <Text style={{ color: "#868889" }}>Already have an account ?</Text>
          <OptionalButton screen="Log Screen" text="Login" />
        </View>
      </View>
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
  TitleText: {
    fontSize: 20,
    fontWeight: 500,
    color: "#FFF",
    textAlign: "center",
    marginTop: 60,
  },
  BackgroundImage: {
    height: 638,
    zIndex: 1,
    position: "absolute",
    width: "100%",
  },
  Section: {
    backgroundColor: "#F4F5F9",
    width: "100%",
    zIndex: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position: "relative",
    bottom: 0,
    top: "55%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  ButtonContainer1: {
    backgroundColor: "#FFFFFF",
    width: "91%",
    height: 60,
    borderRadius: 5,
    marginBottom: 15,
    justifyContent: "center",
    marginTop: 15,
  },
  Button: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  ButtonText1: {
    color: "#000",
    textAlign: "center",
    fontSize: 16,
    fontWeight: 500,
  },
  Login: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
  },
});
