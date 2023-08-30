import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import NotificationSetting from "../components/NotificationSetting";
import ButtonComponent from "../components/ButtonComponent";

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
        <NotificationSetting title="Allow notifications" />
        <NotificationSetting title="Email notifications" />
        <NotificationSetting title="Order notifications" />
        <NotificationSetting title="General notifications" />
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
