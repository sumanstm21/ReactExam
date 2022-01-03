import React, { useEffect, useState } from 'react';
import { 
    ScrollView,
    Button,
    View,
    Text,
    Alert,
    ImageBackground,
    ActivityIndicator,
    StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { TextInput } from "react-native-gesture-handler"
import firebase from '../Firebase/firebase2';
// import from 'react-native-vector-icon';

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
    const bgimage = { uri: "https://reactjs.org/logo-og.png" };

 return (
    <ScrollView style={styles.container}>
      <ImageBackground source={bgimage} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>{event.title}</Text>
      <Text style={styles.textdate}>{event.date}</Text>
      <Text style={styles.textdate}>{event.location}</Text>
      </ImageBackground>
      <View>
        <Text style={styles.description}>{event.description}</Text>
      </View>

      {/* <View style={styles.btn}>
        <Button
          title="Delete"
          onPress={() => openConfirmationAlert()}
          color="#E37399"
        />
      </View>
      <View>
        <Button title="Update" onPress={() => updateEvent()} color="#19AC52" />
      </View> */}
    </ScrollView>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
  textdate: {
    color: "white",
    fontSize: 22,
    lineHeight: 84,
    fontWeight: "bold",
    // textAlign: "center",
    backgroundColor: "#000000c0"
  },
  description: {
    margin: 10,
    color: "black",
    fontSize: 12,
    lineHeight: 24,
    fontWeight: "bold",
    // textAlign: "center",
    backgroundColor: "#FFFFFF"
  }
});

export default EventDetailScreen;