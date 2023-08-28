import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";
import AccessInput from "../components/AccessInput";
import { mailIcon } from "../assets/assets";
import ButtonComponent from "../components/ButtonComponent";

export default function PasswordRecovery() {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <Header arrow title="Password Recovery" style={{ paddingRight: "30%" }} />
      <View style={styles.Section}>
        <Text style={{ marginTop: 90, fontSize: 25, fontWeight: 600 }}>
          Forgot Password
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 500,
            color: "#868889",
            marginTop: 15,
            marginBottom: 40,
            textAlign: "center",
            paddingHorizontal: 60,
          }}
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy
        </Text>
        <AccessInput
          image={mailIcon}
          placeholder="Email address"
          style={{ width: "92%" }}
        />
        <ButtonComponent text="Send link" style={{ marginTop: 13 }} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Section: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    backgroundColor: "#F4F5F9",
  },
});
