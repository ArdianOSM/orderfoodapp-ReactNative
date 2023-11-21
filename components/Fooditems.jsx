import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Fooditems = () => {
  const nav = useNavigation();
  const food = [
    {
      id: 1,
      name: "Pulë",
      price: 2.99,
      image:
        "//www.bing.com/images/search?view=detailV2&ccid=YYKNAWvd&id=965883162FFB2AF12C9A5619D2D2C6E0093BE7E9&thid=OIP.YYKNAWvdLNOahlJw3BJS9wHaEK&mediaurl=https%3a%2f%2fi.ytimg.com%2fvi%2felllFRF6pao%2fmaxresdefault.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.61828d016bdd2cd39a865270dc1252f7%3frik%3d6ec7CeDG0tIZVg%26pid%3dImgRaw%26r%3d0&exph=720&expw=1280&q=chicken+wings.jpg+kfc&simid=608039826353431256&FORM=IRPRST&ck=03105FB98E53D0E9B4261A390F298E44&selectedIndex=0&ajaxhist=0&ajaxserp=0",
        rating:5
    },
    {
      id: 2,
      name: "Pizza",
      price: 5.99,
      image:
        "https://th.bing.com/th/id/R.68c8fd61cc12558216118d5f63acab1e?rik=F8p%2fpUJpw8qWHQ&riu=http%3a%2f%2fwww.freepngimg.com%2fdownload%2fpizza%2f1-pizza-png-image.png&ehk=Rjht7VbDwkXxAFOZaa9t4Mz772mCESIFx6KBwuhPLXc%3d&risl=1&pid=ImgRaw&r=0",
        rating:4.5
    },
    {
      id: 3,
      name: "Sandwich",
      price: 3.99,
      image:
        "https://th.bing.com/th/id/R.b90aa7070c260a0766aea7536e70bd83?rik=MpeGNzXR%2fzCnhg&pid=ImgRaw&r=0",
        rating:4
    },
    {
      id: 4,
      name: "Burger",
      price: 5.99,
      image:
        "/https://th.bing.com/th/id/OIP.fSirpT6kvWVZadG8Q20s7QHaE_?rs=1&pid=ImgDetMain",
        rating:5,
    },
  ];
  return (
    <View style={{ gap: 50 }}>

      <Text style={{ fontSize: 20,  }}>Popular</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={food}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              nav.navigate("Details", {data: item});
            }}
            style={{
              backgroundColor: "#E3E3E3",
              
              width: 150,
              height: 200,
              marginRight: 20,
              borderRadius: 20,
              paddingHorizontal: 20,

              paddingVertical: 20,
              gap: 10,
            }}
          >
            
            <Image
              style={{ width: 85, height: 85, alignSelf: "center" ,gap:20 }}
              source={require("../assets/burgericon.png")}
            />
            <Text style={{ fontSize: 20, textAlign: "center" }}>
              {item.name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: Colors.primary,
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                €{item.price}
              </Text>
              <Ionicons name="add-circle" size={24} color="green" />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Fooditems;
