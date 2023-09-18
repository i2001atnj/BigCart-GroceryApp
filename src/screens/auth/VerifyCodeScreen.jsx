import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import React from "react";
import Header from "../../components/Header";
import ButtonComponent from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import CodeInput from "../../components/CodeInput";

const VerifyCodeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", height: "100%" }}>
      <Header
        returnArrow
        title="Verify Number"
        titleStyle={{ marginRight: "35%" }}
      />
      <View
        style={{
          height: "100%",
          backgroundColor: "#F4F5F9",
          paddingHorizontal: 17,
        }}
      >
        <Text
          style={{
            marginTop: 90,
            fontSize: 25,
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          Verify your number
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
          Enter your OTP code below
        </Text>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            justifyContent: "center",
          }}
        >
          <CodeInput />
          <CodeInput />
          <CodeInput />
          <CodeInput />
          <CodeInput />
        </View>
        <ButtonComponent text="Next" style={{ marginTop: 13 }} />
      </View>
    </SafeAreaView>
  );
};

export default VerifyCodeScreen;

const styles = StyleSheet.create({});
