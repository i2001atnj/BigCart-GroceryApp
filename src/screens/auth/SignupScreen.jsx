import { SafeAreaView, StyleSheet } from "react-native";
import { createbg } from "../../assets/icons/index";
import React, { useState } from "react";
import { FIREBASE_AUTH } from "../../../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import ImageBg from "../../components/ImageBg";
import EntryForm from "../../components/EntryForm";

export default function SignupScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signUp = async () => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account saved successfully");
    } catch (error) {
      alert("Login failed, error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView>
      <ImageBg
        image={createbg}
        returnArrow
        title="Welcome"
        bgStyle={{ height: "100%" }}
        arrowColor="#fff"
        titleStyle={{ marginRight: "40%" }}
      />
      <EntryForm
        register
        titleHeader="Create account"
        titleBody="Quickly create account"
        buttonFunction={signUp}
        buttonTitle="Sign up"
        disabled={!email}
        emailInputValue={email}
        onChangeEmailTextFunction={(text) => setEmail(text)}
        passwordInputValue={password}
        onChangePasswordTextFunction={(text) => setPassword(text)}
        sectionStyle={styles.Section}
        addOptionalSection
        optionalText="Already have an account?"
        optionalButtonText="Login"
        optionalScreen="Auth Login Screen"
        loading={loading}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Section: {
    backgroundColor: "#F4F5F9",
    width: "100%",
    zIndex: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position: "relative",
    bottom: 0,
    top: "78%",
    alignItems: "center",
    paddingHorizontal: 17,
    paddingVertical: 10,
    height: 500,
    gap: 10,
  },
});
