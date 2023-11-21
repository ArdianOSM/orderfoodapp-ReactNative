import { View, Text, Image } from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        height:80,
        alignItems: "center",
        
        
      }}
    >
      <Text style={{ fontSize: 35,fontWeight:'bold',color:Colors.primary }}>Menu</Text>
      <Image
        source={require("../assets/lady.jpg")}
        style={{ width: 40,
          height: 40,
          borderRadius: 30,
          alignItems: "center",
          justifyContent: "center",
         }}
      />
    </View>
  );
};

export default Header;
