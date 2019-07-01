import { createStackNavigator } from "react-navigation";
import Register from "./Register";
import Home from "./Home"

const AppNavigator = createStackNavigator({
    Home: {
        screen: Home
    },
    Register: {
        screen: Register
    }
},{
    headerMode: 'none'
}
);

export default AppNavigator;