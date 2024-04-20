// CaretakerScreen.js
import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';

const CaretakerScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Care Taker Screen</Text>
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
    wrapper: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    image: {
        width: 100, // Adjust width as needed
        height: 100, // Adjust height as needed
    },


});

export default CaretakerScreen;