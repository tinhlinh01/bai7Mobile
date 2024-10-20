import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PhoneInput from './PhoneInput';  // Path to PhoneInput component
import HomeScreen from './HomeScreen';  // Path to HomeScreen component

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PhoneInput">
        <Stack.Screen name="PhoneInput" component={PhoneInput} options={{ title: 'Phone Input' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home Screen' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
