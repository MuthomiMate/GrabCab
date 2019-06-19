import * as React from "react";
import { View,Text, Image, Button, KeyboardAvoidingView } from "react-native";
import PropTypes from "prop-types";
import Login from "./Login"
import Register from "./Register"
import styles  from "../styles/splash"

class Splash extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showLogin: false,
            displayLoginPage: false,
            displayRegisterPage: false
        }
    }
    componentDidMount(){
        const { showLogin, displayLoginPage } = this.props;
        if(displayLoginPage){
          this.setState({displayLoginPage})
        }
        this.setState({showLogin})
    }
    onLeftButtonClick = (event, buttonId) => {
        event.preventDefault();
        const { showLogin } = this.state;
        if(!showLogin){
            this.setState({showLogin: true})
        } else {
            if(buttonId === "Login"){
                this.setState({displayLoginPage: true})
            }
            else{
                this.setState({displayRegisterPage: true})
            }
        }
    }
    render(){
        const {showButtons, style } = this.props
        const { showLogin, displayLoginPage, displayRegisterPage } = this.state
        const leftButtonTitle = showLogin ? "Register" : "Enter As Rider";
        const rightButtonTitle = showLogin? "Login" : "Enter As Driver"
        return(
        <KeyboardAvoidingView style={style}>
            <Image source = {require('../../images/splash3.png')} style={styles.image}/>
            { /* <View style={styles.upView}></View>*/}
            <View style={styles.textView}>
                { /* <Image source = {require('../../images/car.png')} style={{width: "50%"}}/>*/ }
                <Text style={styles.text}>
                    <Text style={{color: "#C4A751"}}>GRAB</Text>
                    <Text style={{color: "#FFFFFF"}}>CAB</Text>
                </Text>
            </View>
            {displayLoginPage ? <Login style={styles.loginView}/> : null}
            {displayRegisterPage ? <Register style={styles.loginView}/> : null}
            { showButtons && !displayLoginPage && !displayRegisterPage?
            <View style={styles.footerView}>
                <View style={{backgroundColor: "#48668C", borderRadius: 10, width: "40%"}}>
                    <Button
                        title={ rightButtonTitle }
                        onPress={(event) => this.onLeftButtonClick(event, rightButtonTitle)}
                        color="#FFFFFF"
                    />
                </View>
                <View style={{backgroundColor: "#F8C667", borderRadius: 10, width: "40%"}}>
                    <Button
                        title={ leftButtonTitle }
                        onPress={(event) => this.onLeftButtonClick(event, leftButtonTitle)}
                        color="#FFFFFF"
                    />
                </View>
            </View> : null}
        </KeyboardAvoidingView>
    )}
}
Splash.propTypes = {
    style: PropTypes.object,
    showButtons: PropTypes.bool,
    showLogin: PropTypes.bool,
    displayLoginPage: PropTypes.bool
}
export default Splash;