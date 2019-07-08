import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TextInput, KeyboardAvoidingView, Button} from "react-native";
import { Icon } from "react-native-elements";

class Register extends Component {
    constructor(props){
        super(props)
        this.state= {
            password: "",
            confirmPassword: "",
            showPassword: true
        }
    }

    render(){
        const {password, confirmPassword, showPassword } =this.state
        return (
            <View style={styles.container}>
                <Image source = {require('../../images/back1.jpg')} style={styles.image}/>
                <View style={styles.textView}>
                    { /* <Image source = {require('../../images/car.png')} style={{width: "50%"}}/>*/ }
                    <Text style={styles.text}>
                        <Text style={{color: "#C4A751"}}>GRAB</Text>
                        <Text style={{color: "#FFFFFF"}}>CAB</Text>
                    </Text>
                </View>
                <KeyboardAvoidingView style={styles.registerView}>
                    <View style={styles.text}>
                        <Text style={{color: "#FFFFFF"}}>Registration</Text>
                    </View>
                    <View style={styles.input}>
                        <View style={styles.icon}>
                            <Icon name="user" size={25} type="font-awesome" color="#FFFFFF"/>
                        </View>
                        <View style={styles.border}>
                            <TextInput
                                style={{ height: "100%", color:"#FFFFFF"}}
                                placeholder="First Name"
                                placeholderTextColor="#FFFFFF"
                            />
                        </View>
                    </View>
                    <View style={styles.input}>
                        <View style={styles.icon}>
                            <Icon name="user" size={25} type="font-awesome" color="#FFFFFF"  />
                        </View>
                        <View style={styles.border}>
                            <TextInput
                                style={{ height: "100%", color:"#FFFFFF"}}
                                placeholder="Last Name"
                                placeholderTextColor="#FFFFFF"
                            />
                        </View>
                    </View>
                    <View style={styles.input}>
                        <View style={styles.icon}>
                            <Icon name="envelope-o" size={25} type="font-awesome" color="#FFFFFF" />
                        </View>
                        <View style={styles.border}>
                            <TextInput
                                style={{ height: "100%", color:"#FFFFFF"}}
                                placeholder="Email"
                                keyboardType="email-address"
                                placeholderTextColor="#FFFFFF"
                            />
                        </View>
                    </View>
                    <View style={styles.input}>
                        <View style={styles.icon}>
                            <Icon name="mobile" size={25} type="font-awesome" color="#FFFFFF" />
                        </View>
                        <View style={styles.border}>
                            <TextInput
                                style={{ height: "100%", color:"#FFFFFF"}}
                                placeholder="Mobile"
                                keyboardType="phone-pad"
                                placeholderTextColor="#FFFFFF"
                            />
                        </View>
                    </View>
                    <View style={styles.input}>
                        <View style={styles.icon}>
                            <Icon name="lock" size={25} type="font-awesome" color="#FFFFFF" />
                        </View>
                        <View style={styles.border}>
                            <TextInput
                                style={{ height: "100%", color:"#FFFFFF"}}
                                value={password}
                                onChangeText={(text) => this.setState({password: text})}
                                placeholder="Password"
                                secureTextEntry={showPassword}
                                placeholderTextColor="#FFFFFF"
                            />
                        </View>
                    </View>
                    <View style={styles.input}>
                        <View style={styles.icon}>
                            <Icon name="lock" size={25} type="font-awesome" color="#FFFFFF" />
                        </View>
                        <View style={styles.border}>
                            <TextInput
                                style={{ height: "100%", color:"#FFFFFF"}}
                                placeholder="Confirm password"
                                onChangeText={(text) => this.setState({confirmPassword: text})}
                                value={confirmPassword}
                                secureTextEntry={showPassword}
                                placeholderTextColor="#FFFFFF"
                            />
                        </View>
                    </View>
                    <View style={styles.buttonView} >
                        <Button
                            title="Register Now"
                            onPress={() => this.props.navigation.navigate('HomeDrawer')}
                            color="#FFFFFF"
                        />
                    </View>
                </KeyboardAvoidingView>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      },
      image: {
        width: "100%",
        height: "100%",
        flex:1,
    },
    registerView: {
        position: "absolute",
        bottom: "5%",
        width: "70%",
        left: "15%",
        alignItems: "center",
        textAlign: "center"
    },
    border: {
        borderBottomColor: "white",
        borderBottomWidth: 1,
        width: "85%"
    },
    input: {
        flex: 1,
        flexDirection: "row",
        margin: 10,
        width:"100%",
    },
    icon: {
        width: "10%",
        marginRight: 10
    },
    buttonView: {
        width:"60%",
        flex: 1,
        height: 40,
        marginTop: "5%",
        textAlign: "center",
        backgroundColor: "#1F81D4",
        borderRadius: 10,
        justifyContent: "space-around"
    },
    text: {
        fontSize: 40,
        fontWeight: "bold",
        fontFamily: 'Cochin',
    },
    textView: {
        position: "absolute",
        top: "20%",
        width: "100%",
        alignItems: "center",
        textAlign: "center",
    }
});
export default Register;