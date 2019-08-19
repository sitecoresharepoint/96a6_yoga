import React, {Fragment, useState, useEffect} from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import {
    StyleSheet,
    View,
    ScrollView,
    FlatList
  } from 'react-native';
  
import axios from 'axios'
import NewsCard from '../components/NewsCard'

const PostList = ({navigation}) => {
    const [postData, setData] = useState([]);

    const fetchData = async () => {
        const {data} = await axios({method:'GET', url: 'https://my-json-server.typicode.com/sitecoresharepoint/9gagpostdata/posts'});
        setData(data);
    };

    useEffect(() => {
        fetchData();
    }, []);
    
    return (
        <ScrollView>
            <View style={styles.container}>
                <FlatList
                    data={postData}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => (
                      <NewsCard 
                          key={item.id} 
                          id={item.id}
                          postTitle={item.post.title}
                          postUrlImage={item.post.imgurl}
                          navigation={navigation}
                          totalLike={item.post.like}
                          totalDislike={item.post.dislike}
                          totalComment={item.post.comment}
                      ></NewsCard>                    
                    )}
                />
                
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

export default PostList;