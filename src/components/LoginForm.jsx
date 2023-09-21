import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Switch,
} from "react-native";
import React from "react";
import Input from "./Input";
import { mailVector, lockVector } from "../assets/icons";
import Optional from "./Optional";

const LoginForm = ({
  onChangeEmailTextFunction,
  onChangePasswordTextFunction,
  emailInputValue,
  passwordInputValue,
  switchIsEnabled,
  toggleSwitchFunction,
  switchValue,
}) => {
  return (
    <>
      <KeyboardAvoidingView
        style={{ gap: 5, marginTop: 10 }}
        enabled
        behavior="padding"
      >
        <Input
          icon={mailVector}
          placeholder="Email address"
          onChangeTextFunction={onChangeEmailTextFunction}
          value={emailInputValue}
        />
        <Input
          icon={lockVector}
          placeholder="Enter password"
          onChangeTextFunction={onChangePasswordTextFunction}
          value={passwordInputValue}
          secureTextEntry={true}
        />
      </KeyboardAvoidingView>
      <View style={styles.PasswordOptions}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Switch
            trackColor={{ false: "#FFF", true: "#6CC51D" }}
            thumbColor={switchIsEnabled ? "#FFF" : "#FFF"}
            ios_backgroundColor="#FFF"
            onValueChange={toggleSwitchFunction}
            value={switchValue}
            style={{ transform: [{ scaleX: 0.5 }, { scaleY: 0.5 }] }}
          />
          <Text style={{ fontSize: 15, fontWeight: 500, color: "#868889" }}>
            Remember me
          </Text>
        </View>
        <Optional
          optionalScreen="Auth Password Recovery Screen"
          buttonText="Forgot password?"
          buttonTextColor="#407EC7"
          style={{ position: "relative", bottom: 8 }}
        />
      </View>
    </>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  PasswordOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingRight: 10,
    marginVertical: 10,
  },
});
