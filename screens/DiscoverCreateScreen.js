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

const DiscoverCreateScreen = (props) => {

    const initalState = {
        name: "",
        email: "",
        phone: "",
      };
    
    const [state, setState] = useState(initalState);

    const handleChangeText = (value, name) => {
        setState({ ...state, [name]: value });
    };

    const saveNewUser = async () => {
        if (state.name === "") {
          alert("please provide a name");
        } else {
    
          try {
            await firebase.db.collection("users").add({
              name: state.name,
              email: state.email,
              phone: state.phone,
            });
            // Alert.alert('Saved');    
            props.navigation.navigate("DiscoversList");
          } catch (error) {
            console.log(error)
          }
        }
      };

 return (
    <ScrollView style={styles.container}>
    <Text>Create Discoveries</Text>
      {/* Name Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Name"
          onChangeText={(value) => handleChangeText(value, "name")}
          value={state.name}
        />
      </View>

      {/* Email Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Email"
          multiline={true}
          numberOfLines={4}
          onChangeText={(value) => handleChangeText(value, "email")}
          value={state.email}
        />
      </View>

      {/* Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="phone"
          onChangeText={(value) => handleChangeText(value, "phone")}
          value={state.phone}
        />
      </View>

      <View style={styles.button}>
        <Button title="Save Discoveries" onPress={() => saveNewUser()} />
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

export default DiscoverCreateScreen;