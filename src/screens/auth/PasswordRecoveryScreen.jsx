import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { mailIcon } from "../../assets/icons/index";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

export default function PasswordRecoveryScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <StatusBar style="dark" />
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
        <Input icon={mailIcon} placeholder="Email address" />
        <Button
          text="Send link"
          style={{ marginTop: 13 }}
          buttonFunction={() =>
            navigation.navigate("Auth Verify Number Screen")
          }
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
    paddingHorizontal: 17,
  },
});
