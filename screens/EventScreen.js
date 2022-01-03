import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ListItem, Avatar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

import firebase from '../Firebase/firebase2';

const EventScreen = (props) => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        firebase.db.collection("events").onSnapshot((querySnapshot) => {
        const events = [];
        querySnapshot.docs.forEach((doc) => {
            const { title, date, location, description } = doc.data();
            events.push({
            id: doc.id,
            title,
            date,
            location,
            description,
            });
        });
        setEvents(events);
        });
    }, []);
 return (
    <ScrollView>
      <Button
        title="Create Event"
        onPress={() => props.navigation.navigate("EventCreateScreen")}
      />
      {events.map((event) => {
        return (
          <ListItem
            key={event.id}
            bottomDivider
            onPress={() => {
              props.navigation.navigate("EventDetailScreen", {
                eventId: event.id,
              })
            }}>
            <ListItem.Chevron />
            <Avatar
              source={{
                uri:
                  "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
              }}
              rounded
            />
            <ListItem.Content>
              <ListItem.Title>{user.title}</ListItem.Title>
              <ListItem.Subtitle>{user.date}</ListItem.Subtitle>
              <ListItem.Subtitle>{user.location}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
 );
}

const styles = StyleSheet.create({
 
});

export default EventScreen;