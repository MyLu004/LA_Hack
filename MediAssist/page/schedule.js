// Question.js
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Schedule = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.scheduleText}>Schedule Screen</Text>
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
    scheduleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Schedule;