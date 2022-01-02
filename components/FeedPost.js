import React from 'react';
import { View, Text, Button,  ScrollView, StyleSheet } from 'react-native';
import {Card, Container, Interaction, InteractionText, InteractionWrapper, PostImg, PostText, PostTime, UserImg, UserInfo, UserInfoText, UserName} from '../styles/FeedStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FeedPost = ({item}) => {
    likeIcon = item.liked ? 'heart' : 'heart-outline';
    likeIconColor = item.liked ? '#2e64e5' : '#333';
    
    if (item.likes == 1) {
        likeText = '1 Like';
      } else if (item.likes > 1) {
        likeText = item.likes + ' Likes';
      } else {
        likeText = 'Like';
      }
    
      if (item.comments == 1) {
        commentText = '1 Comment';
      } else if (item.comments > 1) {
        commentText = item.comments + ' Comments';
      } else {
        commentText = 'Comment';
      }

 return (
        <Card>
            <UserInfo>
                <UserImg source={item.UserImg} />
                <UserInfoText>
                    <UserName>{item.UserName}</UserName>
                    <PostTime>{item.PostTime}</PostTime>
                </UserInfoText>
            </UserInfo>
            <PostText>{item.post}</PostText>
            <PostImg source={item.PostImg}/>
            <InteractionWrapper>
                <Interaction active={item.liked}>
                    <Ionicons name={likeIcon} size={25} color={likeIconColor} />
                    <InteractionText active={item.liked}>{likeText}</InteractionText>
                </Interaction>
                <Interaction>
                    <Ionicons name="md-chatbubble-outline" size={25} />
                    <InteractionText>{commentText}</InteractionText>
                </Interaction>
            </InteractionWrapper>
        </Card>
 );
}

const styles = StyleSheet.create({
    mainView:{
        marginTop:40,
    }
});

export default FeedPost;