import React, {Fragment, useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { incAction, decAction, defLikeAction } from '../redux/action'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowUp, faArrowDown, faCommentAlt, faShareAlt } from '@fortawesome/free-solid-svg-icons'
import {
    StyleSheet,
    View,
    Button,
    Text,
    TouchableOpacity,
    Image
  } from 'react-native';
  
import colors from "../config/colors";
import { useStateValue } from '../redux/store'

const PostAction = ({singlePost}) => {
    const [state, dispatch] = useStateValue();
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => dispatch(incAction(singlePost.id, state.response))}
            >
                <FontAwesomeIcon icon={ faArrowUp } style={ styles.icon } size={32} />
                <Text style={styles.text}>{singlePost.post ? singlePost.post.like : 0}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => alert(countState - 1)}
            >
                <FontAwesomeIcon icon={ faArrowDown } style={ styles.icon } size={32} />
                <Text style={styles.text}>{singlePost.post ? singlePost.post.dislike : 0}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => alert('icon-comment')}
            >
                <FontAwesomeIcon icon={ faCommentAlt } style={ styles.icon } size={32} />
                <Text style={styles.text}>{singlePost.post ? singlePost.post.comment : 0}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => alert('icon-share')}
            >
                <FontAwesomeIcon icon={ faShareAlt } style={ styles.icon } size={32} />
                <Text style={styles.text}>SHARE</Text>
            </TouchableOpacity>
        </View>
      );  
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 10  
    },
    icon: {
        color: colors.GRAY        
    },
    button: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.GRAY,
        padding: 10
    }
});

export default PostAction;