import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Switch,
} from "react-native";
import { mailVector, lockVector, phoneVector } from "../assets/icons/index";
import OptionalButton from "./OptionalButton";
import ButtonComponent from "./Button";
import Input from "./Input";
import GoogleButton from "./GoogleButton";
import Loader from "./Loader";

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
  loading,
  register,
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
      {continueWithGoogle ? <GoogleButton /> : <></>}
      {login ? (
        <>
          <KeyboardAvoidingView
            style={{ gap: 5, marginTop: 10 }}
            enabled
            behavior="padding"
          >
            <Input
              image={mailVector}
              placeholder="Email address"
              onChangeTextFunction={onChangeEmailTextFunction}
              value={emailInputValue}
            />
            <Input
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
              screen="Auth Password Recovery Screen"
              text="Forgot password?"
              textColor="#407EC7"
            />
          </View>
        </>
      ) : (
        <></>
      )}
      {register ? (
        <KeyboardAvoidingView style={{ gap: 5 }} behavior="padding">
          <Input
            image={mailVector}
            placeholder="Email address"
            onChangeTextFunction={onChangeEmailTextFunction}
            value={emailInputValue}
          />
          <Input image={phoneVector} placeholder="Phone number (optional)" />
          <Input
            image={lockVector}
            placeholder="Enter password"
            onChangeTextFunction={onChangePasswordTextFunction}
            value={passwordInputValue}
            secureTextEntry={true}
          />
        </KeyboardAvoidingView>
      ) : (
        <></>
      )}
      {loading ? (
        <Loader size={"small"} style={{ paddingVertical: 20 }} color="#FFF" />
      ) : (
        <ButtonComponent
          image={buttonIcon}
          text={buttonTitle}
          buttonFunction={buttonFunction}
          left
          disabled={disabled}
        />
      )}
      <View style={styles.OptionalSection}>
        <Text style={{ color: "#868889" }}>{optionalText}</Text>
        <OptionalButton screen={optionalScreen} text={optionalButtonText} />
      </View>
    </View>
  );
};

export default RegistrationForm;

const styles = StyleSheet.create({
  OptionalSection: {
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
  },
  PasswordOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingRight: 10,
    marginVertical: 15,
  },
});
