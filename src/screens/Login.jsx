import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Switch,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { FIREBASE_AUTH } from "../../FirebaseConfig.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import ButtonComponent from "../components/ButtonComponent.jsx";
import InputComponent from "../components/InputComponent.jsx";
import ImageBg from "../components/ImageBg.jsx";
import OptionalButton from "../components/OptionalButton.jsx";
import Loader from "../components/Loader.jsx";
import { loginbg, mailVector, lockVector } from "../assets/assets.js";

export default function LogScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const logIn = async () => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert("Login failed, error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.LoginPage}>
      <ImageBg
        image={loginbg}
        returnArrow
        title="Welcome"
        style={{ height: "80%" }}
      />
      <View style={styles.Section}>
        <View style={{ alignItems: "center", gap: 5 }}>
          <Text style={{ fontSize: 24, fontWeight: 600 }}>Welcome back !</Text>
          <Text style={{ color: "#868889", fontSize: 15, fontWeight: 400 }}>
            Sign in to your account
          </Text>
        </View>
        <KeyboardAvoidingView style={{ gap: 5 }} enabled behavior="padding">
          <InputComponent
            image={mailVector}
            placeholder="Email address"
            onChangeTextFunction={(text) => setEmail(text)}
            value={email}
          />
          <InputComponent
            image={lockVector}
            placeholder="Enter password"
            onChangeTextFunction={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
          />
        </KeyboardAvoidingView>
        <View style={styles.PasswordOptions}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
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
          <OptionalButton
            screen="Password Recovery"
            text="Forgot password?"
            textColor="#407EC7"
          />
        </View>
        {loading ? (
          <Loader size={"small"} style={{ paddingVertical: 20 }} color="#FFF" />
        ) : (
          <ButtonComponent
            buttonFunction={logIn}
            text="Login"
            disabled={!email}
          />
        )}
        <View style={styles.OptionalSection}>
          <Text style={{ color: "#868889" }}>Don't have an account ?</Text>
          <OptionalButton screen="Signup" text="Sign up" textColor="#000" />
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
  },
  PasswordOptions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 17,
  },
  OptionalSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
});
