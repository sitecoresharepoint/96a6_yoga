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
import { useStateValue } from '../redux/store'

const NewsCard = ({singlePost, navigation}) => {    
    return (
        <View style={styles.container}>
            <Text style={styles.text} onPress={() => navigation.navigate('PostDetails', { postId: singlePost.id })} >
              {singlePost.post ? singlePost.post.title : 'Loading...'}
            </Text>
            <Image
                style={styles.gambar} 
                source={{uri: singlePost.post ? singlePost.post.imgurl : 'https://res.cloudinary.com/practicaldev/image/fetch/s--bIcIUu5D--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/t7u2rdii5u9n4zyqs2aa.jpg'}}
            />
            <PostAction 
                singlePost={singlePost}
            ></PostAction>
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