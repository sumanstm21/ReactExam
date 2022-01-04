import React, { useEffect, useState } from 'react';
import { 
    ScrollView,
    Button,
    View,
    Alert,
    ActivityIndicator,
    StyleSheet, 
    Text} from 'react-native';
import { TextInput } from "react-native-gesture-handler"
import { auth } from '../Firebase/firebase';
import firebase from '../Firebase/firebase2';

const DiscoverScreen = (props) => {

    const initialState = {
        id: "",
        name: "",
        email: "",
        phone: "",
    };
    const [user, setUser] = useState(initialState);
    const [loading, setLoading] = useState(true);
    
    const getUserById = async (id) => {
        const dbRef = firebase.db.collection("users").doc(id);
        const doc = await dbRef.get();
        const user = doc.data();
        setUser({ ...user, id: doc.id });
        setLoading(false);
    };  

    const handleTextChange = (value, prop) => {
        setUser({ ...user, [prop]: value });
    };

    const deleteUser = async () => {
        setLoading(true)
        const dbRef = firebase.db
          .collection("users")
          .doc(props.route.params.userId);
        await dbRef.delete();
        setLoading(false)
        props.navigation.navigate("DiscoversList");
    };

    const openConfirmationAlert = () => {
        Alert.alert(
          "Removing the User",
          "Are you sure?",
          [
            { text: "Yes", onPress: () => deleteUser() },
            { text: "No", onPress: () => console.log("canceled") },
          ],
          {
            cancelable: true,
          }
        );
    };

    const updateUser = async () => {
        const userRef = firebase.db.collection("users").doc(user.id);
        await userRef.set({
          name: user.name,
          email: user.email,
          phone: user.phone,
          userId: user.userId,
        });
        setUser(initialState);
        props.navigation.navigate("DiscoversList");
    };

    useEffect(() => {
        getUserById(props.route.params.userId);
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
          value={user.name}
          onChangeText={(value) => handleTextChange(value, "name")}
        />
      </View>
      <View>
        <TextInput
          autoCompleteType="email"
          placeholder="Email"
          style={styles.inputGroup}
          value={user.email}
          onChangeText={(value) => handleTextChange(value, "email")}
        />
      </View>
      <View>
        <TextInput
          placeholder="Phone"
          autoCompleteType="tel"
          style={styles.inputGroup}
          value={user.phone}
          onChangeText={(value) => handleTextChange(value, "phone")}
        />
      </View>
      <View style={{width:0,height:0}}>
        <TextInput
            placeholder="userId"
            autoCompleteType="tel"
            style={styles.inputGroup}
            value={user.userId}
            onChangeText={(value) => handleTextChange(value, "userId")}
          />
      </View>
      {/* { auth.currentUser.uid == user.userId } */}
      <View style={styles.btn}>
        <Button
          title="Delete"
          onPress={() => openConfirmationAlert()}
          color="#E37399"
          disabled = { auth.currentUser.uid == user.userId ? false : true }
        />
      </View>
      <View>
        <Button 
          title="Update" 
          onPress={() => updateUser()} 
          color="#19AC52"
          disabled = { auth.currentUser.uid == user.userId ? false : true }
          />
      </View>
    </ScrollView>
    </View>
 );
}

const styles = StyleSheet.create({

});

export default DiscoverScreen;