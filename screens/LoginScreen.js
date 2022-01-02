import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Logo from '../components/Logo';
import { auth } from '../Firebase/firebase';
import defaultStyles from '../GeneralStyles';
// import Navigation from './components/Navigation';
// import { useNavigation } from '@react-nativation/core'; 

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const LogNavigation = useNavigation()

    function navigate(){
        navigation.navigate('Signup');
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                console.log('already Logged In');
                navigation.replace('AuthHome');
            }
        })

        return unsubscribe
    }, [])

    function handleLogin(){
        console.log('Logged in with:');
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Logged in with: ', user.email);
            })
            .catch(error => alert(error.message))
    }

    return (
        <View style={styles.mainView}>
            <Logo />
            <Text style={defaultStyles.pageTitle}>Log In</Text>
            <Text style={defaultStyles.formText}>Email</Text>
            <TextInput 
                type={email} 
                style={defaultStyles.textInput} 
                value={email}
                onChangeText={text=> setEmail(text)} 
                placeholder = "Email"
                placeholderTextColor = "#BABADD" 
            />
            <Text style={defaultStyles.formText}>Password</Text>
            <TextInput 
                style={defaultStyles.textInput} 
                value={password}
                onChangeText={text=> setPassword(text)}
                secureTextEntry={true}
                placeholder = "Password"
                placeholderTextColor = "#BABADD"
            />
            <Text style={defaultStyles.formText}>Forgot password?</Text>
            <TouchableOpacity onPress={handleLogin} style={styles.Button}>
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