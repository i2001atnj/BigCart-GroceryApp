import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import {
  myOrdersVector,
  myFavoritesVector,
  addressVector,
  creditCardsVector,
  transactionsVector,
  notificationsVector,
  signOutVector,
} from "../assets/assets";
import UserOption from "../components/UserOption";
import { useNavigation } from "@react-navigation/native";
import { userContext } from "../../App.js";

export default function UserPage() {
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
        <View style={styles.UserInfo}>
          <Text style={styles.UserName}>Admin</Text>
          <Text style={styles.UserMail}>{user.email}</Text>
        </View>
      </View>
      <View style={styles.SettingsSection}>
        <UserOption
          image={myOrdersVector}
          title="About me"
          optionFunction={() => navigation.navigate("About")}
        />
        <UserOption
          image={myOrdersVector}
          title="My orders"
          optionFunction={() => navigation.navigate("My orders")}
        />
        <UserOption
          image={myFavoritesVector}
          title="My favorites"
          optionFunction={() => navigation.navigate("Favorites")}
        />
        <UserOption
          image={addressVector}
          title="My address"
          optionFunction={() => navigation.navigate("My address")}
        />
        <UserOption
          image={creditCardsVector}
          title="Credit cards"
          optionFunction={() => navigation.navigate("Credit cards")}
        />
        <UserOption
          image={transactionsVector}
          title="Transactions"
          optionFunction={() => navigation.navigate("Transactions")}
        />
        <UserOption
          image={notificationsVector}
          title="Notifications"
          optionFunction={() => navigation.navigate("Notifications")}
        />
        <UserOption
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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "#F4F5F9",
  },
  ProfileSection: {
    marginTop: 20,
  },
  ProfilePhotoButton: {
    backgroundColor: "#28B446",
    width: 26,
    height: 26,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 93,
    left: 97,
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
  SettingsSection: {
    marginTop: 50,
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
