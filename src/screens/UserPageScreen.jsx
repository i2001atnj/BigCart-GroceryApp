import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function UserPage({ navigation }) {
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
        <View>
          <Image
            style={{ borderRadius: 100, position: "relative", left: 15 }}
            source={require("../assets/profilePhoto.png")}
          />
        </View>
        <TouchableOpacity style={styles.ProfilePhotoButton}>
          <Image source={require("../assets/changeProfilePhotoVector.png")} />
        </TouchableOpacity>
        <View style={styles.UserInfo}>
          <Text style={styles.UserName}>Olivia Austin</Text>
          <Text style={styles.UserMail}>oliviaaustin@gmail.com</Text>
        </View>
      </View>
      <View style={styles.SettingsSection}>
        <TouchableOpacity
          style={styles.UserSetting}
          onPress={() => navigation.navigate("About me")}
        >
          <Image source={require("../assets/aboutMeVector.png")} />
          <View style={styles.SettingNameSection}>
            <Text style={styles.SettingName}>About me</Text>
          </View>
          <Image source={require("../assets/rightVector.png")} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.UserSetting}>
          <Image source={require("../assets/myOrdersVector.png")} />
          <View style={styles.SettingNameSection}>
            <Text style={styles.SettingName}>My orders</Text>
          </View>
          <Image source={require("../assets/rightVector.png")} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.UserSetting}>
          <Image source={require("../assets/myFavoritesVector.png")} />
          <View style={styles.SettingNameSection}>
            <Text style={styles.SettingName}>My favorites</Text>
          </View>
          <Image source={require("../assets/rightVector.png")} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.UserSetting}>
          <Image source={require("../assets/addressVector.png")} />
          <View style={styles.SettingNameSection}>
            <Text style={styles.SettingName}>My address</Text>
          </View>
          <Image source={require("../assets/rightVector.png")} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.UserSetting}>
          <Image source={require("../assets/creditCardsVector.png")} />
          <View style={styles.SettingNameSection}>
            <Text style={styles.SettingName}>Credit cards</Text>
          </View>
          <Image source={require("../assets/rightVector.png")} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.UserSetting}>
          <Image source={require("../assets/transactionsVector.png")} />
          <View style={styles.SettingNameSection}>
            <Text style={styles.SettingName}>Transactions</Text>
          </View>
          <Image source={require("../assets/rightVector.png")} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.UserSetting}>
          <Image source={require("../assets/notificationsVector.png")} />
          <View style={styles.SettingNameSection}>
            <Text style={styles.SettingName}>Notifications</Text>
          </View>
          <Image source={require("../assets/rightVector.png")} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.UserSignOut}>
          <Image source={require("../assets/signOutVector.png")} />
          <View style={styles.SettingNameSectionSignOut}>
            <Text style={styles.SettingName}>Sign out</Text>
          </View>
        </TouchableOpacity>
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
  UserSetting: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 38,
  },
  UserSignOut: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 38,
  },
  SettingName: {
    position: "relative",
    fontSize: 16,
    fontWeight: 600,
  },
  SettingNameSection: {
    width: "80%",
  },
  SettingNameSectionSignOut: {
    width: "89%",
  },
});
