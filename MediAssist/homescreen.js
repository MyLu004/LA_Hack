// HomeScreen.js
import React from 'react';
import { StyleSheet, View, Image, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={require('./assets/doctorImg.png')} />
            <Text style={styles.text}> Welcome to MedAssist </Text>
            <Text> ARE YOU A...</Text>
            <Button
                title='Care Taker'
                onPress={() => navigation.navigate('Caretaker')}
            />

            <Button
                title='Patient'
                onPress={() => navigation.navigate('Patient')}
            />
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
    text: {
        fontSize: 15,
        color: 'darkblue',
    },
});

export default HomeScreen;