import React, { Component } from "react";
import { View, TextInput, StyleSheet, Button, TouchableOpacity, Text } from "react-native"

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        const { style } = this.props;
        return (
            <View
            style={style}
            >
                <View style={styles.inputs}>
                    <View style={styles.email}>
                        <TextInput
                            style={{textAlign: "center", height: "100%"}}
                            placeholder="Email"
                            keyboardType="email-address"
                        />
                    </View>
                    <View style={styles.password}>
                        <TextInput
                            placeholder="Password"
                            style={{textAlign: "center", height: "100%"}}
                        />
                    </View>
                </View>
                <View style={styles.buttons}>
                    <Button
                        title="Register"
                        color="#FFFFFF"
                    />
                    <TouchableOpacity style={styles.touchable}>
                        <Text style={{color: "#FFFFFF"}}> Forgot Password?</Text>
                    </TouchableOpacity>
                    <Button
                        title="Login"
                        color="#FFFFFF"
                    />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    inputs: {
        flex: 1,
        width: "100%",
        height: "80%",
        borderRadius: 10,
        flexDirection: "column",
        backgroundColor: "#FFFFFF"
    },
    email: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        height: "50%"
    },
    password: {
        borderTopColor: "black",
        borderTopWidth: 1,
        height: "50%"
    },
    buttons: {
        flex: 1,
        fontSize: 8,
        width: "100%",
        height:"20%",
        flexDirection: "row"
    },
    touchable: {
        marginTop: "5%",

    }

})
export default Login