import { SafeAreaView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { FIREBASE_AUTH } from "../../../FirebaseConfig.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import ImageBg from "../../components/ImageBg.jsx";
import RegistrationForm from "../../components/EntryForm.jsx";
import { loginbg } from "../../assets/icons/index";

export default function LoginScreen() {
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
        bgStyle={{ height: "80%" }}
        headerStyle={{ justifyContent: "space-between" }}
        titleStyle={{ marginRight: "40%" }}
        arrowColor={"white"}
      />
      <RegistrationForm
        login
        titleHeader="Welcome back !"
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
        optionalScreen="Auth Signup Screen"
        loading={loading}
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
    backgroundColor: "#F4F5F9",
    width: "100%",
    zIndex: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position: "relative",
    bottom: 0,
    top: "52%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 17,
  },
});
