import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Switch,
} from "react-native";
import { mailVector, lockVector } from "../assets/assets";
import React from "react";
import OptionalButton from "./OptionalButton";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";
import ContinueWithGoogleButton from "./ContinueWithGoogleButton";

const RegistrationForm = ({
  titleHeader,
  titleBody,
  continueWithGoogle,
  buttonIcon,
  buttonTitle,
  buttonFunction,
  sectionStyle,
  disabled,
  login,
  emailInputValue,
  passwordInputValue,
  onChangeEmailTextFunction,
  onChangePasswordTextFunction,
  switchIsEnabled,
  switchValue,
  toggleSwitchFunction,
  optionalText,
  optionalButtonText,
  optionalScreen,
}) => {
  return (
    <View style={sectionStyle}>
      <View style={{ width: "100%", gap: 10, marginTop: "5%" }}>
        <Text style={{ fontWeight: 600, fontSize: 24 }}>{titleHeader}</Text>
        <Text
          style={{
            color: "#868889",
            marginBottom: 10,
            fontSize: 15,
            fontWeight: 400,
          }}
        >
          {titleBody}
        </Text>
      </View>
      {continueWithGoogle ? <ContinueWithGoogleButton /> : <></>}
      {login ? (
        <>
          <KeyboardAvoidingView style={{ gap: 5 }} enabled behavior="padding">
            <InputComponent
              image={mailVector}
              placeholder="Email address"
              onChangeTextFunction={onChangeEmailTextFunction}
              value={emailInputValue}
            />
            <InputComponent
              image={lockVector}
              placeholder="Enter password"
              onChangeTextFunction={onChangePasswordTextFunction}
              value={passwordInputValue}
              secureTextEntry={true}
            />
          </KeyboardAvoidingView>
          <View style={styles.PasswordOptions}>
            <View
              style={{
                display: "flex",
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
            <OptionalButton
              screen="Password Recovery"
              text="Forgot password?"
              textColor="#407EC7"
            />
          </View>
        </>
      ) : (
        <></>
      )}

      <ButtonComponent
        image={buttonIcon}
        text={buttonTitle}
        buttonFunction={buttonFunction}
        left
        disabled={disabled}
      />
      <View style={styles.Login}>
        <Text style={{ color: "#868889" }}>{optionalText}</Text>
        <OptionalButton screen={optionalScreen} text={optionalButtonText} />
      </View>
    </View>
  );
};

export default RegistrationForm;

const styles = StyleSheet.create({
  Login: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
  },
  PasswordOptions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
