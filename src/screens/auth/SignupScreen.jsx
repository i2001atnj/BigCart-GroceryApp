import { SafeAreaView, StyleSheet } from "react-native";
import { createbg } from "../../assets";
import React, { useState } from "react";
import { FIREBASE_AUTH } from "../../../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import ImageBg from "../../components/ImageBg";
import RegistrationForm from "../../components/EntryForm";

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
        style={{ height: "100%" }}
      />
      {/* <View style={styles.Section}>
        <View style={{ alignItems: "center", gap: 5 }}>
          <Text style={{ fontSize: 24, fontWeight: 600 }}>Create account</Text>
          <Text style={{ color: "#868889", fontSize: 15, fontWeight: 400 }}>
            Quickly create account
          </Text>
        </View>
        <KeyboardAvoidingView style={{ gap: 5 }} behavior="padding">
          <InputComponent
            image={mailVector}
            placeholder="Email address"
            onChangeTextFunction={(text) => setEmail(text)}
            value={email}
          />
          <InputComponent
            image={phoneVector}
            placeholder="Phone number (optional)"
          />
          <InputComponent
            image={lockVector}
            placeholder="Create password"
            onChangeTextFunction={(text) => setPassword(text)}
            value={password}
          />
        </KeyboardAvoidingView>
        {loading ? (
          <Loader size="small" style={{ paddingVertical: 20 }} color="#fff" />
        ) : (
          <ButtonComponent buttonFunction={signUp} text="Sign up" />
        )}
        <View style={styles.OptionalSection}>
          <Text style={{ color: "#868889" }}>Already have an account ?</Text>
          <OptionalButton screen="Login" text="Login" />
        </View>
      </View> */}
      <RegistrationForm
        login
        titleHeader="Create account"
        titleBody="Sign in to your account"
        buttonFunction={signUp}
        buttonTitle="Login"
        disabled={!email}
        emailInputValue={email}
        // onChangeEmailTextFunction={(text) => setEmail(text)}
        passwordInputValue={password}
        // onChangePasswordTextFunction={(text) => setPassword(text)}
        sectionStyle={styles.Section}
        optionalText="Don't have an account?"
        optionalButtonText="Sign up"
        optionalScreen="Signup"
        loading={loading}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  BackgroundImage: {
    height: 481,
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
    position: "relative",
    right: 156,
  },
  Section: {
    zIndex: 2,
    position: "relative",
    top: "80%",
    backgroundColor: "#F4F5F9",
    height: 453,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    gap: 20,
    paddingTop: 30,
  },
  OptionalSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
});
