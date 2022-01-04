import { TabRouter } from '@react-navigation/core';
import React from 'react';
// import { View } from 'react-native-web';
import { View, Text} from 'react-native';
import Navigation from '../components/Navigation';


const FlexBoxScreen = ({navigation, route}) => {

    const { ItemName } = route.params;
    return(
        <View style={style.parentView}>
            <View style={style.yellowView}>
                <Text style={style.text}>
                    yellow
                </Text>
            </View>
            <View style={style.redView}>
                <Text>
                    red
                </Text>
            </View>
            <View style={style.greenView}>
                <Text>
                    {ItemName}
                </Text>
            </View>
        </View>
    )
}

style = {
    parentView:{
        flex:1,
        // flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    yellowView:{
        flex:1,
        backgroundColor: "yellow",
        justifyContent: "center",
    },
    redView:{
        flex:1,
        backgroundColor: "red"
    },
    greenView:{
        flex:1,
        backgroundColor: "green"
    },
    text:{
        textAlign: "center",
    }
};

export default FlexBoxScreen;