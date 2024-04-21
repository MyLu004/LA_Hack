// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './page/homescreen';
import CaretakerScreen from './page/careTaker';
import PatientScreen from './page/patientscreen';

import Question from './page/question';
import Question2 from './page/question2';
import Question3 from './page/question3';
import Question4 from './page/question4';
import Analysing from './page/Analysing';
import Schedule from './page/schedule';
import Camera from './page/Camera';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Caretaker" component={CaretakerScreen} />
        <Stack.Screen name="Patientscreen" component={PatientScreen} />
        <Stack.Screen name="Patient" component={Patient} />

        <Stack.Screen name="Patientchat" component={PatientScreen} />
        <Stack.Screen name="Camera" component={Camera} />

        <Stack.Screen name="Question" component={Question} />
        <Stack.Screen name="Question2" component={Question2} />
        <Stack.Screen name="Question3" component={Question3} />
        <Stack.Screen name="Question4" component={Question4} />
        <Stack.Screen name="Analysing" component={Analysing} />
        <Stack.Screen name="Schedule" component={Schedule} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;