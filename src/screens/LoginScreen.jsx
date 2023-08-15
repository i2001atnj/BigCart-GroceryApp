import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  Switch,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function Login({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <SafeAreaView style={styles.LoginPage}>
      <>
        <ImageBackground
          source={require("../assets/loginbg.png")}
          resizeMode="cover"
          style={styles.BackgroundImage}
        >
          <View style={styles.Title}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ position: "relative", top: 30 }}
            >
              <Image source={require("../assets/backVector.png")} />
            </TouchableOpacity>
            <View style={{ position: "relative", right: 156 }}>
              <Text style={styles.TitleText}>Welcome</Text>
            </View>
          </View>
        </ImageBackground>
      </>
      <View style={styles.Section}>
        <View style={styles.Text}>
          <Text style={styles.TextTitle}>Welcome back !</Text>
          <Text style={styles.TextInfo}>Sign in to your account</Text>
        </View>
        <View style={styles.LoginSection}>
          <View style={styles.InputContainer}>
            <Image source={require("../assets/mailVector.png")} />
            <TextInput
              placeholder="Email address"
              placeholderTextColor="#868889"
              style={styles.Input}
            />
          </View>
          <View style={styles.InputContainer}>
            <Image source={require("../assets/lockVector.png")} />
            <TextInput
              placeholder="Enter password"
              placeholderTextColor="#868889"
              style={styles.Input}
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={styles.PasswordOptions}>
          <View style={styles.RememberMe}>
            <Switch
              trackColor={{ false: "#FFF", true: "#6CC51D" }}
              thumbColor={isEnabled ? "#FFF" : "#FFF"}
              ios_backgroundColor="#FFF"
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={{ transform: [{ scaleX: 0.5 }, { scaleY: 0.5 }] }}
            />
            <Text style={{ fontSize: 15, fontWeight: 500, color: "#868889" }}>
              Remember me
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Recovery")}>
            <Text style={{ fontSize: 15, fontWeight: 500, color: "#407EC7" }}>
              Forgot password ?
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ButtonContainer}>
          <LinearGradient
            colors={["#AEDC81", "#6CC51D"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
          >
            <TouchableOpacity style={styles.Button}>
              <Text style={styles.ButtonText}>Login</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View style={styles.OptionalSection}>
          <Text style={{ color: "#868889" }}>Don't have an account ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Sign up")}>
            <Text style={{ color: "#000000", fontWeight: 600 }}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  LoginPage: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  BackgroundImage: {
    height: 537,
    zIndex: 1,
    position: "absolute",
    width: "100%",
  },
  Title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 17,
    alignItems: "center",
  },
  TitleText: {
    fontSize: 20,
    fontWeight: 500,
    color: "#FFF",
    textAlign: "center",
    marginTop: 60,
  },
  Section: {
    zIndex: 2,
    position: "relative",
    top: "47%",
    backgroundColor: "#F4F5F9",
    height: 453,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    gap: 20,
    paddingTop: 30,
    paddingHorizontal: 17,
  },
  Text: {
    alignItems: "center",
    gap: 5,
  },
  TextTitle: {
    fontSize: 24,
    fontWeight: 600,
  },
  TextInfo: {
    color: "#868889",
    fontSize: 15,
    fontWeight: 400,
  },
  LoginSection: {
    gap: 15,
  },
  InputContainer: {
    height: 60,
    backgroundColor: "#FFF",
    paddingHorizontal: 28,
    display: "flex",
    flexDirection: "row",
    borderRadius: 5,
    alignItems: "center",
    gap: 21,
  },
  Input: {
    fontSize: 16,
    width: "80%",
  },
  PasswordOptions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  RememberMe: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  ButtonContainer: {
    width: "100%",
    height: 60,
    borderRadius: 5,
    shadowColor: "#AEDC81",
    shadowOffset: { height: 10, width: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    justifyContent: "center",
  },
  Button: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  ButtonText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 16,
    fontWeight: 500,
  },
  OptionalSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
});
