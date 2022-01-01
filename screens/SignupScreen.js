import React from 'react';
import { View, Text, Button, StyleSheet, } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import LoginScreen from './LoginScreen';
import { firebase } from '../Firebase/firebase';
import defaultStyles from '../GeneralStyles';
import Logo from '../components/Logo';

const SignupScreen = ({navigation}) => {

    function navigate(){
        console.log(firebase);
        navigation.navigate('Login');
    }
    function onSignUp(){
        console.log('onsignup pressed');
        return null;
    }
    return (
        <View style={styles.mainView}>
            <Logo />
            <Text style={defaultStyles.TitleText}>Sign up to get access</Text>
            <TextInput 
                placeholder='Email' 
                style={defaultStyles.textInput}
                />
            <TextInput 
                secureTextEntry={true}
                placeholder='Password'  
                style={defaultStyles.textInput}
                />
            <TextInput 
                secureTextEntry={true} 
                placeholder='Repeat Password'  
                style={defaultStyles.textInput}
                />
            <TouchableOpacity style={styles.Button}>
                <Text style={styles.ButtonText} onPress={() => this.onSignUp()}>Get access</Text>
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