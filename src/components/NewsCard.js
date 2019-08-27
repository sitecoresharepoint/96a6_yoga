import React, {Fragment} from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image
  } from 'react-native';
  
import colors from "../config/colors";
import PostAction from './PostAction'

const NewsCard = ({id, totalLike, totalDislike, totalComment, postUrlImage, postTitle, navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text} onPress={() => navigation.navigate('PostDetails', { postId: id })} >
                {postTitle}
            </Text>
            <Image
                style={styles.gambar} 
                source={{uri: postUrlImage}}
            />
            {/* <PostAction 
                id={id}
                totalLike={totalLike} 
                totalDislike={totalDislike}
                totalComment={totalComment}
            ></PostAction> */}
        </View>
      );  
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: colors.SILVER,
    borderStyle: 'solid',
    borderBottomWidth: 1
  },
  text: {
    color: colors.BLACK,
    fontSize: 20,
    fontWeight: "bold",
    padding: 10
  },
  gambar: {
    width: "100%",
    height: 200,
    resizeMode: "stretch"
  }
});

export default NewsCard;