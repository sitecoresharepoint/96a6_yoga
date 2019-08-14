import React, {Fragment} from 'react';
import {Dimensions } from "react-native";
import { StackActions, NavigationActions } from 'react-navigation';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image
  } from 'react-native';
  
import colors from "../../config/colors";
// import PostAction from './PostAction'

const screenWidth = Math.round(Dimensions.get('window').width);

const SingleComment = ({navigation, pictUrl, name, content}) => {
    return (
        <View style={styles.container}>
            <View style={styles.leftSide}>
                <Image
                    style={styles.gambar} 
                    source={{uri: pictUrl}}
                />                
            </View>
            <View style={styles.rightSide}>
                <Text style={styles.nameText}>{name}</Text>
                <Text style={styles.content}>
                    {content}
                </Text>
            </View>
            
        </View>
      );  
}

const styles = StyleSheet.create({  
    container: {
        flexDirection: 'row',
        padding: 10,
        borderBottomColor: colors.SILVER,
        borderStyle: 'solid',
        borderBottomWidth: 1
    },
    leftSide: {
        paddingRight: 15
    },
    rightSide: {
        flexDirection: 'column',
        width: screenWidth-80
    },
    gambar: {width: 80, height: 80, borderRadius: 80/2},
    nameText: {
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 10
    },
    content: {
        fontSize: 14,
        lineHeight: 20
    }
});

export default SingleComment;