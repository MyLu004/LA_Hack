import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import {
    View,
    Text,
    Button,
    ScrollView,
    StyleSheet,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_KEY = "AIzaSyDF8N_x2as_psMF3qwEKMU8qqXD57_uIno";

const genAI = new GoogleGenerativeAI(API_KEY);

const Question3 = ({ navigation }) => {
    const [generatedText, setGeneratedText] = useState('');
    const [patientInfo, setPatientInfo] = useState(null);

    const handleNextBtn = () => {
        navigation.navigate('Caretaker');
    };

    useEffect(() => {
        const displayResult = async () => {
            const jsonValue = await AsyncStorage.getItem('@patient_info');
            if (jsonValue !== null) {
                const data = JSON.parse(jsonValue);
                setPatientInfo(data);

                // Extract patient information to include in the prompt
                const { name, weight, age, diagnosis, description, medication, dosage, frequency } = data;
                const prompt = `Patient Name: ${name}\nWeight: ${weight}\nAge: ${age}\nDiagnosis: ${diagnosis}\nDescription: ${description}\nMedication: ${medication}\nDosage: ${dosage}\nFrequency: ${frequency}\n\nBased on the data, considering the diagnosis (${diagnosis}) and medication (${medication}), it's important to ensure proper adherence to the prescribed medication regimen. Please remind to the users/patient take their medication as directed. Act like you are doctor`;
                ;

                // Generate text based on the combined prompt
                const model = genAI.getGenerativeModel({ model: "gemini-pro" });
                const result = await model.generateContent(prompt);
                const response = await result.response;
                const text = response.text();
                setGeneratedText(text);
            };
        }
        displayResult();
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.questionWrapper}>
                <Text style={styles.questionText}>ANALYSIS COMPLETED</Text>
                <ScrollView style={styles.boxWrapper}>
                    <Text>{generatedText}</Text>
                </ScrollView>
            </View>
            <View style={styles.nextBtn}>
                <Button
                    title='DONE'
                    onPress={handleNextBtn}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'lightblue',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 15,
    },
    questionWrapper: {
        flexDirection: 'column',
        marginVertical: 10,
    },
    questionText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    nextBtn: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    boxWrapper: {
        width: 350,
        height: 300,
        borderColor: 'black',
        borderWidth: 1,
        margin: 10,
        padding: 10,
    }
});

export default Question3;
