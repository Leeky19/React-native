import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredTodo, setEnteredTodo] = useState('test')

  const changeTextHandler = (pEnteredTodo) => {
    setEnteredTodo(pEnteredTodo)
  }

  const changeTodoHandler = () => {
    console.log(enteredTodo)
  }

  return (
    <View style={styles.containerFlex}>
      <View style={styles.blueFlexItem}>
      <Text>Blue</Text>
      </View>
      <View style={styles.greenFlexItem}>
      <Text>{enteredTodo}</Text>
      <TextInput 
        placeholder='Entrer nouvelle valeur de state'
        onChangeText={changeTextHandler}
       />
       <Button
        onPress={changeTodoHandler}
        title='Create todo' /> 
      </View>
      <View style={styles.yellowFlexItem} >
      <Text>Yellow</Text>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerFlex: {
    flex: 1,
  },
  blueFlexItem : {
    flex: 2,
    backgroundColor: 'blue'
  },
  greenFlexItem : {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  yellowFlexItem : {
    flex: 2,
    backgroundColor: 'yellow'
  },
});
