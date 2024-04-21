
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Schedule = () => {
    const [selectedDate, setSelectedDate] = useState('');

    const handleDatePress = (date) => {
        setSelectedDate(date);
        // You can perform additional actions when a date is selected
    };

    // Function to generate an array of dates for the current month
    const generateDates = () => {
        const dates = [];
        const today = new Date();
        const currentMonth = today.getMonth();
        const totalDays = new Date(today.getFullYear(), currentMonth + 1, 0).getDate();

        for (let i = 1; i <= totalDays; i++) {
            dates.push(i);
        }

        return dates;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Pick Day to Schedule Appointment</Text>
            <View style={styles.calendar}>
                {generateDates().map((date) => (
                    <TouchableOpacity
                        key={date}
                        style={[styles.dateButton, date === parseInt(selectedDate) && styles.selectedDate]}
                        onPress={() => handleDatePress(date)}>
                        <Text style={styles.dateText}>{date}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    calendar: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    dateButton: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        borderWidth: 1,
        borderRadius: 20,
    },
    dateText: {
        fontSize: 16,
    },
    selectedDate: {
        backgroundColor: 'lightblue',
    },
});


export default Schedule;