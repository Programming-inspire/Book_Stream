import { StyleSheet,View, Animated, useWindowDimensions } from 'react-native';
import React from 'react';

const Paginator = ({data, scrollX}) => {
    const { width } = useWindowDimensions();
    return (
        <View style={styles.container}>
            {data.map((_, i) => {
                const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10, 20, 10],
                    extrapolate: 'clamp',
                })
                return <Animated.View style={[styles.dot, {width: dotWidth}]} key={i.toString()}/>;
            })}
        </View>
    );
};

export default Paginator;

const styles = StyleSheet.create({
    container:{
    flexDirection: 'row',
    height: 64,
    backgroundColor: '#F8F2DA',
    width: '100%',
    justifyContent: 'center',
    },
    dot:{
        height: 10,
        borderRadius: 5,
        backgroundColor: '#493d8a',
        marginHorizontal: 8,
    },
});
