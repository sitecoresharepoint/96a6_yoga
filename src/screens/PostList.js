import React, {Fragment, useState, useEffect, useReducer} from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import { getPostData } from '../redux/action'
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    FlatList
  } from 'react-native';

import NewsCard from '../components/NewsCard'


const PostList = ({navigation}) => {
    
    const [{ status, response }, makeRequest] = getPostData('https://my-json-server.typicode.com/sitecoresharepoint/9gagpostdata/posts');

    useEffect(() => {
        makeRequest();
    }, []);  
    
    return (
        <ScrollView>
            <View style={styles.container}>                
                <FlatList
                    data={response}
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

export default PostList