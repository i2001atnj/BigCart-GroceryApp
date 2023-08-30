import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import Header from "../components/Header";
import InputComponent from "../components/InputComponent";
import {
  address,
  globe,
  mailIcon,
  map,
  phoneIcon,
  user2,
  zipCode,
} from "../assets/assets";
import ButtonComponent from "../components/ButtonComponent";

const AddAddressScreen = () => {
  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#fff" }}>
      <Header
        returnArrow
        title="Add Address"
        titleStyle={{ marginRight: "37%" }}
      />
      <View
        style={{
          height: "90%",
          backgroundColor: "#F4F5F9",
          justifyContent: "space-between",
        }}
      >
        <View style={{ marginTop: 36, gap: 5 }}>
          <InputComponent image={user2} placeholder="Name" />
          <InputComponent image={mailIcon} placeholder="Email Address" />
          <InputComponent image={phoneIcon} placeholder="Phone Number" />
          <InputComponent image={address} placeholder="Address" />
          <InputComponent image={zipCode} placeholder="Zip Code" />
          <InputComponent image={map} placeholder="City" />
          <InputComponent image={globe} placeholder="Country" />
        </View>
        <ButtonComponent text="Add Address" />
      </View>
    </SafeAreaView>
  );
};

export default AddAddressScreen;

const styles = StyleSheet.create({});
