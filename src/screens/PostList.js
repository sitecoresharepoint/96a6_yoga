import React, {Fragment} from 'react';
import {
    StyleSheet,
    View,
    ScrollView
  } from 'react-native';
  
import colors from "../config/colors";
import NewsCard from '../components/NewsCard'

const PostList = () => {
    let postData = [
      {
          id: '001',
          account: [
            {id: '1'},
            {name: 'Awesome'}
          ],
          post: [
              {title: 'Guy saves dog from racoon',
              imgurl: 'https://4.bp.blogspot.com/-krdeTqQLML8/Wyf2oV7eedI/AAAAAAAABpI/OZ759swV7L8wWtt2pwBXIgp6aPz33r01gCLcBGAs/s400/fist%2Bapp.jpg',
              like: '3.3K',
              dislike: '122',
              comment: '164'}
          ]
      },
      {
          id: '002',
          account: [
            {id: '2'},
            {name: 'Awesome 2'}
          ],
          post: [
              {title: 'Doll vs golf ball',
              imgurl: 'https://4.bp.blogspot.com/-krdeTqQLML8/Wyf2oV7eedI/AAAAAAAABpI/OZ759swV7L8wWtt2pwBXIgp6aPz33r01gCLcBGAs/s400/fist%2Bapp.jpg',
              like: '3.3K',
              dislike: '122',
              comment: '164'}
          ]
      },
      {
          id: '003',
          account: [
            {id: '3'},
            {name: 'Awesome 3'}
          ],
          post: [
              {title: 'this is content title',
              imgurl: 'https://4.bp.blogspot.com/-krdeTqQLML8/Wyf2oV7eedI/AAAAAAAABpI/OZ759swV7L8wWtt2pwBXIgp6aPz33r01gCLcBGAs/s400/fist%2Bapp.jpg',
              like: '3.3K',
              dislike: '122',
              comment: '164'}
          ]
      }
  ];
    return (
        <ScrollView>
            <View style={styles.container}>
                {
                    postData.map((e) => {
                        return (
                          <NewsCard 
                              key={e} 
                              id={e.id}
                              postTitle={e.post[0].title}
                              postUrlImage={e.post[0].imgurl}
                          ></NewsCard>
                        )
                    })
                }
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