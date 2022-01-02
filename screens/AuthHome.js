import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Navigation from '../components/Navigation';
import { auth } from '../Firebase/firebase';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ChatScreen from './ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';

const AuthHome = ({navigation}) => {

    const Tab = createBottomTabNavigator();

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
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomeScreen}  options={{
                tabBarIcon: ({focused}) => (
                  <View>
                      <Image
                      source={require('../img/icons8-home.svg')} 
                      resizeMode='contain'
                      style={{
                          width:25,
                          height:25
                      }}
                        />
                  </View>  
                ),
            }}/>
            <Tab.Screen name="Discover" component={HomeScreen} options={{
                tabBarIcon: ({focused}) => (
                  <View>
                      <Image
                      source={require('../img/icons8-find_user_male.svg')} 
                      resizeMode='contain'
                      style={{
                          width:25,
                          height:25
                      }}
                        />
                  </View>  
                ),
            }}/>
            <Tab.Screen name="ChatOuter" component={ChatScreen} options={{
                tabBarIcon: ({focused}) => (
                  <View>
                      <Image
                      source={require('../img/icons8-chat.svg')} 
                      resizeMode='contain'
                      style={{
                          width:25,
                          height:25
                      }}
                        />
                  </View>  
                ),
            }}/>
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarIcon: ({focused}) => (
                  <View>
                      <Image
                      source={require('../img/icons8-menu.svg')} 
                      resizeMode='contain'
                      style={{
                          width:25,
                          height:25
                      }}
                        />
                  </View>  
                ),
            }}/>
        </Tab.Navigator>
    </View>
 );
}

const styles = StyleSheet.create({
    mainView:{
        marginTop:40,
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        // alignItems:'center'
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

export default AuthHome;;