import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Dimensions, FlatList, Animated } from 'react-native'
import CarouselItem from './CarouselItem'

const { width } = Dimensions.get('window')


const Carousel = ({ data }) => {
    // get the scroll of x and position init
    const scrollX = new Animated.Value(0)
    let position = Animated.divide(scrollX, width)
    const [dataList, setDataList] = useState(data)

    useEffect(()=> {
        setDataList(data)

    })


    if (data && data.length) {
        return (
            <View>
                {/* view for the dots above the screen in carosel */}
                <View style={styles.dotView}>
                    {/* dynamically change opacity of dots */}
                    {data.map((_, i) => { 
                        let opacity = position.interpolate({
                            inputRange: [i - 1, i, i + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp'
                        })
                        return (
                            <Animated.View
                                key={i}
                                style={{ opacity, height: 10, width: 10, backgroundColor: '#B8EFFF', margin: 3.77, borderRadius: 5}}
                            />
                        )
                    })}

                </View>
                
                {/* horizontal flatlist of all images */}
                <FlatList data={data}
                ref = {(flatList) => {this.flatList = flatList}}
                    keyExtractor={(item, index) => 'key' + index}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    snapToAlignment="center"
                    scrollEventThrottle={16}
                    decelerationRate={"fast"}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return <CarouselItem item={item} />
                    }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }]
                    )}
                />

                
            </View>
        )
    }
    return null
}

const styles = StyleSheet.create({
    dotView: { flexDirection: 'row', justifyContent: 'center', position: "absolute", zIndex: 100, alignSelf: 'center', marginTop: 8, borderBottomLeftRadius: 10, borderBottomRightRadius: 10}
})

export default Carousel