import { View, SafeAreaView, Switch, Text, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import CreditCardItem from "../../components/CreditCardItem";
import Header from "../../components/Header";
import { userContext } from "../../context/userContext";
import Input from "../../components/Input";
import { card, user2, calendar, lockVector } from "../../assets/icons/index";
import Button from "../../components/Button";

const AddCreditCardScreen = () => {
  const user = useContext(userContext);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <SafeAreaView
      style={{ height: "100%", backgroundColor: "#fff", width: "100%" }}
    >
      <Header
        returnArrow
        title="Add Card"
        titleStyle={{ marginRight: "40%" }}
      />
      <View style={styles.Section}>
        <CreditCardItem
          cardBank="Master Card"
          cardNumber={"XXX XXX XXX XXX"}
          cardHolder={user.email}
          cardExpireDate="01/28"
          style={{ marginTop: 33 }}
        />
        <View
          style={{
            width: "100%",
            gap: 5,
            marginTop: 18,
          }}
        >
          <Input icon={user2} placeholder="Name on the card" />
          <Input icon={card} placeholder="XXXX XXXX XXXX XXXX" />
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Input
              icon={calendar}
              style={{ width: "49%", marginHorizontal: 0 }}
              placeholder="Month / Year"
            />
            <Input
              icon={lockVector}
              style={{ width: "49%", marginHorizontal: 0 }}
              placeholder="CVV"
            />
          </View>
        </View>
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
          <Text style={{ fontWeight: 500 }}>Save this card</Text>
        </View>
        <Button text="Add credit card" style={{ marginTop: "55%" }} />
      </View>
    </SafeAreaView>
  );
};

export default AddCreditCardScreen;

const styles = StyleSheet.create({
  Section: {
    backgroundColor: "#F4F5F9",
    height: "100%",
    width: "100%",
    paddingHorizontal: 17,
  },
});
