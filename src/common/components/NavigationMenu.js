import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import {View, ScrollView, Text, StyleSheet} from "react-native";
import { Icon, Avatar } from "react-native-elements";

class NavigationMenu extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){

    }
    navigateToScreen = ( route ) => {
        const navigationAction = NavigationActions.navigate({
            routeName: route
        });
    this.props.navigation.dispatch(navigationAction)
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.profile}>
                    <Avatar rounded title="MM" size="large"/>
                    <Text style={styles.name}>Muthomi Mate</Text>
                    <View style={{flexDirection: "row"}}>
                        <Icon name="envelope-o" size={15} type="font-awesome" color="#FFFFFF" iconStyle={{marginRight:10}}/>
                        <Text style={{color: "#FFFFFF"}}>muthomimate@gmail.com</Text>
                    </View>
                </View>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <View style={styles.menuItem}>
                        <View style={styles.icon}>
                            <Icon name="user" size={15} type="entypo" color="#FFFFFF"/>
                        </View>
                        <View>
                            <Text style={{color: "#FFFFFF"}}>Profile Setttings</Text>
                        </View>
                    </View>
                    <View style={styles.menuItem}>
                        <View style={styles.icon}>
                            <Icon name="car-side" size={15} type="material-community" color="#FFFFFF"/>
                        </View>
                        <View>
                            <Text style={{color: "#FFFFFF"}}>My Rides</Text>
                        </View>
                    </View>
                    <View style={styles.menuItem}>
                        <View style={styles.icon}>
                            <Icon name="notifications" size={15} type="material-icons" color="#FFFFFF"/>
                        </View>
                        <View>
                            <Text style={{color: "#FFFFFF"}}>Notifications</Text>
                        </View>
                    </View>
                    <View style={styles.menuItem}>
                        <View style={styles.icon}>
                            <Icon name="payment" size={15} type="material-icons" color="#FFFFFF"/>
                        </View>
                        <View>
                            <Text style={{color: "#FFFFFF"}}>Payments</Text>
                        </View>
                    </View>
                    <View style={styles.menuItem}>
                        <View style={styles.icon}>
                            <Icon name="cut" size={15} type="font-awesome" color="#FFFFFF"/>
                        </View>
                        <View>
                            <Text style={{color: "#FFFFFF"}}>Cuopons</Text>
                        </View>
                    </View>
                    <View style={styles.menuItem}>
                        <View style={styles.icon}>
                            <Icon name="language" size={15} type="font-awesome" color="#FFFFFF"/>
                        </View>
                        <View>
                            <Text style={{color: "#FFFFFF"}}>English</Text>
                        </View>
                    </View>
                    <View style={styles.menuItem}>
                        <View style={styles.icon}>
                            <Icon name="headset-mic" size={15} type="material-icons" color="#FFFFFF"/>
                        </View>
                        <View>
                            <Text style={{color: "#FFFFFF"}}>Support and FAQ</Text>
                        </View>
                    </View>
                    <View style={styles.menuItem}>
                        <View style={styles.icon}>
                            <Icon name="info" size={15} type="entypo" color="#FFFFFF"/>
                        </View>
                        <View>
                            <Text style={{color: "#FFFFFF"}}>About us</Text>
                        </View>
                    </View>
                    <View style={styles.menuItem}>
                        <View style={styles.icon}>
                            <Icon name="sign-out" size={15} type="font-awesome" color="#FFFFFF"/>
                        </View>
                        <View>
                            <Text style={{color: "#FFFFFF"}}>Sign Out</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#111A1C",
        height: "100%",
    },
    menuItem: {
        flex: 1,
        flexDirection: "row",
        margin: 10,
        width:"100%",
    },
    icon: {
        marginRight: 10,
        height: 20,
        width: 20,
        borderRadius: 50,
        backgroundColor: "#555B5E",
        justifyContent: "center",
    },
    profile: {
        top: "8%",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    },
    name: {
        color: "#FFFFFF",
        textTransform: "uppercase"
    },
    scrollView: {
        top: "15%"
    },
    iconView: {
        backgroundColor: "#555B5E"
    }

})
export default NavigationMenu;