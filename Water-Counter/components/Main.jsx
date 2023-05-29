import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, Alert, TextInput } from 'react-native';
import { InputArea } from './InputArea';
import  ButtonCalc  from './ButtonCalc';
import * as SQLite from 'expo-sqlite'
import check from './Check';

export default function Main() {
    const db = SQLite.openDatabase('water.db');
    let chislo = []

    const handleChange = (e) => {
        if (chislo.includes(e.target.id) === false) {
            chislo.push(e.target.id)
        }
        console.log(chislo)
    }

    const onPress = () => {
        let numbers = chislo.map(Number)
        let arr = []
        if (numbers.length < 1) {
            alert('Заполните все поля')
        }
        numbers.map(el => {
            arr.push(Number(document.getElementById(el).value))
        })

        check(arr)

    }

    const styles = StyleSheet.create({
        main: {
          width: '60%',
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginLeft: '20%',
        },
        container: {
            height: 70,
            width: 350,
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginTop: 30,
        
          },
          input: {
            height: 40,
            width: 350,
            borderWidth: 1,
          },
          text: {
            fontSize: 16,
            fontWeight: 'bold',
          },
          butstyle: {
            height: 100,
            width: 100,
            borderWidth: 0.5,
            color: '000080',
            borderRadius: 7,
            textAlign: 'center',
            margin: 15,
        },
      });

    return (
        <div style={styles.main} onChange={(e) => handleChange(e)} >
            <input name = "Количество человек, проживающих в доме" id='0' style={styles.main}/>
            <input name = "Запах" id='1'/>
            <input name = "Мутность" id='2'/>
            <input name = "Кислотность(pH)" id='3'/>
            <input name = "Окисляемость" id='4'/>
            <input name = "Нитраты" id='5'/>
            <input name = "Сульфаты" id='6'/> //соль
            <input name = "Хлориды" id='7'/> //соль
            <input name = "Нитриты" id='8'/>
            <input name = "Цветность" id='9'/>
            <input name = "Жёсткость" id='10'/>
            <input name = "Железо" id='11'/>
            <Button style={styles.butstyle} 
                title='Рассчитать'
                onPress={onPress} //(e) => onPress(e)
            />
        </div>
    );
}