import { View, SafeAreaView, Switch, Text } from "react-native";
import React, { useState } from "react";
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
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
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
          paddingHorizontal: 17,
        }}
      >
        <View style={{ marginTop: 36, gap: 5 }}>
          <Input icon={user2} placeholder="Name" />
          <Input icon={mailIcon} placeholder="Email Address" />
          <Input icon={phoneIcon} placeholder="Phone Number" />
          <Input icon={address} placeholder="Address" />
          <Input icon={zipCode} placeholder="Zip Code" />
          <Input icon={map} placeholder="City" />
          <Input icon={globe} placeholder="Country" />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Switch
              trackColor={{ false: "#FFF", true: "#6CC51D" }}
              thumbColor={isEnabled ? "#FFF" : "#FFF"}
              ios_backgroundColor="#FFF"
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={{ transform: [{ scaleX: 0.5 }, { scaleY: 0.5 }] }}
            />
            <Text style={{ fontWeight: 500 }}>Save this address</Text>
          </View>
        </View>
        <Button text="Add Address" />
      </View>
    </SafeAreaView>
  );
};

export default AddAddressScreen;
