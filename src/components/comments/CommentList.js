import React, {Fragment, useState, useEffect} from 'react';
import {Dimensions } from "react-native";
import { StackActions, NavigationActions } from 'react-navigation';
import axios from 'axios'
import {
    StyleSheet,
    View,
    FlatList,
    ScrollView
  } from 'react-native';

  import SingleComment from './SingleComment'
  

const CommentList = ({postid, navigation}) => {
    const [postData, setData] = useState([]);

    let uri = 'https://my-json-server.typicode.com/sitecoresharepoint/9gagpostdata/comments?postid=' + postid
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
                <FlatList
                    data={postData}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => (
                        <SingleComment 
                            key={item.id}
                            pictUrl={item.account.pictUrl}
                            name={item.account.name}
                            content={item.content}
                            navigation={navigation}
                        ></SingleComment>                    
                    )}
                />
                
                
            </View>
        </ScrollView>
      );  
}

const styles = StyleSheet.create({  
    container: {
    }
});

export default CommentList;