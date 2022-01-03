import React, { useState } from 'react';
import firebase from '../Firebase/firebase2';
import {
    Button,
    View,
    StyleSheet,
    TextInput,
    ScrollView,
    Text,
    Alert,
  } from "react-native";

const EventCreateScreen = (props) => {

    const initalState = {
        title: "",
        date: "",
        location: "",
        description: "",
      };
    
    const [state, setState] = useState(initalState);

    const handleChangeText = (value, name) => {
        setState({ ...state, [name]: value });
    };

    const saveEvent = async () => {
        if (state.title === "") {
          alert("please provide a Title");
        } else {
    
          try {
            await firebase.db.collection("events").add({
              title: state.title,
              date: state.date,
              location: state.location,
              description: state.description,
            });
            // Alert.alert('Saved');    
            props.navigation.navigate("EventScreen");
          } catch (error) {
            console.log(error)
          }
        }
      };

 return (
    <ScrollView style={styles.container}>
    <Text>Create Events</Text>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Title"
          onChangeText={(value) => handleChangeText(value, "title")}
          value={state.title}
        />
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Date"
          multiline={true}
          numberOfLines={4}
          onChangeText={(value) => handleChangeText(value, "date")}
          value={state.date}
        />
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Location"
          onChangeText={(value) => handleChangeText(value, "location")}
          value={state.location}
        />
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Description"
          onChangeText={(value) => handleChangeText(value, "description")}
          value={state.description}
        />
      </View>

      <View style={styles.button}>
        <Button title="Save Event" onPress={() => saveEvent()} />
      </View>
    </ScrollView>
 );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
      },
      inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
      },
      loader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
      },
});

export default EventCreateScreen;