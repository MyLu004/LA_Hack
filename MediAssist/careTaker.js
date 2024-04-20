// CaretakerScreen.js
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const CaretakerScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Care Taker Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default CaretakerScreen;