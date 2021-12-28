import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import HomeScreen from './HomeScreen';

const LoginScreen = ({navigation}) => {

    function navigate(){
        navigation.navigate('Signup');
    }

    return (
        <View style={styles.mainView}>
            {/* <View style={styles.TopView}>
                <Image source={require('../assets/images/MaskGroup1.svg')} />
            </View> */}
            {/* <Text>Something</Text> */}
            <View>
                <Text style={styles.TitleText}>Log In</Text>
                <TextInput placeholder='Email' style={styles.TextInput}/>
                <TextInput secureTextEntry={true} placeholder='Password'  style={styles.TextInput} />

                <Text onPress={navigate} style={styles.LinkText}>Forgot Password?</Text>

                <TouchableOpacity style={styles.Button}>
                    <Text style={styles.ButtonText}>Log In</Text>
                </TouchableOpacity>
                    {/* <View style={styles.TopView}>TOP View</View>
                    <View style={styles.BottomView}>Bottom View</View> */}
                    
                    <Text onPress={navigate}  style={styles.LinkText}>Don't have an account? Sign Up!</Text>
            </View>
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
    TopView:{
        width: '100%',
        height: '50%',
        // backgroundColor: '#000'
    },
    BottomView:{
        width: '100%',
        height: '50%',
        backgroundColor: '#000'
    },
    ImageStyle:{
        width: '60%',
        resizeMode: 'contain'
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

export default LoginScreen;