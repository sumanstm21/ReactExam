import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Logo from '../components/Logo';
import defaultStyles from '../GeneralStyles';

const LoginScreen = ({navigation}) => {
    const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");

    function navigate(){
        navigation.navigate('Signup');
    }

    return (
        <View style={styles.mainView}>
            <Logo />
            <Text style={defaultStyles.pageTitle}>Log In</Text>
            <Text style={defaultStyles.formText}>Email</Text>
            <TextInput 
                type={email} 
                style={defaultStyles.textInput} 
                onChangeText={onChangeEmail} 
                value={email} 
                placeholder = "Email"
                placeholderTextColor = "#BABADD" 
            />
            <Text style={defaultStyles.formText}>Password</Text>
            <TextInput 
                style={defaultStyles.textInput} 
                onChangeText={onChangePassword} 
                value={password}
                secureTextEntry={true}
                placeholder = "Password"
                placeholderTextColor = "#BABADD"
            />
            <Text style={defaultStyles.formText}>Forgot password?</Text>
            <TouchableOpacity style={styles.Button}>
                <Text style={styles.ButtonText}>Log In</Text>
            </TouchableOpacity>
            <Text
                onPress={navigate}
                style={defaultStyles.LinkText}
                >Go to Sign Up</Text>
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

export default LoginScreen;