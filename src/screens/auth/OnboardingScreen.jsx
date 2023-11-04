import { SafeAreaView, StyleSheet, useWindowDimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import EntryForm from "../../components/EntryForm";
import ImageBg from "../../components/ImageBg";
import { signUpVector, welcomebg } from "../../assets/icons/index";
import { useNavigation } from "@react-navigation/native";

export default function OnboardingScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.OnboardingPage}>
      <StatusBar style="light" />
      <ImageBg
        title="Welcome"
        image={welcomebg}
        bgStyle={{ height: "90%" }}
        headerStyle={{ justifyContent: "center" }}
      />
      <EntryForm
        titleHeader="Welcome"
        titleBody="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy"
        continueWithGoogle
        buttonFunction={() => navigation.navigate("Auth Signup Screen")}
        buttonTitle="Create an account"
        buttonIcon={signUpVector}
        sectionStyle={styles.Section}
        addOptionalSection
        optionalText="Already have an account?"
        optionalButtonText="Login"
        optionalScreen="Auth Login Screen"
        bgColor="#F4F5F9"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  OnboardingPage: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  Section: {
    width: "100%",
    zIndex: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position: "relative",
    bottom: 0,
    top: "59%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 17,
    backgroundColor: "#F4F5F9",
  },
});
