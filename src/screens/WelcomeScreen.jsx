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
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.WelcomePage}>
      <StatusBar style="light" />
      <>
        <ImageBackground
          source={require("../assets/welcomebg.png")}
          resizeMode="cover"
          style={styles.BackgroundImage}
        >
          <View style={styles.Title}>
            <Text style={styles.TitleText}>Welcome</Text>
          </View>
        </ImageBackground>
      </>
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
          <View style={{ borderRadius: 5 }}>
            <TouchableOpacity style={styles.Button}>
              <Image
                source={require("../assets/googleLogo.png")}
                style={{ position: "relative", right: 70 }}
              />
              <Text style={styles.ButtonText1}>Continue with Google</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.ButtonContainer2}>
          <LinearGradient
            colors={["#AEDC81", "#6CC51D"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
          >
            <TouchableOpacity
              style={styles.Button}
              onPress={() => navigation.navigate("Sign up")}
            >
              <Image
                source={require("../assets/signUpVector.png")}
                style={{ position: "relative", right: 80 }}
              />
              <Text style={styles.ButtonText2}>Create an account</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View style={styles.Login}>
          <Text style={{ color: "#868889" }}>Already have an account ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Log in")}>
            <Text style={{ fontWeight: 600 }}>Login</Text>
          </TouchableOpacity>
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
    paddingHorizontal: 17,
  },
  ButtonContainer1: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: 60,
    borderRadius: 5,
    marginBottom: 40,
    justifyContent: "center",
    marginTop: 15,
  },
  ButtonContainer2: {
    width: "100%",
    height: 60,
    borderRadius: 5,
    marginBottom: 50,
    shadowColor: "#AEDC81",
    shadowOffset: { height: 10, width: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    justifyContent: "center",
    marginTop: -30,
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
  ButtonText2: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 16,
    fontWeight: 500,
  },
  Login: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
});
