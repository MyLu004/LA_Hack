import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput, Button } from 'react-native';

const Question3 = ({ navigation }) => {
    const [ques1, setQues1] = useState('');



    // const [error, setError] = useState('');

    // const isAllQuestionsAnswered = () => {
    //     // Check if any of the questionBox inputs are empty
    //     if (ques1.trim() === '') {
    //         return false; // At least one question is not answered
    //     }
    //     return true; // All questions are answered
    // };

    const handleNextBtn = () => {
        navigation.navigate('Question4');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Header: processing bar */}
            <View>
                <Text>PAGE 3/4</Text>
            </View>

            {/* Question 5 */}
            <View style={styles.questionWrapper}>
                <Text style={styles.questionText}>RECORD MESSAGE FOR PATIENT</Text>
                <View>
                    {/*ANWER FOR THE RECORD, base all on the info the user type in */}
                </View>

            </View>

            <View style={styles.nextBtn}>
                <Button
                    title='NEXT'
                    onPress={handleNextBtn}
                />
            </View>
            {/* {error ? <Text style={styles.errorText}>{error}</Text> : null} */}


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

export default Question3;