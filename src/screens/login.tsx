import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import GlobalStyles from '../../utils/GolobalStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({navigation}: any) {
  async function checkUser() {
    await AsyncStorage.getItem('userInfo').then(value => {
      if (value !== null) {
        navigation.navigate('Home');
      }
    });
  }
  useEffect(() => {
    checkUser();
  }, []);
  const [userInfo, setUserInfo] = React.useState({
    username: '',
    email: '',
    password: '',
  });

  function SetUserInfo(key: string, value: string) {
    setUserInfo(prevState => ({
      ...prevState,
      [key]: value,
    }));
  }

  async function SetData() {
    if (
      userInfo.username === '' ||
      userInfo.email === '' ||
      userInfo.password === ''
    ) {
      Alert.alert('Please fill all fields');
      return;
    } else {
      try {
        await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        navigation.navigate('Home');
      } catch (e) {
        Alert.alert('Failed to save data');
      }
    }
  }

  return (
    <View style={[GlobalStyles.container]}>
      <Image style={styles.image} source={require('../../assets/logo.png')} />
      <View>
        <TextInput
          placeholder="Username"
          style={styles.inputField}
          onChangeText={value => {
            SetUserInfo('username', value);
          }}
        />
        <TextInput
          placeholder="Email"
          style={styles.inputField}
          onChangeText={value => {
            SetUserInfo('email', value);
          }}
        />
        <TextInput
          placeholder="Password"
          style={styles.inputField}
          onChangeText={value => {
            SetUserInfo('password', value);
          }}
        />
      </View>
      <CustomButton setData={SetData} />
    </View>
  );
}

const CustomButton = ({setData}: any) => {
  return (
    <TouchableOpacity style={styles.button} onPress={setData}>
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    objectFit: 'contain',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
  },
  inputField: {
    backgroundColor: '#f9f9f9',
    width: 300,
    paddingLeft: 20,
    borderRadius: 10,
    marginTop: 16,
  },
  button: {
    marginTop: 24,
    backgroundColor: 'orange',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    width: 300,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
