import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ListItem, Avatar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

import firebase from '../Firebase/firebase2';

const DiscoversList = (props) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        firebase.db.collection("users").onSnapshot((querySnapshot) => {
        const users = [];
        querySnapshot.docs.forEach((doc) => {
            const { name, email, phone } = doc.data();
            users.push({
            id: doc.id,
            name,
            email,
            phone,
            });
        });
        setUsers(users);
        });
    }, []);
 return (
    <ScrollView>
      <Button
        title="Create User"
        onPress={() => props.navigation.navigate("DiscoverCreateScreen")}
      />
      {users.map((user) => {
        return (
          <ListItem
            key={user.id}
            bottomDivider
            onPress={() => {
              props.navigation.navigate("DiscoverScreen", {
                userId: user.id,
              })
            }}>
            <ListItem.Chevron />
            <Avatar
              source={{
                uri:
                  "https://reactnative.dev/img/tiny_logo.png",
              }}
              rounded
            />
            <ListItem.Content>
              <ListItem.Title>{user.name}</ListItem.Title>
              <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
 );
}

const styles = StyleSheet.create({
 
});

export default DiscoversList;