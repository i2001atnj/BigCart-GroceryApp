import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { googleLogo, signUpVector } from "../assets/assets";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import OptionalButton from "./OptionalButton";
import ButtonComponent from "./ButtonComponent";

const RegistrationForm = ({ titleHeader, titleBody }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.Section}>
      <View style={{ width: 320, gap: 10, marginTop: 15 }}>
        <Text style={{ fontWeight: 600, fontSize: 24, textAlign: "center" }}>
          {titleHeader}
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
          {titleBody}
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
        buttonFunction={() => navigation.navigate("Signup")}
        left
      />
      <View style={styles.Login}>
        <Text style={{ color: "#868889" }}>Already have an account ?</Text>
        <OptionalButton screen="Login" text="Login" />
      </View>
    </View>
  );
};

export default RegistrationForm;

const styles = StyleSheet.create({
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
