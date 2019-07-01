import React, {Component} from 'react';
import { View , Text, StyleSheet} from "react-native";
import MapView from "react-native-maps";
import ToolBar from "./ToolBar";
import {Icon} from "react-native-elements";
import SearchBar from "./searchBar"
import CabOptions from "./cabOptions"
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

export default class DashBoard extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentLocation: null,
      initialRegion: {}
    }
  }

  componentDidMount = async () =>{
    await this.getCurrentLocation()
    await this.getInitialRegion()
  }

  _handlePress = () => {
    this.props.navigation.toggleDrawer();
  }

  getCurrentLocation = async () => {
    const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === 'granted') {
      const location = await Location.getCurrentPositionAsync();
      this.setState({ currentLocation: location.coords });
    }
  }

  getInitialRegion = () => {
    const { currentLocation } = this.state;
    let region = {
          latitude: -1.216275,
          longitude: 36.888296,
          latitudeDelta: 0.0072,
          longitudeDelta: 0.00721
    }
    if(currentLocation){
      Object.assign(region, {
        latitude: currentLocation.latitude,
        longitude: currentLocation.longitude
      })
    }
    this.setState({initialRegion: region})
  }


  render = () => {
    const { initialRegion } = this.state;
    return (
      <View style={styles.container}>
        <View style={{height: "40%"}}>
          <ToolBar
            iconName="menu"
            iconSize={25}
            iconType="entypo"
            iconColor="#FFFFFF"
            text="DashBoard"
            textColor="#FFFFFF"
            navigation={this.props.navigation}
            onRightIconClick={this._handlePress}
          />
        </View>
        <View style={styles.searchView}>
          <SearchBar />
        </View>
        <View style={styles.mapView}>
          { initialRegion.latitude ?
          <MapView
            style={styles.map}
            showsUserLocation={true}
            initialRegion={initialRegion}
          /> : null }
          <View style={styles.floatingButton}>
            <Icon name="gps-fixed" size={25} type="material-icons" color="black"/>
          </View>
        </View>
        <View style={styles.optionsView}>
          <CabOptions />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mapView: {
    position: "absolute",
    top: "25%",
    left:0,
    right: 0,
    bottom: 0,
    zIndex: -5
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  map: {
    height: "100%",
  },
  floatingButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    height: 40,
    width: 40,
    borderRadius: 80,
    justifyContent: "center",
    backgroundColor: "white"
  },
  searchView: {
    position: "absolute",
    top: "10%",
    left:0,
    right: 0,
    bottom: 0,
    zIndex: 20
  },
  optionsView: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  }

})
