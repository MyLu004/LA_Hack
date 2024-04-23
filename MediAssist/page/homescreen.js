// HomeScreen.js
import React from 'react';
import { StyleSheet, View, Image, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/doctorImg.png')} />
            <Text style={styles.text}> Welcome to MediScan </Text>

            <View style={styles.innerWrapper}>
                <Text style={styles.textp}> ARE YOU A...</Text>

                <Button
                    title='Care Taker'
                    onPress={() => navigation.navigate('Caretaker')}
                    style={styles.button}
                />

                <Button
                    title='Patient'
                    onPress={() => navigation.navigate('Patientscreen')}
                    style={styles.button}
                />
            </View>


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
        fontSize: 30,
        color: 'darkblue',
    },

    textp: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    button: {
        margin: 10,
    },
    innerWrapper: {
        width: 100,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
    }
});

export default HomeScreen;