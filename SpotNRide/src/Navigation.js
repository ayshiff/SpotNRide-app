import {
    StackNavigator,
    TabNavigator
} from 'react-navigation';

import Spot from './screens/Spot';
import Profile from './screens/Profile';
import Map from './screens/Map';
import Login from './screens/Login';

import tabBarBottom from './components/tabBarBottom';


export default StackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            title: "Login"
        }
    },
    Map: {
        screen: Map,
        navigationOptions: {
            title: "Map"
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            title: "Profile"
        }
    },
    Spot: {
        screen: Spot,
        navigationOptions: {
            title: "Spot"
        }
    }
})