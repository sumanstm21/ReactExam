import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { State } from 'react-native-gesture-handler';
import defaultStyles from '../GeneralStyles';
import { useSelector, useDispatch } from 'react-redux';
import { addition, subtraction } from '../store/actions/CounterActions';

const ChatScreen = ({navigation}) => {

    const passingData = 'Data from Chat Screen';
// const [counter, setCounter] = useState(0);

// const additionHandler = () => {
//     setCounter(counter + 1);
// }

// const subtractionHandler = () => {
//     setCounter(counter - 1);
// }

function navigate(){
    navigation.navigate('FlexBoxScreen', {
        ItemName: 'Data from previous Screen'
    });
}

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
        <Text
                onPress={navigate}
                style={defaultStyles.LinkText}
                >Go to Flex Box</Text>
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