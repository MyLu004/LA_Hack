// CaretakerScreen.js
import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';

const CaretakerScreen = () => {

    // Define static patient information
    const patient = {
        name: 'John Doe',
        age: 65,
        // Add other fields as needed
    };

    return (
        <View style={styles.container}>
            {/* <Text>Care Taker Screen</Text> */}
            <View style={styles.wrapper}>
                <Image
                    source={require('./assets/botMed.png')}
                    style={styles.image}

                ></Image>
                <View style={styles.innerWrapper}>
                    <Text>We are here help with elderly care</Text>
                    <Button
                        title='START'
                    // onPress={() => navigation.navigate('Caretaker')}
                    />
                </View>
            </View>

            <View gap={10}>
                <Text>Current Patient Information</Text>
                <View style={[styles.wrapper, { backgroundColor: 'lightgray' }]} gap={50}
                >

                    <Image
                        source={require('./assets/icon.png')}
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


});

export default CaretakerScreen;