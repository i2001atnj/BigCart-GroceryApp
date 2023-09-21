import { StyleSheet, Text, KeyboardAvoidingView } from "react-native";
import React from "react";
import Input from "./Input";
import { mailVector, lockVector, phoneVector } from "../assets/icons";

const RegisterForm = ({
  onChangeEmailTextFunction,
  onChangePasswordTextFunction,
  emailInputValue,
  passwordInputValue,
}) => {
  return (
    <KeyboardAvoidingView style={{ gap: 5 }} behavior="padding">
      <Input
        icon={mailVector}
        placeholder="Email address"
        onChangeTextFunction={onChangeEmailTextFunction}
        value={emailInputValue}
      />
      <Input icon={phoneVector} placeholder="Phone number (optional)" />
      <Input
        icon={lockVector}
        placeholder="Enter password"
        onChangeTextFunction={onChangePasswordTextFunction}
        value={passwordInputValue}
        secureTextEntry={true}
      />
    </KeyboardAvoidingView>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({});
