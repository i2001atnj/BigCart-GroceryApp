import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";
import React from "react";

export default function FiltersScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.FiltersScreen}>
      <View style={styles.Header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require("../assets/blackArrow.png")} />
        </TouchableOpacity>
        <Text style={styles.HeaderText}>Apply Filters</Text>
        <TouchableOpacity>
          <Image source={require("../assets/reload.png")} />
        </TouchableOpacity>
      </View>
      <View style={{ backgroundColor: "#F4F5F9", height: "100%" }}>
        <View style={styles.Section}>
          <View style={styles.SectionItem}>
            <Text style={{ fontSize: 16, fontWeight: 600 }}>Price Range</Text>
            <View style={styles.PriceSection}>
              <View style={styles.PriceInputContainer}>
                <TextInput
                  placeholder="Min."
                  placeholderTextColor="#868889"
                  style={styles.Input}
                />
              </View>
              <View style={styles.PriceInputContainer}>
                <TextInput
                  placeholder="Max."
                  placeholderTextColor="#868889"
                  style={styles.Input}
                />
              </View>
            </View>
          </View>
          <View style={styles.SectionItem}>
            <Text style={{ fontSize: 16, fontWeight: 600 }}>Star Rating</Text>
            <View style={styles.RatingSection}>
              <View style={styles.RatingInputContainer}>
                <TextInput style={styles.Input} />
              </View>
            </View>
          </View>
          <View style={styles.SectionItem}>
            <Text style={{ fontSize: 16, fontWeight: 600 }}>Others</Text>
            <View style={styles.RatingSection}>
              <View style={styles.RatingInputContainer}>
                <TextInput style={styles.Input} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  FiltersScreen: {
    backgroundColor: "#FFF",
    height: "100%",
    width: "100%",
  },
  Header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 17,
    padding: 28,
    backgroundColor: "#FFF",
  },
  HeaderText: {
    fontSize: 18,
    fontWeight: 500,
  },
  Section: {
    backgroundColor: "#F4F5F9",
    padding: 17,
    gap: 2,
  },
  SectionItem: {
    backgroundColor: "#FFF",
    padding: 17,
  },
  PriceSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 7,
  },
  PriceInputContainer: {
    backgroundColor: "#F4F5F9",
    width: "48%",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 15,
  },
  Input: {
    textAlign: "left",
    width: "100%",
    paddingLeft: 15,
  },
  RatingSection: {
    width: "100%",
  },
  RatingInputContainer: {
    width: "100%",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 15,
    backgroundColor: "#F4F5F9",
  },
});
