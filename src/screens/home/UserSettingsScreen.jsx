import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import { FIREBASE_AUTH } from "../../../FirebaseConfig";
import {
  myOrdersVector,
  myFavoritesVector,
  addressVector,
  creditCardsVector,
  transactionsVector,
  notificationsVector,
  signOutVector,
} from "../../assets/icons/index";
import Option from "../../components/Option";
import { useNavigation } from "@react-navigation/native";
import { userContext } from "../../context/userContext";

export default function UserSettingsScreen() {
  const navigation = useNavigation();
  const user = useContext(userContext);
  return (
    <SafeAreaView style={styles.UserPage}>
      <View
        style={{
          height: 145,
          width: "100%",
          backgroundColor: "#FFF",
          position: "absolute",
        }}
      ></View>
      <View style={styles.ProfileSection}>
        <Text style={styles.UserName}>Admin</Text>
        <Text style={styles.UserMail}>{user.email}</Text>
      </View>
      <View style={styles.OptionsSection}>
        <Option
          image={myOrdersVector}
          title="About Me"
          optionFunction={() => navigation.navigate("About Me Screen")}
        />
        <Option
          image={myOrdersVector}
          title="My Orders"
          optionFunction={() => navigation.navigate("My Orders Screen")}
        />
        <Option
          image={myFavoritesVector}
          title="My Favorites"
          optionFunction={() => navigation.navigate("My Favorites Screen")}
        />
        <Option
          image={addressVector}
          title="My Address"
          optionFunction={() => navigation.navigate("My Address Screen")}
        />
        <Option
          image={creditCardsVector}
          title="Credit Cards"
          optionFunction={() => navigation.navigate("Credit Cards Screen")}
        />
        <Option
          image={transactionsVector}
          title="Transactions"
          optionFunction={() => navigation.navigate("Transactions Screen")}
        />
        <Option
          image={notificationsVector}
          title="Notifications"
          optionFunction={() => navigation.navigate("Notifications Screen")}
        />
        <Option
          title="Sign out"
          image={signOutVector}
          optionFunction={() => FIREBASE_AUTH.signOut()}
          signOutButton
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  UserPage: {
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "#F4F5F9",
  },
  ProfileSection: {
    marginTop: 20,
    alignItems: "center",
  },
  UserInfo: {
    alignItems: "center",
    marginTop: 15,
    justifyContent: "center",
  },
  UserName: {
    fontSize: 16,
    fontWeight: 600,
  },
  UserMail: {
    fontSize: 14,
    fontWeight: 400,
    color: "#868889",
  },
  OptionsSection: {
    marginTop: 80,
    gap: 30,
    width: "100%",
  },
  UserSignOut: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 38,
  },
  SettingNameSectionSignOut: {
    width: "89%",
  },
});
