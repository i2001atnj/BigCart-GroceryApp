import { StyleSheet, Text, View, Switch } from "react-native";
import React, { useState } from "react";

const NotificationSetting = ({ title }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.Container}>
      <Text style={{ fontWeight: 600, fontSize: 17 }}>{title}</Text>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ width: 270, color: "#868889" }}>
          Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam
          nonumym
        </Text>
        <Switch
          trackColor={{ false: "#FFF", true: "#6CC51D" }}
          thumbColor={isEnabled ? "#FFF" : "#FFF"}
          ios_backgroundColor="#FFF"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={{ transform: [{ scaleX: 0.5 }, { scaleY: 0.5 }] }}
        />
      </View>
    </View>
  );
};

export default NotificationSetting;

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    height: "12.5%",
    backgroundColor: "#fff",
    padding: 17,
    gap: 16,
    justifyContent: "center",
  },
});
