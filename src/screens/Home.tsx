import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import GlobalStyles from '../../utils/GolobalStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({navigation}: any) {
  let [userName, setUserName] = React.useState('');

  useEffect(() => {
    GetUserInfo();
  }, []);
    
  async function GetUserInfo() {
    try {
      await AsyncStorage.getItem('userInfo').then(value => {
        if (value !== null) {
          setUserName(JSON.parse(value).username);
        }
      });
    } catch (e) {
      Alert.alert('Failed to fetch the data');
    }
  }
  return (
    <View style={[GlobalStyles.container]}>
      <Text>Hello {userName}</Text>
      <View style={{margin: 10}}>
        <Button
          title="Go to Profile"
          onPress={() => {
            navigation.navigate('Profile');
          }}
        />
      </View>
      <Button title="Get User Info" onPress={GetUserInfo} />
    </View>
  );
}

const styles = StyleSheet.create({});
