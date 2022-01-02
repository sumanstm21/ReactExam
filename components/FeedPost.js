import React from 'react';
import { View, Text, Button,  ScrollView, StyleSheet } from 'react-native';
import {Card, Container, Interaction, InteractionText, InteractionWrapper, PostImg, PostText, PostTime, UserImg, UserInfo, UserInfoText, UserName} from '../styles/FeedStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FeedPost = () => {
 return (
        <Card>
            <UserInfo>
                <UserImg source={item.UserImg} />
                <UserInfoText>
                    <UserName>{ClipboardItem.UserName}</UserName>
                    <PostTime>{item.PostTime}</PostTime>
                </UserInfoText>
            </UserInfo>
            <PostText>{item.post}</PostText>
            <PostImg source={require('../img/user/user.jpg')}/>
            <InteractionWrapper>
                <Interaction>
                    <Ionicons name="heart-outline" size={25} />
                    <InteractionText>Like</InteractionText>
                </Interaction>
                <Interaction>
                    <Ionicons name="md-chatbubble-outline" size={25} />
                    <InteractionText>Comment</InteractionText>
                </Interaction>
            </InteractionWrapper>
        </Card>
            //     <Card>
            //     <UserInfo>
            //         <UserImg source={require('../img/user/user.jpg')} />
            //         <UserInfoText>
            //             <UserName>Brad</UserName>
            //             <PostTime>4 hours ago</PostTime>
            //         </UserInfoText>
            //     </UserInfo>
            //     <PostText>This is Test Image.</PostText>
            //     <PostImg source={require('../img/user/user.jpg')}/>
            //     <InteractionWrapper>
            //         <Interaction>
            //             <Ionicons name="heart-outline" size={25} />
            //             <InteractionText>Like</InteractionText>
            //         </Interaction>
            //         <Interaction>
            //             <Ionicons name="md-chatbubble-outline" size={25} />
            //             <InteractionText>Comment</InteractionText>
            //         </Interaction>
            //     </InteractionWrapper>
            // </Card>
 );
}

const styles = StyleSheet.create({
    mainView:{
        marginTop:40,
    }
});

export default FeedPost;