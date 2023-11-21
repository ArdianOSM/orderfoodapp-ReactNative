import { View, Text, Image } from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Banner = () => {
  return (
    <View style={{ gap: 15 }}>
      <Text style={{ fontSize: 20,display:'flex',  }}>Promocion!!</Text>
      <View
        style={{
          backgroundColor: Colors.primary,
          height: 150,
          borderRadius: 30,
          paddingHorizontal: 20,
          flexDirection: "row",
          paddingVertical: 20,
          justifyContent:'space-between',
          
        }}
      >
        
        <View style={{ gap: 12, }}>
          <Text style={{ fontSize: 15, color: "white" }}>Ofertat Ditore!</Text>
          <Text style={{ fontSize: 19, color: "white", fontWeight: "bold" }}>
            French Fries Falas!
          </Text>
          <Text style={{ fontSize: 15, color: "white" }}>
            Te Gjitha Porosit mbi 150euro!{" "}
          </Text>
        </View>

        <Image style={{width:100,height:100,}} source={require('../assets/FrenchFries.png')}/>
      </View>
    </View>
  );
};

export default Banner;
