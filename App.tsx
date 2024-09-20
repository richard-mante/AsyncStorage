import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Text, View} from 'react-native';
import GlobalStyles from './utils/GolobalStyle';
import Profile from './src/screens/Profile';
import Home from './src/screens/Home';
import Login from './src/screens/Login';

const Stack = createNativeStackNavigator();
const screenObtions = {};
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Home" component={Home} options={screenObtions} />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={screenObtions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
