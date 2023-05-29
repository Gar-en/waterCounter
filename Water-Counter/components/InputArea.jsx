import { StyleSheet, Text, TextInput, SafeAreaView, View } from 'react-native';

export const InputArea = ({label}) => {
    return (
    <View style={styles.container}>
        <Text style={styles.text}>{label}</Text>
        <TextInput
            style={styles.input}/>
    </View>
    )
}

const styles = StyleSheet.create({
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
})