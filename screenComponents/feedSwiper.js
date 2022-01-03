import React from "react";
import {
  Alert,
  TouchableOpacity,
  Text,
  Dimensions,
  StyleSheet,
  FlatList,
  Image,
  View,
  SafeAreaView,
} from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import tw from "tailwind-rn";
import { Ionicons, Entypo, AntDesign, Feather } from "@expo/vector-icons";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useEffect } from "react/cjs/react.development";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { styles } from "./Style";

const DUMMY_DATA = [
  {
    firstName: "Kyle",
    lastName: "Andruczk",
    age: 20,
    college: "Yale",
    major: "Psychology",
    gradYear: 24,
    photoURL:
      "https://instagram.fagc1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/265624399_1323280181453256_6540662098610217199_n.jpg?_nc_ht=instagram.fagc1-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=s8_afe79iuIAX8mIBhc&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT_5MXgpRmEEXLJd0x92dGKbel9-42eTXdL9JOEpdRDXBg&oe=61D7EA82&_nc_sid=4f375e",
    key: 0,
  },
  {
    firstName: "Carolyn",
    lastName: "Qu",
    age: 19,
    college: "Yale",
    major: "Computer Science",
    gradYear: 24,
    photoURL:
      "https://instagram.fagc1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/271252401_299622165426704_3176272600548155699_n.jpg?_nc_ht=instagram.fagc1-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=svF6B3hALQkAX9UEw8z&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT92-SBvn1LMPzSG_J_ieRcoojthAYOEiX1EXGqO6a_HjQ&oe=61D95B16&_nc_sid=4f375e",
    key: 1,
  },
  {
    firstName: "Suba",
    lastName: "Ramesh",
    age: 19,
    college: "Yale",
    major: "Computer Science",
    gradYear: 24,
    photoURL:
      "https://instagram.fagc1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/248429970_921674231782724_8314217184271061258_n.jpg?_nc_ht=instagram.fagc1-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=zd7aBeE7cA4AX9Xp9OB&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT_lGq7qPXLDnMLF-byegh9tvTk7g-J0Vn5Xujk_NHkgvQ&oe=61D863FA&_nc_sid=4f375e",
    key: 2,
  },
];

const FeedSwiper = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    let unsub;

    const fetchCards = async () => {
      unsub = onSnapshot(
        collection(db, "users", (snapshot) => {
          setProfiles(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        })
      );
    };

    fetchCards();
    return unsub;
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={DUMMY_DATA}
        index={0}
        style={tw("mb-32")}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get("window").height - 162}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        renderItem={({ item }) =>
          item ? (
            <View>
              {/* 2nd header */}
              <View>
                <View>
                  <Text style={styles.imgCardText}>
                    {item.firstName} - {item.college} '{item.gradYear}
                  </Text>
                  <Text style={styles.imgCardTextAlt}>
                    {item.age} years old | {item.major}
                  </Text>
                </View>
                <TouchableOpacity style={tw("absolute right-4 top-4")}>
                  <Entypo name="dots-three-vertical" size={20} color="black" />
                </TouchableOpacity>
              </View>
              {/* end 2nd header */}

              {/* Image  */}
              <Image
                style={{
                  width: "100%",
                  height: Dimensions.get("window").height - 244,
                  marginBottom: 10,
                }}
                source={{ uri: item.photoURL }}
              ></Image>
              {/* end image */}

              {/* Bottom more info */}
              <LinearGradient
                colors={["transparent", "rgba(0,0,0,0.9)"]}
                style={tw("absolute bottom-0 h-24 w-full")}
              >
                <TouchableOpacity style={tw("absolute bottom-0 h-24  w-full")}>
                  <View style={tw("")}>
                    <Entypo
                      name="chevron-right"
                      size={24}
                      color="white"
                      style={{
                        position: "absolute",
                        marginTop: "10%",
                        marginLeft: "27%",
                      }}
                    />
                    <Text
                      style={{
                        color: "white",
                        marginTop: "10.4%",
                        position: "absolute",
                        marginLeft: "37%",
                        fontSize: 18,
                      }}
                    >
                      Lorem Ipsum
                    </Text>
                  </View>
                </TouchableOpacity>
              </LinearGradient>
              {/* end bottom more info */}

              {/* buttons */}
              <TouchableOpacity
                style={tw("absolute bottom-36 right-2 bg-white rounded-full")}
              >
                <Feather
                  name="send"
                  size={26}
                  color="#B8EFFF"
                  style={styles.cardButton}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={tw("absolute bottom-20 right-2 bg-white rounded-full")}
              >
                <AntDesign
                  name="hearto"
                  size={26}
                  color="#B8EFFF"
                  style={styles.cardButton}
                />
              </TouchableOpacity>
              {/* end buttons */}
            </View>
          ) : (
            <Text>No more profiles</Text>
          )
        }
      />
    </SafeAreaView>
  );
};

export default FeedSwiper;
