import { StyleSheet,View, Animated, useWindowDimensions } from 'react-native';
import React from 'react';
import { Slide } from '../../types/slide';
import colors from '../../constants/color';

type PaginatorProps = {
    data: Slide[];
    scrollX: Animated.Value;
  };
  const Paginator: React.FC<PaginatorProps> = ({ data, scrollX }) => {
    const { width } = useWindowDimensions();
    return (
        <View style={styles.container}>
            {data.map((_, i) => {
                const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10, 20, 10],
                    extrapolate: 'clamp',
                });
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
    backgroundColor: colors.background,
    width: '100%',
    justifyContent: 'center',
    },
    dot:{
        height: 10,
        borderRadius: 5,
        backgroundColor: colors.text,
        marginHorizontal: 8,
    },
});
