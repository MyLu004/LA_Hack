import React from 'react';
import { StatusBar } from 'expo-status-bar';
import GeminiChat from "./GeminiChat";
import { StyleSheet, Text, View, Image, Button } 
from 'react-native';
import FlashMessage from "react-native-flash-message";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/mediassist logo.png')}></Image>
      <Text style={styles.text}> Welcome to MedAssist </Text>
      <StatusBar style="auto" />
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
  text:{  
    fontFamily:"Roboto",
    fontSize: 20,
    color: 'darkblue',
  },
});
