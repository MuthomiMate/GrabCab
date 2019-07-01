import React, {Component} from 'react';
import { createAppContainer, createSwitchNavigator } from "react-navigation"
import {View} from "react-native"
import AppNavigator from "./src/common/components/AppNavigator";
import MyDrawerNavigator from "./src/common/components/Navigation"

const allNavigators = createSwitchNavigator({
  AuthNav: AppNavigator,
  HomeDrawer: MyDrawerNavigator
})
const AppContainer = createAppContainer(allNavigators);
class App extends Component {
  render = () => {
    return (
      <View style={{height: "100%", flex: "1"}}>
        <AppContainer />
      </View>
    );
  }
}
export default App


