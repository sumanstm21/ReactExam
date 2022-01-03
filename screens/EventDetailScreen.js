import React, { useEffect, useState } from 'react';
import { 
    ScrollView,
    Button,
    View,
    Alert,
    ActivityIndicator,
    StyleSheet } from 'react-native';
import { TextInput } from "react-native-gesture-handler"
import firebase from '../Firebase/firebase2';

const EventDetailScreen = (props) => {

    const initialState = {
        id: "",
        title: "",
        date: "",
        location: "",
        description: "",
    };
    const [event, setEvent] = useState(initialState);
    const [loading, setLoading] = useState(true);
    
    const getEventById = async (id) => {
        const dbRef = firebase.db.collection("events").doc(id);
        const doc = await dbRef.get();
        const event = doc.data();
        setEvent({ ...event, id: doc.id });
        setLoading(false);
    };  

    const handleTextChange = (value, prop) => {
        setEvent({ ...event, [prop]: value });
    };

    const deleteEvent = async () => {
        setLoading(true)
        const dbRef = firebase.db
          .collection("events")
          .doc(props.route.params.eventId);
        await dbRef.delete();
        setLoading(false)
        props.navigation.navigate("EventScreen");
    };

    const openConfirmationAlert = () => {
        Alert.alert(
          "Removing the Event",
          "Are you sure?",
          [
            { text: "Yes", onPress: () => deleteEvent() },
            { text: "No", onPress: () => console.log("canceled") },
          ],
          {
            cancelable: true,
          }
        );
    };

    const updateEvent = async () => {
        const eventRef = firebase.db.collection("events").doc(event.id);
        await eventRef.set({
            title: state.title,
            date: state.date,
            location: state.location,
            description: state.description,
        });
        setEvent(initialState);
        props.navigation.navigate("EventScreen");
    };

    useEffect(() => {
        getEventById(props.route.params.eventId);
      }, []);

    if (loading) {
        return (
            <View style={styles.loader}>
                <ActivityIndicator size="large" color="#9E9E9E" />
            </View>
        );
    }

 return (
    <View>
        <ScrollView style={styles.container}>
      <View>
        <TextInput
          placeholder="Name"
          autoCompleteType="username"
          style={styles.inputGroup}
          value={event.title}
          onChangeText={(value) => handleTextChange(value, "name")}
        />
      </View>
      <View>
        <TextInput
          autoCompleteType="email"
          placeholder="Email"
          style={styles.inputGroup}
          value={event.date}
          onChangeText={(value) => handleTextChange(value, "email")}
        />
      </View>
      <View>
        <TextInput
          placeholder="Phone"
          autoCompleteType="tel"
          style={styles.inputGroup}
          value={event.location}
          onChangeText={(value) => handleTextChange(value, "phone")}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="Delete"
          onPress={() => openConfirmationAlert()}
          color="#E37399"
        />
      </View>
      <View>
        <Button title="Update" onPress={() => updateEvent()} color="#19AC52" />
      </View>
    </ScrollView>
    </View>
 );
}

const styles = StyleSheet.create({

});

export default EventDetailScreen;