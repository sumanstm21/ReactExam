import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import LoginScreen from './LoginScreen';


const SignupScreen = ({navigation}) => {

    function navigate(){
        navigation.navigate('Login');
    }

    return (
        <View style={styles.mainView}>
            <Text>Sign Up Here Singupscreen</Text>
            <Button 
                title="Go to Sign In"
                onPress={navigate}
            />
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