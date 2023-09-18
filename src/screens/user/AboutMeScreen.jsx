import React, { useContext } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Header from "../../components/Header";
import {
  lockVector,
  mailIcon,
  nameIcon,
  phoneIcon,
} from "../../assets/icons/index";
import { userContext } from "../../context/userContext";

export default function AboutMeScreen() {
  const user = useContext(userContext);
  return (
    <SafeAreaView style={styles.AboutMeScreen}>
      <Header
        returnArrow
        title="About Me"
        style={{ justifyContent: "space-between" }}
        titleStyle={{ marginRight: "40%" }}
      />
      <View style={styles.Details}>
        <View style={{ gap: 5 }}>
          <Text
            style={{
              marginBottom: 13,
              fontSize: 18,
              fontWeight: 600,
            }}
          >
            Personal Details
          </Text>
          <Input icon={nameIcon} placeholder="Admin" />
          <Input icon={mailIcon} placeholder={user.email} />
          <Input icon={phoneIcon} placeholder="Phone Number" />
        </View>
        <View style={{ gap: 5 }}>
          <Text
            style={{
              marginBottom: 13,
              fontSize: 18,
              fontWeight: 600,
            }}
          >
            Change Password
          </Text>
          <Input
            icon={lockVector}
            placeholder="Current Password"
            secureTextEntry
          />
          <Input icon={lockVector} placeholder="New Password" secureTextEntry />
          <Input
            icon={lockVector}
            placeholder="Confirm Password"
            secureTextEntry
          />
          <Button style={{ marginTop: "30%" }} text="Save settings" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AboutMeScreen: {
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
    paddingHorizontal: 17,
  },
});
