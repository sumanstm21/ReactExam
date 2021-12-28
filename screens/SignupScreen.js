import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import LoginScreen from './LoginScreen';


const SignupScreen = ({navigation}) => {

    function navigate(){
        navigation.navigate('Login');
    }

    return (
        <View style={styles.mainView}>
            <Text style={styles.TitleText}>Sign up to get access</Text>
            <TextInput placeholder='Email' style={styles.TextInput}/>
            <TextInput secureTextEntry={true} placeholder='Password'  style={styles.TextInput} />
            <TextInput secureTextEntry={true} placeholder='Repeat Password'  style={styles.TextInput} />

            <TouchableOpacity style={styles.Button}>
                <Text style={styles.ButtonText}>Get access</Text>
            </TouchableOpacity>
            <Text onPress={navigate} style={styles.LinkText}>Already a user? Log In </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mainView:{
        marginTop:40,
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    Button: {
        width: '100%',
        margin: 10,
        backgroundColor:'#5050A5',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ButtonText: {
        fontWeight: 'bold',
        fontSize: 19,
        color: 'white'
    },
    TitleText: {
        fontWeight: 'bold',
        fontSize: 19,
        color: '#32305D'
    },
    LinkText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#32305D',
        margin: 10
    },
    TextInput:{
        width: '100%',
        borderWidth: 1,
        borderColor: '#EEEEEE',
        height: 52
        // borderRadius: 10
    }
});

export default SignupScreen;