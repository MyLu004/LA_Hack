// PatientScreen.js
import React from 'react';
<<<<<<< Updated upstream
import GeminiChat from "./GeminiChat";
import { StyleSheet, Text, View, Image, Button }
    from 'react-native';
import FlashMessage from "react-native-flash-message";
=======
import Question from './question';
import Schedule from "./schedule";
import { StyleSheet, View, Text, Button, Image } from 'react-native';

const Patient = ({ navigation }) => {

    // Define static patient information
    const patient = {
        name: 'John Doe',
        age: 65,
        // Add other fields as needed
    };

    const handleStartButtonPress = () => {
        navigation.navigate('Camera');
    };


    // // Function to handle navigation to the Question screen
    // const handleStartButtonPress = () => {
    //     navigation.navigate('Question');
    // };
>>>>>>> Stashed changes

const PatientScreen = () => {
    return (
        <View style={styles.container}>
<<<<<<< Updated upstream
            <Image source={require('../assets/mediassist logo.png')}></Image>
            <Text>Patient Screen</Text>
            <GeminiChat />
            <FlashMessage position={"top"} />
=======
            {/* <Text>Care Taker Screen</Text> */}
            <View gap={10}>
                <Text >Welcome Back, {patient.name}!</Text>
            </View>
            <View style={styles.wrapper}>
                <Image
                    // source={require('../assets/botMed.png')}
                    source={require('../assets/doctorImg.png')}
                    style={styles.image}

                ></Image>
                <View style={styles.innerWrapper}>
                    <Text>Click here to take your medication!</Text>
                    <Button
                        title='START'
                        onPress={handleStartButtonPress}
                    />
                </View>
            </View>

>>>>>>> Stashed changes
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
<<<<<<< Updated upstream
=======
        justifyContent: 'flex-start',
        padding: 30,
        gap: 15,

    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#89C1EA',
        padding: 50,
        borderRadius: 20,
    },

    innerWrapper: {
        gap: 15,
    },

    image: {
        width: 100, // Adjust width as needed
        height: 200, // Adjust height as needed
    },

    title: {
        fontWeight: 'bold',
        fontSize: 25,
    },

    wrapperHis: {
        flexDirection: 'row',
>>>>>>> Stashed changes
        justifyContent: 'center',
    },
});

export default PatientScreen;