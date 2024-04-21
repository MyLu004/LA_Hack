// CaretakerScreen.js
import React from 'react';
import Question from './question';
import Schedule from "./schedule";
import { StyleSheet, View, Text, Button, Image } from 'react-native';

const CaretakerScreen = ({ navigation }) => {

    // Define static patient information
    const patient = {
        name: 'John Doe',
        age: 65,
        // Add other fields as needed
    };

    const handleStartButtonPress = () => {
        navigation.navigate('Question');
    };

    const handleHereButtonPress = () => {
        navigation.navigate('Schedule');
    };



    // // Function to handle navigation to the Question screen
    // const handleStartButtonPress = () => {
    //     navigation.navigate('Question');
    // };

    return (
        <View style={styles.container}>
            {/* <Text>Care Taker Screen</Text> */}
            <View style={styles.wrapper}>
                <Image
                    // source={require('../assets/botMed.png')}
                    source={require('../assets/botMed.png')}
                    style={styles.image}

                ></Image>
                <View style={styles.innerWrapper}>
                    <Text>We are here to help with elderly care</Text>
                    <Button
                        title='START'
                        onPress={handleStartButtonPress}
                    />
                </View>
            </View>

            <View gap={10}>
                <Text>Current Patient Information</Text>
                <View style={[styles.wrapper, { backgroundColor: 'lightgray' }]} gap={50}
                >

                    <Image
                        source={require('../assets/icon.png')}
                        style={styles.image}
                        width={300}
                        borderRadius={50}
                    ></Image>

                    <View style={styles.innerWrapper}>
                        <Text>{patient ? patient.name : 'Loading...'}</Text>
                        <Text>{patient ? patient.age : 'Loading...'}</Text>
                    </View>
                </View>
            </View>

            <View>
                <Text style={styles.title}>Schedule an appoinment</Text>
                <Button
                    title='HERE'
                    borderRadius={100}
                    onPress={handleHereButtonPress}
                // onPress={() => navigation.navigate('Caretaker')}
                />
            </View>

            <View>
                <Text style={styles.title}>History</Text>
                <View>
                    <View style={styles.wrapperHis}>
                        <View style={styles.hisComp}>
                            <Image
                                source={require('../assets/calendar.png')}
                                style={styles.image}
                                width={100}
                                borderRadius={50}
                            ></Image>
                            <Text>Adherence</Text>
                        </View>

                        <View style={styles.hisComp}>
                            <Image
                                source={require('../assets/hospital.png')}
                                style={styles.image}
                                width={100}
                                borderRadius={50}
                            ></Image>
                            <Text>Medication List</Text>
                        </View>

                        <View style={styles.hisComp}>
                            <Image
                                source={require('../assets/calendar.png')}
                                style={styles.image}
                                width={100}
                                borderRadius={50}
                            ></Image>
                            <Text>Appointment</Text>
                        </View>

                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 30,
        gap: 15,

    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#89C1EA',
        padding: 20,
        borderRadius: 20,
    },

    innerWrapper: {
        gap: 15,
    },

    image: {
        width: 100, // Adjust width as needed
        height: 100, // Adjust height as needed
    },

    title: {
        fontWeight: 'bold',
        fontSize: 25,
    },

    wrapperHis: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        padding: 10,
    },

    hisComp: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },


});

export default CaretakerScreen;