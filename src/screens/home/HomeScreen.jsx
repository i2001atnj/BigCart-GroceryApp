import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Banner from "../../components/Banner";
import Categories from "../../components/Categories";
import FeaturedProducts from "../../components/FeaturedProducts";
import Header from "../../components/Header";

export default function HomeScreen() {
  return (
    <LinearGradient colors={["#FFFFFF", "#F4F5F9"]}>
      <SafeAreaView style={styles.Homepage}>
        <Header style={{ justifyContent: "center", width: "110%" }} input />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Banner />
          <Categories />
          <FeaturedProducts />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  Homepage: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
});
