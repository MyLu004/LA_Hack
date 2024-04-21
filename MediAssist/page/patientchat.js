// PatientScreen.js
import React from 'react';
import GeminiChat from "./GeminiChat";
// import Chat from "./Chat";

import { StyleSheet, Text, View, Image, Button }
    from 'react-native';
import FlashMessage from "react-native-flash-message";

const PatientScreen = () => {
    return (
        <View style={styles.container}>
            {/* <Image source={require('../assets/mediassist logo.png')}></Image> */}
            <Text>Chat Bot</Text>
            <GeminiChat />
            <FlashMessage position={"top"} />
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