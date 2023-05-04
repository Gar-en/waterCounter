import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, SafeAreaView, View } from 'react-native';
import { InputArea } from './components/InputArea';


export default function App() {
  return (
    <View style={styles.main}>
      <InputArea label = "Вкус"/>
      <InputArea label = "Цвет"/>
      <InputArea label = "Запах"/>
      <InputArea label = "Мутность"/>
      <InputArea label = "Кислотность(pH)"/>
      <InputArea label = "Оксиляемость"/>
      <InputArea label = "Минерализация"/>
      <InputArea label = "Железо"/>
      <InputArea label = "Марганец"/>
      <InputArea label = "Ртуть"/>
      <InputArea label = "Альминий"/>
      <InputArea label = "Сульфаты"/>
      <InputArea label = "Нитраты"/>
      <InputArea label = "Хлориды"/>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});

