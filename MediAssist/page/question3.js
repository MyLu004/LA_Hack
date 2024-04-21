import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Question = ({ navigation }) => {
    const [patientInfo, setPatientInfo] = useState(null);



    useEffect(() => {
        const getData = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem('@patient_info');
                console.log("my data haha: ", jsonValue)
                if (jsonValue !== null) {
                    console.log("it went here");
                    const data = JSON.parse(jsonValue);
                    setPatientInfo(data);
                }
            } catch (error) {
                console.error('Failed to retrieve data', error);
            }
        };

        getData();
    }, []);

    const handleNextBtn = () => {
        navigation.navigate('Analysing');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Header: processing bar */}
            <View>
                <Text>PAGE 3/4</Text>
            </View>

            {/* Display Patient Information */}
            {patientInfo && (
                <View style={styles.questionWrapper}>
                    <Text style={styles.questionText}>Confirm Patient Information</Text>
                    <View>
                        <Text>Name: {patientInfo.name}</Text>
                        <Text>Weight: {patientInfo.weight}</Text>
                        <Text>Age: {patientInfo.age}</Text>
                        <Text>Diagnosis: {patientInfo.diagnosis}</Text>
                        <Text>Description: {patientInfo.description}</Text>
                        <Text>Medication: {patientInfo.medication}</Text>
                        <Text>Dosage: {patientInfo.dosage}</Text>
                        <Text>The Frequency: {patientInfo.frequency}</Text>
                        <Text>Times: {patientInfo.times}</Text>
                    </View>
                </View>
            )}

            <View style={styles.nextBtn}>
                <Button
                    title='NEXT'
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
        al: 'flex-end'
    },
});

export default Question;
