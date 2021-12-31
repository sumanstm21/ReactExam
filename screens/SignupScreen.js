import React from 'react';
import { View, Text, Button, StyleSheet, } from 'react-native';
import LoginScreen from './LoginScreen';
import defaultStyles from '../GeneralStyles';
import Logo from '../components/Logo';

const SignupScreen = ({navigation}) => {

    function navigate(){
        navigation.navigate('Login');
    }

    return (
        <View style={styles.mainView}>
            <Logo />
            <Text style={defaultStyles.pageTitle}>Sign Up to get access</Text>
            <Text onPress={navigate}>Sign In</Text>
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
    }
});

export default SignupScreen;