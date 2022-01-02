import React from 'react';
import { View, Text, Button,  ScrollView, StyleSheet, FlatList } from 'react-native';
import {Card, Container, Interaction, InteractionText, InteractionWrapper, PostImg, PostText, PostTime, UserImg, UserInfo, UserInfoText, UserName} from '../styles/FeedStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeedPost from '../components/FeedPost';

const HomeScreen = props => {
    const Posts = [
        {
          id: '1',
          userName: 'Jenny Doe',
          userImg: require('../assets/users/user-3.jpg'),
          postTime: '4 mins ago',
          post:
            'Hey there, this is my test for a post of my social app in React Native.',
          postImg: require('../assets/posts/post-img-3.jpg'),
          liked: true,
          likes: '14',
          comments: '5',
        },
        {
          id: '2',
          userName: 'John Doe',
          userImg: require('../assets/users/user-1.jpg'),
          postTime: '2 hours ago',
          post:
            'Hey there, this is my test for a post of my social app in React Native.',
          postImg: 'none',
          liked: false,
          likes: '8',
          comments: '0',
        },
        {
          id: '3',
          userName: 'Ken William',
          userImg: require('../assets/users/user-4.jpg'),
          postTime: '1 hours ago',
          post:
            'Hey there, this is my test for a post of my social app in React Native.',
          postImg: require('../assets/posts/post-img-2.jpg'),
          liked: true,
          likes: '1',
          comments: '0',
        },
        {
          id: '4',
          userName: 'Selina Paul',
          userImg: require('../assets/users/user-6.jpg'),
          postTime: '1 day ago',
          post:
            'Hey there, this is my test for a post of my social app in React Native.',
          postImg: require('../assets/posts/post-img-4.jpg'),
          liked: true,
          likes: '22',
          comments: '4',
        },
        {
          id: '5',
          userName: 'Christy Alex',
          userImg: require('../assets/users/user-7.jpg'),
          postTime: '2 days ago',
          post:
            'Hey there, this is my test for a post of my social app in React Native.',
          postImg: 'none',
          liked: false,
          likes: '0',
          comments: '0',
        },
    ];
 return (
    <Container>
        <FlatList 
            data={Posts}
            renderItem={({item}) => <FeedPost item={item} />}
            keyExtractor={item=>item.id}
        />
    </Container>
 );
}

const styles = StyleSheet.create({
    mainView:{
        marginTop:40,
    }
});

export default HomeScreen;