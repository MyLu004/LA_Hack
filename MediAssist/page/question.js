import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput, Button } from 'react-native';
// import { AsyncStorage } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Question = ({ navigation }) => {
    const [ques1, setQues1] = useState('');
    const [ques2, setQues2] = useState('');
    const [ques3, setQues3] = useState('');
    const [ques4, setQues4] = useState('');
    const [ques5, setQues5] = useState('');


    const [error, setError] = useState('');


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

    //function checking all answers is fill out
    const isAllQuestionsAnswered = () => {
        // Check if any of the questionBox inputs are empty
        if (ques1.trim() === '' || ques2.trim() === '' || ques3.trim() === '' || ques4.trim() === '' || ques5.trim() === '') {
            return false; // At least one question is not answered
        }
        return true; // All questions are answered
    };

    //function click next button
    const handleNextBtn = async () => {
        // Increase the question index
        if (isAllQuestionsAnswered()) {
            try {
                // Save answers to AsyncStorage
                await storeData('name', ques1);
                await storeData('weight', ques2);
                await storeData('age', ques3);
                await storeData('diagnosis', ques4);
                await storeData('description', ques5);

                console.log("all question got answer");
                navigation.navigate('Question2');
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
                <Text>PAGE 1/4</Text>
            </View>

            {/* Question 1 */}
            <View style={styles.questionWrapper}>
                <Text style={styles.questionText}>Enter Patient Name</Text>
                <TextInput
                    style={styles.questionBox}
                    placeholder='Name'
                    onChangeText={(val) => setQues1(val)}
                />
                {/* ANSWER */}
                <Text>answer: {ques1}</Text>
            </View>

            {/* Question 2 */}
            <View style={styles.questionWrapper}>
                <Text style={styles.questionText}>Enter Weight</Text>
                <TextInput
                    style={styles.questionBox}
                    placeholder='Weight (lbs)'
                    onChangeText={(val) => setQues2(val)}
                />
                {/* ANSWER */}
                <Text>answer: {ques2}</Text>
            </View>

            {/* Question 3 */}
            <View style={styles.questionWrapper}>
                <Text style={styles.questionText}>Enter Age</Text>
                <TextInput
                    style={styles.questionBox}
                    placeholder='Age'
                    onChangeText={(val) => setQues3(val)}
                />
                {/* ANSWER */}
                <Text>answer: {ques3}</Text>
            </View>

            {/* Question 4 */}
            <View style={styles.questionWrapper}>
                <Text style={styles.questionText}>Input Patient Diagnoses</Text>
                <TextInput
                    style={styles.questionBox}
                    placeholder='Diagnoses'
                    onChangeText={(val) => setQues4(val)}
                />
                {/* ANSWER */}
                <Text>answer: {ques4}</Text>
            </View>

            {/* Question 5 */}
            <View style={styles.questionWrapper}>
                <Text style={styles.questionText}>Provide Description of Symptoms</Text>
                <TextInput
                    multiline
                    style={styles.questionBox}
                    placeholder='Description'
                    onChangeText={(val) => setQues5(val)}

                />
                {/* ANSWER */}
                <Text>answer: {ques5}</Text>
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

export default Question;