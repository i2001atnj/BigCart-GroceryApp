import { StyleSheet, Text, View } from "react-native";
import Optional from "./Optional";
import Button from "./Button";
import GoogleButton from "./GoogleButton";
import Loader from "./Loader";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

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
  addOptionalSection,
}) => {
  return (
    <View style={sectionStyle}>
      <View style={{ width: "100%", gap: 10, marginTop: "5%" }}>
        <Text style={{ fontWeight: 600, fontSize: 24 }}>{titleHeader}</Text>
        <Text style={[styles.TitleBodyText, { fontWeight: 500 }]}>
          {titleBody}
        </Text>
      </View>
      {continueWithGoogle ? <GoogleButton /> : <></>}
      {login ? (
        <LoginForm
          onChangeEmailTextFunction={onChangeEmailTextFunction}
          onChangePasswordTextFunction={onChangePasswordTextFunction}
          emailInputValue={emailInputValue}
          passwordInputValue={passwordInputValue}
          switchIsEnabled={switchIsEnabled}
          toggleSwitchFunction={toggleSwitchFunction}
          switchValue={switchValue}
        />
      ) : (
        <></>
      )}
      {register ? (
        <RegisterForm
          onChangeEmailTextFunction={onChangeEmailTextFunction}
          onChangePasswordTextFunction={onChangePasswordTextFunction}
          emailInputValue={emailInputValue}
          passwordInputValue={passwordInputValue}
        />
      ) : (
        <></>
      )}
      {loading ? (
        <Loader size={"small"} style={{ paddingVertical: 20 }} color="#FFF" />
      ) : (
        <Button
          image={buttonIcon}
          text={buttonTitle}
          buttonFunction={buttonFunction}
          left
          disabled={disabled}
        />
      )}
      {addOptionalSection ? (
        <Optional
          optionalText={optionalText}
          buttonText={optionalButtonText}
          optionalScreen={optionalScreen}
          style={styles.OptionalSection}
        />
      ) : (
        <></>
      )}
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
  TitleBodyText: {
    color: "#868889",
    marginBottom: 10,
    fontSize: 15,
    fontWeight: 400,
  },
});
