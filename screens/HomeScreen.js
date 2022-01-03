import { useNavigation } from "@react-navigation/native";

import React from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import useAuth from "../hooks/useAuth";
import tw from "tailwind-rn";
import { Ionicons, Entypo, AntDesign, Feather } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import Swiper from "react-native-deck-swiper";
import {
  backgroundColor,
  color,
} from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import FeedSwiper from "../screenComponents/feedSwiper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BottomBar from "../screenComponents/BottomBar";
import TopBar from "../screenComponents/TopBar";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { user, logout } = useAuth();

  const DUMMY_DATA = [
    {
      firstName: "Kyle",
      lastName: "Andruczk",
      age: 20,
      college: "Yale",
      major: "Psychology",
      gradYear: 24,
      photoURL: "https://avatars.githubusercontent.com/u/84470596?v=4",
    },
    {
      firstName: "Carolyn",
      lastName: "Qu",
      age: 19,
      college: "Yale",
      major: "Computer Science",
      gradYear: 24,
      photoURL: "https://avatars.githubusercontent.com/u/67798872?v=4",
    },
    {
      firstName: "Suba",
      lastName: "Ramesh",
      age: 19,
      college: "Yale",
      major: "Computer Science",
      gradYear: 24,
      photoURL: "https://avatars.githubusercontent.com/u/18357230?v=4",
    },
  ];

  let [fontsLoaded] = useFonts({
    "Chivo-Regular": require("../assets/fonts/Chivo-Regular.ttf"),
  });

  if (!fontsLoaded) {
    // NEED TO CREATE A SPLASH SCREEN
    return <AppLoading></AppLoading>;
  } else {
    return (
      <SafeAreaView style={tw("bg-white")}>
        <TopBar></TopBar>

        {/* cards */}
        <FeedSwiper></FeedSwiper>
        {/* end cards */}

        {/* Bottom Bar */}
        <BottomBar></BottomBar>
        {/* end bottom bar */}
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  headerText: {
    textAlign: "center",
    fontSize: 24,
    fontFamily: "Chivo-Regular",
  },
  headerLine: {
    borderBottomColor: "#9C9C9C",
    borderBottomWidth: 1,
    marginTop: 10,
    marginLeft: 9,
    marginRight: 9,
  },
  imgCard: {
    marginTop: -59,
    height: "90%",
    marginLeft: -20,

    // backgroundColor: "blue",
    width: "112%",
    backgroundColor: "white",
  },
  imgCardText: {
    // alignSelf: "stretch",

    // flex: 1,
    fontFamily: "Chivo-Regular",
    fontSize: 24,
    marginTop: 12,
    marginLeft: 9,
  },
  imgCardTextAlt: {
    // alignSelf: "stretch",

    // flex: 1,
    fontFamily: "Chivo-Regular",
    fontSize: 18,
    color: "#939393",
    marginBottom: 9,
    marginLeft: 9,
  },
  cardButton: {
    // marginTop: -20,
    // marginLeft: -20,
    // backgroundColor: "transparent"
    // marginRight: -20

    margin: 10,
  },
  bottomContainer: {
    position: "absolute",
  },
});

export default HomeScreen;
