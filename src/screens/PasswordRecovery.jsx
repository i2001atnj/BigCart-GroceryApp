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

export default function PasswordRecovery({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.Header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require("../assets/blackArrow.png")} />
        </TouchableOpacity>
        <Text style={styles.Title}>Password Recovery</Text>
      </View>
      <View style={styles.Section}>
        <Text style={styles.ForgotPasswordTitle}>Forgot Password</Text>
        <Text style={styles.ForgotPasswordInfo}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy
        </Text>
      </View>
      <View style={styles.InputsSection}>
        <View style={styles.InputContainer}>
          <Image source={require("../assets/mailVector.png")} />
          <TextInput
            placeholder="Email address"
            placeholderTextColor="#868889"
            style={styles.Input}
          />
        </View>
        <View style={styles.ButtonContainer}>
          <LinearGradient
            colors={["#AEDC81", "#6CC51D"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
          >
            <TouchableOpacity style={styles.Button}>
              <Text style={styles.ButtonText}>Send link</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginHorizontal: 17,
    width: "100%",
    alignItems: "center",
    marginTop: 7,
  },
  Title: {
    fontSize: 20,
    fontWeight: 500,
    marginLeft: "20%",
  },
  Section: {
    marginTop: "30%",
    alignItems: "center",
    gap: 15,
  },
  ForgotPasswordTitle: {
    fontSize: 25,
    fontWeight: 600,
  },
  ForgotPasswordInfo: {
    textAlign: "center",
    color: "#868889",
    width: 320,
    fontSize: 15,
    fontWeight: 500,
  },
  InputsSection: {
    gap: 13,
    marginTop: 44,
    paddingHorizontal: 17,
  },
  InputContainer: {
    height: 60,
    backgroundColor: "#FFF",
    paddingHorizontal: 28,
    display: "flex",
    flexDirection: "row",
    borderRadius: 5,
    alignItems: "center",
    gap: 20,
  },
  Input: {
    fontSize: 16,
    width: "80%",
  },
  ButtonContainer: {
    width: "100%",
    height: 60,
    borderRadius: 5,
    shadowColor: "#AEDC81",
    shadowOffset: { height: 10, width: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    backgroundColor: "transparent",
    justifyContent: "center",
  },
  Button: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  ButtonText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 16,
    fontWeight: 500,
  },
});
