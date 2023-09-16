import { StyleSheet, Text, View } from "react-native";
import React from "react";
import OtherOption from "./OtherOption";
import { box, discount, fast } from "../assets";

const Others = () => {
  return (
    <View>
      <OtherOption image={discount} title="Discount" />
      <OtherOption image={fast} title="Free shipping" />
      <OtherOption image={box} title="Same day delivery" />
    </View>
  );
};

export default Others;

const styles = StyleSheet.create({});
