import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput, Button } from 'react-native';

const Question = ({ navigation }) => {
    const [ques1, setQues1] = useState('');
    const [ques2, setQues2] = useState('');
    const [ques3, setQues3] = useState('');
    const [ques4, setQues4] = useState('');
    const [ques5, setQues5] = useState('');


    const [error, setError] = useState('');

    const isAllQuestionsAnswered = () => {
        // Check if any of the questionBox inputs are empty
        if (ques1.trim() === '' || ques2.trim() === '' || ques3.trim() === '' || ques4.trim() === '' || ques5.trim() === '') {
            return false; // At least one question is not answered
        }
        return true; // All questions are answered
    };

    const handleNextBtn = () => {
        // Increase the question index
        if (isAllQuestionsAnswered()) {
            console.log("all question got answer")
            navigation.navigate('Question2');
            setError('');
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