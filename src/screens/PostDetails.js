import React, {Fragment, useState, useEffect} from 'react';
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

const PostDetails = ({navigation}) => {
    const postId = navigation.getParam('postId', '1');
    const [postData, setData] = useState([]);
    let uri = 'https://my-json-server.typicode.com/sitecoresharepoint/9gagpostdata/posts/' + postId
    const fetchData = async () => {
        const {data} = await axios({method:'GET', url: uri});
        setData(data);
    };

    useEffect(() => {
        fetchData();
    }, []);
    
    return (
        <ScrollView>
            <View style={styles.container}>
                <NewsCard 
                    key={postData.id} 
                    id={postData.id}
                    postTitle={postData.post ? postData.post.title : 'Loading...'}
                    postUrlImage={postData.post ? postData.post.imgurl : 'https://res.cloudinary.com/practicaldev/image/fetch/s--bIcIUu5D--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/t7u2rdii5u9n4zyqs2aa.jpg'}
                ></NewsCard>
                <CommentList></CommentList>
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