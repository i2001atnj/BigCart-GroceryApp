import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Header from "../../components/Header";
import InputComponent from "../../components/Input";
import { mailIcon } from "../../assets";
import ButtonComponent from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

export default function PasswordRecoveryScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <Header
        returnArrow
        title="Password Recovery"
        style={{ paddingRight: "30%" }}
      />
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
        <InputComponent
          image={mailIcon}
          placeholder="Email address"
          style={{ width: "92%" }}
        />
        <ButtonComponent
          text="Send link"
          style={{ marginTop: 13 }}
          buttonFunction={() => navigation.navigate("Verify Number")}
        />
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
