import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
// import ImagePicker from 'react-native-image-crop-picker';

import storage, { firebase } from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

import {
  InputField,
  InputWrapper,
  AddImage,
  SubmitBtn,
  SubmitBtnText,
  StatusWrapper,
} from '../styles/AddPost';

// import { AuthContext } from '../navigation/AuthProvider';

const AddPostScreen = () => {
//   const {user, logout} = useContext(AuthContext);

  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  // const [post, setPost] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      this.uploadImage(result.uri, "test-image")
      .then(() => {
        Alert.alert('Success');
      })
      .catch(console.error((error) => {
        Alert.alert(error);
      }));
    }
  };
  
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 1200,
      height: 780,
      cropping: true,
    }).then((image) => {
      console.log(image);
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setImage(imageUri);
    });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 1200,
      height: 780,
      cropping: true,
    }).then((image) => {
      console.log(image);
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setImage(imageUri);
    });
  };

  const submitPost = async () => {
    const uploadUri = image;
    let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);
    Alert.alert(
      'Uploading'
    );
    setUploading(true);
    try {
      await storage().ref(filename).putFile(uploadUri);

      setUploading(false);
      Alert.alert(
          'Image Uploaded'
      );
    } catch (e) {
        console.log(e);
        Alert.alert(
          'Something'
      );
      // Alert.alert(e);
    }
    setImage(null);
  }

  uploadImage = async(uri, imageName) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    var ref = firebase.storage().ref().child("images/" + imageName);
    return ref.put(blob);
  }
  
  return (
    <View style={styles.container}>
        <Text>Add Post</Text>
        <InputWrapper>
        {image != null ? <AddImage source={{uri: image}} /> : null}
        {/* {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}

        <InputField
          placeholder="What's on your mind?"
          multiline
          numberOfLines={4}
        //   value={post}
        //   onChangeText={(content) => setPost(content)}
        />
        <SubmitBtn onPress={submitPost}>
            <SubmitBtnText>Post</SubmitBtnText>
        </SubmitBtn>
        </InputWrapper>
        <ActionButton buttonColor="#2e64e5">
        <ActionButton.Item
          buttonColor="#9b59b6"
          title="Take Photo"
          // onPress={()=> console.log('action button')}>
          onPress={takePhotoFromCamera}>
          <Icon name="camera-outline" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#3498db"
          title="Choose Photo"
          onPress={()=> console.log('action button')}>
          {/* onPress={choosePhotoFromLibrary}> */}
          <Icon name="md-images-outline" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#3498db"
          title="Select Photo"
          // onPress={()=> console.log('action button')}>
          onPress={pickImage}>
          <Icon name="md-images-outline" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    </View>
  );
};

export default AddPostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
