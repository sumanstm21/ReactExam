import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import { useSelector } from 'react-redux';

const Navigation = props => {
    
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();
    // const loggedInUser = useSelector(state => state.user.loggedInUser);

    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Discover" component={HomeScreen} />
                <Tab.Screen name="ChatOuter" component={ChatScreen} />
                <Tab.Screen name="Menu" component={HomeScreen} />
            </Tab.Navigator>
        </NavigationContainer>
 );
}

const styles = StyleSheet.create({
 
});

export default Navigation;
