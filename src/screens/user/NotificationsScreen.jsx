import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import React from "react";
import Header from "../../components/Header";
import Setting from "../../components/Setting";
import ButtonComponent from "../../components/Button";

const NotificationsScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", height: "100%" }}>
      <Header
        returnArrow
        title="Notifications"
        titleStyle={{ marginRight: "37%" }}
      />
      <View
        style={{
          height: "100%",
          backgroundColor: "#F4F5F9",
          paddingHorizontal: 17,
          paddingTop: 33,
          gap: 12,
        }}
      >
        <Setting title="Allow notifications" />
        <Setting title="Email notifications" />
        <Setting title="Order notifications" />
        <Setting title="General notifications" />
        <ButtonComponent
          text="Save settings"
          style={{ paddingHorizontal: 0, marginTop: "50%" }}
        />
      </View>
    </SafeAreaView>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({});
