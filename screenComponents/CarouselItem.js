import React from 'react'
import { View, StyleSheet, Image, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')


const CarouselItem = ({ item }) => {
    return (
        <View style={styles.cardView}>
            <Image style={styles.image} source={{ uri: item }} />
        </View>
        
    )
    
}

const styles = StyleSheet.create({
    cardView: {
        flex: 1,

        backgroundColor: 'white',
        
    },

    textView: {
        position: 'absolute',
        bottom: 10,
        margin: 10,
        left: 5,
    },
    image: {
        width: width,
        height: height - 245,
        marginBottom: 10
    },

})

export default CarouselItem