import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Icon } from "react-native-elements";

class CabOptions extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.text}>Pick Your Travel Cab</Text>
                </View>
                <View style={styles.iconsContainer}>
                    <View style={styles.iconView}>
                        <Icon name="car-side" size={25} type="material-community" color="black"/>
                    </View>
                    <View style={styles.iconViewSelected}>
                        <Icon name="ios-car" size={25} type="ionicon" color="black"/>
                    </View>
                    <View style={styles.iconView}>
                        <Icon name="local-taxi" size={25} type="material-icons" color="black"/>
                    </View>
                </View>
                <View style={styles.taxiName}>
                    <Text style={styles.text}>Share Taxi</Text>
                    <Text style={styles.text}>Prime Cab</Text>
                    <Text style={styles.text}>Go TAXI</Text>
                </View>
                <View style={styles.taxiName}>
                    <Text style={styles.textTime}>15 Min</Text>
                    <Text style={styles.textTime}>7 Min</Text>
                    <Text style={styles.textTime}>2 Min</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Book Now"
                        color="white"
                    />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
  container: {
      height: "100%",
      width: "100%",
      backgroundColor: "white"
  },
  taxiName: {
      flexDirection: "row",
      justifyContent: "space-around"
  },
  text: {
      textAlign: "center",
      fontWeight: "bold"
  },
  textTime: {
     textAlign: "center"
  },
  iconsContainer: {
      flexDirection: "row",
      marginTop: "6%",
      justifyContent: "space-around"
  },
  buttonContainer: {
      width: "100%",
      marginTop: "5%",
      backgroundColor: "#000000"
  },
  iconView: {
      height: 40,
      width: 40,
      borderRadius: 80,
      borderWidth: 4,
      borderColor: 'yellow',
      justifyContent: "center"
  },
  iconViewSelected: {
    height: 40,
    width: 40,
    borderRadius: 80,
    borderWidth: 4,
    borderColor: 'yellow',
    justifyContent: "center",
    backgroundColor: "yellow"
  }
})
export default CabOptions;