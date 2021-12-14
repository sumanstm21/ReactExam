import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import HomeScreen from './HomeScreen';

const LoginScreen = ({navigation}) => {

    function navigate(){
        navigation.navigate('Signup');
    }

    return (
        <View style={styles.mainView}>
            <Text>Login Screen</Text>
            <Button 
                title="Go to Sign Up"
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

export default LoginScreen;