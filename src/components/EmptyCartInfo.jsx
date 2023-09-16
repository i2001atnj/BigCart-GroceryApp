import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { shoppingCartPageVector } from "../assets/icons/index";

const EmptyCartInfo = ({ text }) => {
  return (
    <View style={styles.CartInfoContainer}>
      <View style={styles.Info}>
        <Image source={shoppingCartPageVector} />
        <View style={{ gap: 16 }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            {text}
          </Text>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 500,
              color: "#868889",
              width: 235,
              textAlign: "center",
            }}
          >
            You will get a response within a few minutes.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default EmptyCartInfo;

const styles = StyleSheet.create({
  CartInfoContainer: {
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#F4F5F9",
    paddingBottom: "30%",
  },
  Info: {
    gap: 36,
    justifyContent: "center",
    alignItems: "center",
  },
});
