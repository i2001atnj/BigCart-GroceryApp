import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { CATEGORIES } from "../data/categories";
import SectionRedirect from "./SectionRedirect";
import { useNavigation } from "@react-navigation/native";

export default function Categories() {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <SectionRedirect
        title="Categories"
        titleButtonFunction={() => navigation.navigate("Categories Screen")}
      />
      <ScrollView
        horizontal
        style={styles.CategoriesMenu}
        showsHorizontalScrollIndicator={false}
      >
        {CATEGORIES.map((category) => (
          <View key={category.id} style={styles.Category}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Category Screen", {
                  id: category.id,
                  name: category.name,
                  image: category.image,
                  color: category.color,
                })
              }
              style={{
                backgroundColor: `${category.color}`,
                width: 52,
                height: 52,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={category.image} />
            </TouchableOpacity>
            <Text style={styles.CategoryTitle}>{category.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: 17,
    gap: 17,
  },
  CategoriesMenu: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    gap: 20,
  },
  Category: {
    alignItems: "center",
    width: 75,
    gap: 10,
  },
  CategoryTitle: {
    fontWeight: 500,
    fontSize: 13,
    color: "#868889",
  },
});
