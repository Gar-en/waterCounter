import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, Alert, TextInput } from 'react-native';


const Output = ({ navigation }) => {


    const onPress = () => {
        navigation.navigate('Main')
    }



    return (
       <View>
            <Button title='Назад' onPress={onPress}
            />
       </View> 
    )
}

export default Output