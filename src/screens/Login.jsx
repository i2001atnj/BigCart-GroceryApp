import { SafeAreaView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { FIREBASE_AUTH } from "../../FirebaseConfig.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import ImageBg from "../components/ImageBg.jsx";
import { loginbg } from "../assets/assets.js";
import RegistrationForm from "../components/RegistrationForm.jsx";

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
      {/*
        {loading ? (
          <Loader size={"small"} style={{ paddingVertical: 20 }} color="#FFF" />
        ) : (
          <ButtonComponent
            buttonFunction={logIn}
            text="Login"
            disabled={!email}
          />
        )}*/}
      <RegistrationForm
        login
        titleHeader="Welcome"
        titleBody="Sign in to your account"
        buttonFunction={logIn}
        buttonTitle="Login"
        disabled={!email}
        emailInputValue={email}
        onChangeEmailTextFunction={(text) => setEmail(text)}
        passwordInputValue={password}
        onChangePasswordTextFunction={(text) => setPassword(text)}
        switchIsEnabled
        switchValue={isEnabled}
        toggleSwitchFunction={toggleSwitch}
        sectionStyle={styles.Section}
        optionalText="Don't have an account?"
        optionalButtonText="Sign up"
        optionalScreen="Signup"
      />
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
  Section: {
    zIndex: 2,
    position: "relative",
    top: "47%",
    backgroundColor: "#F4F5F9",
    height: 453,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    gap: 25,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 17,
  },
});
