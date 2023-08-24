import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React from "react";

export default function AboutMeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.AboutMe}>
      <View style={styles.Header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require("../assets/blackArrow.png")} />
        </TouchableOpacity>
        <Text style={styles.Title}>About Me</Text>
      </View>
      <View style={styles.Details}>
        <Text style={styles.DetailTitle}>Personal Details</Text>
        <View style={styles.Detail}>
          <Image source={require("../assets/nameIcon.png")} />
          <TextInput
            style={styles.DetailInfo}
            placeholder="Olivia Austin"
            placeholderTextColor="#868889"
          />
        </View>
        <View style={styles.Detail}>
          <Image source={require("../assets/mailIcon.png")} />
          <TextInput
            style={styles.DetailInfo}
            placeholder="oliviaaustin@gmail.com"
            placeholderTextColor="#868889"
          />
        </View>
        <View style={styles.Detail}>
          <Image source={require("../assets/phoneIcon.png")} />
          <TextInput
            style={styles.DetailInfo}
            placeholder="+1  202  555  0142 "
            placeholderTextColor="#868889"
          />
        </View>
      </View>
      <View style={styles.Details}>
        <Text style={styles.DetailTitle}>Change Password</Text>
        <View style={styles.Detail}>
          <Image source={require("../assets/padlockIcon.png")} />
          <TextInput
            style={styles.DetailInfo}
            placeholder="Current password"
            placeholderTextColor="#868889"
          />
        </View>
        <View style={styles.Detail}>
          <Image source={require("../assets/padlockIcon.png")} />
          <TextInput
            style={styles.DetailInfo}
            placeholder="New password"
            placeholderTextColor="#868889"
          />
        </View>
        <View style={styles.Detail}>
          <Image source={require("../assets/padlockIcon.png")} />
          <TextInput
            style={styles.DetailInfo}
            placeholder="Confirm new password"
            placeholderTextColor="#868889"
          />
        </View>
      </View>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.ButtonText}>Save settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AboutMe: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#F4F5F9",
    gap: 34,
  },
  Header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
    alignItems: "center",
    marginTop: 7,
    marginBottom: 30,
    marginHorizontal: 17,
  },
  Title: {
    fontSize: 20,
    fontWeight: 500,
    marginLeft: 130,
  },
  Details: {
    height: 250,
    width: "100%",
    gap: 5,
    paddingHorizontal: 17,
  },
  Detail: {
    height: 60,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    gap: 21,
    backgroundColor: "#FFF",
    borderRadius: 5,
    paddingHorizontal: 20,
  },
  DetailTitle: {
    marginBottom: 13,
    fontSize: 18,
    fontWeight: 600,
  },
  DetailInfo: {
    fontSize: 15,
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
    paddingHorizontal: 17,
    marginTop: 90,
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
