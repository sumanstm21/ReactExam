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
                  "http://prcagrimex.co.th/en/wp-content/uploads/2014/04/dummy-image-green-e1398449160839.jpg",
              }} 
              style={{ width: 100, height: 100 }}
            />
            <ListItem.Content>
              <ListItem.Title>{event.title}</ListItem.Title>
              <ListItem.Subtitle>{event.date}</ListItem.Subtitle>
              <ListItem.Subtitle>{event.location}</ListItem.Subtitle>
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