import React, { useState, useEffect, useRef } from "react";
import { Buffer } from 'buffer';
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
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import FlashMessage, { showMessage } from "react-native-flash-message";
import * as FileSystem from 'expo-file-system'; // for file system access

const Imagegemini = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  // ... other states (unchanged)

  // Replace with your actual API key
  const API_KEY = "AIzaSyDF8N_x2as_psMF3qwEKMU8qqXD57_uIno";

  // Replace with the URL of your test image (e.g., a publicly accessible image)
  const imageUrl = "https://m.media-amazon.com/images/G/01/wg/lp/LEGO-LP/Storefont_v2/Home/hand_with_bottle_mobile.png"; // Adjust the URL accordingly

  async function fileToGenerativePart(uri) {
    const response = await fetch(uri); // Fetch image data from URI
    const blob = await response.blob();
    const reader = new FileReader();
    return new Promise((resolve) => {
      reader.onloadend = () => resolve({
        inlineData: {
          data: Buffer.from(reader.result).toString("base64"),
          mimeType: blob.type,
        },
      });
      reader.readAsArrayBuffer(blob);
    });
  }

  async function processImage(prompt) {
    setLoading(true);

    try {
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

      const imagePart = await fileToGenerativePart(imageUrl);
      const result = await model.generateContent([prompt, imagePart]);
      const response = await result.response;
      const text = response.text();
      setMessages([...messages, { text, user: false }]); // Add generated text to messages
    } catch (error) {
      console.error("Error processing image:", error);
      showMessage({
        message: "An error occurred. Please try again",
        type: "error",
        duration: 2000,
      });
    } finally {
      setLoading(false);
    }
  }

  const renderMessage = ({ item }) => (
    <View style={item.user ? styles.userMessage : styles.messageContainer}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item, index) => index.toString()}
      />
      <Image source={{ uri: imageUrl }} style={styles.selectedImage} />

      <TextInput
        style={styles.input}
        value={userInput}
        onChangeText={setUserInput}
        placeholder="Enter a prompt..."
      />
      <TouchableOpacity style={styles.processButton} onPress={() => processImage(userInput)}>
        <Text style={styles.processButtonText}>Process Image</Text>
      </TouchableOpacity>

      {/* Uncomment and implement if using Camera  */}
      {/* <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity onPress={takePicture} style={{ padding: 20 }}>
          <Text style={{ fontSize: 20 }}>Take Picture</Text>
        </TouchableOpacity>
      </View> */}

      {/* ... other UI components (unchanged) */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    marginTop: 50,
  },
  messageContainer: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    height: 50,
  },
  processButton: {
    backgroundColor: "#4caf50",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  processButtonText: {
    color: "white",
    fontSize: 16,
  },
  selectedImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#4caf50",
    color: "white",
    borderRadius: 10,
    maxWidth: "80%",
  },
});

export default Imagegemini;