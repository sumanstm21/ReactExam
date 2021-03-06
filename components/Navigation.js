import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AuthHome from '../screens/AuthHome';
import { useSelector } from 'react-redux';
import { auth } from '../Firebase/firebase';
import DiscoversList from '../screens/DiscoversList';
import DiscoverScreen from '../screens/DiscoverScreen';
import DiscoverCreateScreen from '../screens/DiscoverCreateScreen';
import EventScreen from '../screens/EventScreen';
import EventCreateScreen from '../screens/EventCreateScreen';
import EventDetailScreen from '../screens/EventDetailScreen';

const Navigation = props => {
    
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();
    // const loggedInUser = false;
    const loggedInUser = `${ auth.currentUser?.uid ? true : false}`;
    
    // const loggedInUser = useSelector(state => state.user.loggedInUser);
    auth.onAuthStateChanged(user => {
        if (user) {
            console.log('You are on Navigation page.');
            // const loggedInUser = true;
        }
    })
    // const loggedInUser = false;

    return (
        <NavigationContainer style={styles.container}>
            {loggedInUser == true ? (
                <Tab.Navigator screenOptions={{ headerShown: false }}>
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen name="Discover" component={DiscoversList} options={{title: 'Discoveries'}} />
                    <Tab.Screen name="ChatOuter" component={ChatScreen} />
                    <Tab.Screen name="Profile" component={ProfileScreen} />
                </Tab.Navigator>
            ) : (
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Signup" component={ SignupScreen } />
                    <Stack.Screen name="AuthHome" component={ AuthHome } />
                    <Stack.Screen name="DiscoversList" component={ DiscoversList }  options={{title: 'Discovery'}} />
                    <Stack.Screen name="DiscoverScreen" component={ DiscoverScreen }  options={{title: 'Discover List'}}/>
                    <Stack.Screen name="DiscoverCreateScreen" component={ DiscoverCreateScreen } options={{title: 'Discovery'}} />
                    <Stack.Screen name="EventCreateScreen" component={ EventCreateScreen } />
                    <Stack.Screen name="EventScreen" component={ EventScreen } />
                    <Stack.Screen name="EventDetailScreen" component={ EventDetailScreen } />
                </Stack.Navigator>
            )}
        </NavigationContainer>
 );
}

const styles = StyleSheet.create({
    container:{
        marginTop: 40,
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
      }, 
});

export default Navigation;
