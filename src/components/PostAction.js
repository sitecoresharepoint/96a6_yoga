import React, {Fragment} from 'react';
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

const PostAction = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => alert('icon-up')}
            >
                <FontAwesomeIcon icon={ faArrowUp } style={ styles.icon } size={32} />
                <Text style={styles.text}>3.8K</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => alert('icon-down')}
            >
                <FontAwesomeIcon icon={ faArrowDown } style={ styles.icon } size={32} />
                <Text style={styles.text}>508</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => alert('icon-comment')}
            >
                <FontAwesomeIcon icon={ faCommentAlt } style={ styles.icon } size={32} />
                <Text style={styles.text}>1.3K</Text>
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