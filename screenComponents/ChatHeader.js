import { useNavigation } from '@react-navigation/native'

import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import tw from "tailwind-rn"
import { Foundations, Ionicons } from "@expo/vector-icons"





const ChatHeader = ({title, callEnabled}) => {
    const navigation = useNavigation();

    return (
        <View style={tw("p-2 flex-row items-center justify-between")}>
            {/* <View style={tw('flex flex-row items-center')}> */}
                <TouchableOpacity style={{marginLeft: 10, backgroundColor: "#F5F5F5", borderRadius: 4}} onPress={ () => navigation.goBack()}>
                    <Ionicons name="chevron-back-outline" size={32} color="#939393"></Ionicons>
                </TouchableOpacity>
                <Text style={{fontSize: 34, alignSelf: "center"}}>Messages</Text>
                <TouchableOpacity style={{marginLeft: 10, backgroundColor: "#F5F5F5", borderRadius: 4}} onPress={ () => navigation.goBack()}>
                    <Ionicons name="search" size={32} color="#939393"></Ionicons>
                </TouchableOpacity>
            {/* </View> */}

        </View>
    )
}

export default ChatHeader
