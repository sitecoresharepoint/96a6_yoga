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

const PostAction = ({id, totalLike, totalDislike, totalComment, increment, decrement, defaultlike, countState}) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        defaultlike(parseInt(totalLike));
    }, []);

    // defaultlike(totalLike);
    // setCount(totalLike);
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => increment(countState + 1)}
            >
                <FontAwesomeIcon icon={ faArrowUp } style={ styles.icon } size={32} />
                <Text style={styles.text}>{countState}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => decrement(countState - 1)}
            >
                <FontAwesomeIcon icon={ faArrowDown } style={ styles.icon } size={32} />
                <Text style={styles.text}>{totalDislike}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => alert('icon-comment')}
            >
                <FontAwesomeIcon icon={ faCommentAlt } style={ styles.icon } size={32} />
                <Text style={styles.text}>{totalComment}</Text>
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

const mapStateToProps = (state) => ({
    countState: state ? state.count: 0
})

const mapDispatchToProps = (dispatch) => ({
    increment: (e) => dispatch(incAction(e)),
    decrement: (e) => dispatch(decAction(e)),
    defaultlike: (e) => dispatch(defLikeAction(e))
})
const connection = connect(mapStateToProps, mapDispatchToProps)(PostAction)

export default connection;