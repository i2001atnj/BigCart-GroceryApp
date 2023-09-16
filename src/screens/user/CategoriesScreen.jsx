import { View, SafeAreaView, StyleSheet } from "react-native";
import { CATEGORIES } from "../../data/categories";
import Header from "../../components/Header";
import CategoryItem from "../../components/CategoryItem";
import { useNavigation } from "@react-navigation/native";

export default function CategoriesScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.CategoriesScreen}>
      <Header returnArrow title="Categories" filters />
      <View
        style={{
          backgroundColor: "#F4F5F9",
          flexDirection: "row",
          flexWrap: "wrap",
          height: "100%",
          alignItems: "start",
          paddingHorizontal: 17,
        }}
      >
        {CATEGORIES.map((item) => (
          <CategoryItem
            key={item.id}
            image={item.image}
            name={item.name}
            color={item.color}
            btnFunction={() =>
              navigation.navigate("Category Screen", {
                id: item.id,
                image: item.image,
                name: item.name,
                color: item.color,
              })
            }
          />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  CategoriesScreen: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
  },
});
