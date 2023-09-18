import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { flag } from "../../assets/icons/index";
import { useNavigation } from "@react-navigation/native";

const VerifyNumberScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        height: "100%",
      }}
    >
      <Header
        returnArrow
        title="Verify Number"
        titleStyle={{ marginRight: "35%" }}
      />
      <View
        style={{
          height: "100%",
          backgroundColor: "#F4F5F9",
          paddingHorizontal: 17,
        }}
      >
        <Text
          style={{
            marginTop: 90,
            fontSize: 25,
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          Verify your number
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 500,
            color: "#868889",
            marginTop: 15,
            marginBottom: 40,
            textAlign: "center",
            paddingHorizontal: 60,
          }}
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy
        </Text>
        <Input icon={flag} placeholder="Email address" />
        <Button
          text="Next"
          style={{ marginTop: 13 }}
          buttonFunction={() => navigation.navigate("Auth Verify Code Screen")}
        />
      </View>
    </SafeAreaView>
  );
};

export default VerifyNumberScreen;

const styles = StyleSheet.create({});
