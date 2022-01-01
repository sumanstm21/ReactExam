import React, { Component, useState } from 'react';
import { View, Text, Button, StyleSheet, } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import LoginScreen from './LoginScreen';
import defaultStyles from '../GeneralStyles';
import Logo from '../components/Logo';
// import { useDispatch } from 'react-redux';

// import firebase from 'firebase';
import {firebase} from '../Firebase/firebase';
// import { firebase } from '../Firebase/firebase';

const SignupScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const dispatch = useDispatch();
    
    function navigate(){
        navigation.navigate('Login');
    }

    function handleSignup(){
        // dispatch(signup(changeName, password));
        console.log('do something');
        firebase.auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log(user.email);
            })
            .catch(error => alert(error.message))
    }

    return (
        <View style={styles.mainView}>
            <Logo />
            <Text style={defaultStyles.TitleText}>Sign up to get access</Text>
            <TextInput 
                placeholder='Email' 
                value={email}
                onChangeText={text=> setEmail(text)}
                style={defaultStyles.textInput}
                />
            <TextInput 
                secureTextEntry={true}
                placeholder='Password'
                value={password}
                onChangeText={text=> setPassword(text)}
                style={defaultStyles.textInput}
                />
            <TouchableOpacity onPress={handleSignup} style={styles.Button}>
                <Text style={styles.ButtonText}>Get access</Text>
            </TouchableOpacity>
            <Text onPress={navigate} style={defaultStyles.LinkText}>Already a user? Log In </Text>
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
});

export default SignupScreen;