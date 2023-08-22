import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Image,
  TextInput,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      alert("Account saved successfully");
    } catch (error) {
      console.log(error);
      alert("Login failed, error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView>
      <>
        <ImageBackground
          source={require("../assets/createbg.png")}
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
          <Text style={styles.TextTitle}>Create account</Text>
          <Text style={styles.TextInfo}>Quickly create account</Text>
        </View>
        <View style={styles.SignUpSection}>
          <KeyboardAvoidingView behavior="padding">
            <View style={styles.InputContainer}>
              <Image source={require("../assets/mailVector.png")} />
              <TextInput
                placeholder="Email address"
                placeholderTextColor="#868889"
                style={styles.Input}
                autoCapitalize="none"
                onChangeText={(text) => setEmail(text)}
                value={email}
              />
            </View>
            <View style={styles.InputContainer}>
              <Image source={require("../assets/phoneVector.png")} />
              <TextInput
                placeholder="Phone number (optional)"
                placeholderTextColor="#868889"
                style={styles.Input}
              />
            </View>
            <View style={styles.InputContainer}>
              <Image source={require("../assets/lockVector.png")} />
              <TextInput
                placeholder="Create password"
                placeholderTextColor="#868889"
                style={styles.Input}
                secureTextEntry={true}
                autoCapitalize="none"
                onChangeText={(text) => setPassword(text)}
                value={password}
              />
            </View>
          </KeyboardAvoidingView>
        </View>
        <View style={styles.ButtonContainer}>
          {loading ? (
            <LinearGradient
              colors={["#AEDC81", "#6CC51D"]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              style={{ opacity: 0.5 }}
            >
              <ActivityIndicator
                size="small"
                style={{ paddingVertical: 20 }}
                color="#fff"
              />
            </LinearGradient>
          ) : (
            <LinearGradient
              colors={["#AEDC81", "#6CC51D"]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
            >
              <TouchableOpacity onPress={signUp} style={styles.Button}>
                <Text style={styles.ButtonText}>Sign up</Text>
              </TouchableOpacity>
            </LinearGradient>
          )}
        </View>
        <View style={styles.OptionalSection}>
          <Text style={{ color: "#868889" }}>Already have an account ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Log in")}>
            <Text style={{ color: "#000000", fontWeight: 600 }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  SignUpSection: {
    gap: 15,
  },
  InputContainer: {
    height: 60,
    backgroundColor: "#FFF",
    paddingHorizontal: 28,
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 17,
    borderRadius: 5,
    alignItems: "center",
    gap: 21,
  },
  Input: {
    fontSize: 16,
    width: "80%",
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
    paddingHorizontal: 17,
    marginTop: 10,
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
