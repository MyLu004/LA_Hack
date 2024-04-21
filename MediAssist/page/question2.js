import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Question2 = ({ navigation }) => {
    const [ques1, setQues1] = useState('');
    const [ques2, setQues2] = useState('');
    const [ques3, setQues3] = useState('');
    const [ques4, setQues4] = useState('');

    const [error, setError] = useState('');

    // const storeData = async (key, value) => {
    //     try {
    //         await AsyncStorage.setItem(key, value);
    //         console.log('Data saved successfully');
    //     } catch (error) {
    //         console.error('Error saving data:', error);
    //     }
    // };

    //key arrow function storing the data
    const storeData = async (key, value) => {
        try {
            let patientInfo = await AsyncStorage.getItem('@patient_info');
            patientInfo = patientInfo ? JSON.parse(patientInfo) : {}; // Parse existing data or initialize an empty object
            patientInfo[key] = value; // Update the patientInfo object with the new value
            await AsyncStorage.setItem('@patient_info', JSON.stringify(patientInfo)); // Save the updated object back to AsyncStorage
            console.log('Data saved successfully');
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };


    const isAllQuestionsAnswered = () => {
        // Check if any of the questionBox inputs are empty
        if (ques1.trim() === '' || ques2.trim() === '' || ques3.trim() === '' || ques4.trim() === '') {
            return false; // At least one question is not answered
        }
        return true; // All questions are answered
    };

    const handleNextBtn = async () => {
        // Increase the question index
        if (isAllQuestionsAnswered()) {
            try {
                // Save answers to AsyncStorage
                await storeData('medication', ques1);
                await storeData('dosage', ques2);
                await storeData('frequency', ques3);
                await storeData('times', ques4);


                console.log("all question got answer");
                navigation.navigate('Question3');
                setError('');
            } catch (error) {
                console.error('Error saving answers:', error);
                setError('Error saving answers');
            }


        } else {
            console.log("please answer all the questions")
            setError('Please answer all questions');
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Header: processing bar */}
            <View>
                <Text>PAGE 2/4</Text>
            </View>

            {/* Question 1 */}
            <View style={styles.questionWrapper}>
                <Text style={styles.questionText}>Enter Medication Name</Text>
                <TextInput
                    style={styles.questionBox}
                    placeholder='Medication Name'
                    onChangeText={(val) => setQues1(val)}
                />
                {/* ANSWER */}
                <Text>answer: {ques1}</Text>
            </View>

            {/* Question 2 */}
            <View style={styles.questionWrapper}>
                <Text style={styles.questionText}>Enter Dosage</Text>
                <TextInput
                    style={styles.questionBox}
                    placeholder='Dosage'
                    onChangeText={(val) => setQues2(val)}
                />
                {/* ANSWER */}
                <Text>answer: {ques2}</Text>
            </View>

            {/* Question 3 */}
            <View style={styles.questionWrapper}>
                <Text style={styles.questionText}>Enter Frequency of Dosage</Text>
                <TextInput
                    style={styles.questionBox}
                    placeholder='Frequency'
                    onChangeText={(val) => setQues3(val)}
                />
                {/* ANSWER */}
                <Text>answer: {ques3}</Text>
            </View>

            {/* Question 4 */}
            <View style={styles.questionWrapper}>
                <Text style={styles.questionText}>Enter Times(s)of Dosage</Text>
                <TextInput
                    style={styles.questionBox}
                    placeholder='Frequency'
                    onChangeText={(val) => setQues4(val)}
                />
                {/* ANSWER */}
                <Text>answer: {ques4}</Text>
            </View>



            <View style={styles.nextBtn}>
                <Button
                    title='NEXT'
                    onPress={handleNextBtn}
                />
            </View>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}


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
    questionBox: {
        backgroundColor: 'white',
        width: 300,
        padding: 4,
        borderColor: 'blue', // Change 'blue' to the desired color
        borderWidth: 1,
        fontSize: 20,
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
    errorText: {
        color: 'red',
        marginTop: 10,
    },

});

export default Question2;