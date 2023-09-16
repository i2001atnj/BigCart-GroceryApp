import { StyleSheet, View, SafeAreaView } from "react-native";
import React from "react";
import Header from "../../components/Header";
import Input from "../../components/Input";
import {
  address,
  globe,
  mailIcon,
  map,
  phoneIcon,
  user2,
  zipCode,
} from "../../assets/icons/index";
import Button from "../../components/Button";

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
          <Input image={user2} placeholder="Name" />
          <Input image={mailIcon} placeholder="Email Address" />
          <Input image={phoneIcon} placeholder="Phone Number" />
          <Input image={address} placeholder="Address" />
          <Input image={zipCode} placeholder="Zip Code" />
          <Input image={map} placeholder="City" />
          <Input image={globe} placeholder="Country" />
        </View>
        <Button text="Add Address" />
      </View>
    </SafeAreaView>
  );
};

export default AddAddressScreen;

const styles = StyleSheet.create({});
