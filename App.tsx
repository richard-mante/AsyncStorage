import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Profile from './src/screens/profile';

const Stack = createNativeStackNavigator();
const screenObtions = {};
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenObtions}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
          }}
        />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
