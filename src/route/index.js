import { createStackNavigator } from 'react-navigation';
import Login from '../screens/Login'
import PostList from '../screens/PostList'
import PostDetails from '../screens/PostDetails'
import SingleComment from '../components/comments/SingleComment'
import CommentList from '../components/comments/CommentList'

const AppNavigator = createStackNavigator({
    Home: {
        screen: PostList,
    },      
    PostList: {
        screen: PostList,
    },
    PostDetails: {
        screen: PostDetails,
    },  
}, {
    initialRouteName: 'Home',
    headerMode: 'none'
});
  
  export default AppNavigator;