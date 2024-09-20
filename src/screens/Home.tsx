import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GlobalStyles from '../../utils/GolobalStyle';

export default function Home({navigation}:any) {
  return (
    <View style={[GlobalStyles.container]}>
      <Button
        title="Go to Profile"
        onPress={() => {
          navigation.navigate('Profile');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
