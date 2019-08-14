import React, {Fragment} from 'react';
import {Dimensions } from "react-native";
import { StackActions, NavigationActions } from 'react-navigation';
import {
    StyleSheet,
    View,
    FlatList,
    ScrollView
  } from 'react-native';

  import SingleComment from './SingleComment'
  

const CommentList = ({navigation}) => {
    let postData = [
        {
            id: '001',
            account: [
                {
                    id: '1',
                    name: 'Yoga',
                    pictUrl: 'http://placekitten.com/g/200/200'
                }
            ],
            content: 'Guy saves dog from racoon Guy saves dog from racoon Guy saves dog from racoon'            
        },
        {
            id: '002',
            account: [
                {
                    id: '2',
                    name: 'Taufan',
                    pictUrl: 'http://placekitten.com/g/200/200'
                }
            ],
            content: 'Serious question. Bud light? Whats up with that? We dont have beer like that here and even if we had, I think people would treat it as a joke. But its not? Is it just cheap? is it good?'   
        },
        {
            id: '003',
            account: [
                {
                    id: '3',
                    name: 'Awesome',
                    pictUrl: 'http://placekitten.com/g/200/200'
                }
            ],
            content: 'Guy saves dog from racoon'   
        }
    ];
    return (
        <ScrollView>
            <View style={styles.container}>
                <FlatList
                    data={postData}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => (
                        <SingleComment 
                            key={item.id} 
                            // id={e.id}
                            pictUrl={item.account[0].pictUrl}
                            name={item.account[0].name}
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