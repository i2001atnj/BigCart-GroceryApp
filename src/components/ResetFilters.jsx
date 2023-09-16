import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { reload } from "../assets";

const ResetFilters = () => {
  return (
    <TouchableOpacity>
      <Image source={reload} />
    </TouchableOpacity>
  );
};

export default ResetFilters;

const styles = StyleSheet.create({});
