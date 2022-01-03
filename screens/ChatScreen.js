import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { State } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { addition, subtraction } from '../store/actions/CounterActions';

const ChatScreen = (props) => {

// const [counter, setCounter] = useState(0);

// const additionHandler = () => {
//     setCounter(counter + 1);
// }

// const subtractionHandler = () => {
//     setCounter(counter - 1);
// }

// Applying Redux
const data = useSelector(State => State.counter);
const dispatch = useDispatch(); 

 return (
    // <View style={styles.container}>
    //     <Text>Basic Hit counter</Text>
    //     <Button title='Add' onPress={() => additionHandler()} />
    //     <Text>{counter}</Text>
    //     <Button title='subtract' onPress={() => subtractionHandler()} />
    // </View>
    <View style={styles.container}>
        <Text>Basic Hit counter</Text>
        <Button title='Add' onPress={() => dispatch(addition())} />
        <Text>{data}</Text>
        <Button title='subtract' onPress={() => dispatch(subtraction())} />
    </View>
 );
}

const styles = StyleSheet.create({
 container: {
     flex:1,
     alignItems: 'center',
     justifyContent: 'center',
 }
});

export default ChatScreen;