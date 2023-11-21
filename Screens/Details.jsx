import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Details = ({route}) => {
  const content =route.params.data
  
  return (
    <ScrollView style={{ backgroundColor: Colors.primary }}>
      <View
        style={{
          height: 400,
          backgroundColor: Colors.primary,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/burgericon.png")}
          style={{ width: 250, height: 250 }}
        />
      </View>

      <View
        style={{
          height: 500,
          borderTopLeftRadius: 60,
          backgroundColor: "white",
          borderTopRightRadius: 60,
          paddingHorizontal: 30,
          paddingTop: 40,
          gap: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 80,
              backgroundColor: Colors.primary,
              height: 35,
              borderRadius: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
            }}
          >
            <FontAwesome name="star" size={21} color="yellow" />
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
              {content.rating}
            </Text>
          </View>

          <Text
            style={{ color: Colors.primary, fontWeight: "bold", fontSize: 24 }}
          >
            {content.price}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "black", fontWeight: "bold", fontSize: 24 }}>
            {content.name}
          </Text>

          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <AntDesign name="pluscircle" size={25} color={Colors.primary} />
            <Text style={{ fontWeight: "bold", fontSize: 19, color: "black" }}>
              1
            </Text>
            <AntDesign name="minuscircle" size={24} color={Colors.primary} />
          </View>
        </View>

        <Text style={{ fontSize: 15, fontWeight: "normal" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed laborum, voluptatem ducimus repellat ab?
        </Text>

        <Text style={{ color: "black", fontWeight: "bold", fontSize: 20 }}>
          Add Ons
        </Text>

        <View style={{ flexDirection: "row", gap: 20 }}>
          <View>
            <Image
              style={{ width: 100, height: 100 }}
              source={require("../assets/burgericon.png")}
            />
            <AntDesign
              style={{ position: "absolute", bottom: 0 }}
              name="pluscircle"
              size={25}
              color="green"
            />
          </View>
          <View>
            <Image
              style={{ width: 100, height: 100 }}
              source={require("../assets/burgericon.png")}
            />
            <AntDesign
              style={{ position: "absolute", bottom: 0 }}
              name="pluscircle"
              size={25}
              color="green"
            />
          </View>
          <View>
            <Image
              style={{ width: 100, height: 100 }}
              source={require("../assets/burgericon.png")}
            />
            <AntDesign
              style={{ position: "absolute", bottom: 0 }}
              name="pluscircle"
              size={25}
              color="green"
            />
          </View>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: Colors.primary,
            height: 55,
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
            marginTop:15,
          }}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Details;
