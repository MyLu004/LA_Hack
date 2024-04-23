import React, { useState, useEffect, useRef } from "react";
import { Buffer } from 'buffer'
import { GoogleGenerativeAI } from "@google/generative-ai";
import {
    View,
    Text,
    TextInput,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Image,
} from "react-native";
import * as Speech from "expo-speech";
//import { RNCamera } from 'react-native-camera';
import { Camera, CameraType } from 'expo-camera';
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import FlashMessage, { showMessage } from "react-native-flash-message";
// import { readFileSync } from 'fs';
// import { PermissionsAndroid } from 'react-native';
// import * as FileSystem from 'expo-file-system';

const CameraPage = () => {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [showStopIcon, setShowStopIcon] = useState(false);
    const [cameraRef, setCameraRef] = useState(null);
    const [isCameraReady, setCameraReady] = useState(false);
    const [type, setType] = useState(CameraType.back);

    const API_KEY = "AIzaSyDF8N_x2as_psMF3qwEKMU8qqXD57_uIno";

    //function fileToGenerativePart(path, mimeType) {
    //    return {
    //        inlineData: {
    //            data: Buffer.from(require(path)).toString("base64"),
    //            mimeType
    //        },
    //    };
    //}
    // async function startChat() {
    //     const genAI = new GoogleGenerativeAI(API_KEY);
    //     const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
    //     const prompt = "This image contains information about patient's medication. Given the name or description and the time they should take the medication, describe the product as thoroughly as possible based on what you see and know about the medication. Then Give them a schedule of on each day of the week at what time they should take the medication such as Monday: Afternoon take on pill.";
    //     const imageParts = [fileToGenerativePart('../assets/med.png', 'image/png')]

    //     // const result = await model.generateContent([prompt, imageParts]);
    //     const result = await model.generateContent([prompt, imageParts]);

    //     const response = await result.response;
    //     const text = response.text();
    //     console.log(text);
    //     showMessage({
    //         message: "Welcome to Gemini Chat 🤖",
    //         description: text,
    //         type: "info",
    //         icon: "info",
    //         duration: 2000,
    //     });
    //     setMessages([
    //         {
    //             text,
    //             user: false,
    //         },
    //     ]);
    // };

    // useEffect(() => {
    //     startChat();
    // }, []);

    //  const sendMessage = async() => {
    //setLoading(true);
    //const userMessage = { text: userInput, user: true };
    //setMessages([...messages, userMessage]);

    //const genAI = new GoogleGenerativeAI.GoogleGenerativeAI(API_KEY);
    //const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    //const prompt = userMessage.text;
    //const result = await model.generateContent(prompt);
    //const response = result.response;
    //const text = response.text();
    //setMessages([...messages, { text, user: false }]);
    //setLoading(false);
    //setUserInput("");

    //if (text && !isSpeaking) {
    //  Speech.speak(text);
    //  setIsSpeaking(true);
    //  setShowStopIcon(true);
    //}
    // };

    const toggleSpeech = () => {
        if (isSpeaking) {
            Speech.stop();
            setIsSpeaking(false);
        } else {
            Speech.speak(messages[messages.length - 1].text);
            setIsSpeaking(true);
        }
    };

    const ClearMessage = () => {
        setMessages([]);
        setIsSpeaking(false);
    };

    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    const renderMessage = ({ item }) => (
        <View style={styles.messageContainer}>
            <Text style={[styles.messageText, item.user && styles.userMessage]}>
                {item.text}
            </Text>
        </View>
    );

    const takePicture = async () => {
        if (cameraRef) {
            const data = await cameraRef.takePictureAsync();
            console.log(data.uri);
        }
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={messages}
                renderItem={renderMessage}
                keyExtractor={(item, index) => index.toString()}
            />
            <Camera ref={(ref) => setCameraRef(ref)} cameraRefstyle={styles.camera} type={type}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={takePicture}>
                        <Text style={styles.text}>Take Picture</Text>
                    </TouchableOpacity>

                </View>
            </Camera>

            <View style={styles.inputContainer}>
                <TouchableOpacity style={styles.micIcon} onPress={toggleSpeech}>
                    {isSpeaking ? (
                        <FontAwesome
                            name="microphone-slash"
                            size={24}
                            color="white"
                        />
                    ) : (
                        <FontAwesome
                            name="microphone"
                            size={24}
                            color="white"
                        />
                    )}
                </TouchableOpacity>
                <TextInput
                    placeholder="Type a message"
                    onChangeText={setUserInput}
                    value={userInput}
                    //onSubmitEditing={sendMessage}
                    style={styles.input}
                    placeholderTextColor="#fff"
                />
                {showStopIcon && (
                    <TouchableOpacity style={styles.stopIcon} onPress={ClearMessage}>
                        <Entypo name="controller-stop" size={24} color="white" />
                    </TouchableOpacity>
                )}
            </View>

            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={takePicture} style={{ padding: 20 }}>
                    <Text style={{ fontSize: 20 }}>Take Picture</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#ffff", marginTop: 50 },
    messageContainer: { padding: 10, marginVertical: 5 },
    messageText: { fontSize: 16 },
    inputContainer: { flexDirection: "row", alignItems: "center", padding: 10 },
    input: {
        flex: 1,
        padding: 10,
        backgroundColor: "#131314",
        borderRadius: 10,
        height: 50,
        color: "white",
    },
    micIcon: {
        padding: 10,
        backgroundColor: "#131314",
        borderRadius: 25,
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 5,
    },
    stopIcon: {
        padding: 10,
        backgroundColor: "#131314",
        borderRadius: 25,
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 3,
    },
    userMessage: {
        alignSelf: "flex-end",
        backgroundColor: "#4caf50",
        color: "white",
        borderRadius: 10,
        maxWidth: "80%",
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default CameraPage;