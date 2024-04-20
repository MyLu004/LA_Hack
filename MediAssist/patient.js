// PatientScreen.js
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const PatientScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Patient Screen</Text>
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

export default PatientScreen;