import { createStackNavigator } from 'react-navigation';
import Login from '../screens/Login'
import PostList from '../screens/PostList'
import PostDetails from '../screens/PostDetails'

const AppNavigator = createStackNavigator({
    Home: {
        screen: Login,
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