import React, {Fragment, useState, useEffect, useContext} from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    FlatList,
    Text
  } from 'react-native';
  
import axios from 'axios'
import NewsCard from '../components/NewsCard'
import CommentList from '../components/comments/CommentList'
import { getresponse, getSinglePostData } from '../redux/action'
import { StateContext } from '../redux/store';
import { useStateValue } from '../redux/store';

const PostDetails = ({navigation}) => {
    const postId = navigation.getParam('postId', '1');
    // const [response, setData] = useState([]);
    let uri = 'https://my-json-server.typicode.com/sitecoresharepoint/9gagpostdata/posts/' + postId
    // const fetchData = async () => {
    //     const {data} = await axios({method:'GET', url: uri});
    //     setData(data);
    // };

    // useEffect(() => {
    //     fetchData();
    // }, []);
    const [{ status, singlePost }, makeRequest] = getSinglePostData(uri);
    useEffect(() => {
        makeRequest();
    }, []);  
    
    
    return (
        <ScrollView>
            <View style={styles.container}>                                    
                <NewsCard 
                    key={postId} 
                    singlePost={singlePost}
                ></NewsCard>
                <CommentList                  
                    postid={postId}
                ></CommentList>
            </View>
        </ScrollView>
      );  
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10
  }
});

export default PostDetails;