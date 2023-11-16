import { View, Text, Image } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",

        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 35 }}>Menu</Text>
      <Image
        source={require("../assets/lady.jpg")}
        style={{ width: 50, height: 45, borderRadius: 50 }}
      />
    </View>
  );
};

export default Header;
