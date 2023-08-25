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
import { AccessInput, ButtonComponent, Header } from "../components/components";
import { lockVector, mailIcon, nameIcon, phoneIcon } from "../assets/assets";

export default function AboutMeScreen() {
  return (
    <SafeAreaView style={styles.AboutMe}>
      <Header
        arrow
        title="About Me"
        style={{ justifyContent: "space-between" }}
        titleStyle={{ marginRight: "40%" }}
      />
      <View style={styles.Details}>
        <View style={{ gap: 5 }}>
          <Text
            style={{
              marginLeft: 17,
              marginBottom: 13,
              fontSize: 18,
              fontWeight: 600,
            }}
          >
            Personal Details
          </Text>
          <AccessInput image={nameIcon} placeholder="Admin" />
          <AccessInput image={mailIcon} placeholder="admin@bigcart.com" />
          <AccessInput image={phoneIcon} placeholder="Phone Number" />
        </View>
        <View style={{ gap: 5 }}>
          <Text
            style={{
              marginLeft: 17,
              marginBottom: 13,
              fontSize: 18,
              fontWeight: 600,
            }}
          >
            Change Password
          </Text>
          <AccessInput
            image={lockVector}
            placeholder="Current Password"
            secureTextEntry
          />
          <AccessInput
            image={lockVector}
            placeholder="New Password"
            secureTextEntry
          />
          <AccessInput
            image={lockVector}
            placeholder="Confirm Password"
            secureTextEntry
          />
          <ButtonComponent style={{ marginTop: "30%" }} text="Save settings" />
        </View>
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
    backgroundColor: "#fff",
  },
  Details: {
    height: "100%",
    width: "100%",
    gap: 35,
    paddingTop: 34,
    backgroundColor: "#F4F5F9",
  },
});
