import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { add } from "../assets";

const AddButton = ({ addFunction }) => {
  return (
    <TouchableOpacity onPress={addFunction}>
      <Image source={add} />
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({});
