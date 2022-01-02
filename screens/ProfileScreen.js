import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Navigation from '../components/Navigation';
import { auth } from '../Firebase/firebase';

const ProfileScreen = ({navigation}) => {
    function handleSignOut(){
        auth
            .signOut()
            .then(() => {
                navigation.replace("Login")
            })
            .catch(error => alert(error.message))
    }

    return (
    <View style={styles.mainView}>
        <Text>Email: {auth.currentUser?.email}</Text>
        <TouchableOpacity onPress={handleSignOut} style={styles.Button}>
                <Text style={styles.ButtonText}>Sign Out</Text>
        </TouchableOpacity>
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

export default ProfileScreen;;